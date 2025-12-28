import Image from "next/image";

export default function Home() {
  const projects = [
    {
      title: "Inventario y Proformas de Autorepuestos",
      description: "Sistema completo para gestión de inventario de repuestos automotrices, control de stock, generación de proformas y registro de entradas y salidas.",
      technologies: ["Python", "SQLite", "Tkinter"],
      icon: "🔧",
      github: "https://github.com/samircornejo/inventario_repuestos"
    },
    {
      title: "Catálogo Online",
      description: "Plataforma web de catálogo digital para visualización y búsqueda de productos con interfaz moderna y responsive.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      icon: "📦",
      link: "https://catalogo-online-rust-iota.vercel.app/"
    },
    {
      title: "App Móvil de Tomapedidos",
      description: "Aplicación móvil para toma de pedidos en tiempo real, gestión de productos, clientes y órdenes con interfaz intuitiva y multiplataforma.",
      technologies: ["Flutter", "Dart", "Firebase"],
      icon: "📱",
      github: "https://github.com/AndroidCodecta/fluttertest"
    },
    {
      title: "Sistema de Asistencias y Gestión de Tareas",
      description: "Plataforma integral para registro y control de asistencias con gestión de tareas, reportes en tiempo real, organización de prioridades y colaboración en equipo.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      icon: "✓",
      github: "https://github.com/AnthonyACL/zeit-react"
    },
    {
      title: "Landing Page",
      description: "Diseño y desarrollo de landing page responsive con animaciones modernas y optimización SEO.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      icon: "🚀",
      link: "https://presentation-page-one.vercel.app/"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-black">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg">
            <Image
              src="https://media-lim1-1.cdn.whatsapp.net/v/t61.24694-24/491834206_1632831660731538_1792580805779909463_n.jpg?ccb=11-4&oh=01_Q5Aa3QFpliOh51H9hcuRyitTJGDBjbBwk0kErAC29v6VBiDeLw&oe=695D65D0&_nc_sid=5e03e0&_nc_cat=110"
              alt="Samir Cornejo"
              width={128}
              height={128}
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-zinc-900 dark:text-zinc-50">
            Samir Cornejo
          </h1>
          <p className="text-2xl md:text-3xl text-zinc-600 dark:text-zinc-400">
            Desarrollador Web
          </p>
          <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Apasionado por crear experiencias web modernas y funcionales. Especializado en desarrollo full-stack con tecnologías actuales.
          </p>
          <div className="flex gap-4 pt-4">
            <a 
              href="#proyectos" 
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors"
            >
              Ver Proyectos
            </a>
            <a 
              href="#contacto" 
              className="px-8 py-3 bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-50 rounded-full font-medium transition-colors"
            >
              Contacto
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-zinc-900 dark:text-zinc-50">
          Mis Proyectos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-zinc-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">{project.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-zinc-900 dark:text-zinc-50">
                {project.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  >
                    Ver proyecto →
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-zinc-700 dark:text-zinc-300 hover:underline font-medium"
                  >
                    GitHub →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-zinc-900 dark:text-zinc-50">
          Tecnologías
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Python", "SQLite", "Next.js", "TypeScript", "Tailwind CSS", "Flutter", "Dart", "Firebase"].map((tech, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-zinc-800 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow"
            >
              <p className="font-semibold text-zinc-900 dark:text-zinc-50">{tech}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="max-w-6xl mx-auto px-6 py-16 pb-24">
        <h2 className="text-4xl font-bold text-center mb-8 text-zinc-900 dark:text-zinc-50">
          Contacto
        </h2>
        <div className="text-center">
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
            ¿Interesado en trabajar juntos? ¡Hablemos!
          </p>
          <div className="flex justify-center gap-6">
            <a 
              href="mailto:samircornejoatoche22@gmail.com" 
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors"
            >
              Email
            </a>
            <a 
              href="https://github.com/samircornejo" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-full font-medium transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/samir-alonso-cornejo-atoche-455438270/" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-medium transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8">
        <p className="text-center text-zinc-600 dark:text-zinc-400">
          © 2025 Samir Cornejo. Todos los derechos reservados.
        </p>
      </footer>
    </div>
    
  );
}
