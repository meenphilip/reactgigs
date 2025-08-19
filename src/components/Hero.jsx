import heroImage from "../assets/images/hero.jpg";

const Hero = ({
  title = "Become a React Dev",
  subtitle = "Find the React job that fits your skills and needs",
}) => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 mb-4"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Indigo overlay with more transparency */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content sits above overlay */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="my-4 text-xl text-white">{subtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
