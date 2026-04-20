import { useEffect, useState } from "react";
import floralCorner from "@/assets/floral-corner.png";
import paperTexture from "@/assets/paper-texture.jpg";

const WEDDING_DATE = new Date("2026-07-02T00:00:00");

const useCountdown = () => {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const tick = () => {
      const diff = WEDDING_DATE.getTime() - Date.now();
      if (diff <= 0) return;
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff / 3600000) % 24),
        minutes: Math.floor((diff / 60000) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
};

const Divider = () => (
  <div className="flex items-center justify-center gap-4 my-8" aria-hidden="true">
    <span className="h-px w-12 sm:w-20 bg-sage-deep/40" />
    <span className="text-sage-deep text-lg">❦</span>
    <span className="h-px w-12 sm:w-20 bg-sage-deep/40" />
  </div>
);

const Index = () => {
  const { days, hours, minutes, seconds } = useCountdown();

  return (
    <main
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${paperTexture})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Floral decorations */}
      <img
        src={floralCorner}
        alt=""
        aria-hidden="true"
        width={1024}
        height={1024}
        className="pointer-events-none absolute -top-16 -left-20 w-64 sm:w-96 opacity-90 animate-float"
      />
      <img
        src={floralCorner}
        alt=""
        aria-hidden="true"
        width={1024}
        height={1024}
        loading="lazy"
        className="pointer-events-none absolute -bottom-20 -right-20 w-64 sm:w-96 opacity-90 rotate-180 animate-float"
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-20 sm:py-28 text-center">
        {/* Top label */}
        <p className="font-sans-refined text-[10px] sm:text-xs uppercase tracking-wider-2 text-sage-deep animate-fade-in-slow">
          Together with their families
        </p>

        {/* Names */}
        <h1 className="mt-8 sm:mt-12 animate-fade-up">
          <span className="block font-script text-7xl sm:text-9xl text-primary leading-none">
            Goyma
          </span>
          <span className="block font-serif-display italic text-2xl sm:text-3xl text-sage-deep my-3 sm:my-5">
            &amp;
          </span>
          <span className="block font-script text-7xl sm:text-9xl text-primary leading-none">
            Bhave
          </span>
        </h1>

        <Divider />

        {/* Save the date */}
        <p
          className="font-sans-refined text-xs sm:text-sm uppercase tracking-wider-2 text-foreground/70 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          — Save the Date —
        </p>

        {/* Date */}
        <div
          className="mt-8 animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="flex items-center justify-center gap-4 sm:gap-8">
            <div className="text-right">
              <p className="font-serif-display text-sm sm:text-base uppercase tracking-widest text-sage-deep">Thursday</p>
              <p className="font-serif-display text-sm sm:text-base uppercase tracking-widest text-sage-deep">Friday</p>
            </div>
            <div className="flex flex-col items-center border-y border-sage-deep/40 py-3 px-4">
              <p className="font-serif-display text-4xl sm:text-6xl text-primary leading-none">
                02 <span className="text-sage-deep text-2xl sm:text-3xl">·</span> 03
              </p>
              <p className="font-sans-refined text-[10px] sm:text-xs uppercase tracking-wider-2 mt-2 text-foreground/70">
                July
              </p>
            </div>
            <div className="text-left">
              <p className="font-serif-display text-2xl sm:text-3xl text-primary">
                2026
              </p>
            </div>
          </div>
        </div>

        {/* Location */}
        <div
          className="mt-10 animate-fade-up"
          style={{ animationDelay: "0.7s" }}
        >
          <p className="font-script text-5xl sm:text-6xl text-blush-deep">
            Ludhiana
          </p>
          <p className="font-sans-refined text-[10px] sm:text-xs uppercase tracking-wider-2 text-foreground/60 mt-2">
            Punjab, India
          </p>
        </div>

        <Divider />

        {/* Countdown */}
        <div
          className="animate-fade-up"
          style={{ animationDelay: "0.9s" }}
        >
          <p className="font-serif-display italic text-base sm:text-lg text-sage-deep mb-5">
            counting the moments
          </p>
          <div className="flex items-stretch justify-center gap-2 sm:gap-6">
            {[
              { v: days, l: "Days" },
              { v: hours, l: "Hours" },
              { v: minutes, l: "Minutes" },
              { v: seconds, l: "Seconds" },
            ].map((u, i) => (
              <div key={u.l} className="flex items-center">
                <div className="flex flex-col items-center min-w-[3rem] sm:min-w-[4.5rem]">
                  <span className="font-serif-display text-3xl sm:text-5xl text-primary tabular-nums">
                    {String(u.v).padStart(2, "0")}
                  </span>
                  <span className="font-sans-refined text-[9px] sm:text-[10px] uppercase tracking-wider-2 text-foreground/60 mt-1">
                    {u.l}
                  </span>
                </div>
                {i < 3 && <span className="text-sage-deep/40 mx-1 sm:mx-2 text-2xl">·</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <p
          className="mt-16 font-serif-display italic text-base sm:text-lg text-foreground/70 animate-fade-up"
          style={{ animationDelay: "1.1s" }}
        >
          Formal invitation to follow
        </p>
        <p
          className="mt-2 font-sans-refined text-[10px] uppercase tracking-wider-2 text-sage-deep/80 animate-fade-up"
          style={{ animationDelay: "1.2s" }}
        >
          ✦ kindly hold the date ✦
        </p>
      </div>
    </main>
  );
};

export default Index;
