import { useEffect, useRef } from "react";
import "./PixelCard.css";


class Pixel {

    constructor(canvas, context, x, y, color, speed, delay) {

        this.width = canvas.width;
        this.height = canvas.height;

        this.ctx = context;

        this.x = x;
        this.y = y;

        this.color = color;

        this.speed = this.random(0.1, 0.9) * speed;

        this.size = 0;

        this.sizeStep = Math.random() * 0.4;

        this.minSize = 0.5;

        this.maxSize = this.random(
            this.minSize,
            2
        );

        this.delay = delay;

        this.counter = 0;

        this.counterStep =
            Math.random() * 4 +
            (this.width + this.height) * 0.01;

        this.isIdle = false;

        this.isReverse = false;

        this.isShimmer = false;

    }


    random(min, max) {
        return Math.random() * (max - min) + min;
    }


    draw() {

        const offset =
            2 * 0.5 -
            this.size * 0.5;


        this.ctx.fillStyle = this.color;


        this.ctx.fillRect(
            this.x + offset,
            this.y + offset,
            this.size,
            this.size
        );

    }


    appear() {

        this.isIdle = false;


        if (this.counter <= this.delay) {

            this.counter += this.counterStep;

            return;

        }


        if (this.size >= this.maxSize) {

            this.isShimmer = true;

        }


        if (this.isShimmer) {

            this.shimmer();

        }
        else {

            this.size += this.sizeStep;

        }


        this.draw();

    }


    disappear() {

        this.isShimmer = false;

        this.counter = 0;


        if (this.size <= 0) {

            this.isIdle = true;

            return;

        }


        this.size -= .1;

        this.draw();

    }


    shimmer() {

        if (this.size >= this.maxSize) {

            this.isReverse = true;

        }


        else if (this.size <= this.minSize) {

            this.isReverse = false;

        }


        if (this.isReverse) {

            this.size -= this.speed;

        }
        else {

            this.size += this.speed;

        }

    }

}



function getSpeed(value, reduced) {

    if (reduced) return 0;


    return (
        parseInt(value, 10) || 30
    ) * 0.001;

}



export default function PixelCard({

    children,

    gap = 5,

    speed = 35,

    colors = "#38bdf8,#6366f1,#e0f2fe",

    className = ""

}) {


    const containerRef = useRef(null);

    const canvasRef = useRef(null);

    const pixelsRef = useRef([]);

    const animationRef = useRef(null);


    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;



    const createPixels = () => {


        const container =
            containerRef.current;


        const canvas =
            canvasRef.current;



        if (!container || !canvas)
            return;



        const rect =
            container.getBoundingClientRect();



        const width =
            Math.floor(rect.width);


        const height =
            Math.floor(rect.height);



        canvas.width = width;

        canvas.height = height;



        const ctx =
            canvas.getContext("2d");



        const colorList =
            colors.split(",");



        const pixels = [];



        for (
            let x = 0;
            x < width;
            x += Number(gap)
        ) {

            for (
                let y = 0;
                y < height;
                y += Number(gap)
            ) {


                const dx =
                    x - width / 2;


                const dy =
                    y - height / 2;


                const distance =
                    Math.sqrt(
                        dx * dx +
                        dy * dy
                    );



                pixels.push(

                    new Pixel(

                        canvas,

                        ctx,

                        x,

                        y,

                        colorList[
                        Math.floor(
                            Math.random() *
                            colorList.length
                        )
                        ],

                        getSpeed(
                            speed,
                            reducedMotion
                        ),

                        reducedMotion
                            ? 0
                            : distance

                    )

                );


            }

        }


        pixelsRef.current =
            pixels;

    };




    const animate = (action) => {


        cancelAnimationFrame(
            animationRef.current
        );


        const loop = () => {


            const canvas =
                canvasRef.current;



            if (!canvas)
                return;



            const ctx =
                canvas.getContext("2d");



            ctx.clearRect(
                0,
                0,
                canvas.width,
                canvas.height
            );



            let idle = true;



            pixelsRef.current.forEach(
                pixel => {

                    pixel[action]();


                    if (!pixel.isIdle)
                        idle = false;

                }
            );



            if (!idle) {

                animationRef.current =
                    requestAnimationFrame(loop);

            }

        };


        animationRef.current =
            requestAnimationFrame(loop);

    };




    useEffect(() => {


        createPixels();



        const observer =
            new ResizeObserver(
                createPixels
            );



        if (containerRef.current) {

            observer.observe(
                containerRef.current
            );

        }



        return () => {

            observer.disconnect();

            cancelAnimationFrame(
                animationRef.current
            );

        };


    }, [
        gap,
        speed,
        colors
    ]);




    return (

        <div

            ref={containerRef}

            className={
                `pixel-card ${className}`
            }

            onMouseEnter={() =>
                animate("appear")
            }

            onMouseLeave={() =>
                animate("disappear")
            }

        >

            <canvas
                ref={canvasRef}
                className="pixel-canvas"
            />


            {children}


        </div>

    );

}