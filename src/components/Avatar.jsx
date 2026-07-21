import avatar from "../assets/avatar.png";

export default function Avatar({ size = 72, className = "" }) {
  return (
    <div
      className={`relative inline-flex items-center justify-center group ${className}`}
      style={{
        width: size,
        height: size,
      }}
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400 via-orange-400 to-cyan-400 blur-lg opacity-30 group-hover:opacity-60 transition duration-500"></div>

      {/* Gradient Border */}
      <div className="relative w-full h-full rounded-full bg-gradient-to-br from-amber-400 to-cyan-400 p-[2px] transition-all duration-500 group-hover:scale-105 group-hover:rotate-3">
        <img
          src={avatar}
          alt="Muhammad Yusra"
          className="w-full h-full rounded-full object-cover bg-[#121820]"
          draggable={false}
        />
      </div>

      {/* Status Indicator */}
      <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-[#121820] shadow-lg animate-pulse"></span>
    </div>
  );
}