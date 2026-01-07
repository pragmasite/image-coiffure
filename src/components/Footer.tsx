import { Facebook, Instagram } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();

  const navLinks = [
    { id: "about-us", label: t.nav.aboutUs },
    { id: "services", label: t.nav.services },
    { id: "gallery", label: t.nav.gallery },
    { id: "hours", label: t.nav.hours },
    { id: "contact", label: t.nav.contact },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex flex-col mb-4">
              <span className="font-serif text-xl font-bold">Image</span>
              <span className="text-xs tracking-widest text-white/60">
                {t.footer.tagline}
              </span>
            </div>
            <p className="text-sm text-white/70">{t.footer.description}</p>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.facebook.com/Image-Coiffure-502805140068197"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-accent transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/imagecoiffuresarl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-accent transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">
              {t.footer.navigation}
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">
              {t.contact.label}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+41269120951"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  +41 26 912 09 51
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@imagecoiffure.ch"
                  className="text-sm text-white/70 hover:text-white transition-colors break-all"
                >
                  contact@imagecoiffure.ch
                </a>
              </li>
              <li className="text-sm text-white/70">
                Rue de la Sionge 40<br />
                1630 Bulle, CH
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">
              {t.hours.label}
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Lun - Ven: 08:00 - 12:00</li>
              <li className="ml-8">13:00 - 18:00</li>
              <li>Sam: 07:30 - 14:30</li>
              <li>Dim: {t.hours.closed}</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-sm text-white/60 text-center">
            © {new Date().getFullYear()} Image Coiffure. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
