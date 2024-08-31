import React from "react";
import styled from "styled-components";

interface GridItemProps {
  className?: string;
  children: React.ReactNode;
  colStart: number | number[];
  colEnd?: number | number[];
  rowStart?: number | number[];
  rowEnd?: number | number[];
  span: number | number[];
  reactRef?: any;
}

const breakpoints = [1, 420, 640, 768, 1024, 1280, 1440];

const handleResponsiveProps = (
  value: number | number[] | undefined,
  propName: string,
  span: number | number[]
) => {
  if (Array.isArray(value)) {
    return value
      .map((v, index) => {
        const breakpoint =
          breakpoints[index] || breakpoints[breakpoints.length - 1];
        const nextBreakpoint = breakpoints[index + 1] || breakpoints[index];
        const calculatedSpan = Array.isArray(span) ? span[index] : span;
        const calculatedV = Array.isArray(v) ? v[index] : v;
        return `
          ${propName}: ${calculatedV} / span ${calculatedSpan};
          @media (min-width: ${breakpoint}px) and (max-width: ${nextBreakpoint}px) {
            ${propName}: ${calculatedV} / span ${calculatedSpan};
          }
        `;
      })
      .join(" ");
  } else {
    return `${propName}: ${value} / span ${span};`;
  }
};

const GridItemStyle = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !["colStart", "colEnd", "rowStart", "rowEnd", "span", "reactRef"].includes(
      prop
    ),
})<GridItemProps>`
  ${(props) => handleResponsiveProps(props.colStart, "grid-column", props.span)}

  width: 100%;
  position: relative;
`;

const Col: React.FC<GridItemProps> = ({
  children,
  className,
  colStart,
  colEnd,
  rowStart,
  rowEnd,
  span,
  reactRef,
}: GridItemProps) => {
  return (
    <GridItemStyle
      className={className}
      colStart={colStart}
      colEnd={colEnd}
      rowStart={rowStart}
      rowEnd={rowEnd}
      span={span}
      ref={reactRef}
    >
      {children}
    </GridItemStyle>
  );
};

export default Col;
