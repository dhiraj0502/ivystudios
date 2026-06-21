
"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const services = [
    {
      title: "Luxury Hair Design",
      description:
        "Precision cuts tailored to your lifestyle and personal style.",
    },
    {
      title: "Premium Colour",
      description:
        "Dimensional colour designed to elevate your look.",
    },
    {
      title: "Bridal Styling",
      description:
        "Elegant luxury styling for unforgettable occasions.",
    },
  ];

  const team = [
    {
      name: "Sophia Laurent",
      role: "Creative Director",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800",
    },
    {
      name: "Olivia James",
      role: "Colour Specialist",
      image:
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800",
    },
    {
      name: "Amelia Rose",
      role: "Senior Stylist",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800",
    },
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1200",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1200",
    "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=1200",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200",
    "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=1200",
  ];

  const reviews = [
    {
      name: "Emma W.",
      text: "The most luxurious salon experience I have ever had.",
    },
    {
      name: "Sophia M.",
      text: "Feels more like a luxury fashion house than a salon.",
    },
    {
      name: "Charlotte K.",
      text: "Exceptional service from start to finish.",
    },
  ];

  return (
    <main
      style={{
        background: "#0a0a0a",
        color: "#f7f3ec",
      }}
    >
      {/* NAVBAR */}

      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-5 flex justify-between items-center">

          <h2
            className="playfair"
            style={{
              fontSize: "1.5rem",
              letterSpacing: "2px",
            }}
          >
            IVY STUDIOS
          </h2>

          <div className="hidden md:flex gap-8">
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
            <a href="#team">Team</a>
            <a href="#contact">Contact</a>
          </div>

          <button
            className="md:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-black border-t border-white/10">
            <div className="flex flex-col p-6 gap-4">
              <a href="#services">Services</a>
              <a href="#gallery">Gallery</a>
              <a href="#team">Team</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}

      <section className="relative min-h-screen">

        <img
          src="/images/hero.jpg"
          alt="Luxury Salon"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 min-h-screen flex items-center px-6 md:px-8">

          <div className="max-w-6xl mx-auto">

            <p
              className="uppercase tracking-[0.4em]"
              style={{
                color: "#c8a97e",
              }}
            >
              Luxury Salon Experience
            </p>

            <h1
              className="playfair mt-6"
              style={{
                fontSize: "clamp(3rem, 10vw, 8rem)",
                lineHeight: "0.95",
              }}
            >
              Beauty Crafted
              <br />
              Like Couture.
            </h1>

            <p
              className="mt-8 max-w-xl"
              style={{
                fontSize: "clamp(1rem,2vw,1.25rem)",
                opacity: 0.8,
              }}
            >
              A premium destination for hair artistry,
              luxury beauty and elevated experiences.
            </p>

            <button
              className="mt-10 px-8 py-4 transition-all duration-300 hover:scale-105"
              style={{
                background: "#c8a97e",
                color: "#000",
              }}
            >
              Book Appointment
            </button>

          </div>
        </div>
      </section>

      {/* STATS */}

      <section className="py-20 md:py-24">

        <div className="max-w-7xl mx-auto px-6 md:px-8">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

            {[
              ["15+", "Years Experience"],
              ["12K+", "Luxury Clients"],
              ["4.9", "Average Rating"],
              ["50+", "Industry Awards"],
            ].map((item) => (
              <div key={item[1]}>
                <h3
                  style={{
                    fontSize: "clamp(2.5rem,8vw,4rem)",
                    color: "#c8a97e",
                  }}
                >
                  {item[0]}
                </h3>

                <p>{item[1]}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SERVICES */}

      <section
        id="services"
        className="py-24 md:py-32"
        style={{
          background: "#f7f3ec",
          color: "#111",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">

          <p
            style={{
              color: "#c8a97e",
              letterSpacing: "4px",
            }}
          >
            OUR EXPERTISE
          </p>

          <h2
            className="playfair"
            style={{
              fontSize: "clamp(2.5rem,6vw,4rem)",
              marginTop: "20px",
              marginBottom: "60px",
            }}
          >
            Signature Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {services.map((service) => (
              <div
                key={service.title}
                className="border border-black/10 p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <h3
                  className="playfair"
                  style={{
                    fontSize: "2rem",
                  }}
                >
                  {service.title}
                </h3>

                <p className="mt-6">
                  {service.description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* GALLERY */}

      <section
        id="gallery"
        className="py-24 md:py-32"
        style={{
          background: "#f7f3ec",
          color: "#111",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">

          <h2
            className="playfair"
            style={{
              fontSize: "clamp(2.5rem,6vw,4rem)",
              marginBottom: "60px",
            }}
          >
            Transformations
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {galleryImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt=""
                className="w-full h-[250px] md:h-[450px] object-cover transition duration-700 hover:scale-105"
              />
            ))}

          </div>

        </div>
      </section>

      {/* REVIEWS */}

      <section className="py-24 md:py-32">

        <div className="max-w-7xl mx-auto px-6 md:px-8">

          <h2
            className="playfair"
            style={{
              fontSize: "clamp(2.5rem,6vw,4rem)",
            }}
          >
            Client Experiences
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            {reviews.map((review) => (
              <div
                key={review.name}
                className="border border-white/10 p-8"
              >
                <p>"{review.text}"</p>

                <p
                  className="mt-6"
                  style={{
                    color: "#c8a97e",
                  }}
                >
                  {review.name}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* TEAM */}

      <section id="team" className="py-24 md:py-32">

        <div className="max-w-7xl mx-auto px-6 md:px-8">

          <h2
            className="playfair"
            style={{
              fontSize: "clamp(2.5rem,6vw,4rem)",
              marginBottom: "60px",
            }}
          >
            The Atelier
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {team.map((member) => (
              <div key={member.name}>

                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[300px] md:h-[450px] object-cover"
                />

                <h3
                  className="mt-6 playfair"
                  style={{
                    fontSize: "2rem",
                  }}
                >
                  {member.name}
                </h3>

                <p
                  style={{
                    color: "#c8a97e",
                  }}
                >
                  {member.role}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}

      <section
        id="contact"
        className="py-24 md:py-32 text-center"
      >
        <div className="max-w-4xl mx-auto px-6 md:px-8">

          <h2
            className="playfair"
            style={{
              fontSize: "clamp(2.5rem,6vw,4rem)",
            }}
          >
            Experience Beauty Without Compromise
          </h2>

          <p className="mt-8 opacity-80">
            Reserve your luxury salon experience today.
          </p>

          <button
            className="mt-10 px-10 py-5 transition-all duration-300 hover:scale-105"
            style={{
              background: "#c8a97e",
              color: "#000",
            }}
          >
            Book Your Appointment
          </button>

        </div>
      </section>

      {/* FOOTER */}

      <footer
        className="py-12 text-center"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <h3
          className="playfair"
          style={{
            color: "#c8a97e",
            letterSpacing: "4px",
          }}
        >
          IVY STUDIOS
        </h3>

        <p className="mt-4 opacity-70">
          Dublins Luxury Beauty Destination
        </p>
      </footer>

    </main>
  );
}
