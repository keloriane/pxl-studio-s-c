import React from "react";
import Image from "next/image";

const ParallaxImage = ({ src }: { src: string }) => {
  return (
    <div>
      <Image src={src} alt="" />
    </div>
  );
};

export default ParallaxImage;
