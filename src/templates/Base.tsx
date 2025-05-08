import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { FeatureSection } from './FeatureSection';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { HowItWorks } from './HowItWorks';
import { StatsSection } from './StatsSection';
// import { VerticalFeatures } from './VerticalFeatures'; // removed

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <StatsSection />
    <HowItWorks />
    <FeatureSection />
    <Banner />
    <Footer />
  </div>
);

export { Base };
