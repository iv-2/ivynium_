import { Form } from "@remix-run/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Content } from "~/data/Content";
import { PopUp } from "./PopUp";

/**
 * Enum to handle the form state
 */
export enum FormState {
  // Only used in form
  FILLING, // User is filling the form
  FILLING_ERROR, // User is correcting the form

  // Used in popup
  TO_CONFIRM, // User wants to send form
  SENDING, // Form is trying to be sent
  ERROR, // There is an error with the form
  QUIT, // User wants to quit form
}

/**
 * Prop interface for the contact form component
 */
interface ContactFormProps {
  content: Content;
  success: boolean | undefined;
  setShowLegal: Dispatch<SetStateAction<boolean>>;
}

/**
 * Build a component for the CTA button and the associated contact form
 * interface and logic
 * @param param0 props
 * @returns CTA button and associated contact form component
 */
export const ContactForm: React.FC<ContactFormProps> = ({
  content,
  success,
  setShowLegal,
}) => {
  //Use a 2-variable system to handle fade-out transition
  const [formIsVisible, setFormIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  const openModal = () => {
    setShouldRender(true);
    setTimeout(() => setFormIsVisible(true), 0);
  };

  const closeModal = () => {
    setFormIsVisible(false);
    setTimeout(() => setShouldRender(false), 500);
  };

  // Form validation variables and methods
  const [state, setState] = useState(FormState.FILLING);
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [legal, setLegal] = useState(false);

  const checkForm = () => {
    // Set error state if one of the required fields is empty
    if (!legal || name === "" || mail === "" || subject === "" || message === "") {
      setState(FormState.ERROR);
      return;
    }
    setState(FormState.TO_CONFIRM);
  };

  // Block scrolling on background page while avoiding UI shifts
  useEffect(() => {

    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      const confirmationMessage = content.CTA.form.quit;
      event.preventDefault();
      return confirmationMessage;
    };

    if (formIsVisible) {
      document.body.classList.add("noScroll");
      window.addEventListener('beforeunload', handleBeforeUnload);
    } else {
      setTimeout(() => {
        document.body.classList.remove("noScroll");
      }, 500);
    }
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [formIsVisible]);

  return (
    <>
      <div className="motion-safe:opacity-0 motion-safe:animate-fadeUp" style={{ animationDelay: "3.5s" }}>
        <button
          className="font-heading border360 motion-reduce:border-primary-light motion-reduce:hover:border-primary-dark motion-reduce:border m-auto mt-7 w-fit items-center rounded-full px-4 py-2 text-center text-xl font-medium motion-safe:hover:scale-[1.06] motion-safe:active:scale-[1.06]"
          onClick={openModal}
          type="button"
          id="contact"
          aria-haspopup="dialog"
        >
          {content.CTA.button}
        </button>
      </div>
      <div
        className={`${shouldRender ? "visible" : "invisible"} ${formIsVisible ? "opacity-100" : "opacity-0"} fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50 motion-safe:transition-opacity motion-safe:duration-[600ms]`}
        aria-hidden={!shouldRender}
      >
        <div className="max-h-full w-full max-w-md overflow-auto rounded-t-lg bg-bgDark-dark p-6 shadow-lg" aria-modal="true" role="dialog" aria-labelledby="formTitle">
          <Form className="mx-auto max-w-sm" method="POST">
            <div>
              <button className="relative float-start inline-block" onClick={() => setState(FormState.QUIT)} aria-haspopup="dialog" aria-label="Quit">
                <span
                  className="relative float-start inline-block h-[30px] w-[30px] overflow-hidden before:absolute before:left-[0] before:top-2/4 before:-mt-[4px] before:h-[5px] before:w-full before:rotate-45 before:rounded-[100%] before:bg-slate-300 before:content-[''] after:absolute after:left-[0] after:top-2/4 after:-mt-[4px] after:h-[5px] after:w-full after:-rotate-45 after:rounded-[100%] after:bg-slate-300 after:content-[''] hover:cursor-pointer hover:before:bg-primary active: active:before:bg-primary hover:after:bg-primary active:after:bg-primary"
                ></span>
              </button>

              <h2 className="block w-full text-xl font-bold" id="formTitle">
                {content.CTA.form.contact}
              </h2>
            </div>
            <div className="mt-7">
              <label htmlFor="name" className="block w-fit text-sm font-medium">
                {content.CTA.form.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={`mt-2 block w-full rounded-lg border border-gray-600 bg-slate-42 p-2.5 text-sm placeholder-gray-400 ${state === FormState.FILLING_ERROR ? "placeholder-shown:border-red-500" : ""}`}
                aria-invalid={state === FormState.FILLING_ERROR && name.length === 0}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder=" "
                required
              />
            </div>
            <div className="mt-7">
              <label htmlFor="email" className="block w-fit text-sm font-medium">
                {content.CTA.form.email}
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className={`mt-2 block w-full rounded-lg border border-gray-600 bg-slate-42 p-2.5 text-sm placeholder-gray-400 ${state === FormState.FILLING_ERROR ? "placeholder-shown:border-red-500" : ""}`}
                aria-invalid={state === FormState.FILLING_ERROR && mail.length === 0}
                onChange={(e) => {
                  setMail(e.target.value);
                }}
                placeholder=" "
                required
              />
            </div>
            <div className="mt-7">
              <label htmlFor="subject" className="block w-fit text-sm font-medium">
                {content.CTA.form.subject}
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                className={`mt-2 block w-full rounded-lg border border-gray-600 bg-slate-42 p-2.5 text-sm placeholder-gray-400 ${state === FormState.FILLING_ERROR ? "placeholder-shown:border-red-500" : ""}`}
                aria-invalid={state === FormState.FILLING_ERROR && subject.length === 0}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
                placeholder=" "
                required
              />
            </div>
            <div className="mt-7">
              <label htmlFor="message" className="block w-fit text-sm font-medium">
                {content.CTA.form.message}
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                className={`mt-2 block w-full resize-none rounded-lg border border-gray-600 bg-slate-42 p-2.5 text-sm ${state === FormState.FILLING_ERROR ? "placeholder-shown:border-red-500" : ""}`}
                aria-invalid={state === FormState.FILLING_ERROR && message.length === 0}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                placeholder=" "
                required
              />
            </div>
            <div className="mt-7 flex items-center">
              <input id="legal" name="legal" type="checkbox" value="" className={`w-4 h-4 bg-slate-42 rounded focus:ring-primary  focus:ring-2 ${state === FormState.FILLING_ERROR ? "border-red-500 checked:border-gray-600" : " border-gray-600"}`}
                aria-invalid={state === FormState.FILLING_ERROR && !legal}
                onChange={(e) => {
                  setLegal(e.target.checked);
                }}
                required />
              <label htmlFor="legal" className="ms-2 w-fit text-xs text-gray-300 font-light">{content.CTA.form.legal.text}<button className="text-primary hover:underline" onClick={() => { setShowLegal(true) }} aria-haspopup="dialog">{content.CTA.form.legal.link}</button></label>
            </div>
            <button
              className="mt-5 w-full rounded-lg bg-primary-dark px-5 py-2.5 text-center text-sm font-medium hover:bg-primary-darker active:bg-primary-darker sm:w-auto"
              type="button"
              onClick={checkForm}
              aria-haspopup="dialog"
            >
              {content.CTA.form.submit}
            </button>
            <PopUp
              content={content}
              email={mail}
              success={success}
              state={state}
              setState={setState}
              closeModal={closeModal}
            />
          </Form>
        </div>
      </div>
    </>
  );
};
