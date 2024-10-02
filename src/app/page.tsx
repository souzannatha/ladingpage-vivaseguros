import { Plans } from "./components/Plans";
import { SectionBenefits } from "./components/SectionBenefits";
import { Testimonials } from "./components/Testimonials";

export default function Home() {
  return (
    <div>
      <SectionBenefits />
      <Plans />
      <Testimonials />
    </div>
  );
}
