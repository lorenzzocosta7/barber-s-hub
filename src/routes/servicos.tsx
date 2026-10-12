import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, Services } from "@/components/vgs-site";
import { pageHead } from "@/lib/vgs";

export const Route = createFileRoute("/servicos")({
  head: () => pageHead("Serviços e preços", "Conheça os cortes, cuidados com a barba e combinações da VGS Barbearia em Montes Claros. Consulte os preços e agende online."),
  component: ServicesPage,
});
function ServicesPage() {
  return <SiteShell><div className="site-wrap page-intro"><p className="eyebrow">VGS Barbearia</p><h1>NOSSOS SERVIÇOS.</h1><p className="section-copy">O seu estilo pede cuidado. Escolha o seu e reserve um momento para você.</p></div><Services full /></SiteShell>;
}