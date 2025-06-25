import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg">
      <div className="mx-16 max-w-8xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-32">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="FIMUN Logo" width={80} height={80} />
          <span className="font-rubik font-extrabold text-3xl pl-3 tracking-wide">FIMUN '25</span>
        </div>
        <div className="flex items-center justify-between gap-10 w-[45rem] ">
          <a className="text-xl font-bold relative group font-rubik" href="">
            Flagship-Program
            <span className="absolute bottom-0 left-0 w-0 h-0.5 pt-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a className="text-xl font-bold relative group font-rubik" href="">
            Courses
            <span className="absolute bottom-0 left-0 w-0 h-0.5 pt-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a className="text-xl font-bold relative group font-rubik" href="">
            Certifications
            <span className="absolute bottom-0 left-0 w-0 h-0.5 pt-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a className="text-xl font-bold relative group font-rubik" href="">
            Student Bot
            <span className="absolute bottom-0 left-0 w-0 h-1 pt-1 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
          <button className="text-xl bold cursor-pointer rounded-full px-10 py-4 font-rubik border-4 border-blue-500">Get Started</button>
      </div>
    </nav>
  );
} 