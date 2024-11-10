import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative w-full h-screen text-white bg-black bg-opacity-50 flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/bg-hero.jpg" // Update with the correct path to your background image
          alt="Grilled Food Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="opacity-60"
        />
        {/* Light Overlay */}
        <div className="absolute inset-0 bg-slate-800 bg-opacity-30"></div>
      </div>

      {/* Hero Content Wrapper */}
      <div className="relative flex flex-col md:flex-row items-center justify-center h-full max-w-6xl mx-auto px-6 md:px-8 lg:px-16 space-y-10 md:space-y-0">

        {/* Left Side: Text Content */}
        <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left space-y-6 px-4 sm:px-6 md:px-8 lg:pl-0 lg:ml-0 animate-fadeIn">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gradient bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 drop-shadow-lg animate-slideIn">
            Enjoy Our <br /> Delicious Meal
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-300 max-w-md mx-auto md:mx-0 animate-fadeIn delay-150">
            Experience flavors crafted with passion and the finest ingredients. Join us for a memorable dining journey, where every bite delights.
          </p>
          <Link href="/book">
            <button className="px-6 py-3 font-semibold text-sm sm:text-base md:text-lg transition duration-300 bg-orange-500 hover:bg-orange-600 rounded-full animate-bounce">
              Book a Table
            </button>
          </Link>
        </div>

        {/* Right Side: Animated Circle Image */}
        <div className="flex justify-center items-center md:w-1/2 max-w-[250px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[500px] mx-auto md:mx-0 lg:mr-[-80px] xl:mr-[-120px] mt-10 md:mt-0">
          <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden animate-spin-slow">
            <Image
              src="/platter2.jpg" // Update with the correct path to your circular image
              alt="Decorative Circle"
              layout="fill"
              objectFit="cover"
              className="rounded-full" // Ensure the image is circular
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
