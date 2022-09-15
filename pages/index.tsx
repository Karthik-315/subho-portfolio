import Head from "next/head";
import Image from "next/image";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Subho Ghosh</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-white text-black dark:bg-[#282C34] dark:text-white">
        <Header />
        <main className="px-8 mt-10">
          <article className="text-center">
            <h1 className="text-4xl font-bold">Hi, I'm Subho.</h1>
            <p className="mt-4">
              I am a full-stack software engineer who enjoy working with
              talented designers to buld innovative user experiences with React.
            </p>
            <div className="bg-gray-400 aspect-video rounded-lg mt-8"></div>
          </article>

          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
}
