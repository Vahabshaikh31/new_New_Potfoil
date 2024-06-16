import { FloatingNav } from "../../../../ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className=" h-4 w-4 text-neutral-500 " />,
    },
    {
      name: "Projects",
      link: "/Projects",
      icon: <IconUser className="h-4 w-4 text-neutral-500 " />,
    },
    {
      name: "Contact",
      link: "/Contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 " />
      ),
    },
  ];

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
      <DummyContent />
    </div>
  );
}

const DummyContent = () => {};
