import { useEffect, useRef, memo } from "react";
import "./DotField.css";

const TWO_PI = Math.PI * 2;

const DotField = memo(
    ({
        dotRadius = 1.5,
        dotSpacing = 18,
        cursorRadius = 350,
        cursorForce = 0.08,
        bulgeOnly = true,
        bulgeStrength = 35,
        glowRadius = 180,
        sparkle = false,
        waveAmplitude = 0,
        gradientFrom = "rgba(34,211,238,0.35)",
        gradientTo = "rgba(251,146,60,0.25)",
        glowColor = "#22d3ee",
        ...rest
    }) => {
        const canvasRef = useRef(null);
        const glowRef = useRef(null);

        const dotsRef = useRef([]);
        const mouseRef = useRef({
            x: -9999,
            y: -9999,
            prevX: -9999,
            prevY: -9999,
            speed: 0,
        });

        const rafRef = useRef(null);
        const sizeRef = useRef({
            w: 0,
            h: 0,
            offsetX: 0,
            offsetY: 0,
        });

        const glowOpacity = useRef(0);

        useEffect(() => {
            const canvas = canvasRef.current;
            if (!canvas) return;

            const ctx = canvas.getContext("2d");

            const dpr = Math.min(window.devicePixelRatio || 1, 2);

            let resizeTimer;


            function resize() {
                clearTimeout(resizeTimer);

                resizeTimer = setTimeout(() => {

                    const rect =
                        canvas.parentElement.getBoundingClientRect();

                    const w = rect.width;
                    const h = rect.height;


                    canvas.width = w * dpr;
                    canvas.height = h * dpr;

                    canvas.style.width = `${w}px`;
                    canvas.style.height = `${h}px`;


                    ctx.setTransform(
                        dpr,
                        0,
                        0,
                        dpr,
                        0,
                        0
                    );


                    sizeRef.current = {
                        w,
                        h,
                        offsetX:
                            rect.left + window.scrollX,
                        offsetY:
                            rect.top + window.scrollY,
                    };


                    createDots(w, h);

                }, 100);
            }



            function createDots(w, h) {

                const dots = [];

                const step =
                    dotRadius + dotSpacing;


                const cols =
                    Math.floor(w / step);

                const rows =
                    Math.floor(h / step);



                for (let y = 0; y < rows; y++) {

                    for (let x = 0; x < cols; x++) {

                        const ax =
                            x * step + step / 2;

                        const ay =
                            y * step + step / 2;


                        dots.push({

                            ax,
                            ay,

                            x: ax,
                            y: ay,

                            sx: ax,
                            sy: ay,

                            vx: 0,
                            vy: 0,

                        });

                    }

                }


                dotsRef.current = dots;

            }




            function mouseMove(e) {

                const size =
                    sizeRef.current;


                mouseRef.current.x =
                    e.pageX - size.offsetX;


                mouseRef.current.y =
                    e.pageY - size.offsetY;

            }




            let frame = 0;


            function animate() {

                frame++;


                const {
                    w,
                    h
                } = sizeRef.current;


                ctx.clearRect(
                    0,
                    0,
                    w,
                    h
                );


                const mouse =
                    mouseRef.current;


                const dots =
                    dotsRef.current;



                const gradient =
                    ctx.createLinearGradient(
                        0,
                        0,
                        w,
                        h
                    );


                gradient.addColorStop(
                    0,
                    gradientFrom
                );


                gradient.addColorStop(
                    1,
                    gradientTo
                );


                ctx.fillStyle =
                    gradient;



                dots.forEach(
                    (dot, index) => {


                        const dx =
                            mouse.x - dot.ax;


                        const dy =
                            mouse.y - dot.ay;


                        const distance =
                            Math.sqrt(
                                dx * dx +
                                dy * dy
                            );



                        if (distance < cursorRadius) {

                            const power =
                                1 -
                                distance / cursorRadius;


                            const force =
                                power *
                                bulgeStrength;



                            const angle =
                                Math.atan2(
                                    dy,
                                    dx
                                );


                            if (bulgeOnly) {

                                dot.sx +=
                                    (
                                        dot.ax -
                                        Math.cos(angle) * force -
                                        dot.sx
                                    ) * 0.15;


                                dot.sy +=
                                    (
                                        dot.ay -
                                        Math.sin(angle) * force -
                                        dot.sy
                                    ) * 0.15;

                            }

                        }
                        else {

                            dot.sx +=
                                (dot.ax - dot.sx) * 0.08;


                            dot.sy +=
                                (dot.ay - dot.sy) * 0.08;

                        }



                        let drawX =
                            dot.sx;

                        let drawY =
                            dot.sy;



                        if (waveAmplitude) {

                            drawY +=
                                Math.sin(
                                    index * 0.02 +
                                    frame * 0.02
                                )
                                *
                                waveAmplitude;

                        }



                        ctx.beginPath();


                        ctx.arc(
                            drawX,
                            drawY,
                            dotRadius,
                            0,
                            TWO_PI
                        );


                        ctx.fill();

                    }
                );


                rafRef.current =
                    requestAnimationFrame(
                        animate
                    );

            }




            resize();


            window.addEventListener(
                "resize",
                resize
            );


            window.addEventListener(
                "mousemove",
                mouseMove
            );


            rafRef.current =
                requestAnimationFrame(
                    animate
                );



            return () => {

                cancelAnimationFrame(
                    rafRef.current
                );


                clearTimeout(
                    resizeTimer
                );


                window.removeEventListener(
                    "resize",
                    resize
                );


                window.removeEventListener(
                    "mousemove",
                    mouseMove
                );

            };


        }, [
            dotRadius,
            dotSpacing,
            cursorRadius,
            cursorForce,
            bulgeOnly,
            bulgeStrength,
            gradientFrom,
            gradientTo,
            waveAmplitude
        ]);



        return (

            <div
                className="dot-field-container"
                {...rest}
            >

                <canvas
                    ref={canvasRef}
                />


                <div
                    ref={glowRef}
                    style={{
                        position: "absolute",
                        inset: 0,
                        pointerEvents: "none",
                        background:
                            `radial-gradient(
                circle,
                ${glowColor},
                transparent 40%
            )`,
                        opacity:
                            glowOpacity.current
                    }}
                />

            </div>

        );

    }
);


DotField.displayName = "DotField";


export default DotField;