import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Mission from "@/components/Mission";
import Marquee from "@/components/Marquee";
import ServicesList from "@/components/ServicesList";
import FeatureDivorce from "@/components/FeatureDivorce";
import FeatureNeighborhoods from "@/components/FeatureNeighborhoods";
import NeighborhoodGrid from "@/components/NeighborhoodGrid";
import About from "@/components/About";
import Testimonial from "@/components/Testimonial";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Stats />
      <Mission />
      <Marquee />
      <ServicesList />
      <FeatureDivorce />
      <FeatureNeighborhoods />
      <NeighborhoodGrid />
      <About />
      <Testimonial />
      <CTA />
      <Footer />
    </>
  );
}
