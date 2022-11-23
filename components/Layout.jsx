import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import CurrentMatch from "./CurrentMatch";

export default function Layout({ children, current }) {
  return (
    <>
      <Navbar />
      <Hero />
      <CurrentMatch current={current} />
      <main>{children}</main>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://worldcupjson.net/matches/current");
  const data = await res.json();
  const current = data;
  console.log(current);

  return {
    props: {
      current,
    },
  };
}
