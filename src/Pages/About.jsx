import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/* ---------- Fade on Scroll Hook ---------- */
const useInView = () => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true);
            },
            { threshold: 0.15 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return [ref, visible];
};


/* IMAGE DATA */
const images = [
    "https://i.ibb.co/CKGyZN5y/about-1-jsg.jpg",
    "https://i.ibb.co/5xWq1Ssz/about-2-jsg.jpg",
    "https://i.ibb.co/wZ5yTN40/about-3.jpg",
];

// Gallery image component with fade-in effect
const GalleryImage = ({ src }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* CARD */}
            <div
                onClick={() => setOpen(true)}
                className="relative overflow-hidden rounded-xl cursor-pointer group"
            >
                {/* FIXED SIZE IMAGE */}
                <img
                    src={src}
                    className="w-full aspect-[4/3] object-cover rounded-xl transform transition duration-500 group-hover:scale-110"
                />

                {/* Glow Overlay */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition duration-300 rounded-xl"></div>

                {/* Glow Border */}
                <div className="absolute inset-0 rounded-xl ring-1 ring-white/10 group-hover:ring-white/40 transition"></div>
            </div>

            {/* FULLSCREEN MODAL */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
                    onClick={() => setOpen(false)}
                >
                    <img
                        src={src}
                        className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
                    />
                </div>
            )}
        </>
    );
};
//  Countable stats card component
const useCountUp = (end, duration = 5000, startTrigger = false) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!startTrigger) return;

        let start = 0;
        const increment = end / (duration / 16); // ~60fps

        const counter = setInterval(() => {
            start += increment;

            if (start >= end) {
                start = end;
                clearInterval(counter);
            }

            setCount(Math.floor(start));
        }, 16);

        return () => clearInterval(counter);
    }, [end, duration, startTrigger]);

    return count;
};

//  Animated stats card component
const StatsCard = ({ value, label, trigger }) => {
    const count = useCountUp(value, 5000, trigger);

    return (
        <div className="bg-white/10 p-6 rounded-xl backdrop-blur-xl border border-white/10">
            <h3 className="text-3xl font-bold">
                {count.toLocaleString()}+
            </h3>
            <p className="text-gray-400">{label}</p>
        </div>
    );
};

/* ---------- Section Wrapper ---------- */
const Section = ({ children }) => {
    const [ref, visible] = useInView();

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 60 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-16 p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl"
        >
            {children}
        </motion.section>
    );
};

