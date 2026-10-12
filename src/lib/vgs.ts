export const bookingUrl = "https://sites.appbarber.com.br/vgsbarber";
export const mapsUrl = "https://www.google.com/maps/place/VGS+BARBEARIA/@-16.6967409,-43.8372326,17z/data=!4m8!3m7!1s0x754abae77610537:0x19a1049c8496108e!8m2!3d-16.6967409!4d-43.8372326!9m1!1b1!16s%2Fg%2F11t88rjyl0";
export const reviewUrl = "https://g.page/r/CY4QloScBKEZEBM/review";
export const whatsappUrl = (service?: string) => `https://wa.me/5538988288017?text=${encodeURIComponent(service ? `Olá! Gostaria de saber mais sobre ${service.toLowerCase()} na VGS Barbearia.` : "Olá! Gostaria de agendar um horário na VGS Barbearia.")}`;
export function pageHead(title: string, description: string) {
  return { meta: [
    { title: `${title} | VGS Barbearia` },
    { name: "description", content: description },
    { property: "og:title", content: `${title} | VGS Barbearia` },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] };
}