import { Testimony as TestimonyData } from "~/data/Content";
import { CarouselAnimation } from "./Testimonies";

/**
 * Prop interface for the Testimony component
 */
interface TestimonyProps {
  testimony: TestimonyData;
  animate: CarouselAnimation;
  visible: boolean;
}

/**
 * Build a component representing the carousel of testimonies
 * @param param0 props
 * @returns  component
 */
export const Testimony: React.FC<TestimonyProps> = ({ testimony, animate, visible }) => {

  var animation = "";
  switch (animate) {
    case CarouselAnimation.IN_LEFT:
      animation = "motion-safe:animate-inLeft opacity-0";
      break;
    case CarouselAnimation.IN_RIGHT:
      animation = "motion-safe:animate-inRight opacity-0";
      break;
    case CarouselAnimation.OUT_LEFT:
      animation = "motion-safe:animate-outLeft";
      break;
    case CarouselAnimation.OUT_RIGHT:
      animation = "motion-safe:animate-outRight";
      break;
    default:
      animation = "animate-none" + ` ${visible ? "opacity-100" : "invisible opacity-0"}`;
      break;
  }


  return (
    <div className="flex w-full flex-col" aria-hidden={!visible}>
      <p className={`text-start italic ${animation} `} style={{ animationDelay: "175ms" }}>
        <img
          className={`float-left mr-1 sm:mr-4 h-24 w-24 shrink-0 rounded-full object-cover md:h-36 md:w-36 ${animate === CarouselAnimation.OUT_LEFT || animate === CarouselAnimation.OUT_RIGHT ? animation : ""} `}
          style={{ animationDelay: animate === CarouselAnimation.IN_RIGHT || animate === CarouselAnimation.OUT_RIGHT ? "250ms" : "0s" }}
          src={testimony.photoUrl}
          alt={testimony.name}
        />
        <span className="float-left -mb-5 -mt-6 mr-1 text-7xl md:-mb-7 md:-mt-12 md:text-9xl">«</span> {testimony.text}
      </p>
      <div className={`mt-1 flex w-full justify-end text-right ${animation} `} style={{ animationDelay: animate === CarouselAnimation.IN_RIGHT || animate === CarouselAnimation.OUT_RIGHT ? "0s" : "250ms" }}>
        <p className="font-thin">
          <span className="mr-3 font-black">—</span>
          {`${testimony.name}, ${testimony.position}`}
        </p>
      </div>
    </div>
  )
}
