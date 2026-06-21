export default function Stats() {
  return (
    <section
      className="py-24"
      style={{
        background: "#0a0a0a",
        color: "#f7f3ec",
      }}
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid md:grid-cols-4 gap-10 text-center">

          <div>
            <h3
              style={{
                fontSize: "4rem",
                color: "#c8a97e",
              }}
            >
              15+
            </h3>

            <p>Years Experience</p>
          </div>

          <div>
            <h3
              style={{
                fontSize: "4rem",
                color: "#c8a97e",
              }}
            >
              12K+
            </h3>

            <p>Luxury Clients</p>
          </div>

          <div>
            <h3
              style={{
                fontSize: "4rem",
                color: "#c8a97e",
              }}
            >
              4.9
            </h3>

            <p>Rating</p>
          </div>

          <div>
            <h3
              style={{
                fontSize: "4rem",
                color: "#c8a97e",
              }}
            >
              50+
            </h3>

            <p>Awards</p>
          </div>

        </div>
      </div>
    </section>
  );
}