import { createFileRoute } from "@tanstack/react-router";
import { MapPin, ArrowUpRight, Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteShell, BookingButton, Services, Team, BrandBand, Journal } from "@/components/vgs-site";
import { mapsUrl, whatsappUrl, pageHead } from "@/lib/vgs";
import equipe from "@/assets/vgs-equipe.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => pageHead("VGS Barbearia em Montes Claros", "Conforto do lar, autoestima nas alturas! Conheça a equipe, os serviços e agende seu horário na VGS Barbearia em Montes Claros."),
  component: Index,
});

function Index() {
  return <SiteShell><section className="hero"><img className="hero-photo" src={equipe.url} alt="A equipe da VGS Barbearia em frente ao espaço em Montes Claros" fetchPriority="high" /><div className="site-wrap hero-content"><p className="eyebrow">Mais que um corte. Sua identidade.</p><h1>VGS BARBEARIA.<br /><span>SEU ESTILO.</span><br />NOSSA ASSINATURA.</h1><p className="hero-copy">Conforto do lar, autoestima nas alturas.<br />Seu momento de cuidado começa aqui.</p><div className="hero-actions"><BookingButton /><Button asChild variant="framed" size="booking"><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">FALAR COM A VGS <ArrowUpRight /></a></Button></div><a className="hero-location" href={mapsUrl} target="_blank" rel="noopener noreferrer"><MapPin size={15} /> Planalto · Montes Claros, MG <ArrowUpRight size={13} /></a></div><div className="hero-signature"><Scissors size={27} strokeWidth={1} /><span>Feito com cuidado.<br />Feito por VGS.</span></div></section><BrandBand /><Services /><Team /><Journal /></SiteShell>;
}
