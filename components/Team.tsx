export default function Team() {
  const members = [
    {
      name: "Sophia Laurent",
      role: "Creative Director",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
      name: "Olivia James",
      role: "Colour Specialist",
      image:
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df",
    },
    {
      name: "Amelia Rose",
      role: "Senior Stylist",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    },
  ];

  return (
    <section className="py-32">

      <div className="max-w-7xl mx-auto px-8">

        <h2
          style={{
            fontSize: "4rem",
            fontFamily: "serif",
            marginBottom: "60px",
          }}
        >
          The Atelier
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {members.map((member) => (
            <div key={member.name}>

              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[450px] object-cover"
              />

              <h3 className="text-3xl mt-6">
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
  );
}