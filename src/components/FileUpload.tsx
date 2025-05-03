interface Props {
    tittle: string;
    description: string;
}

export const FileUpload = ({ tittle, description }: Props) => {
  
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center px-4 py-32">
        <h1 className="text-4xl sm:text-6xl tracking-tight max-w-2xl animate-fade-in animate-delay-200 font-bold text-center animate-text-gradient inline-flex bg-gradient-to-r from-neutral-100 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent dark:via-slate-400 dark:to-neutral-700">
            {tittle}
        </h1>

        <p className="text-2xl text-center tracking-tight mt-4 max-w-2xl ">
            {description}
        </p>

        <div className="">

        </div>

    </div>
  );
};