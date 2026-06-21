export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    "https://images.unsplash.com/photo-1521119989659-a83eee488004",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df",
  ];

  return (
    <section
      className="py-32"
      style={{
        background: "#f7f3ec",
      }}
    >
      <div className="max-w-7xl mx-auto px-8">

        <h2
          style={{
            fontSize: "4rem",
            fontFamily: "serif",
            marginBottom: "60px",
          }}
        >
          Transformations
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt=""
              className="w-full h-[450px] object-cover"
            />
          ))}

        </div>

      </div>
    </section>
  );
}