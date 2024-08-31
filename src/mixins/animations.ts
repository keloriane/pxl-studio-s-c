import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function animatePagein() {
  const el = document.querySelector(".loader-main");
  if (el) {
    const tl = gsap.timeline();
    tl.set(el, { yPercent: 0 });
    gsap.to(el, {
      duration: 1,
      yPercent: 100,
    });
  }
}

export function animatePageOut(href: string, router: AppRouterInstance) {
  const el = document.querySelector(".content-anim");
  if (el) {
    gsap.to(el, {
      duration: 1,
      opacity: 0,
      onComplete: () => {
        router.push(href);
      },
    });
  }
}

export function imageClipAnimation(
  el: HTMLDivElement,
  img: HTMLImageElement,
  container: HTMLElement
) {
  const clipTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top 20%",
      end: "bottom 20%",
      toggleActions: "play none none none",
    },
  });
  gsap.set(el, { clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" });

  clipTimeline
    .fromTo(
      el,
      {
        clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
      },
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        duration: 1,
        ease: "power4.out",
      }
    )
    .fromTo(
      img,
      { scale: 1.3 },
      { scale: 1, duration: 1, ease: "power4.out", delay: -1 }
    );
}
export const bezier = ".4s cubic-bezier(0.25, 0.46, 0.45, 0.94);";
