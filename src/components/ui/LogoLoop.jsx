import "./LogoLoop.css";

export default function LogoLoop({
    logos = [],
    speed = 40,
    logoHeight = 32,
}) {
    return (
        <div className="logo-loop">

            <div
                className="logo-loop-track"
                style={{
                    animationDuration: `${speed}s`,
                }}
            >

                {[...logos, ...logos].map((logo, index) => (
                    <div
                        key={index}
                        className="logo-loop-item"
                    >
                        <img
                            src={logo.src}
                            alt={logo.alt}
                            style={{
                                height: logoHeight,
                            }}
                        />
                    </div>
                ))}

            </div>

        </div>
    );
}