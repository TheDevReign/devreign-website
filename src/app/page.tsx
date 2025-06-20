import ContactForm from "./components/ContactForm";

export default function Page() {
  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 bg-[#121212] border-b border-[#1F1F1F]">
        <h1 className="text-xl font-bold tracking-wide">DevReign</h1>
        <nav className="space-x-6">
          <a href="#services" className="hover:text-blue-500">
            Services
          </a>
          <a href="#about" className="hover:text-blue-500">
            About
          </a>
          <a href="#contact" className="hover:text-blue-500">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-24 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Empowering Your Digital Empire
        </h2>
        <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
          We build modern, scalable websites and mobile apps tailored for
          startups & enterprises. SEO? We reign there too.
        </p>
        <a
          href="#contact"
          className="bg-blue-600 px-6 py-3 rounded-md text-white font-medium hover:bg-blue-700 transition"
        >
          Get Started
        </a>
      </section>

      {/* Services */}
      <section id="services" className="bg-[#111] py-20 px-6">
        <h3 className="text-3xl font-semibold text-center mb-12">
          Our Services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-[#1A1A1A] p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-bold mb-2">Web Development</h4>
            <p className="text-gray-400">
              Custom websites that are fast, responsive, and modern.
            </p>
          </div>
          <div className="bg-[#1A1A1A] p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-bold mb-2">Mobile Apps</h4>
            <p className="text-gray-400">
              iOS and Android apps built with React Native and Expo.
            </p>
          </div>
          <div className="bg-[#1A1A1A] p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-bold mb-2">SEO & Optimization</h4>
            <p className="text-gray-400">
              Improve your visibility, traffic, and conversion rates.
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6">
        <h3 className="text-3xl font-semibold text-center mb-8">Who We Are</h3>
        <p className="text-gray-400 max-w-3xl mx-auto text-center">
          DevReign is a team of passionate engineers and designers helping
          businesses elevate their digital presence. We bring 6+ years of
          frontend expertise, mobile-first focus, and result-driven SEO
          strategies.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-[#111] py-20 px-6">
        <h3 className="text-3xl font-semibold text-center mb-8">
          Let’s Work Together
        </h3>
        <ContactForm />
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 text-sm border-t border-[#1F1F1F]">
        © {new Date().getFullYear()} DevReign. All rights reserved.
      </footer>
    </div>
  );
}
