export default function About() {
  const services = [
    {
      title: "Trims and Fades",
      description: "Our Barbers are specialists in providing the cleanest fades",
      icon: "https://cdn-icons-png.flaticon.com/512/3448/3448508.png"
    },
    {
      title: "Classic Haircut",
      description: "Step into blackjack barbershops, Our master barbers can give you the most beautiful classic haircut.",
      icon: "https://cdn-icons-png.flaticon.com/512/2920/2920320.png"
    },
    {
      title: "Straight Razor Shave",
      description: "A fresh clean shave to leave you feeling and looking absolutely amazing",
      icon: "https://cdn-icons-png.flaticon.com/512/1035/1035683.png"
    },
    {
      title: "Aesthetic Styling",
      description: "Pompadour or slickback our barbers are masters at the art of styling.",
      icon: "https://cdn-icons-png.flaticon.com/512/1017/1017893.png"
    }
  ];

  return (
    <section id="about" className="py-40 px-6 bg-black text-white">
      {/* Small title */}
      <p className="text-center text-sm tracking-widest text-neutral-400 mb-4 uppercase">
        About Us
      </p>

      {/* Main title */}
      <h2 className="text-center text-4xl md:text-5xl font-serif uppercase mb-24">
        The Best Service & Haircuts in Town
      </h2>

      {/* Services */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-[#1b1b1b] p-10 flex flex-col items-center text-center"
          >
            {/* Icon */}
            <div className="w-24 h-24 mb-8 flex items-center justify-center rounded-full bg-[#fdf7eb]">
              <img
                src={service.icon}
                alt={service.title}
                className="w-12 h-12"
              />
            </div>

            {/* Title */}
            <h3 className="text-sm font-semibold tracking-widest uppercase mb-4 text-[#c8a46e]">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-neutral-400 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}