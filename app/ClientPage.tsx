"use client";

import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PanelDO from "@/components/PanelDO";
import PanelR18 from "@/components/PanelR18";
import PanelR32 from "@/components/PanelR32";
import ScriptBot from "@/components/ScriptBot";
import SewaBot from "@/components/SewaBot";
import Community from "@/components/Community";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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