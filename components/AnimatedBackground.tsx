"use client";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-black">
      <style jsx global>{`
        @keyframes noise {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-5%, -5%); }
          20% { transform: translate(-10%, 5%); }
          30% { transform: translate(5%, -10%); }
          40% { transform: translate(-5%, 15%); }
          50% { transform: translate(-10%, 5%); }
          60% { transform: translate(15%, 0); }
          70% { transform: translate(0, 10%); }
          80% { transform: translate(-15%, 0); }
          90% { transform: translate(10%, 5%); }
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        .animate-noise {
          animation: noise 9s infinite;
        }

        .animate-blob {
          animation: float 10s infinite;
        }
      `}</style>

      {/* Orbes de luz de fondo */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white mix-blend-overlay rounded-full filter blur-[128px] opacity-10 animate-blob" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-zinc-500 mix-blend-overlay rounded-full filter blur-[128px] opacity-10 animate-blob" style={{ animationDelay: '2s' }} />

      {/* Capa de Estática Animada */}
      <div className="absolute inset-[-200%] w-[400%] h-[400%] opacity-[0.08] animate-noise pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }}>
      </div>
    </div>
  );
}