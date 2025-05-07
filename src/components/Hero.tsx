export const Hero = () => {
  return (
    <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-10">
    <img
          src="/convertHero.png"
          alt="FileConverter logo"
          className="mb-4 h-26"
        />
        <h1 className="text-4xl sm:text-6xl tracking-tight max-w-2xl animate-fade-in animate-delay-200 font-bold text-center animate-text-gradient inline-flex bg-gradient-to-r from-neutral-100 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent dark:via-slate-400 dark:to-neutral-700">
          The best file converter in the world!
        </h1>

        <p className="text-2xl text-center tracking-tight mt-4 max-w-2xl ">This is your best option for converting files quickly and easily. Experience seamless conversions with our user-friendly interface!</p>
  </main>
  );
};

export default Hero;