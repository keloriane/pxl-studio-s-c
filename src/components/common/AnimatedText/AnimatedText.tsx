"use client";
import React, { useEffect, useRef, ElementType, ReactNode } from "react";
import { gsap } from "gsap";
import styled from "styled-components";

type SplitType = "word" | "letter" | "line";

interface TextAnimationProps {
  text: string;
  splitType: SplitType;
  as?: ElementType;
  className?: string;
}

const StyledSpan = styled.span`
  overflow: hidden;
  display: inline-block;

  > span {
    display: inline-block;
  }
`;

const StyledBlockSpan = styled.span`
  overflow: hidden;
  display: block;

  > span {
    display: inline-block;
  }
`;

const TextAnimation: React.FC<TextAnimationProps> = ({
  text,
  splitType,
  as: Tag = "h2", // Default to h2 if no tag is provided
  className,
}) => {
  const textRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = textRef.current;

    if (element) {
      const spans = element.querySelectorAll("span > span");

      gsap.set(spans, { opacity: 0 });

      gsap.fromTo(
        spans,
        {
          y: 50,
        },
        {
          opacity: 1,
          duration: 1,
          stagger: 0.11,
          delay: 0.5,
          y: 0,
          ease: "power3.out",
        }
      );
    }
  }, [splitType]);

  const renderText = (): ReactNode => {
    switch (splitType) {
      case "word":
        return text.split(" ").map((word, index) => (
          <StyledSpan key={index}>
            <span>{word}&nbsp;</span>
          </StyledSpan>
        ));
      case "letter":
        return text.split("").map((letter, index) => (
          <StyledSpan key={index}>
            <span>{letter}</span>
          </StyledSpan>
        ));
      case "line":
        return text.split("\n").map((line, index) => (
          <StyledBlockSpan key={index}>
            <span>{line}</span>
          </StyledBlockSpan>
        ));
      default:
        return text;
    }
  };

  return (
    <Tag ref={textRef} className={className}>
      {renderText()}
    </Tag>
  );
};

export default TextAnimation;
