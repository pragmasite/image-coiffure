import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Contact = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <span className="text-sm uppercase tracking-widest text-primary font-semibold">
              {t.contact.label}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4">
              {t.contact.title1}{" "}
              <span className="text-primary">{t.contact.title2}</span>
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              {t.contact.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Phone */}
              <div className="flex gap-4">
                <div className="rounded-lg bg-primary/10 p-4 h-fit">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold mb-2">
                    {t.contact.phone}
                  </h3>
                  <a
                    href="tel:+41269120951"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +41 26 912 09 51
                  </a>
                  <Button asChild className="mt-3 w-full gap-2">
                    <a href="tel:+41269120951">
                      <Phone className="h-4 w-4" />
                      {t.contact.callNow}
                    </a>
                  </Button>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="rounded-lg bg-accent/10 p-4 h-fit">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold mb-2">
                    {t.contact.email}
                  </h3>
                  <a
                    href="mailto:contact@imagecoiffure.ch"
                    className="text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    contact@imagecoiffure.ch
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-4">
                <div className="rounded-lg bg-primary/10 p-4 h-fit">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold mb-2">
                    {t.contact.address}
                  </h3>
                  <address className="text-muted-foreground not-italic leading-relaxed">
                    Rue de la Sionge 40<br />
                    1630 Bulle<br />
                    Suisse
                  </address>
                </div>
              </div>
            </motion.div>

            {/* Google Map */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl overflow-hidden shadow-medium h-96 md:h-auto md:min-h-96"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2747.0829375892143!2d7.0571010762048865!3d46.61965226423471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478ed1e4e4e4e4e5%3A0x5b0c5c5c5c5c5c5c!2sRue%20de%20la%20Sionge%2040%2C%201630%20Bulle!5e0!3m2!1sfr!2sch!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
