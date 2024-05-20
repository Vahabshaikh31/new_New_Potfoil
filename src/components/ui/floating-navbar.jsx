import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { NavLink } from 'react-router-dom';
import { cn } from "../../utils/cn";

export const FloatingNav = ({ navItems, className }) => {
    const { scrollYProgress } = useScroll();
    const [visible, setVisible] = useState(true);

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        if (typeof current === "number") {
            let direction = current - scrollYProgress.getPrevious();
            if (scrollYProgress.get() < 0.0001) {
                setVisible(false);
            } else {
                if (direction < 0) {
                    setVisible(true);
                } else {
                    setVisible(false);
                }
            }
        }
    });

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{ opacity: 1, y: -100 }}
                animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
                transition={{ duration: 0.2 }}
                className={cn(
                    "flex w-full fixed top-0 inset-x-0 mx-auto border-b border-transparent dark:border-white/[0.2] bg-black shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-8 py-2 items-center justify-center space-x-10",
                   
                )}
            >
                {navItems.map((navItem, idx) => (
                    <NavLink
                        key={`link=${idx}`}
                        exact
                        to={navItem.link}
                        className={cn(
                            "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
                        )}
                        activeClassName="active"
                        
                    >
                        
                        <span className="hidden sm:block text-4xl text-white">{navItem.name}</span>
                    </NavLink>
                ))}
              
                  
            </motion.div>
        </AnimatePresence>
    );
};
