import Image, { StaticImageData } from "next/image";

type TestimonialProps = {
  saying: string;
  author: string;
  role: string;
  authorImg: StaticImageData;
};

const Testimonial: React.FC<TestimonialProps> = ({
  saying,
  author,
  role,
  authorImg,
}) => {
  return (
    <div
      className="
        lg:py-7 md:py-8 scroll-snap-center relative 
        lg:pl-[36px] lg:pr-[52px] md:pr-[38px] pr-[16px] pl-[16px] py-5 md:pl-[38px] 
        overflow-hidden bg-[url('/slider1.png')] text-black 
        max-w-[800px] lg:min-w-[800px] md:min-w-[700px] min-w-[300px] 
        lg:w-[76%] w-[100%] rounded-2xl flex flex-col gap-12 items-start justify-center
      "
    >
      {/* Decorative Arrow / Image */}
      <Image
        src="/slider2.png"
        alt="decorative image"
        width={166}
        height={184}
        className="absolute lg:w-[166px] lg:h-[184px] w-[100px] h-[120px] right-0 lg:bottom-3 bottom-1"
      />

      {/* Quote & Saying */}
      <div className="flex flex-col lg:gap-4 gap-3">
        <Image
          src="/slider3.png"
          alt="quote image"
          width={54}
          height={54}
          className="lg:w-[54px] lg:h-[54px] md:w-[44px] md:h-[44px] w-[34px] h-[34px]"
        />
        <h3 className="text-left md:text-center lg:text-xl md:text-[16px] text-sm w-fit">
          {saying}
        </h3>
      </div>

      {/* Author Info */}
      <div className="flex justify-center items-center lg:gap-4 gap-3.5">
        <Image
          src={authorImg}
          width={58}
          height={58}
          alt="author image"
          className="lg:w-[58px] lg:h-[58px] md:h-[50px] md:w-[50px] w-[42px] h-[42px] rounded-full"
        />
        <div className="flex flex-col items-start justify-center gap-1">
          <h1 className="lg:text-xl text-black font-bold text-[16px]">{author}</h1>
          <p className="lg:text-lg font-medium text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
