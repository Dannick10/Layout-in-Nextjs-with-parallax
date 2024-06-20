"use client";

import React, { useEffect, useState } from "react";

import Header from "@/components/Header";

import Image from "next/image";

import background from "/public/VG.png";
import BG_Hero from "/public/BG_Hero.jpg";
import BG_content from "/public/BG_content.png";
import MG from "/public/MG.png";
import image01 from '/public/article/01.jpg'
import image02 from '/public/article/02.png'
import image03 from '/public/article/03.png'

import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa";
import Title from "@/components/words/Title";
import Card from "@/components/card/Card";

export default function Home() {
  const [offsetY, SetoffsetY] = useState<number>(0);

  const handleScroll = () => SetoffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <main>
      <Header offsetY={offsetY} />
      <section className="flex items-center justify-between p-5 text-white h-screen background">
        <Image
          src={BG_Hero}
          alt="imagem parallax Header"
          priority
          className="w-full h-full -z-20 top-0 left-0 absolute"
          style={{ transform: `translateY(${offsetY * 0.7}px)` }}
        />
        <Image
          src={MG}
          alt="imagem parallax Header"
          priority
          className="w-full h-full -z-20 top-[52%] left-0 absolute"
          style={{ transform: `translateY(${offsetY * 0.6}px)` }}
        />
        <Image
          src={background}
          alt="imagem parallax Header"
          priority
          className="w-screen h-screen -z-20 top-[70%] left-0 absolute"
          style={{ transform: `translateY(${offsetY * 0.5}px)` }}
        />
        <Image
          src={BG_content}
          alt="imagem parallax Header"
          priority
          className="w-full h-full -z-20 top-[80%] left-0 absolute"
          style={{ transform: `translateY(${offsetY * 0.6}px)` }}
        />

        <div
          className="flex gap-5"
          style={{
            transform: `translateY(${offsetY * 0.3}px)`,
            rotate: `${offsetY * 0.2 + 90}deg`,
          }}
        >
          <p>Follow us</p>
          <FaInstagram />
          <FaXTwitter />
        </div>
        <div className="flex flex-col gap-5 w-[60%]">
          <div
            className="flex items-center gap-2"
            style={{ transform: `translateY(${offsetY * 0.2}px)` }}
          >
            <div
              className="w-8 h-2 border-b-2 border-b-yellow-200"
              style={{ transform: `translateY(${offsetY * 0.1}px)` }}
            ></div>
            <p
              className="text-yellow-200"
              style={{ transform: `translateY(${offsetY * 0.1}px)` }}
            >
              A Hiking guide
            </p>
          </div>

          <h1
            className="text-3xl"
            style={{ transform: `translateY(${offsetY * 0.4}px)` }}
          >
            A Hiking guide Be prepared for the Mountains and beyond! scroll down
          </h1>

          <aside
            className="flex items-center gap-2"
            style={{ transform: `translateY(${offsetY * 0.5}px)` }}
          >
            <span>Scroll Down</span>
            <FaArrowDown />
          </aside>
        </div>

        <div
          className="flex gap-2 items-center"
          style={{ transform: `translateY(${offsetY * 0.6}px)` }}
        >
          <div>
            <p>Start</p>
            <p>01</p>
            <p>02</p>
            <p>03</p>
          </div>
          <div className="w-1 h-30 bg-slate-200 relative border-b-gray-200 after:absolute after:z-10 after:top-0 after:left-0 after:h-10 after:w-1 after:bg-white after:contents-['']"></div>
        </div>
      </section>

      <article className="z-20 mt-96 p-20 flex flex-col items-center">
        <Card
          idCard='01'
          title="GET STARTED"
          offsetY={offsetY}
          cardTitle="What level of  hiker are you?"
          cardSub="Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? "
          img={image01}
          alt="imagem de um mochileiro"
        />

        <Card
          idCard='02'
          title="Hiking Essentials"
          offsetY={offsetY}
          cardTitle="Picking the right Hiking Gear!"
          cardSub="The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have.
          Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet."
          img={image02}
          alt="imagem de um mochileiro"
        />


        <Card
          idCard='03'
          title="where you go is the key"
          offsetY={offsetY}
          cardTitle="where you go is the key"
          cardSub="To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction.."
          img={image03}
          alt="imagem de um mochileiro"
        />
      
      </article>
    </main>
  );
}
