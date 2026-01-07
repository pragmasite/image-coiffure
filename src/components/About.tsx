import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
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
    <section id="about-us" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <span className="text-sm uppercase tracking-widest text-primary font-semibold">
              {t.about.label}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4">
              {t.about.title1}{" "}
              <span className="text-primary">{t.about.title2}</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div variants={itemVariants}>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {t.about.p1}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.about.p2}
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
              <div className="rounded-lg bg-primary/5 p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">
                  {t.about.stat1}
                </div>
              </div>
              <div className="rounded-lg bg-accent/10 p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">100+</div>
                <div className="text-sm text-muted-foreground">
                  {t.about.stat2}
                </div>
              </div>
              <div className="rounded-lg bg-primary/5 p-6 text-center md:col-span-2">
                <div className="text-3xl font-bold text-primary mb-2">4.8★</div>
                <div className="text-sm text-muted-foreground">
                  {t.about.stat3}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants}>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {t.about.features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="rounded-lg border border-border bg-card p-6 hover:shadow-soft transition-shadow"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <h3 className="font-serif text-lg font-semibold">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
