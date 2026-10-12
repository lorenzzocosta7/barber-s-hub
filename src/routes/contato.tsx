import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, ContactDetails } from "@/components/vgs-site";
import { pageHead } from "@/lib/vgs";

export const Route = createFileRoute("/contato")({
  head: () => pageHead("Contato e localização", "Encontre a VGS Barbearia na Rua Lindolfo Xavier, 311b, Planalto, Montes Claros. WhatsApp (38) 98828-8017. Veja horários e como chegar."),
  component: ContactPage,
});
function ContactPage() {
  return <SiteShell><div className="site-wrap page-intro"><p className="eyebrow">Seu lugar em Montes Claros</p><h1>A CASA É SUA.</h1><p className="section-copy">Venha conhecer a VGS. Estamos esperando por você.</p></div><ContactDetails /></SiteShell>;
}