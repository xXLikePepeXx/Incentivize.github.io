import Banner from "./Components/Banner";
import FeaturesGrid from "./Components/FeaturesGrid";
import FeatureSection from "./Components/FeatureSection";
import ContactUs from "./Components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Banner />
      <FeaturesGrid />
      <FeatureSection />
      <div className="px-6">
        <ContactUs />
      </div>
    </div>
  );
}
