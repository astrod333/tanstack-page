import { createFileRoute } from "@tanstack/react-router";
import ContentSection from "@/components/content-4";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import BentoGrid from "@/components/kokonutui/bento-grid";
import Pricing from "@/components/pricing";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<>
			<HeroSection />
			<BentoGrid />
			<Pricing />
			<ContentSection />
			<FooterSection />
		</>
	);
}
