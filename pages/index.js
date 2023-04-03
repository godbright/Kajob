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
import store from "@/redux/store/store";
import { Provider } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Provider store={store}>
      <div>
        <Head>
          <title>Ka Job </title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Landing />
        <WorKWith />
        <Categories />
        <Trending />
        <Stats />
        <Commercials />

        <Testimonials />
      </div>
    </Provider>
  );
}
