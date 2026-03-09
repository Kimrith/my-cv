import chey from "../assets/chey.png";
import me from "../assets/me.png";
import { useEffect, useState } from "react";

export default function Homepage() {
  const [hover, setHover] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div data-aos="fade-up">
      <section className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden bg-slate-900">
        {/* Background Decor: Subtle purple glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="text-center md:text-left space-y-6 order-2 md:order-1">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/50 border border-purple-500/30 text-purple-300 text-sm font-medium mx-auto md:mx-0">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Available for work
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                  Chey Kimrith
                </span>
              </h1>
              <p className="mt-4 text-xl md:text-2xl text-gray-300 font-light">
                Web Developer
              </p>
            </div>

            {/* Bio */}
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              I build user-friendly, accessible, and performant digital
              experiences using modern web technologies. Passionate about clean
              code and great UX.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
              <a href="https://t.me/CheyKimrith" className="text-white">
                <button className="w-full sm:w-auto px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl border border-slate-700 transition-all flex items-center justify-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Contact Me
                </button>
              </a>
            </div>
          </div>

          {/* Right Column: Profile Image */}
          <div className="flex justify-center order-1 md:order-2 max-sm:mt-12 relative">
            {/* Decorative Ring */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-blue-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>

            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-1 bg-gradient-to-br from-purple-500 to-blue-600 shadow-2xl">
              <img
                src={hover ? me : chey}
                alt="Portrait of Chey Kimrith, Web Developer"
                className="w-full h-full rounded-full object-cover border-4 border-slate-900 transition-transform duration-500 hover:scale-110"
                loading="lazy"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
