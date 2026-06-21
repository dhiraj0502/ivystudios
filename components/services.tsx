export default function Services() {
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

  return (
    <section
      className="py-32"
      style={{
        background: "#f7f3ec",
        color: "#111",
      }}
    >
      <div className="max-w-7xl mx-auto px-8">

        <p
          style={{
            color: "#c8a97e",
            letterSpacing: "4px",
          }}
        >
          OUR EXPERTISE
        </p>

        <h2
          style={{
            fontSize: "4rem",
            fontFamily: "serif",
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
              className="border p-10 hover:shadow-xl transition-all"
            >
              <h3
                style={{
                  fontSize: "2rem",
                  fontFamily: "serif",
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
  );
}