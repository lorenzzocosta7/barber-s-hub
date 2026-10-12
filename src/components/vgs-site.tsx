import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Scissors, Sparkles, MapPin, Menu, X, MessageCircle, CalendarDays, Gem, ShieldCheck, Phone, Instagram, Star, Clock, Wifi, Car, Accessibility } from "lucide-react";
import { Button } from "@/components/ui/button";
import { bookingUrl, mapsUrl, reviewUrl, whatsappUrl } from "@/lib/vgs";
import miguel from "@/assets/vgs-miguel.png.asset.json";
import luan from "@/assets/vgs-luan.png.asset.json";
import giselle from "@/assets/vgs-giselle.png.asset.json";
import vitor from "@/assets/vgs-vitor.png.asset.json";
import logo from "@/assets/vgs-logo.png.asset.json";
import fachada from "@/assets/vgs-fachada.jpg.asset.json";

export function Brand() {
  return <Link to="/" className="brand" aria-label="VGS Barbearia, início"><img className="brand-logo" src={logo.url} alt="VGS — Desde 2022" /><span className="brand-type">BARBEARIA<br />MONTES CLAROS · MG</span></Link>;
}

export function BookingButton({ children = "AGENDAR HORÁRIO" }: { children?: ReactNode }) {
  return <Button asChild variant="gold" size="booking"><a href={bookingUrl} target="_blank" rel="noopener noreferrer"><CalendarDays />{children}<ArrowUpRight /></a></Button>;
}

export function SiteShell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return <>
    <header className="site-header"><div className="site-wrap header-inner"><Brand /><nav className="desktop-nav" aria-label="Navegação principal"><Link className="nav-link" to="/">Início</Link><Link className="nav-link" to="/servicos">Serviços</Link><Link className="nav-link" to="/equipe">Nossa equipe</Link><Link className="nav-link" to="/contato">Contato</Link></nav><div className="header-booking"><BookingButton>AGENDAR</BookingButton></div><Button className="mobile-menu-button" variant="ghost" size="icon" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button></div></header>
    {menuOpen && <nav className="mobile-nav" aria-label="Navegação móvel"><Link to="/" onClick={() => setMenuOpen(false)}>Início</Link><Link to="/servicos" onClick={() => setMenuOpen(false)}>Serviços</Link><Link to="/equipe" onClick={() => setMenuOpen(false)}>Nossa equipe</Link><Link to="/contato" onClick={() => setMenuOpen(false)}>Contato</Link></nav>}
    <main>{children}</main>
    <section className="booking-band"><div className="site-wrap booking-inner"><div><h2 className="section-title">SEU PRÓXIMO CORTE.<br /><span>SUA MELHOR VERSÃO.</span></h2><p className="section-copy">Seu horário na VGS está a um clique.</p></div><BookingButton /></div></section>
    <footer className="footer"><div className="site-wrap footer-inner"><Brand /><p className="footer-note">© {new Date().getFullYear()} VGS Barbearia · Montes Claros, MG</p><Button asChild variant="link"><a href="https://linktr.ee/vgsbarber" target="_blank" rel="noopener noreferrer">Nossos links <ArrowUpRight /></a></Button></div></footer>
    <Button asChild variant="booking" size="floating" className="whatsapp-float"><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" aria-label="Conversar com a VGS pelo WhatsApp" title="Conversar no WhatsApp"><MessageCircle /></a></Button>
  </>;
}

const services = [
  { name: "Corte", price: "R$ 45", time: "45 min", icon: Scissors, description: "Do clássico ao moderno. Um corte que acompanha o seu estilo, com atenção em cada detalhe." },
  { name: "Barba", price: "R$ 35", time: "30 min", icon: Gem, description: "Desenho, alinhamento e acabamento. O cuidado que a sua barba merece." },
  { name: "Corte e barba", price: "R$ 70", time: "60 min", icon: Sparkles, description: "O cuidado completo, em um só horário. Cabelo e barba em perfeita sintonia." },
  { name: "Corte e sobrancelha", price: "R$ 50", time: "45 min", icon: Scissors, description: "Um visual alinhado do início ao fim, com corte e definição das sobrancelhas." },
  { name: "Corte e hidratação", price: "R$ 55", time: "45 min", icon: Sparkles, description: "Renove o corte e cuide dos fios com uma hidratação para completar o visual." },
  { name: "Sobrancelha", price: "R$ 15", time: "10 min", icon: Gem, description: "Definição e cuidado nos pequenos detalhes que fazem toda a diferença." },
];

