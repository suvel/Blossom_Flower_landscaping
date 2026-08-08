import HeroCarousel from '../components/home/HeroCarousel.jsx';
import TopFeatures from '../components/home/TopFeatures.jsx';
import PromoCarousel from '../components/home/PromoCarousel.jsx';
import AboutSummary from '../components/home/AboutSummary.jsx';
import FactsCounter from '../components/home/FactsCounter.jsx';
import WhyChooseUs from '../components/home/WhyChooseUs.jsx';
import ServicesPreview from '../components/home/ServicesPreview.jsx';
import ProjectsCarousel from '../components/home/ProjectsCarousel.jsx';
import { featuredServices } from '../data/services.js';
import { facts } from '../data/facts.js';

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <TopFeatures />
      <PromoCarousel />
      <AboutSummary />
      <FactsCounter facts={facts} />
      <WhyChooseUs />
      <ServicesPreview services={featuredServices} />
      <ProjectsCarousel />
    </>
  );
}
