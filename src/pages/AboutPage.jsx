import PageHeader from '../layout/PageHeader.jsx';
import SuccessStory from '../components/about/SuccessStory.jsx';
import TeamSection from '../components/about/TeamSection.jsx';
import NurserySection from '../components/about/NurserySection.jsx';

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About Us" />
      <SuccessStory />
      <TeamSection />
      <NurserySection />
    </>
  );
}