export function Services({ full = false }: { full?: boolean }) {
  return <section className="content-section"><div className="site-wrap"><div className="section-top"><div><p className="eyebrow">Cuidado em cada detalhe</p><h2 className="section-title">ESTILO NÃO É SORTE.<br /><span>É CUIDADO.</span></h2></div>{!full && <Button asChild variant="link"><Link to="/servicos">Todos os serviços <ArrowUpRight /></Link></Button>}</div><div className="service-grid">{services.slice(0, full ? 6 : 3).map((service, i) => <article className="service-card" key={service.name}><div className="service-card-top"><service.icon size={28} strokeWidth={1.4} /><span className="service-number">0{i + 1} / {service.time}</span></div><h3>{service.name.toUpperCase()}</h3><p>{service.description}</p><div className="service-price"><strong>{service.price}</strong><span>{service.time}</span></div><Button asChild variant="framed"><a href={bookingUrl} target="_blank" rel="noopener noreferrer">Agendar <ArrowUpRight /></a></Button></article>)}</div>{full && <p className="section-copy">Mais combinações e tratamentos disponíveis no <a className="text-primary underline" href={bookingUrl} target="_blank" rel="noopener noreferrer">agendamento oficial</a>. Valores e disponibilidade sujeitos à atualização.</p>}</div></section>;
}

export function Team({ full = false }: { full?: boolean }) {
  const people = [{ name: "Miguel", photo: miguel }, { name: "Luan", photo: luan }, { name: "Giselle", photo: giselle }, { name: "Vitor", photo: vitor }];
  return <section className="content-section team-section"><div className="site-wrap"><div className="section-top"><div><p className="eyebrow">Gente que cuida de você</p><h2 className="section-title">A ASSINATURA É VGS.<br /><span>O TALENTO É NOSSO.</span></h2></div>{!full && <Button asChild variant="link"><Link to="/equipe">Conheça a equipe <ArrowUpRight /></Link></Button>}</div><div className="team-grid">{people.map(person => <article key={person.name}><img src={person.photo.url} alt={`${person.name}, equipe VGS Barbearia`} className="team-photo" loading="lazy" /><h3 className="team-name">{person.name.toUpperCase()}</h3><p className="team-role">Equipe VGS</p></article>)}</div></div></section>;
}

export function BrandBand() {
  return <div className="brand-band"><div className="site-wrap brand-band-inner"><span><Scissors /> ESTILO COM IDENTIDADE</span><span><ShieldCheck /> ATENÇÃO AOS DETALHES</span><span><Gem /> EXPERIÊNCIA VGS</span><span><MapPin /> MONTES CLAROS</span></div></div>;
}

export function Journal() {
  return <section className="content-section"><div className="site-wrap"><div className="section-top"><div><p className="eyebrow">Por dentro da VGS</p><h2 className="section-title">NOSSO DIA A DIA.<br /><span>SEM FILTRO.</span></h2></div><Instagram className="text-primary" /></div><div className="journal-grid">{["DVy0ODajgRF", "DRK7JH2kkg_"].map((id, i) => <a className="journal-link" key={id} href={`https://www.instagram.com/p/${id}/`} target="_blank" rel="noopener noreferrer"><div><strong>{i === 0 ? "A experiência VGS" : "Estilo que leva nossa assinatura"}</strong><p>Ver publicação no Instagram</p></div><ArrowUpRight /></a>)}</div></div></section>;
}

export function ContactDetails() {
  return <div className="site-wrap contact-layout"><div><div className="contact-line"><MapPin /><div><h2>Venha para a VGS</h2><p>Rua Lindolfo Xavier, 311b<br />Planalto · Montes Claros, MG</p><Button asChild variant="framed"><a href={mapsUrl} target="_blank" rel="noopener noreferrer">Como chegar <ArrowUpRight /></a></Button></div></div><div className="contact-line"><Phone /><div><h2>(38) 98828-8017</h2><p>Converse com a nossa equipe.</p><Button asChild variant="framed"><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer"><MessageCircle /> Falar no WhatsApp <ArrowUpRight /></a></Button></div></div><div className="contact-line"><Clock /><div><h2>Horário de atendimento</h2><p>Segunda a sábado: 7h30 às 12h e 13h às 20h<br />Quarta: 8h às 12h e 13h às 20h</p></div></div><div className="contact-line"><Star /><div><h2>Sua opinião faz a diferença</h2><Button asChild variant="link"><a href={reviewUrl} target="_blank" rel="noopener noreferrer">Avalie a VGS no Google <ArrowUpRight /></a></Button></div></div></div><div><img className="contact-photo" src={fachada.url} alt="Fachada da VGS Barbearia na Rua Lindolfo Xavier em Montes Claros" /><div className="amenities"><span><Wifi /> Wi-Fi</span><span><Car /> Estacionamento</span><span><Accessibility /> Acessibilidade</span></div></div></div>;
}