export default function About() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#050b18] via-[#0a1224] to-[#050b18] text-white px-6 py-20">

            {/* HERO */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-20"
            >
                <h1 className="text-5xl font-bold tracking-wide">
                    Luxury Real Estate & Supercars
                </h1>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                    Where architecture meets performance. We deliver elite living and automotive excellence worldwide.
                </p>
            </motion.div>

            {/* Section 1  */}
            <Section>
                <h2 className="text-2xl font-semibold mb-6">
                    1. Mansion & Car Gallery
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {images.map((img, i) => (
                        <GalleryImage key={i} src={img} />
                    ))}
                </div>
            </Section>
            {/* Section 2  */}


            <Section>
                <h2 className="text-2xl font-semibold mb-6">2. Our Global Impact</h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <StatsCard value={1400} label="Luxury Properties Sold" trigger={true} />
                    <StatsCard value={900} label="Supercars Delivered" trigger={true} />
                    <StatsCard value={50} label="Countries Served" trigger={true} />
                    <StatsCard value={99} label="Client Satisfaction" trigger={true} />
                </div>
            </Section>

            {/* Section 3 */}

            <Section>
                <div className="grid md:grid-cols-2 gap-10 items-center">

                    {/*  Image Side */}
                    <div className="w-full h-[300px] md:h-[500px] overflow-hidden rounded-xl">
                        <img
                            src="
                            https://i.ibb.co/JW1KgPKF/luxury.jpg
                            " // 
                            alt="Luxury Property"
                            className="w-full h-full object-cover hover:scale-105 transition duration-500"
                        />
                    </div>

                    {/*  Content Side */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">
                            3. Luxury Living Redefined
                        </h2>

                        <p className="text-gray-300 leading-7 mb-4">
                            We curate ultra-premium mansions, villas, and exclusive residences from the world’s most prestigious locations. Each property in our portfolio is handpicked based on architectural excellence, elite positioning, and unmatched lifestyle value.
                        </p>

                        <p className="text-gray-400 leading-7 mb-4">
                            From modern glass-front villas overlooking the ocean to timeless European estates and private island retreats, our collection represents the pinnacle of global luxury real estate.
                        </p>

                        {/* Highlights */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-300 mt-6">

                            <div className="bg-white/5 p-3 rounded-lg">
                                ✔ Curated ultra-luxury properties
                            </div>

                            <div className="bg-white/5 p-3 rounded-lg">
                                ✔ Verified listings
                            </div>

                            <div className="bg-white/5 p-3 rounded-lg">
                                ✔ Premium locations
                            </div>

                            <div className="bg-white/5 p-3 rounded-lg">
                                ✔ Seamless experience
                            </div>

                        </div>
                    </div>

                </div>
            </Section>

            {/* section 4 */}

            <Section>
                <div className="grid md:grid-cols-2 gap-10 items-center">

                    {/*  Content (Left) */}
                    <div className="order-2 md:order-1">
                        <h2 className="text-2xl font-semibold mb-4">
                            4. Elite Automotive Collection
                        </h2>

                        <p className="text-gray-300 leading-7 mb-4">
                            Discover a handpicked collection of the world’s most prestigious automobiles, where cutting-edge engineering meets timeless luxury. From high-performance hypercars to executive-class sedans, each vehicle in our portfolio is selected to deliver unmatched power, elegance, and driving experience.
                        </p>

                        <p className="text-gray-400 leading-7 mb-4">
                            Our automotive lineup features globally renowned brands, limited-edition models, and technologically advanced machines designed for both performance enthusiasts and luxury connoisseurs.
                        </p>

                        {/* Highlights */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-300 mt-6">

                            <div className="bg-white/5 p-3 rounded-lg">
                                ✔ Premium hypercars & luxury vehicles
                            </div>

                            <div className="bg-white/5 p-3 rounded-lg">
                                ✔ Verified listings
                            </div>

                            <div className="bg-white/5 p-3 rounded-lg">
                                ✔ Advanced performance technology
                            </div>

                            <div className="bg-white/5 p-3 rounded-lg">
                                ✔ Seamless purchasing experience
                            </div>

                        </div>
                    </div>

                    {/*  Image (Right) */}
                    <div className="order-1 md:order-2 w-full h-[300px] md:h-[500px] overflow-hidden rounded-xl">
                        <img
                            src="https://i.ibb.co/bRMv3ybS/about-6.jpg"
                            alt="Luxury Car"
                            className="w-full h-full object-cover hover:scale-105 transition duration-500"
                        />
                    </div>

                </div>
            </Section>




            {/* SECTION 5 */}
            <Section>
                <div className="grid md:grid-cols-2 gap-10 items-center">

                    {/*  Image (Left) */}
                    <div className="order-1 w-full h-[300px] md:h-[500px] overflow-hidden rounded-xl">
                        <img
                            src="https://i.ibb.co/qY7j2Knv/about-4.jpg"
                            alt="Architectural Excellence"
                            className="w-full h-full object-cover hover:scale-105 transition duration-500"
                        />
                    </div>

                    {/* 📄 Content (Right) */}
                    <div className="order-2">
                        <h2 className="text-2xl font-semibold mb-4">
                            5. Architectural Excellence
                        </h2>

                        <p className="text-gray-300 leading-7 mb-4">
                            We collaborate with world-class architects and visionary designers to curate properties that stand as icons of modern innovation and timeless elegance. Every residence is crafted with precision, blending aesthetic brilliance with functional perfection.
                        </p>

                        <p className="text-gray-400 leading-7 mb-4">
                            From minimalist glass structures to grand classical estates, our portfolio reflects a diverse range of architectural philosophies. Each design is thoughtfully executed to maximize space, natural light, and environmental harmony while maintaining an unmistakable sense of luxury.
                        </p>

                        {/* Highlights */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-300 mt-6">

                            <div className="bg-white/5 p-3 rounded-lg">
                                ✔ Designed by globally renowned architects
                            </div>

                            <div className="bg-white/5 p-3 rounded-lg">
                                ✔ Modern innovation & timeless elegance
                            </div>

                            <div className="bg-white/5 p-3 rounded-lg">
                                ✔ Smart home integration
                            </div>

                            <div className="bg-white/5 p-3 rounded-lg">
                                ✔ Sustainable future-ready designs
                            </div>

                        </div>
                    </div>

                </div>
            </Section>

            {/* SECTION 6 */}
            <Section>
                <h2 className="text-2xl font-semibold mb-4">
                    6. Automotive Engineering Standards
                </h2>

                <p className="text-gray-300 leading-7 mb-4">
                    Every vehicle in our collection undergoes a rigorous multi-stage inspection process to ensure exceptional performance, authenticity, and mechanical precision. We uphold the highest engineering standards to deliver machines that define both power and reliability.
                </p>

                <p className="text-gray-400 leading-7 mb-4">
                    Our verification process includes detailed performance diagnostics, structural integrity checks, and full documentation validation. From engine efficiency to advanced onboard systems, each component is carefully assessed by experienced automotive specialists.
                </p>

                <p className="text-gray-400 leading-7 mb-4">
                    We partner with certified experts and trusted automotive networks to guarantee that every vehicle meets global quality benchmarks. Whether it’s a high-performance supercar or a luxury executive sedan, precision and excellence remain uncompromised.
                </p>

                <p className="text-gray-400 leading-7 mb-6">
                    By combining cutting-edge engineering analysis with strict quality control, we ensure that every purchase represents not just a vehicle, but a flawless driving experience built on trust, innovation, and performance mastery.
                </p>

                {/* Highlight Points */}
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">

                    <div className="bg-white/5 p-4 rounded-lg">
                        ✔ Multi-stage inspection & performance testing
                    </div>

                    <div className="bg-white/5 p-4 rounded-lg">
                        ✔ Verified authenticity & documentation
                    </div>

                    <div className="bg-white/5 p-4 rounded-lg">
                        ✔ Engine diagnostics & system validation
                    </div>

                    <div className="bg-white/5 p-4 rounded-lg">
                        ✔ Certified experts & global quality standards
                    </div>

                </div>
            </Section>

            {/* SECTION 7 */}


          <Section>
  <div className="grid md:grid-cols-2 gap-12 items-center">

    {/* 📷 IMAGE */}
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="relative w-full h-[300px] sm:h-[380px] md:h-[520px]
                 overflow-hidden rounded-2xl shadow-2xl group"
    >
      <div className="absolute inset-0 bg-black/20"></div>

      <img
        src="https://i.ibb.co/twWwvkTM/Gemini-Generated-Image-j5fw4bj5fw4bj5fw.png"
        alt="Architectural Excellence"
        className="w-full h-full object-cover object-center
                   transition-transform duration-700 group-hover:scale-110"
      />
    </motion.div>

    {/*  CONTENT */}
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="p-6 md:p-10 rounded-2xl
                 bg-white/5 backdrop-blur-xl
                 border border-white/10 shadow-2xl"
    >

      <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
        7. Private Client Services
      </h2>

      <p className="text-gray-300 leading-7 mb-4">
        We provide dedicated concierge-level support exclusively for elite buyers, ensuring every transaction is handled with complete discretion, precision, and professionalism.
      </p>

      <p className="text-gray-400 leading-7 mb-4">
        Each client is assigned a personal support specialist who assists throughout the entire purchasing journey — from property selection and negotiation to documentation and final transfer.
      </p>

      <p className="text-gray-400 leading-7 mb-6">
        Our private service model is designed for high-net-worth individuals who value privacy, exclusivity, and efficiency.
      </p>

      {/* Highlights */}
      <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-300">

        <div className="bg-white/5 p-4 rounded-xl hover:bg-white/10 transition">
          ✔ Dedicated concierge support
        </div>

        <div className="bg-white/5 p-4 rounded-xl hover:bg-white/10 transition">
          ✔ End-to-end handling
        </div>

        <div className="bg-white/5 p-4 rounded-xl hover:bg-white/10 transition">
          ✔ Confidential service
        </div>

        <div className="bg-white/5 p-4 rounded-xl hover:bg-white/10 transition">
          ✔ Premium listings access
        </div>

      </div>

    </motion.div>

  </div>
</Section>


            {/* SECTION 8 */}
            <Section>
                <h2 className="text-2xl font-semibold mb-4">
                    8. Global Investment Opportunities
                </h2>

                <p className="text-gray-300 leading-7 mb-4">
                    We empower clients to build long-term wealth through carefully curated luxury real estate and high-value automotive investment portfolios across global markets. Each opportunity is selected based on market stability, growth potential, and long-term asset value.
                </p>

                <p className="text-gray-400 leading-7 mb-4">
                    Our investment ecosystem spans premium properties, exclusive residences, and rare automotive assets that appreciate over time. We provide detailed insights, valuation support, and strategic guidance to help clients make informed financial decisions.
                </p>

                <p className="text-gray-400 leading-7 mb-4">
                    By combining market intelligence with exclusive access to off-market deals, we create opportunities that are not available on traditional platforms. This ensures our clients stay ahead in the global luxury investment landscape.
                </p>

                <p className="text-gray-400 leading-7 mb-6">
                    Whether diversifying a portfolio or securing legacy assets, we deliver a structured, transparent, and high-value investment experience designed for sustainable wealth creation.
                </p>

                {/* Highlight Points */}
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">

                    <div className="bg-white/5 p-4 rounded-lg">
                        ✔ High-value real estate & automotive assets
                    </div>

                    <div className="bg-white/5 p-4 rounded-lg">
                        ✔ Long-term wealth building strategy
                    </div>

                    <div className="bg-white/5 p-4 rounded-lg">
                        ✔ Access to exclusive off-market deals
                    </div>

                    <div className="bg-white/5 p-4 rounded-lg">
                        ✔ Data-driven investment insights & valuation support
                    </div>

                </div>
            </Section>

            {/* SECTION 9 */}
            <Section>
                <h2 className="text-2xl font-semibold mb-4">
                    9. Trust & Transparency
                </h2>

                <p className="text-gray-300 leading-7 mb-4">
                    Every transaction within our platform is built on a foundation of complete transparency, legal compliance, and verified documentation. We ensure that clients receive accurate, up-to-date, and fully authenticated information for every property and vehicle listing.
                </p>

                <p className="text-gray-400 leading-7 mb-4">
                    Our verification process includes strict identity validation, ownership confirmation, and document cross-checking to eliminate any discrepancies. We work only with trusted partners, licensed agents, and verified data sources to maintain integrity at every level.
                </p>

                <p className="text-gray-400 leading-7 mb-4">
                    We prioritize ethical practices and regulatory compliance in all transactions, ensuring that every deal is legally sound and fully traceable. This guarantees peace of mind for buyers and strengthens long-term trust in our platform.
                </p>

                <p className="text-gray-400 leading-7 mb-6">
                    Transparency is not just a feature—it is our core principle. From listing accuracy to final ownership transfer, we maintain full clarity and accountability throughout the entire process.
                </p>

                {/* Highlight Points */}
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">

                    <div className="bg-white/5 p-4 rounded-lg">
                        ✔ Fully verified listings & documentation
                    </div>

                    <div className="bg-white/5 p-4 rounded-lg">
                        ✔ Strict legal compliance & identity checks
                    </div>

                    <div className="bg-white/5 p-4 rounded-lg">
                        ✔ Trusted global partners & licensed agents
                    </div>

                    <div className="bg-white/5 p-4 rounded-lg">
                        ✔ Transparent & traceable transactions
                    </div>

                </div>
            </Section>

            {/* SECTION 10 */}
            <Section>
                <h2 className="text-2xl font-semibold mb-4">
                    10. Our Vision
                </h2>

                <p className="text-gray-300 leading-7 mb-4">
                    Our vision is to redefine the global standard of luxury living by creating the world’s most trusted and innovative marketplace for elite real estate and automotive excellence.
                </p>

                <p className="text-gray-400 leading-7 mb-4">
                    We aim to seamlessly connect extraordinary properties and premium vehicles with individuals who value exclusivity, sophistication, and long-term investment potential. Through technology and trust, we bridge the gap between aspiration and ownership.
                </p>

                <p className="text-gray-400 leading-7 mb-4">
                    By continuously evolving our platform with cutting-edge digital experiences, verified global listings, and personalized client services, we strive to set new benchmarks in luxury commerce.
                </p>

                <p className="text-gray-400 leading-7 mb-6">
                    Our ultimate goal is to build a future where luxury is not just accessed—but experienced, personalized, and redefined on a global scale.
                </p>

                {/* Highlight Points */}
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">

                    <div className="bg-white/5 p-4 rounded-lg">
                        ✔ World’s most trusted luxury marketplace vision
                    </div>

                    <div className="bg-white/5 p-4 rounded-lg">
                        ✔ Connecting elite real estate & automotive world
                    </div>

                    <div className="bg-white/5 p-4 rounded-lg">
                        ✔ Technology-driven luxury experience
                    </div>

                    <div className="bg-white/5 p-4 rounded-lg">
                        ✔ Redefining global luxury standards
                    </div>

                </div>
            </Section>
        </div>
    );
}