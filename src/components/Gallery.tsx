import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Gallery = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Gallery images with descriptions
  const images = [
    { src: "/images/img-1.jpg", alt: "Coiffage élégant" },
    { src: "/images/img-2.jpg", alt: "Coiffure brune" },
    { src: "/images/img-3.jpg", alt: "Tresse mariage" },
    { src: "/images/img-4.jpg", alt: "Coupe moderne" },
    { src: "/images/img-5.jpg", alt: "Coiffure chic" },
    { src: "/images/img-6.jpg", alt: "Cheveux blonds" },
    { src: "/images/img-7.jpg", alt: "Boucles doré" },
    { src: "/images/img-8.jpg", alt: "Coiffure ondulée" },
    { src: "/images/img-9.jpg", alt: "Coupe carrée" },
    { src: "/images/img-10.jpg", alt: "Cheveux longs" },
    { src: "/images/img-11.jpg", alt: "Coiffure blonde" },
    { src: "/images/img-12.jpg", alt: "Coupe pixie" },
    { src: "/images/img-13.jpg", alt: "Coiffage festif" },
    { src: "/images/img-14.jpg", alt: "Coloration" },
    { src: "/images/img-16.jpg", alt: "Coiffure volumineux" },
    { src: "/images/img-17.jpg", alt: "Coupe courte" },
    { src: "/images/img-18.jpg", alt: "Coiffure cuivre" },
    { src: "/images/img-19.jpg", alt: "Cheveux ondulés" },
    { src: "/images/img-20.jpg", alt: "Coloration balayage" },
    { src: "/images/img-21.jpg", alt: "Coiffure soft" },
    { src: "/images/img-22.jpg", alt: "Coupe dégradée" },
    { src: "/images/img-23.jpg", alt: "Coiffure brune" },
    { src: "/images/img-24.jpg", alt: "Cheveux chatain" },
    { src: "/images/img-25.jpg", alt: "Coiffure précision" },
  ];

  const slidePerView = 3;
  const maxIndex = Math.max(0, images.length - slidePerView);

  const handleNext = () => {
    setCurrentIndex(Math.min(currentIndex + 1, maxIndex));
  };

  const handlePrev = () => {
    setCurrentIndex(Math.max(currentIndex - 1, 0));
  };

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
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <span className="text-sm uppercase tracking-widest text-primary font-semibold">
              {t.gallery.label}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4">
              {t.gallery.title}
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              {t.gallery.description}
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            {/* Slider */}
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex gap-4 transition-transform duration-300 ease-out"
                style={{
                  transform: `translateX(-${currentIndex * (100 / slidePerView + 1.33)}%)`,
                }}
              >
                {images.map((image, index) => (
                  <motion.div
                    key={index}
                    className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3"
                    whileHover={{ y: -8 }}
                  >
                    <div
                      className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg"
                      onClick={() => setSelectedImage(index)}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-sm font-medium text-white">
                          {image.alt}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="absolute -left-12 top-1/2 -translate-y-1/2 bg-background"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              disabled={currentIndex === maxIndex}
              className="absolute -right-12 top-1/2 -translate-y-1/2 bg-background"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Slider Indicators */}
            <div className="mt-6 flex justify-center gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-border w-2"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-accent transition-colors"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="w-full rounded-lg"
            />
            <p className="mt-4 text-center text-white font-medium">
              {images[selectedImage].alt}
            </p>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;
