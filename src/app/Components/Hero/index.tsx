import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative bg-white px-6 md:px-20 py-16 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Borde decorativo superior izquierdo con curva en la parte superior derecha */}
      <div className="absolute top-6 left-6 w-3/4 md:w-2/3 h-1/2 border-t-2 border-l-2 border-orange-400 rounded-tl-lg rounded-tr-[80px]"></div>

      {/* Contenido de la izquierda */}
      <div className="md:w-1/2 relative flex flex-col z-10 space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 p-8 sm:p-0">
          Who We Are
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed p-8 sm:p-0">
          At Incentivize Health, we're not just industry-leading experts with a
          great platform. We're a vibrant team of innovators, dreamers, and
          doers, united by a singular passion: transforming healthcare through
          personalized engagement.
        </p>
        <Link
          href="/contactus"
          className="mt-4 px-6 py-3 ml-8 sm:ml-0 bg-orange-500 w-1/2 sm:w-1/4 text-center hover:bg-orange-600 text-white font-medium rounded-lg shadow-md transition-all duration-300 "
        >
          Contact Us
        </Link>
      </div>

      {/* Imagen en la derecha */}
      <div className="md:w-1/2 flex justify-center">
        <div className="relative group">
          {/* Efecto decorativo detrás de la imagen */}
          <div className="absolute -top-4 -right-4 w-full h-full border-2 border-orange-400 rounded-lg opacity-50 group-hover:opacity-80 transition-all duration-300 z-0"></div>
          <div className="h-full w-full overflow-hidden rounded-lg">
            <Image
              src="/incentivize1.webp"
              alt="Team working together"
              width={500}
              height={300}
              className="rounded-lg overflow-hidden shadow-xl object-cover transform group-hover:scale-105 transition-all duration-300 z-30"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
