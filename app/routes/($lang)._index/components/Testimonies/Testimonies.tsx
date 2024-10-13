import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { Testimony as TestimonyData } from "~/data/Content";
import { Testimony } from "./Testimony";

/**
 * Enum used to define what animation should be set to a testimony
 */
export enum CarouselAnimation {
  NONE, // no animation
  OUT_LEFT, // fade out towards the left
  OUT_RIGHT, // fade out towards the right
  IN_LEFT, // fade in towards the left
  IN_RIGHT // fade in towards the right
}

/**
 * Prop interface for the Testimonies component
 */
interface TestimoniesProps {
  testimonies: TestimonyData[]; // Array of testimonies, assumed to always have at least 3 elements
}

/**
 * Build a component representing the carousel of testimonies
 * @param param0 props
 * @returns  component
 */
export const Testimonies: React.FC<TestimoniesProps> = ({ testimonies }) => {
  // Store 3 testimonies (their index and animation state) at all times: the current one, the previous and the next for animation purposes
  const [testimoniesStates, setTestimoniesStates] = useState([{ index: testimonies.length - 1, state: CarouselAnimation.NONE }, { index: 0, state: CarouselAnimation.NONE }, { index: 1, state: CarouselAnimation.NONE }]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: (eventData) => nextTestimony(),
    onSwipedRight: (eventData) => previousTestimony(),
  });

  const nextTestimony = () => {
    // Animate the testimonies
    setTestimoniesStates([{ index: testimoniesStates[0].index, state: CarouselAnimation.NONE }, { index: testimoniesStates[1].index, state: CarouselAnimation.OUT_LEFT }, { index: testimoniesStates[2].index, state: CarouselAnimation.IN_LEFT }]);

    // After the animation, update the testimonies to reflect the new situation
    setTimeout(() => {
      const newFocusedIndex = testimoniesStates[2].index;
      setTestimoniesStates([{ index: testimoniesStates[1].index, state: CarouselAnimation.NONE }, { index: newFocusedIndex, state: CarouselAnimation.NONE }, { index: newFocusedIndex < testimonies.length - 1 ? newFocusedIndex + 1 : 0, state: CarouselAnimation.NONE }]);
    }, 1100);
  }

  const previousTestimony = () => {
    setTestimoniesStates([{ index: testimoniesStates[0].index, state: CarouselAnimation.IN_RIGHT }, { index: testimoniesStates[1].index, state: CarouselAnimation.OUT_RIGHT }, { index: testimoniesStates[2].index, state: CarouselAnimation.NONE }]);

    setTimeout(() => {
      const newFocusedIndex = testimoniesStates[0].index;
      setTestimoniesStates([{ index: newFocusedIndex === 0 ? testimonies.length - 1 : newFocusedIndex - 1, state: CarouselAnimation.NONE }, { index: newFocusedIndex, state: CarouselAnimation.NONE }, { index: testimoniesStates[1].index, state: CarouselAnimation.NONE }]);
    }, 1100);
  }

  return (
    <div className="mt-24 flex w-full max-w-[768px] flex-row justify-between self-center overflow-hidden" {...swipeHandlers} id="reviews">
      <div className="relative flex items-center justify-center bg-gradient-to-r from-bgDark to-transparent z-10">
        <button className={`group m-auto h-fit mr-2 sm:mr-5 ${testimoniesStates.some(testimony => testimony.state !== CarouselAnimation.NONE) ? "pointer-events-none" : ""}`} onClick={previousTestimony} aria-label="Previous">
          <svg
            className="stroke-current group-hover:stroke-primary group-active:stroke-primary group-hover:stroke-[2px] group-active:stroke-[2px] w-[30px] h-[30px] md:w-[40px] md:h-[40px]"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
          >
            <path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z" />
          </svg>
        </button>
      </div>

      <div className="overflow-hidden flex flex-row justify-center">
        {testimoniesStates.map((key, index) => (
          <div className={`flex w-full min-w-full flex-row justify-start`} key={key.index}>
            <Testimony testimony={testimonies[key.index]} animate={key.state} visible={index === 1} />
          </div>
        ))}
      </div>

      <div className="relative flex items-center justify-center bg-gradient-to-l from-bgDark to-transparent z-10">
        <button className={`group ml-2 sm:ml-5 m-auto h-fit ${testimoniesStates.some(testimony => testimony.state !== CarouselAnimation.NONE) ? "pointer-events-none" : ""}`} onClick={nextTestimony} aria-label="Next">
          <svg
            className="rotate-180 stroke-current group-hover:stroke-primary group-hover:stroke-[2px] group-active:stroke-primary group-active:stroke-[2px] w-[30px] h-[30px] md:w-[40px] md:h-[40px]"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
          >
            <path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z" />
          </svg>
        </button>
      </div>
    </div>
  );
};
