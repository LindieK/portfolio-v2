import React, { createContext, useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from 'framer-motion'

import styles from './Cursor.module.scss'

interface CursorContextValue {
    projectEnter(): void;
    projectLeave(): void;
    articleEnter(): void;
    articleLeave(): void;
}

export const CursorContext = createContext<CursorContextValue | undefined>({
    projectEnter() {},
    projectLeave() {},
    articleEnter() {},
    articleLeave() {}

});

export const useCursorContext = () => {
    let context = React.useContext(CursorContext);
    // If context is undefined, we know we called it
    // outside of our provider so we can throw a more helpful
    // error!
    if (context === undefined) {
        throw Error(
        "CursorContext must be used inside of it's provider, " +
            "otherwise it will not function correctly."
        );
    }

    // Because of TypeScript's type narrowing, if we make it past
    // the error the compiler knows that context is always defined
    // at this point, so we don't need to do any conditional
    // checking on its values when we use this hook!
    return context;
}

const variants = {
    default: {
      opacity: 1,
      height: 40,
      width: 40,
      backgroundColor: "#ffffff80",
      transition: {
        type: "spring",
        mass: 0.6
      }
    },
    project: {
      opacity: 1,
      backgroundColor: "#92fe9d",
      color: "#000",
      height: 100,
      width: 100,
      display: 'flex',
      alignContent: 'center',
      justifyContent: 'center',
      fontSize: "18px",
    },
    article: {
      opacity: 1,
      backgroundColor: "#00c9ff",
      color: "#000",
      height: 100,
      width: 100,
      display: 'flex',
      alignContent: 'center',
      justifyContent: 'center',
      fontSize: "18px",
    }
  };


const CursorProvider = ({ children }: any) => {
    const [cursorText, setCursorText] = useState("");
    const [cursorVariant, setCursorVariant] = useState("default");

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCusor = (e: any) => {
          cursorX.set(e.clientX - 20);
          cursorY.set(e.clientY - 20);
        }
    
        window.addEventListener('mousemove', moveCusor)
    
        return () => {
          window.removeEventListener('mousemove', moveCusor)
        }
    },[])
    
    const projectEnter = () => {
        setCursorText("View Project");
        setCursorVariant("project");
    }

    const projectLeave = () => {
        setCursorText("");
        setCursorVariant("default");
    }

    const articleEnter = () => {
        setCursorText("Read Article");
        setCursorVariant("article");
    }

    const articleLeave = () => {
        setCursorText("");
        setCursorVariant("default");
    }

    return (
        <CursorContext.Provider value={{projectEnter, projectLeave, articleEnter, articleLeave}}>
            <motion.div data-cy="cursor" className={styles.cursor} variants={variants} animate={cursorVariant} style={{translateX: cursorXSpring, translateY: cursorYSpring}}>
                <span className={styles.cursorText}>{cursorText}</span>
            </motion.div>
            {children}
        </CursorContext.Provider>
    )
}
export default CursorProvider;