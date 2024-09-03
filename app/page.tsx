import CoverParticles from "@/components/cover-particles";
import Introduction from "@/components/introduction";
import TransitioPage from "@/components/transition-page";
export default function Page() {
  return (
    <main>
      <TransitioPage />
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        <CoverParticles />
        <Introduction />
      </div>
    </main>
  );
}