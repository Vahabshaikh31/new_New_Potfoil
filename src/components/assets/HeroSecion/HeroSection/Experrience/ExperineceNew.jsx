import { HoverEffect } from "../../../../ui/Experience"; // Ensure this path is correct

export function CardHoverEffectDemo() {
  const projects = [
    {
      title: "CodeAlpha",
      description: `During my internship at Code Alpha, I fully immersed myself in 
      completing assigned tasks with diligence and precision. I actively 
      contributed to project development, consistently delivering highquality work. Additionally, I seized every opportunity to broaden my 
      skill set, eagerly learning new technologies and methodologies to 
      enhance my capabilities as a full-stack developer.`,
      Role: "WEB DEVELOPMENT INTERNSHIP",
    },
    {
      title: "Code Alpha",
      description:` As an intern at Code Alpha, delving into Java development has been an exhilarating journey filled with learning and challenges. While working on a recent task to implement a complex algorithm, I encountered unexpected difficulties deciphering the intricate logic. Despite thorough research and consultation with my colleagues, debugging the code proved more challenging than anticipated.`,
      Role: "Java Developer INTERNSHIP",
    },
    {
      title: "Prodigy InfoTech ",
      description: `During my internship at Prodigy InfoTech, I fully immersed myself in 
      completing assigned tasks with diligence and precision. I actively 
      contributed to project development, consistently delivering highquality work. Additionally, I seized every opportunity to broaden my 
      skill set, eagerly learning new technologies and methodologies to 
      enhance my capabilities as a full-stack developer.`,
      Role: "Full Stack DEVELOPMENT INTERNSHIP",

    },
    
  ];

  return (
    <div className="max-w-8xl  text-3xl z-0 mt-10 mx-auto px-14 ">
      <h1 style={{fontSize:"3rem",fontWeight:"800"} }>Work Experience</h1>
      <HoverEffect items={projects} />
    </div>
  );
}
