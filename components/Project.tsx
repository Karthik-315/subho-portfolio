export default function Project({
  title,
  desc,
  liveUrl,
  codeUrl,
  previewUrl,
  alt,
  isOpenSource,
}) {
  return (
    <div className="md:grid md:grid-cols-12 md:items-center md:gap-x-14">
      <div className="md:col-span-5 relative">
        <img
          className="aspect-video rounded-lg md:h-full"
          src={previewUrl}
          alt={alt}
        />
        <div>
          <div className="absolute -top-4 -right-12 -left-12 h-px bg-slate-900/[0.1] dark:bg-cyan-900 [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
          <div className="absolute -top-12 -bottom-12 -left-4 w-px bg-slate-900/[0.1] dark:bg-cyan-900 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
          <div className="absolute -top-12 -bottom-12 -right-4 w-px bg-slate-900/[0.1] dark:bg-cyan-900 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
          <div className="absolute -bottom-4 -right-12 -left-12 h-px bg-slate-900/[0.1] dark:bg-cyan-900 [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
        </div>
      </div>
      <div className="mt-4 md:col-span-7 md:mt-0">
        <div>
          <h4 className="text-xl font-bold md:text-base">{title}</h4>
          <p className="mt-2 text-zinc-400 md:text-sm">{desc}</p>
        </div>
        <div className="mt-4 space-x-5 text-white">
          <a
            href={liveUrl}
            className="inline-block rounded bg-zinc-700 px-12 py-2"
          >
            View Live
          </a>
          <a
            href={codeUrl}
            className="inline-block rounded bg-zinc-700 px-12 py-2"
          >
            {isOpenSource ? "My Contrbutions" : "Code"}
          </a>
        </div>
      </div>
    </div>
  );
}
