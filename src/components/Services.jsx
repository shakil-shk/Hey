const services = [
  {
    title: "Global Sourcing",
    description:
      "Import high-quality fabrics from China and Vietnam with our extensive supplier network and quality assurance.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3.055 11H5a2 2 0 012 2v1a2 2 
           0 002 2 2 2 0 012 2v2.945M8 
           3.935V5.5A2.5 2.5 0 0010.5 
           8h.5a2 2 0 012 2 2 2 0 104 
           0 2 2 0 012-2h1.064M15 
           20.488V18a2 2 0 012-2h3.064M21 
           12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    title: "Custom Orders",
    description:
      "Tailored fabric solutions as per your specific requirements and design needs.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 5H6a2 2 0 00-2 2v11a2 
           2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 
           2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
      />
    ),
  },
  {
    title: "Competitive Pricing",
    description:
      "Best value for your investment with competitive pricing and flexible payment terms.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8c-1.657 0-3 .895-3 
           2s1.343 2 3 2 3 .895 3 2-1.343 
           2-3 2m0-8c1.11 0 2.08.402 
           2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 
           0-2.08-.402-2.599-1M21 12a9 9 0 
           11-18 0 9 9 0 0118 0z"
      />
    ),
  },
];

const ServiceCard = ({ title, description, icon }) => (
  <div className="group bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
      <svg
        className="w-6 h-6 text-blue-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {icon}
      </svg>
    </div>
    <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
      {title}
    </h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
);

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <div className="max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold">
            Our Premium Services
          </h2>
          <p className="text-gray-200 mt-4">
            Comprehensive fabric sourcing solutions tailored to meet your
            specific requirements
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
