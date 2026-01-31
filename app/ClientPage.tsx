"use client";

import dynamic from "next/dynamic";

const LoadingScreen = dynamic(() => import("./components/LoadingScreen"), { ssr: false });
const Navbar = dynamic(() => import("./components/Navbar"), { ssr: false });
const Hero = dynamic(() => import("./components/Hero"), { ssr: false });
const PanelDO = dynamic(() => import("./components/PanelDO"), { ssr: false });
const PanelR18 = dynamic(() => import("./components/PanelR18"), { ssr: false });
const PanelR32 = dynamic(() => import("./components/PanelR32"), { ssr: false });
const ScriptBot = dynamic(() => import("./components/ScriptBot"), { ssr: false });
const SewaBot = dynamic(() => import("./components/SewaBot"), { ssr: false });
const Community = dynamic(() => import("./components/Community"), { ssr: false });
const Contact = dynamic(() => import("./components/Contact"), { ssr: false });
const Footer = dynamic(() => import("./components/Footer"), { ssr: false });

export default function ClientPage() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <Hero />
      <PanelDO />
      <PanelR18 />
      <PanelR32 />
      <ScriptBot />
      <SewaBot />
      <Community />
      <Contact />
      <Footer />
    </>
  );
}