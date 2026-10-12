import creativeImage1 from "@/assets/images/regenerated_image_1788811370960.png";
import creativeImage2 from "@/assets/images/regenerated_image_1788811376125.png";

export default function CreativeSection() {
  const CARDS = [
    {
      id: 1,
      thumbnail: creativeImage1,
      alt: "Creative showcase 1"
    },
    {
      id: 2,
      thumbnail: creativeImage2,
      alt: "Creative showcase 2"
    },
    {
      id: 3,
      thumbnail: "https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/4/thumbnail-3.png",
      alt: "Creative showcase 3"
    }
  ];

  return (
    <div id="creative" className="scroll-mt-24 font-sans">
      <section className="relative bg-gray-50 py-16 sm:py-20 lg:py-28 overflow-hidden">
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Top: Header Text Content */}
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl leading-tight">
              Community of designers{" "}
              <span className="inline">
                <img 
                  className="inline w-auto h-8 sm:h-10 lg:h-12 mx-1 align-middle" 
                  src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/4/shape-1.svg" 
                  alt="shape-1" 
                  referrerPolicy="no-referrer"
                />
              </span>{" "}
              made by designers{" "}
              <span className="inline">
                <img 
                  className="inline w-auto h-8 sm:h-10 lg:h-11 mx-1 align-middle" 
                  src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/4/shape-2.svg" 
                  alt="shape-2" 
                  referrerPolicy="no-referrer"
                />
              </span>
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg font-normal leading-7 text-gray-600 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.
            </p>
          </div>

          {/* Below: Gallery Images Showcase */}
          <div className="mt-12 sm:mt-16 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {CARDS.map((card, idx) => (
                <div key={idx} className="relative group">
                  <div className="relative overflow-hidden transition-all duration-300 transform bg-white border border-gray-100 shadow-sm group-hover:shadow-xl group-hover:-translate-y-1.5 rounded-2xl">
                    <div className="flex shrink-0 aspect-[4/3] overflow-hidden">
                      <img 
                        className="object-cover w-full h-full transition-all duration-300 transform group-hover:scale-105" 
                        src={card.thumbnail} 
                        alt={card.alt} 
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
