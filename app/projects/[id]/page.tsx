"use client";

import { projects } from "@/app/page"; 
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { use, useState, useEffect } from "react";
import AnimatedBackground from "@/components/AnimatedBackground"; 

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProjectPage({ params }: PageProps) {
  const { id } = use(params);
  const project = projects.find((p) => p.id === id);

  if (!project) notFound();

  return (
    <div className="min-h-screen relative bg-black text-zinc-50 py-12 px-6 selection:bg-blue-500/30 overflow-hidden">
      
      {/* Fondo con estática y orbes */}
      <AnimatedBackground />

      {/* Contenido envuelto en un z-10 para estar sobre la estática */}
      <div className="max-w-[1400px] mx-auto relative z-10">
        <Link 
          href="/" 
          className="text-zinc-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest"
        >
          ← Regresar al Inicio
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mt-16 items-start">
          
          {/* VSlider */}
          <div className="lg:col-span-8 w-full">
            {project.images && project.images.length > 0 ? (
              <ImageSlider images={project.images} title={project.title} />
            ) : (
              <div className="relative aspect-video rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/40 flex items-center justify-center backdrop-blur-sm">
                <p className="text-zinc-500">Sin imágenes disponibles</p>
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="lg:col-span-4 flex flex-col justify-center sticky top-12">
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 uppercase italic leading-[0.9]">
              {project.title}
            </h1>
            
            <p className="text-zinc-400 text-lg leading-relaxed mb-10">
              {project.fullDescription}
            </p>

            <div className="grid grid-cols-1 gap-4">
              {project.link && (
                <a href={project.link} target="_blank" className="w-full bg-zinc-50 text-zinc-950 text-center py-5 rounded-2xl font-black uppercase tracking-tighter hover:bg-white transition-all transform active:scale-95 shadow-xl shadow-white/5">
                  Probar Demo Live
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" className="w-full bg-zinc-900/80 text-zinc-50 text-center py-5 rounded-2xl font-black uppercase tracking-tighter border border-zinc-800 hover:bg-zinc-800 transition-all transform active:scale-95 backdrop-blur-md">
                  Ver Código Fuente
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ImageSlider({ images, title }: { images: string[]; title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);

  return (
    <div className="space-y-6 w-full max-w-[1000px] mx-auto"> 
      <div className="relative aspect-[16/9] max-h-[70vh] w-full rounded-xl overflow-hidden border border-zinc-800 bg-black/60 group shadow-2xl backdrop-blur-sm">
        <Image
          src={images[currentIndex]}
          alt={`${title} - ${currentIndex + 1}`}
          fill
          className="object-contain transition-opacity duration-500 ease-in-out"
          priority
        />
        {images.length > 1 && (
          <>
            <button onClick={handlePrev} className="absolute left-4 top-1/2 -translate-y-1/2 p-4 bg-black/60 backdrop-blur-md rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-all hover:bg-black text-white z-20">←</button>
            <button onClick={handleNext} className="absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-black/60 backdrop-blur-md rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-all hover:bg-black text-white z-20">→</button>
          </>
        )}
      </div>
      {images.length > 1 && (
        <div className="flex justify-center gap-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                index === currentIndex ? "w-12 bg-zinc-50" : "w-3 bg-zinc-800"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}