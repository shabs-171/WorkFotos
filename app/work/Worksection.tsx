import Image from "next/image";

export default function WorkSection() {
  const cards = [
    { img: "/fi1.png", text: "Jobsite Photo Organization" },
    { img: "/fi2.png", text: "Team & Task Tracking" },
    { img: "/fi3.png", text: "Estimate & Invoice" },
    { img: "/fi4.png", text: "Custom Branding" },
    { img: "/fi5.png", text: "Portfolio & Share Links" },
  ];

  return (
    <div
      className="w-full bg-cover bg-center py-20 px-4"
      style={{ backgroundImage: "url('/work-bg.png')" }}
    >
      <div className="container-87 max-w-6xl mx-auto text-center text-white">
        
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-4">
          Everything You Need, One Place
        </h1>

        {/* Description */}
        <p className="text-lg mb-10 opacity-90">
          Manage your photos, documents, reports, and client-facing portfolio
          from a single dashboard.
        </p>

        {/* Main Center Image */}
        <div className="flex justify-center mb-10">
          <Image
            src="/work-img.png"
            alt="WorkFotos Dashboard"
            width={911}
            height={415}
            className="
              rounded-xl shadow-xl 
              md:h-[322px] md:w-[706px]
              w-[342px] h-[198px] rounded-[14px] border-[6px]
            "
          />
        </div>

        {/* Cards Section */}
        <div className="flex flex-col lg:gap-8 mt-12 md:gap-4">

          {/* First row (mobile: 1 card each row) */}
          <div className="flex flex-col md:flex-row justify-center lg:gap-8 md:gap-4 ">
            {cards.slice(0, 3).map((card, i) => (
              <div
                key={i}
                className="
                  
                  
                  bg-white/10 backdrop-blur-md border border-white/20 rounded-xl
                  flex items-center sm:px-2 lg:px-3 gap-2 md:px-1
                  hover:border-white hover:shadow-[0_0_20px_#ffffff]
                  transition-all duration-300
                  mb-3 md:mb-0
                  py-3
                  
                "
              >
                <Image
                  src={card.img}
                  alt={card.text}
                  width={44}
                  height={44}
                  className="md:h-[25px] md:w-[25px] h-[25px] w-[25px] "  
                />
                <p className="text-white sm:text-[18px] md:text-[14px] lg:text-[24px] text-nowrap">
                  {card.text}
                </p>
              </div>
            ))}
          </div>

          {/* Second row (mobile: 1 card each row) */}
          <div className="flex flex-col md:flex-row justify-center lg:gap-8 md:gap-4 ">
            {cards.slice(3, 5).map((card, i) => (
              <div
                key={i}
                className="
                  
                  
                  
                  bg-white/10 backdrop-blur-md border border-white/20 rounded-xl
                  flex items-center sm: px-2.5 gap-2
                  hover:border-white hover:shadow-[0_0_20px_#ffffff]
                  transition-all duration-300
                  mb-3 md:mb-0
                  py-[9px]
                "
              >
                <Image
                  src={card.img}
                  alt={card.text}
                  width={44}
                  height={44}
                  className="md:h-[25px] md:w-[25px] h-[25px] w-[25px]"
                />
                <p className="text-white sm:text-[18px] md:text-[14px] lg:text-[24px] text-nowrap  ">
                  {card.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
