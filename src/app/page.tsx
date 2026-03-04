import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import PageContainer from "../components/PageContainer";

export default function Home() {
  return (
    <PageContainer>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </PageContainer>
  );
}
