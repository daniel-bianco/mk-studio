export default function AboutBarbershop() {
  return (
    <section
      id="master"
      className="bg-black text-white py-40 px-6 md:px-12 lg:px-24"
    >
      <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
        
        {/* LEFT — IMAGE */}
        <div className="w-full h-[720px] rounded-sm overflow-hidden">
          <img
            src="/owner_pic.png"
            alt="Master barber"
            className="w-full h-full object-cover"
            />
        </div>

        {/* RIGHT — CONTENT */}
        <div>
          {/* Small label */}
          <p className="text-sm tracking-widest uppercase text-neutral-400 mb-6">
            MK Studio
          </p>

          {/* Title */}
          <h2 className="font-serif uppercase text-4xl md:text-5xl leading-tight mb-10">
            Our Story<br />
          </h2>

          {/* Description */}
          <p className="text-lg text-neutral-400 leading-relaxed max-w-md mb-12">
            Our barbershop opened its doors in Offenbach quite recently, but from the very beginning we set ourselves a clear goal — to deliver professional, high-quality barbering without compromise.<br /> <br />            
            We continuously refine our techniques, stay up to date with modern trends, and work only with high-quality products. But most importantly, we believe that a great barbershop is built on people — professionals who love what they do and clients who value quality.<br />
            <br />This is just the beginning of our story. We are growing, improving, and setting new standards every day — and we are only moving forward.
          </p>
        </div>
      </div>
    </section>
  );
}