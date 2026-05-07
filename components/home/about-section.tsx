import Image from 'next/image';

export function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              About Growthfolio
            </h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Growthfolio is a premier outdoor advertising agency dedicated to transforming brands through innovative media solutions. With years of expertise in digital billboards, hoardings, video production, and integrated marketing campaigns, we've helped businesses across Kerala amplify their message.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our team combines creative excellence with strategic thinking to deliver campaigns that not only capture attention but drive real business results. We believe in the power of out-of-home advertising to create lasting impressions.
            </p>
          </div>

          {/* Image */}
          <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/images/about-billboard.jpg"
              alt="About Growthfolio - Outdoor Advertising"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
