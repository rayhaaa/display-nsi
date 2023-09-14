import React from "react";
import Image from "next/image";

export default async function Arrow() {
  return (
    <Image
      src="/public/arrow.png"
      width={100}
      height={100}
      alt="back"
    />
  );
}


