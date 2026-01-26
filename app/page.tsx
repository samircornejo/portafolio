import Image from "next/image";
import Link from "next/link";
import { Project } from "../types/project"; 
import AnimatedBackground from "@/components/AnimatedBackground";

export const projects: Project[] = [
  {
    id: "inventario-repuestos",
    title: "Inventario de Autorepuestos",
    description: "Gestión de stock y proformas automotrices.",
    fullDescription: "Sistema completo para gestión de inventario de repuestos automotrices, control de stock, generación de proformas y registro de entradas y salidas.",
    technologies: ["Python", "SQLite", "Tkinter"],
    image: "/images/inventario-repuestos/1.png",
    images: ["/images/inventario-repuestos/1.png", "/images/inventario-repuestos/2.png", "/images/inventario-repuestos/3.png", "/images/inventario-repuestos/4.png", "/images/inventario-repuestos/5.png"],
    github: "https://github.com/samircornejo/inventario_repuestos.git"
  },
  {
    id: "catalogo-digital",
    title: "Catálogo Online",
    description: "Plataforma web de catálogo digital responsive.",
    fullDescription: "Plataforma web de catálogo digital para visualización y búsqueda de productos con interfaz moderna y responsive.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/images/catalogo-online/1.png",
    images: ["/images/catalogo-online/1.png", "/images/catalogo-online/2.png", "/images/catalogo-online/3.png"],
    link: "https://catalogo-online-rust-iota.vercel.app/"
  },
  {
    id: "app-tomapedidos",
    title: "App Toma Pedidos",
    description: "Aplicación móvil para gestión de pedidos.",
    fullDescription: "Aplicación integral para captura y gestión de pedidos con sincronización en tiempo real, reportes y análisis de ventas.",
    technologies: ["Flutter"],
    image: "/images/app-tomapedidos/1.png",
    images: ["/images/app-tomapedidos/1.png", "/images/app-tomapedidos/2.png", "/images/app-tomapedidos/3.png", "/images/app-tomapedidos/4.png"],
    github: "https://github.com/AndroidCodecta/fluttertest.git"
  },
  {
    id: "fisiosana",
    title: "Landing Page Fisiosana",
    description: "Página de presentación para clínica de fisioterapia.",
    fullDescription: "Sitio web moderno y responsivo para presentar servicios de fisioterapia, citas en línea y contacto directo con los profesionales.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/images/fisiosana/1.png",
    images: ["/images/fisiosana/1.png", "/images/fisiosana/2.png"],
    link: "https://fisiosana.vercel.app/"
  },
  {
    id: "mapa-interactivo",
    title: "Mapa interactivo",
    description: "Mapa interactivo del Perú.",
    fullDescription: "Este proyecto es una simulación de un sistema de filtrado geográfico que permite visualizar y explorar incidencias de violencia en colegios del Perú, utilizando datos geograficos y una interfaz interactiva basada en Leaflet.",
    technologies: ["Html","JavaScript","CSS"],
    image: "/images/mapa-interactivo/2.png",
    images: ["/images/mapa-interactivo/2.png", "/images/mapa-interactivo/1.png"],
    github: "https://github.com/AndroidCodecta/fluttertest.git"
  }
];
export default function Home() {
  return (
    <main className="min-h-screen relative bg-black text-zinc-50 selection:bg-white/30 overflow-hidden">
      
      <AnimatedBackground />
      <div className="relative z-10">
        <section className="max-w-6xl mx-auto px-6 py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-7xl font-black tracking-tighter italic">SAMIR CORNEJO ATOCHE</h1>
              <p className="text-xl text-zinc-500 max-w-xl">
                Programador web/mobile Junior
              </p>
            </div>
            
            <div className="flex justify-center md:justify-end">
              <div className="relative w-80 h-80 rounded-[2rem] overflow-hidden border-2 border-zinc-800">
                <Image
                  src="/images/foto-cv.jpeg"
                  alt="Samir Cornejo"
                  fill
                  className="object-cover "
                  priority
                />
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-7xl mx-auto px-6 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Link 
                href={`/projects/${project.id}`} 
                key={project.id}
                className="group relative h-[450px] flex flex-col overflow-hidden rounded-[2rem] border border-zinc-900 bg-zinc-900/30 transition-all hover:border-zinc-700 hover:bg-zinc-900/60"
              >
                {project.image && (
                <div className="absolute inset-0 z-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-30 grayscale group-hover:grayscale-0 blur-[2px] group-hover:blur-0"
                  />
                </div>
                )}

                <div className="relative z-10 h-full p-8 flex flex-col justify-end bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent backdrop-blur-[1px]">
                  <h3 className="text-3xl font-bold tracking-tight mb-2">{project.title}</h3>
                  <p className="text-zinc-400 mb-6 text-sm line-clamp-2">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span key={tech} className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-white/5 rounded-full border border-white/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-24 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 text-zinc-50 tracking-tighter uppercase italic">
            Tecnologías
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                cat: "Lenguajes",
                items: ["JavaScript", "TypeScript", "Python", "C++"]
              },
              {
                cat: "Frontend",
                items: ["Next.js", "Vue.js", "Tailwind CSS"]
              },
              {
                cat: "Móvil",
                items: ["Flutter (Dart)"]
              },
              {
                cat: "Backend",
                items: ["Express", "Flask"]
              },
              {
                cat: "Base de Datos",
                items: ["MySQL", "PostgreSQL", "SQLite"]
              }
            ].map((group, index) => (
              <div 
                key={index}
                className="bg-zinc-900/40 backdrop-blur-md border border-zinc-800 rounded-xl p-6 transition-all hover:border-zinc-500 group"
              >
                <h3 className="text-xs font-black text-blue-500 uppercase tracking-[0.2em] mb-4">
                  {group.cat}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span 
                      key={item} 
                      className="text-sm font-medium text-zinc-300 group-hover:text-zinc-100 transition-colors"
                    >
                      {item}{group.items.indexOf(item) !== group.items.length - 1 ? " , " : ""}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contacto" className="max-w-6xl mx-auto px-6 py-24 pb-40 relative z-10">
          <div className="flex flex-col items-center text-center space-y-8">
            <h2 className="text-5xl font-black tracking-tighter uppercase italic">
              Contacto
            </h2>
            <p className="text-xl text-zinc-500 max-w-md">
              ¿Interesado en trabajar juntos? <span className="text-zinc-300">¡Hablemos!</span>
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 pt-4">
              <a 
                href="mailto:samircornejoatoche22@gmail.com" 
                className="px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-black uppercase tracking-tighter transition-all transform active:scale-95 shadow-lg shadow-blue-600/20"
              >
                Email
              </a>
              <a 
                href="https://github.com/samircornejo" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 bg-zinc-900 hover:bg-zinc-800 text-white rounded-full font-black uppercase tracking-tighter border border-zinc-800 transition-all transform active:scale-95"
              >
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/samir-alonso-cornejo-atoche-455438270/" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 bg-blue-500 hover:bg-blue-400 text-white rounded-full font-black uppercase tracking-tighter transition-all transform active:scale-95 shadow-lg shadow-blue-500/20"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}