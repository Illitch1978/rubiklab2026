import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";

const AboutPhotos = () => {
  return (
    <section className="px-8 md:px-16 pb-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-4">
          <img
            src={team1}
            alt="Rubiklab team members collaborating"
            className="w-full h-80 object-cover rounded-lg"
          />
          <img
            src={team2}
            alt="Rubiklab team meeting"
            className="w-full h-80 object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutPhotos;
