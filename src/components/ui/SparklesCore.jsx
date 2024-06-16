// SparklesCore.js
import React, { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { cn } from "../../utils/cn"; 
import { motion, useAnimation } from "framer-motion";
    
export const SparklesCore = (props) => {
  const {
    id,
    className,
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity,
  } = props;
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initParticlesEngine = async (engine) => {
      await loadSlim(engine);
      setInit(true);
    };

    initParticlesEngine();
  }, []);

  const controls = useAnimation();

  const particlesLoaded = async (container) => {
    if (container) {
      console.log(container);
      controls.start({
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    }
  };

  return (
    <motion.div animate={controls} className={cn("opacity-0", className)}>
      {init && (
        <Particles
          id={id || "tsparticles"}
          className={cn("h-full w-full")}
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: background || "#0d47a1",
              },
            },
            fullScreen: {
              enable: false,
              zIndex: 1,
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: false,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              bounce: {
                horizontal: {
                  value: 1,
                },
                vertical: {
                  value: 1,
                },
              },
              collisions: {
                enable: false,
                mode: "bounce",
              },
              color: {
                value: particleColor || "#ffffff",
              },
              move: {
                enable: true,
                speed: {
                  min: 0.1,
                  max: 1,
                },
                outModes: {
                  default: "out",
                },
              },
              number: {
                density: {
                  enable: true,
                  width: 400,
                  height: 400,
                },
                value: particleDensity || 120,
              },
              opacity: {
                value: {
                  min: 0.1,
                  max: 1,
                },
                animation: {
                  enable: true,
                  speed: speed || 4,
                  startValue: "random",
                },
              },
              size: {
                value: {
                  min: minSize || 1,
                  max: maxSize || 3,
                },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </motion.div>
  );
};















// import { SparklesCore } from "../../../../ui/SparklesCore";

// export function SparklesPreview() {
//   return (
//     <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
//       <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
//         Aceternity
//       </h1>
//       <div className="w-[40rem] h-40 relative">
//         {/* Gradients */}
//         <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
//         <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
//         <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
//         <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

//         {/* Core component */}
//         <SparklesCore
//           background="transparent"
//           minSize={0.4}
//           maxSize={1}
//           particleDensity={1200}
//           className="w-full h-full"
//           particleColor="#FFFFFF"
//         />

//         {/* Radial Gradient to prevent sharp edges */}
//         <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
//       </div>
//     </div>
//   );
// }

// export default SparklesPreview;
