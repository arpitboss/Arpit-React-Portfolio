import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({ children, align = "center", size = "default" }) {
    const sizeClasses = {
        small: "text-3xl md:text-4xl mb-12",
        default: "text-4xl md:text-5xl mb-16",
        large: "text-5xl md:text-6xl mb-20"
    };

    const alignClasses = {
        left: "text-left",
        center: "text-center",
        right: "text-right"
    };

    const titleVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const underlineVariants = {
        hidden: { width: 0, x: align === "center" ? "-50%" : align === "right" ? "-100%" : "0%" },
        visible: {
            width: "60px",
            x: align === "center" ? "-50%" : align === "right" ? "-100%" : "0%",
            transition: {
                duration: 0.6,
                delay: 0.3,
                ease: "easeOut"
            }
        }
    };

    const Sparkle = ({ style }) => (
        <motion.span
            className="absolute block rounded-full bg-purple-300 dark:bg-purple-400"
            style={style}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
                scale: [0, 1.2, 0],
                opacity: [0, 0.8, 0]
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: Math.random() * 3,
                ease: "easeInOut"
            }}
        />
    );

    return (
        <motion.h2
            className={`font-bold font-display relative ${sizeClasses[size]} ${alignClasses[align]}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={titleVariants}
        >
            <Sparkle style={{ width: "8px", height: "8px", top: "-15px", left: align === "center" ? "calc(50% - 30px)" : align === "right" ? "calc(100% - 60px)" : "10px" }} />
            <Sparkle style={{ width: "6px", height: "6px", top: "10px", left: align === "center" ? "calc(50% + 40px)" : align === "right" ? "calc(100% - 10px)" : "60px" }} />
            <Sparkle style={{ width: "10px", height: "10px", bottom: "5px", left: align === "center" ? "calc(50% + 20px)" : align === "right" ? "calc(100% - 30px)" : "40px" }} />
            <span className="bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-600 dark:from-purple-400 dark:via-fuchsia-400 dark:to-pink-500 bg-clip-text text-transparent relative z-10 px-1">
                {children}
            </span>

            <motion.span
                className={`absolute ${align === "center" ? "left-1/2" : align === "right" ? "right-0" : "left-0"} -bottom-3 h-1 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-600 dark:from-purple-400 dark:via-fuchsia-400 dark:to-pink-500 rounded-full`}
                variants={underlineVariants}
            />

            <motion.span
                className="absolute w-24 h-24 rounded-full opacity-10 bg-gradient-to-r from-purple-500 to-pink-600 blur-xl z-0"
                style={{
                    left: align === "center" ? "calc(50% - 40px)" : align === "right" ? "calc(100% - 80px)" : "0",
                    bottom: "-20px"
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.15, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
            />
        </motion.h2>
    );
}