import Image from 'next/image';

const serviceDetails = [
  {
    id: 1,
    title: 'Digital Billboards',
    description:
      'Growthfolio Advertising provides a dynamic digital billboard platform to showcase your brand with vibrant visuals and seamless real-time updates. Elevate your marketing impact through our advanced LED display solutions and innovative outdoor advertising technology.Our digital ads are engaging, eye-catching, and interactive—designed to capture attention and connect with audiences instantly. With strategically placed digital outdoor displays, we help you reach and engage your target market effectively in real time. We have established a strong presence across major locations in Kerala, including Kozhikode, Malappuram, Manjeri, and Knowledge City.',
    image: '/images/service-digital.jpg',
  },
  {
    id: 2,
    title: 'Hoardings',
    description:
      'Growthfolio Advertising offers a comprehensive range of hoardings to meet all your outdoor advertising needs. We ensure maximum brand visibility through strategically positioned locations across Kerala, customized to suit every product and campaign objective.Our static-lit boards are crafted to capture attention both day and night with vibrant illumination, making your brand stand out even in low-light environments. For businesses seeking a traditional and budget-friendly option, our non-lit boards provide a dependable and high-impact platform for effective outdoor advertising.',
    image: '/images/service-hoarding.jpg',
  },
  {
    id: 3,
    title: 'Video Production',
    description:
      'Professional video content creation for advertising campaigns. From concept to final delivery, our team produces engaging video content that tells your brand story. We handle everything from cinematography and editing to color grading and animation, ensuring your message resonates with your audience.',
    image: '/images/service-video.jpg',
  },
  {
    id: 4,
    title: 'Marketing Campaigns',
    description:
      'Integrated marketing solutions combining digital and traditional media. We create cohesive campaigns that amplify your message across multiple channels. Our strategic approach ensures maximum reach and engagement, with comprehensive planning and execution tailored to your brand objectives.',
    image: '/images/service-marketing.jpg',
  },
  {
    id: 5,
    title: 'Walking Ads',
    description:
      'Transform your brand presence with our innovative digital walking advertisement service. Our trained personnel wear high-tech branded LED displays and digital promotional gear, taking your message directly to high-traffic areas and target audiences. This cutting-edge digital marketing approach creates memorable brand interactions and generates organic word-of-mouth marketing while reaching pedestrians with dynamic, attention-grabbing content in real-time.',
    image: '/images/service-walking.jpg',
  },
];

export default function ServicesPage({ searchParams }: { searchParams: { service?: string } }) {
  const selectedServiceId = searchParams.service ? parseInt(searchParams.service) : null;
  const selectedService = selectedServiceId ? serviceDetails.find(s => s.id === selectedServiceId) : null;

  return (
    <>
      {/* Page Header */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">Our Services</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto text-balance">
            Comprehensive advertising solutions tailored to elevate your brand presence
          </p>
        </div>
      </section>

      {/* Services Details - Alternating Layout */}
      <section className="py-16 md:py-24 bg-background">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          {serviceDetails.map((service, index) => (
            <div
              key={service.id}
              className={`mb-20 md:mb-32 last:mb-0 p-8 rounded-lg transition-all duration-300 ${
                selectedServiceId === service.id
                  ? 'bg-accent/10 border-2 border-accent scale-105 origin-center'
                  : 'bg-transparent'
              }`}
            >
              {index % 2 === 0 ? (
                // Image on right, text on left
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                      {service.title}
                    </h2>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="relative w-full h-80 lg:h-[500px] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              ) : (
                // Image on left, text on right
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                  <div className="relative w-full h-80 lg:h-[500px] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg overflow-hidden shadow-lg order-2 lg:order-1">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="order-1 lg:order-2">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                      {service.title}
                    </h2>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-secondary/5 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
            Why Choose Growthfolio?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Strategic Expertise',
                description: 'Years of experience in outdoor advertising with a proven track record of successful campaigns.',
              },
              {
                title: 'Premium Locations',
                description: 'Access to prime advertising locations across Kerala with guaranteed high visibility.',
              },
              {
                title: 'Comprehensive Solutions',
                description: 'From planning to execution, we handle every aspect of your advertising campaign.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-foreground">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-balance">
            Contact us today to discuss how our services can help elevate your brand.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}
