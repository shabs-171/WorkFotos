// app/pricing/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function PricingPage() {
  return (
    <>
      {/* -------------------------------------------------
          HERO SECTION – Fixed 600px height
      ------------------------------------------------- */}
      <section className="relative overflow-hidden bg-white">
        {/* Background Image – Full Width, Fixed Height */}
        <div className="relative h-[600px]">
          <Image
            src="/pricing1.png"
            alt="Pricing hero background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />

          {/* Left decorative box */}
          <div className="absolute bottom-0 left-0 w-[180px] md:w-[250px] lg:w-[320px]">
            <Image
              src="/left1.png"
              alt=""
              width={320}
              height={180}
              className="w-full h-auto"
            />
          </div>

          {/* Right decorative box */}
          <div className="absolute bottom-0 right-0 w-[180px] md:w-[250px] lg:w-[320px]">
            <Image
              src="/right1.png"
              alt=""
              width={320}
              height={180}
              className="w-full h-auto"
            />
          </div>

          {/* Hero Text – Centered, Responsive */}
          <div className="container-87 absolute inset-0 flex flex-col items-center justify-center text-center text-white pt-8 md:pt-12 lg:pt-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Smart Plans. WorkFotos Results.
            </h1>
            <p className="max-w-2xl text-sm md:text-base lg:text-lg leading-relaxed">
              Join the modern platform designed to grow your business, boost your online presence, and
              showcase your work visually to your clients and community.
            </p>
          </div>
        </div>

        {/* -------------------------------------------------
            PRICING CARD – Overlaps hero with clamp()
        ------------------------------------------------- */}
        <div
          className="relative z-10 -mt-[clamp(8rem,16vw,10rem)] flex justify-center "
        >
          <div className="container-87">
            <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl md:p-8 relative">
  {/* RECOMMENDED badge – now as top overlay */}
  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-sm font-bold h-[29px] flex items-center justify-center px-4 rounded-t-lg w-full">
    RECOMMENDED
  </div>

  <h3 className="mb-2 text-center text-2xl font-bold text-gray-900">
    WorkFotos Pro
  </h3>
  <p className="mb-4 text-center text-sm text-gray-600">
    Perfect for solo professionals and growing teams.
  </p>

  {/* Price */}
  <div className="mb-4 text-center">
    <span className="text-4xl font-bold text-blue-600">$29</span>
    <span className="text-lg font-bold text-blue-600">/mo</span>
  </div>

  <p className="mb-6 text-center text-xs text-gray-500">
    15-Day Free Trial. Cancel Anytime.
  </p>

  {/* CTA Button */}
  <div className="mb-8 flex justify-center">
    <Link href="/signup">
      <Image
        src="/Button1.png"
        alt="Get Start Now"
        width={260}
        height={56}
        className="h-auto w-auto transition-transform hover:scale-105"
      />
    </Link>
  </div>

  {/* Features List */}
 {/* Features List */}
<p className="mb-4 text-left font-bold text-black text-[20px] leading-[20px]">
  Top Features Included:
</p>

<ul className="space-y-2 text-black">
  {[
    "Unlimited Photo Storage",
    "Owner plus 2 FREE seats included (two team members)",
    "Project Album Tools",
    "Estimates & Invoices",
    "Before & After Templates",
    "Map-Linked Photos",
    "Public Portfolio Page",
    "Private Notes & Markups",
    "Mobile + Desktop Access",
  ].map((feat, idx) => (
    <li key={idx} className="flex items-center gap-3">
      <Image
        src="/fi4.png"
        alt="check"
        width={18}
        height={18}
        className="flex-shrink-0"
      />
      <span className="font-normal text-[14px] leading-[14px]">
        {feat}
      </span>
    </li>
  ))}
</ul>


</div>

          </div>
        </div>

        {/* -------------------------------------------------
            SPACER – After card
        ------------------------------------------------- */}
        <div className="h-16 md:h-20 lg:h-20 bg-white"></div>
      </section>
    </>
  );
}