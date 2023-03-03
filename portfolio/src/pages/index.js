import Head from 'next/head';
import { Inter } from 'next/font/google';
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import ProjectList from './projects';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Kevin Heaton</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Antic+Didone&family=GFS+Didot&family=Source+Sans+Pro&display=swap" rel="stylesheet"></link>
      </Head>
      <main>
        <div className="min-h-full min-w-full flex flex-wrap bg-cover bg-gradient-to-r from-sky-900 to-indigo-900">

          <div className="flex flex-wrap min-w-full">
            <button className="absolute top-5 right-5 rounded-lg bg-neutral-800">
              <a href='/files/KevinHeatonResume.pdf' 
                alt='Resume of Kevin Heaton' 
                target='_blank' 
                rel='noopener noreferrer' 
                locale={true}
                className="p-2 justify-center align-middle text-white" >
                  Resume
                </a>
            </button>
          </div>

          <div className="min-w-full min-h-screen flex flex-wrap flex-col justify-center align-middle">
            <h1 className=" justify-center align-middle min-w-full flex flex-wrap text-9xl">
              Kevin Heaton
            </h1>

            <p className="justify-center align-middle flex max-w-full text-center text-4xl p-5">
              Software developer employing a background in education to create more user friendly experiences.
            </p>

            <ul className="flex flex-wrap justify-center">
              <a href="https://www.linkedin.com/in/kevin-heaton-663b2ab5/" target="_blank">
              <li className="m-3">
                <BsLinkedin size={56} color="#0277b5"/>
              </li>
              </a>
              <a href="https://github.com/KevinHeaton" target="_blank">
              <li className="m-3">
                <BsGithub size={56} color="white"/>
              </li>
              </a>
            </ul>
          </div>

          <div className="flexm min-w-full min-h-screen">
            <h2 className="align-middle min-w-full flex flex-wrap text-7xl p-5">
              About Me
            </h2>

            <p className="justify-center align-middle flex max-w-full text-left text-2xl p-5">
              Coding was never something that I imagined myself doing. I had preconceived notions regarding what it meant to be a developer and it felt somewhat out of reach for someone with my experience. However, once I let go of those ideas and gave it a shot I was instantly hooked. I loved being able to create something from scratch and seeing the endless possibilities that programming holds. The more I learned the more I realized you can never know it all and that further fueled my passion. I consider myself a lifelong learner and doing something where you can never stop growing excites me.
              <br />
              <br />
              My previous work experience has allowed me to wear many hats and hone many skills. I have been able to work well under pressure and balance multiple priorities in a constantly evolving environment. Through my time in The Coding Boot Camp at UT Austin I have gained experience as a full stack developer, with in-depth knowledge of JavaScript and other widely used languages and a strong understanding of what it means to work in this field. Throughout my time as a teacher and in The Coding Boot Camp, I have also had the opportunity to work with a diverse group of individuals who come from all backgrounds and I pride myself on always maintaining positive and genuine relationships with my colleagues and superiors.
            </p>

            <h2 className="align-middle min-w-full flex flex-wrap text-7xl p-5">
              My Mission
            </h2>

            <p className="justify-center align-middle flex max-w-full text-left text-2xl p-5">
            Front-end web developer employing a background in teaching to create more user friendly experiences. Have earned a certificate in full stack development from the University of Texas Coding Bootcamp, with new skills in HTML, CSS, JavaScript, and more. Always looking for solutions as a relentless problem solver looking for the best responsive designs. Best work is done when working in teams where communication is a top priority. As a part of a high-quality team, a web application that allows people in Austin to post events and allow users to RSVP to them was created. Excited to be a part of a fast paced and driven team to create high-quality, progressive web applications. Best traits are communication, collaboration, and adaptability.
            </p>
          </div>

          <div className="flex flex-wrap min-w-full min-h-screen">
            <h2 className="align-middle min-w-full flex flex-wrap text-7xl p-5">
              Portfolio
            </h2>

            <p className="flex max-w-full text-left text-2xl p-5 min-w-full">
              Since starting my coding journey, I've created a wide range of apps and websites. Below are some of my favorites!
            </p>

            <ProjectList />
          </div>

          <div className="flex flex-wrap justify-center min-w-full">
            <h2 className="align-middle min-w-full justify-center flex flex-wrap text-7xl p-5">
              Contact Me
            </h2>

            <p className="flex max-w-full text-left text-2xl p-5">
              Want to get in touch? Feel free to contact me by email at williamkevinheaton@gmail.com or through LinkedIn!
            </p>

            <div className="min-w-full">
              <ul className="flex flex-wrap justify-center">
                <a href="https://www.linkedin.com/in/kevin-heaton-663b2ab5/" target="_blank">
                <li className="m-3">
                  <BsLinkedin size={56} color="#0277b5"/>
                </li>
                </a>
                <a href="mailto:williamkevinheaton@gmail.com" target="_blank">
                  <MdEmail size={56} color="white" className="m-3" />
                </a>
              </ul>
            </div>
          </div>

        </div>
      </main>
    </>
  )
}
