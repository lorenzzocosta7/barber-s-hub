import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, Team } from "@/components/vgs-site";
import { pageHead } from "@/lib/vgs";

export const Route = createFileRoute("/equipe")({
  head: () => pageHead("Nossa equipe", "Conheça Miguel, Luan, Giselle e Vitor, a equipe da VGS Barbearia em Montes Claros. Conforto do lar, autoestima nas alturas."),
  component: TeamPage,
});
function TeamPage() {
  return <SiteShell><div className="site-wrap page-intro"><p className="eyebrow">O cuidado tem nome</p><h1>QUEM FAZ A VGS.</h1><p className="section-copy">Cada pessoa da nossa equipe faz parte da experiência. Aqui, o cuidado começa no acolhimento.</p></div><Team full /></SiteShell>;
}