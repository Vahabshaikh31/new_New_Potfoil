import AnimatedTooltip from "../../../../ui/Skillsui";
import Java from '../../../../../Images/Java.svg'
import Css from '../../../../../Images/Css.svg'
import Html from '../../../../../Images/Html.svg'
import JavaScript from '../../../../../Images/JavaScript.svg'
import React from '../../../../../Images/React.svg'
import MongoDB from '../../../../../Images/MongoDB.svg'
import Node from '../../../../../Images/Node.svg'
import Express from '../../../../../Images/Express.svg'
import Figma from '../../../../../Images/Figma.svg'

const people = [

  {
    id: 3,
    name: "Java Programming",
    designation: "programming languages",
    image: Java
  },
  {
    id: 4,
    name: "Html",
    designation: "Front-End Development",
    image: Html
  },
  {
    id: 5,
    name: "Css",
    designation: "Front-End Development",
    image: Css
  }, {
    id: 6,
    name: "javaScript",
    designation: "Front-End Development",
    image: JavaScript
  }, {
    id: 7,
    name: "React.js",
    designation: "Front-End Development",
    image: React
  }, {
    id: 8,
    name: "Node.js",
    designation: "Back-end development",
    image: Node
  }, {
    id: 9,
    name: "Express.js",
    designation: "Back-end Developer",
    image: Express
  },
  {
    id: 10,
    name: "MongoDB",
    designation: "Database management",
    image: MongoDB
  }, {
    id: 11,
    name: "Figma",
    designation: "UI/UX design",
    image: Figma
  },


];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center mb-40 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
