import { SiTwitter, SiGithub, SiLinkedin } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="relative mt-20">
      <div className="absolute -top-4 -right-12 -left-12 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)] dark:bg-cyan-900"></div>
      <div className="py-6">
        <div className="flex justify-center gap-x-8">
          <a
            href="https://twitter.com/subhoghosh_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiTwitter className="h-6 w-8" />
          </a>
          <a
            href="https://github.com/subhoghoshX"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGithub className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/subho-ghosh-7a59aa250/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLinkedin className="h-6 w-6" />
          </a>
        </div>

        <p className="text-center mt-4 text-zinc-600 dark:text-zinc-400">
          Copyright &copy; {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
