import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Hours = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Opening hours: Mon-Fri: 08:00-12:00, 13:00-18:00; Sat: 07:30-14:30; Sun: Closed
  const schedule = [
    { hours: "08:00 - 12:00, 13:00 - 18:00" }, // Monday
    { hours: "08:00 - 12:00, 13:00 - 18:00" }, // Tuesday
    { hours: "08:00 - 12:00, 13:00 - 18:00" }, // Wednesday
    { hours: "08:00 - 12:00, 13:00 - 18:00" }, // Thursday
    { hours: "08:00 - 12:00, 13:00 - 18:00" }, // Friday
    { hours: "07:30 - 14:30" }, // Saturday
    { hours: t.hours.closed }, // Sunday
  ];

  // Get today's index (0 = Sunday, 1 = Monday, etc.)
  // Convert to our schedule array (0 = Monday)
  const todayIndex = [6, 0, 1, 2, 3, 4, 5][new Date().getDay()];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="hours" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-2xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-12 text-center">
            <span className="text-sm uppercase tracking-widest text-primary font-semibold">
              {t.hours.label}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4">
              {t.hours.title}
            </h2>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="rounded-2xl border border-border bg-background shadow-soft overflow-hidden"
          >
            <div className="flex items-center gap-3 border-b bg-primary/5 px-6 py-5">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-serif text-lg font-semibold">
                {t.hours.header}
              </span>
            </div>

            <div className="divide-y">
              {schedule.map((item, i) => {
                const isToday = i === todayIndex;
                const isClosed = item.hours === t.hours.closed;

                return (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className={`px-6 py-5 flex justify-between items-center transition-colors ${
                      isToday ? "bg-primary/5" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {isToday && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.3 + i * 0.05 }}
                        >
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        </motion.div>
                      )}
                      <div className="flex flex-col">
                        <span
                          className={`font-medium ${
                            isToday ? "text-primary" : "text-foreground"
                          }`}
                        >
                          {t.hours.days[i]}
                        </span>
                        {isToday && (
                          <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full mt-1 w-fit">
                            {t.hours.today}
                          </span>
                        )}
                      </div>
                    </div>
                    <span
                      className={`text-right ${
                        isClosed ? "text-muted-foreground" : "font-medium"
                      }`}
                    >
                      {item.hours}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hours;
