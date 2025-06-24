import Image from "next/image";

const services = [
  {
    title: "Free Shipping Worldwide",
    icon: "/Free_Shipping_Worldwide.svg",
  },
  {
    title: "24/7 Customer Service",
    icon: "/7_Customer_Service.svg",
  },
  {
    title: "100% Money Back Guarantee",
    icon: "100_Money_Back_Guarantee.svg",
  },
  {
    title: "Diamondrensu's Trust",
    icon: "/Lifetime_Time_Warranty.svg",
  },
  {
    title: "Unbeatable Market Price",
    icon: "/sale.svg",
  },
  {
    title: "Eco Friendly Element",
    icon: "/Eco_Friendly_Element.svg",
  },
];

export default function ServiceSection() {
  return (
    <section className="py-16 bg-white text-center">
      <p className="text-blue-600 text-lg font-semibold mb-2 italic">Diamondrensu Promise</p>
      <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-10">
        Our Commitment to Excellence
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <Image
              src={service.icon}
              alt={service.title}
              width={60}
              height={60}
              className="mb-4"
            />
            <p className="text-gray-800 font-medium">{service.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
