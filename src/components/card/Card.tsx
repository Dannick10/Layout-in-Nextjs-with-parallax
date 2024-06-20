import React from "react";
import Image, { StaticImageData } from "next/image";
import Title from "../words/Title";
import { FaArrowRight } from "react-icons/fa6";

interface Props {
  idCard: number;
  title: string;
  offsetY: number;
  cardTitle: string;
  cardSub: string;
  img: StaticImageData;
  alt: string;
}

const Card = ({
  idCard,
  title,
  offsetY,
  cardTitle,
  cardSub,
  img,
  alt,
}: Props) => {
  return (
    <div
      className={`z-20 relative flex items-center justify-between ${
        idCard % 2 ? "flex-row" : "flex-row-reverse"
      } mt-24 gap-40 text-white`}
      style={{ transform: `translateY(${-offsetY * 0.2 + 300}px)` }}
    >
      <div className="w-[30em] flex flex-col gap-5 relative">
        <div className="absolute text-9xl font-bold -top-10 -left-[.8em] bg-gradient-to-r opacity-30 bg-gray-500 text-transparent bg-clip-text">
          0{idCard}
        </div>
        <Title title={title} offsetY={0} vel={0} />
        <h2 className="text-4xl">{cardTitle}</h2>
        <p className="z-10">{cardSub}</p>

        <div className="flex gap-2 items-center text-yellow-200">
          <button>Read more </button>
          <FaArrowRight />
        </div>
      </div>
      <div>
        <Image src={img} alt={alt} className="w-[20em] relative left-0"/>
      </div>
    </div>
  );
};

export default Card;
