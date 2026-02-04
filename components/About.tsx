import { GiRazor } from "react-icons/gi";
import { FaRedhat } from "react-icons/fa";
import { HiBadgeCheck } from "react-icons/hi";
import { SlMustache } from "react-icons/sl";

export default function About() {
  const services = [
    {
      title: "Trims and Fades",
      description: "Our barbers are specialists in providing the cleanest fades.",
      icon: HiBadgeCheck,
    },
    {
      title: "Classic Haircut",
      description:
        "Step into Blackjack Barbershop. Our master barbers can give you the perfect classic haircut.",
      icon: FaRedhat,
    },
    {
      title: "Straight Razor Shave",
      description:
        "A fresh clean shave to leave you feeling and looking absolutely amazing.",
      icon: GiRazor,
    },
    {
      title: "Aesthetic Styling",
      description:
        "Pompadour or slickback — our barbers are masters at the art of styling.",
      icon: SlMustache,
    },
  ];

  return (
    <section id="about" className="py-40 px-6 bg-black text-white">
      {/* Small title */}
      <p className="text-center text-sm tracking-widest text-neutral-400 mb-4 uppercase">
        About Us
      </p>

      {/* Main title */}
      <h2 className="text-center text-4xl md:text-5xl font-serif uppercase mb-24">
        The Best Service & Haircuts in Town.
      </h2>

      {/* Services */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div
              key={service.title}
              className="bg-[#1b1b1b] p-10 flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="w-24 h-24 mb-8 flex items-center justify-center rounded-full bg-[#fdf7eb]">
                <Icon size={48} className="text-black" />
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
          );
        })}
      </div>
    </section>
  );
}