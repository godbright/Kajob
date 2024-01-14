import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Landing from "@/components/Landing/landing";
import Categories from "@/components/categories/categories";
import Trending from "@/components/trending_services/trending_services";
import Stats from "@/components/stats";
import Testimonials from "@/components/testimonials";
import Commercials from "@/components/commercials";
import WorKWith from "@/components/work_with/WorkWith";
import { useScroll } from "@react-hooks-library/core";
import { Provider } from "react-redux";
import { useEffect, useRef } from "react";
import Job from "@/components/job/job";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ka Job </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
      <Categories />
      <Job />
      <Trending />
      <Stats />
      <Commercials />
      <WorKWith />

      {/* <Testimonials /> */}
    </div>
  );
}
