"use client";
"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import Lenis from "lenis";
import { GlobalStyle, theme } from "@/styles/theme";
import { ThemeProvider } from "styled-components";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    function animatePagein() {
      const el = document.querySelector(".content-anim");
      if (el) {
        gsap.set(el, { opacity: 0 });

        gsap.to(el, {
          duration: 1,
          opacity: 1,
        });
      }
    }
    animatePagein();
  }, []);
  return (
    <div className="content-anim">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </div>
  );
}
