import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Scissors } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Services = () => {
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
    <section id="services" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <span className="text-sm uppercase tracking-widest text-primary font-semibold">
              {t.services.label}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4">
              {t.services.title}
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              {t.services.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.services.items.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group rounded-xl border border-border bg-background p-8 hover:shadow-medium transition-all hover:border-primary/30"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="rounded-lg bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors">
                    <Scissors className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold">
                    {service.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
