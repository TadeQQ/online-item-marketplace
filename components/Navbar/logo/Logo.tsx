import React from "react";
import Image, { StaticImageData } from "next/image";

interface NavLogoProps {
  width: number;
  height: number;
  alt: string;
  src: string | StaticImageData;
}

export const Logo: React.FC<NavLogoProps> = ({ src, width, height, alt }) => {
  return (
    <Image alt={alt} src={src} height={height} width={width} unoptimized />
  );
};
