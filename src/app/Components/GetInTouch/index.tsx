const GetInTouch = () => {
    return (
      <section className="bg-orange-500 text-white text-center py-16 px-6 relative">
        <div className="absolute inset-0 bg-orange-400 opacity-30"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold">Get in touch today.</h2>
          <p className="italic text-lg mt-2">
            Let's <span className="font-semibold">Incentivize Health, together.</span>
          </p>
          <button className="mt-6 bg-white text-orange-500 px-6 py-2 rounded-full hover:bg-gray-200 transition">
            Contact Us
          </button>
        </div>
      </section>
    );
  };
  
  export default GetInTouch;  