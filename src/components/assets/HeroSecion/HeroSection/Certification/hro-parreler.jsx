import React from "react";
import HeroParallax from "../../../../ui/hero-parallax"; // Adjust the import path based on your project structure


import SpaceCity4 from '../../../../../Images/Certificate/HackerRank-Sql.png';
import SpaceCity1 from '../../../../../Images/Certificate/Code-Aplha_intern.png';
import SpaceCity5 from '../../../../../Images/Certificate/Coding-Ninja_java.png';
import SpaceCity3 from '../../../../../Images/Certificate/HackerRan-Css.png';
import SpaceCity6 from '../../../../../Images/Certificate/YBI-Python.png';
import SpaceCity7 from '../../../../../Images/Certificate/YBU-regrationModel.png';
import SpaceCity2 from '../../../../../Images/Certificate/hackerrank-Java.png';
import SpaceCity8 from '../../../../../Images/Certificate/YBU-regrationModel.png';
import SpaceCity9 from '../../../../../Images/Certificate/Hackerrank-problemSolving.png';


export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}

export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: SpaceCity1,
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: SpaceCity2,

  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: SpaceCity3,

  }
  ,
  {
    title: "Editorially",
    link: "https://editorially.org",

    thumbnail: SpaceCity4,

  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: SpaceCity5,

  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail: SpaceCity6,


  },
  {
    title: "Algochurn",
    link: "https://algochurn.com",

    thumbnail: SpaceCity7,

  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",

    thumbnail: SpaceCity8,

  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail: SpaceCity9,

  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail: SpaceCity7,


  },
];
