import React, { useEffect, useMemo } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { useTheme } from 'next-themes';

const ParticlesBackground = () => {
    const { resolvedTheme } = useTheme() || { resolvedTheme: 'light' };
    const isDarkMode = resolvedTheme === 'dark';

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        });
    }, []);

    const particlesOptions = useMemo(() => {
        return {
            fullScreen: {
                enable: true,
                zIndex: 0
            },
            background: {
                color: {
                    value: "transparent",
                },
            },
            fpsLimit: 60,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                        parallax: {
                            enable: true,
                            force: 60,
                            smooth: 10
                        }
                    },
                    resize: true,
                },
                modes: {
                    push: {
                        quantity: 6,
                    },
                    repulse: {
                        distance: 150,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: isDarkMode ?
                        ["#8b5cf6", "#ec4899", "#8b5cf6", "#a855f7"] :
                        ["#9333ea", "#d946ef", "#8b5cf6", "#e879f9"],
                },
                links: {
                    color: isDarkMode ? "#a78bfa" : "#8b5cf6",
                    distance: 150,
                    enable: true,
                    opacity: isDarkMode ? 0.5 : 0.3,
                    width: 1.2,
                    triangles: {
                        enable: false,
                        opacity: 0.05
                    }
                },
                collisions: {
                    enable: true,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 2.2,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 40,
                },
                opacity: {
                    value: isDarkMode ? 0.8 : 0.4,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 0.3,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                shape: {
                    type: ["circle", "triangle"],
                    options: {
                        triangle: {
                            sides: 3
                        }
                    }
                },
                size: {
                    value: { min: 0.5, max: 3.5 },
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        size_min: 0.1,
                        sync: false
                    }
                },
                twinkle: {
                    lines: {
                        enable: true,
                        frequency: 0.05,
                        opacity: 0.5
                    },
                    particles: {
                        enable: true,
                        frequency: 0.05,
                        opacity: 0.5
                    }
                }
            },
            detectRetina: true,
        };
    }, [isDarkMode]);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden">
            <Particles
                id="tsparticles"
                options={particlesOptions}
                className="absolute inset-0"
            />
        </div>
    );
};

export default ParticlesBackground;
