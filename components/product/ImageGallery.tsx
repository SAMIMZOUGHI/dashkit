"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

interface ImageGalleryProps {
  images: string[];
  productName: string;
  thumbnail: string;
  thumbnailError: boolean;
  onThumbnailError: () => void;
}

export default function ImageGallery({
  images,
  productName,
  thumbnail,
  thumbnailError,
  onThumbnailError,
}: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  // Toutes les images (thumbnail + gallery)
  const allImages = [thumbnail, ...images];

  // Navigation clavier
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (selectedImage === null) return;

      if (e.key === "Escape") {
        setSelectedImage(null);
      } else if (e.key === "ArrowLeft") {
        setSelectedImage((prev) => 
          prev === null ? null : prev > 0 ? prev - 1 : allImages.length - 1
        );
      } else if (e.key === "ArrowRight") {
        setSelectedImage((prev) =>
          prev === null ? null : (prev + 1) % allImages.length
        );
      }
    },
    [selectedImage, allImages.length]
  );

  useEffect(() => {
    if (selectedImage !== null) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Désactive scroll
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedImage, handleKeyDown]);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    setSelectedImage((prev) =>
      prev === null ? null : prev > 0 ? prev - 1 : allImages.length - 1
    );
  };

  const goToNext = () => {
    setSelectedImage((prev) =>
      prev === null ? null : (prev + 1) % allImages.length
    );
  };

  // Placeholder image
  const PlaceholderImage = () => (
    <div className="w-full h-full bg-gradient-to-br from-purple-900/40 via-black to-pink-900/40 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <Sparkles className="w-12 h-12 text-purple-400/50" />
      </div>
    </div>
  );

  return (
    <>
      {/* Galerie principale */}
      <div className="glass-card rounded-3xl p-4 mb-6">
        {/* Image principale (thumbnail) */}
        <div
          className="relative aspect-video rounded-2xl overflow-hidden cursor-zoom-in group"
          onClick={() => !thumbnailError && openLightbox(0)}
        >
          {!thumbnailError ? (
            <>
              <Image
                src={thumbnail}
                alt={`${productName} - Main Preview`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority
                onError={onThumbnailError}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* Overlay hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm font-medium bg-black/60 px-4 py-2 rounded-full">
                  Click to view full size
                </div>
              </div>
            </>
          ) : (
            <PlaceholderImage />
          )}
        </div>

        {/* Galerie miniatures */}
        {images.length > 0 && (
          <div className="flex gap-3 mt-4 overflow-x-auto pb-2 scrollbar-hide">
            {images.map((url, i) => {
              const actualIndex = i + 1; // +1 car thumbnail est à l'index 0
              return (
                <div
                  key={url}
                  className="relative flex-shrink-0 w-36 h-20 rounded-xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300 cursor-pointer group"
                  onClick={() => !imageErrors[actualIndex] && openLightbox(actualIndex)}
                >
                  {!imageErrors[actualIndex] ? (
                    <>
                      <Image
                        src={url}
                        alt={`${productName} Screenshot ${i + 1}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        onError={() =>
                          setImageErrors((prev) => ({ ...prev, [actualIndex]: true }))
                        }
                        sizes="144px"
                      />
                      {/* Overlay hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
                    </>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                      <Sparkles className="w-8 h-8 text-gray-600" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Indicateur nombre d'images */}
        <div className="mt-3 text-center text-sm text-gray-400">
          {allImages.length} image{allImages.length > 1 ? "s" : ""} • Click to zoom
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Bouton fermer */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-[10001] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-300 group"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Navigation gauche */}
            {allImages.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                className="absolute left-4 z-[10001] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-300 group"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 text-white group-hover:-translate-x-1 transition-transform duration-300" />
              </button>
            )}

            {/* Navigation droite */}
            {allImages.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-4 z-[10001] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-300 group"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            )}

            {/* Image en plein écran */}
            <motion.div
              key={selectedImage}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-[90vw] max-h-[85vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <Image
                  src={allImages[selectedImage]}
                  alt={`${productName} - Image ${selectedImage + 1}`}
                  fill
                  className="object-contain"
                  quality={100}
                  sizes="90vw"
                  priority
                />
              </div>
            </motion.div>

            {/* Compteur d'images */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[10001] px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-medium">
              {selectedImage + 1} / {allImages.length}
            </div>

            {/* Instructions clavier */}
            <div className="absolute bottom-6 right-6 z-[10001] text-white/60 text-xs hidden md:block">
              Use ← → arrows to navigate • ESC to close
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
