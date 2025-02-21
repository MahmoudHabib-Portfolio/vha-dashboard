import gsap, { SteppedEase, TimelineMax } from "gsap/all";

gsap.registerPlugin(TimelineMax, SteppedEase);

export const AnimeTypeWriter = (elem) => {
    const tl = new TimelineMax({
        paused: true
    });
    //letter animation
    tl.fromTo(elem, 3, {
        width: "0",
      }, {
        width: "1rem", /* same as CSS .line-1 width */
        ease:  SteppedEase.config(8)
      }, 0);
}