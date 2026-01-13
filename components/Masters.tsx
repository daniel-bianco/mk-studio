export default function Masters() {
  return (
    <section
      id="master"
      className="bg-black text-white py-40 px-6 md:px-12 lg:px-24"
    >
      <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
        
        {/* LEFT — IMAGE */}
        <div className="w-[600px] h-[720px] rounded-sm overflow-hidden">
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
            What we do
          </p>

          {/* Title */}
          <h2 className="font-serif uppercase text-4xl md:text-5xl leading-tight mb-10">
            Crafting Timeless <br />
            Styles and Elevating <br />
            Your Look
          </h2>

          {/* Description */}
          <p className="text-sm text-neutral-400 leading-relaxed max-w-md mb-12">
            Our barber is an artisan when it comes to hair. We use only the
            finest products available in the industry, while staying up to
            date with the latest trends to ensure you are always happy with
            the service you receive at our barbershop.
          </p>

          {/* Button */}
          <a
            href="#about"
            className="inline-flex items-center gap-3 border border-[#c8a46e] px-8 py-4 uppercase tracking-widest text-sm text-[#c8a46e] hover:bg-[#c8a46e] hover:text-black transition"
          >
            About Us
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}