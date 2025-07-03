import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const heroRef = useRef(null);
  const sectionRefs = useRef([]); // Use array for refs as in original code

  // Add ref to array
  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  useEffect(() => {
    console.log('Section Refs:', sectionRefs.current); // Debug refs

    // Hero animation
    const heroAnimation = gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' }
    );

    // Section animations with stagger
    const sectionAnimations = sectionRefs.current.map((section, index) =>
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none',
            id: `section-${index}`, // Unique ID for debugging
            // markers: true, // Uncomment for debugging trigger points
          },
          delay: index * 0.2, // Stagger animations
        }
      )
    );

    // Clean up
    return () => {
      heroAnimation.kill();
      sectionAnimations.forEach((anim) => anim.scrollTrigger?.kill());
      ScrollTrigger.refresh(); // Ensure ScrollTrigger state is reset
    };
  }, []);

  return (
    <div className="bg-gray-50 text-[#1A1A1A] font-poppins">
      {/* Hero Section */}
      <section
  ref={heroRef}
  className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
  style={{ filter: 'none' }}
>
  {/* Modern grid background */}
  <div className="absolute inset-0 opacity-20">
    <div className="absolute inset-0 bg-[length:100px_100px] bg-[linear-gradient(to_right,rgba(30,144,255,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,144,255,0.3)_1px,transparent_1px)]"></div>
  </div>

  {/* Animated blue grid lines */}
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(4)].map((_, i) => (
      <div
        key={i}
        className="absolute border-l border-r border-[#1E90FF] opacity-10 h-full"
        style={{
          left: `${(i + 1) * 25}%`,
          animation: `pulse ${Math.random() * 3 + 2}s ease-in-out infinite alternate`,
          animationDelay: `${i * 0.5}s`
        }}
      ></div>
    ))}
  </div>

  {/* Floating abstract shapes (modern approach) */}
  {[...Array(3)].map((_, i) => (
    <div
      key={i}
      className="absolute rounded-full mix-blend-overlay"
      style={{
        background: `radial-gradient(circle, rgba(30,144,255,0.${Math.floor(Math.random() * 3) + 2}) 0%, transparent 70%)`,
        width: `${Math.random() * 300 + 100}px`,
        height: `${Math.random() * 300 + 100}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        willChange: 'transform',
        animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite both`,
        animationDelay: `${Math.random() * 5}s`,
      }}
    ></div>
  ))}

  {/* Modern wave effect at bottom */}
  <div className="absolute bottom-0 left-0 w-full h-32 overflow-hidden">
    <div className="absolute bottom-0 left-0 w-[200%] h-full bg-repeat-x bg-[length:50%_100%] opacity-30"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%231E90FF' d='M0,256L48,261.3C96,267,192,277,288,250.7C384,224,480,160,576,160C672,160,768,224,864,218.7C960,213,1056,139,1152,117.3C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
        animation: 'wave 15s linear infinite'
      }}>
    </div>
  </div>

  <div className="container mx-auto px-6 text-center relative z-10">
    <h1 className="text-5xl md:text-7xl font-bold font-montserrat mb-8">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1E90FF] via-[#00BFFF] to-[#1E90FF] animate-text-shimmer">
        Wavys: Ride the Wave of Style
      </span>
    </h1>
    <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 text-gray-300">
      At Wavys, we believe fashion isn't just about what you wear—it's a reflection of your energy, your attitude, and your lifestyle. We're here to ride the wave of change and bring you bold, unique styles that move with you, wherever life takes you.
    </p>
    <button className="relative overflow-hidden group bg-transparent border-2 border-[#1E90FF] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#1E90FF] transition-all duration-300 hover:shadow-[0_0_20px_rgba(30,144,255,0.7)]">
      <span className="relative z-10">Explore Our Collection</span>
      <span className="absolute inset-0 bg-gradient-to-r from-[#1E90FF] to-[#00BFFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
    </button>
  </div>

  {/* Add these to your global CSS */}
  <style jsx>{`
    @keyframes float {
      0%, 100% { transform: translate(0, 0) rotate(0deg); }
      50% { transform: translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px) rotate(${Math.random() * 2 - 1}deg); }
    }
    @keyframes pulse {
      0% { opacity: 0.05; }
      100% { opacity: 0.15; }
    }
    @keyframes wave {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    @keyframes text-shimmer {
      0% { background-position: 0% 50%; }
      100% { background-position: 100% 50%; }
    }
    .animate-text-shimmer {
      background-size: 300% 300%;
      animation: text-shimmer 6s ease infinite;
    }
  `}</style>
</section>
      {/* Our Story */}
      <section ref={addToRefs} className="py-20 bg-white">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold font-montserrat mb-6 text-[#1E90FF]">Our Story</h2>
            <p className="text-lg mb-6 text-gray-700">
              Founded in 2020, Wavys emerged from a simple idea: clothing should empower the wearer. Our journey began on the sunny beaches of California, where the ocean's rhythm inspired our first collection.
            </p>
            <p className="text-lg text-gray-700">
              What started as a small boutique brand has grown into a movement, with our designs now worn by individuals who value both style and substance.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-2xl hover:shadow-[0_0_30px_rgba(30,144,255,0.3)] transition-all duration-500">
            <img
              src="https://images.unsplash.com/photo-1520367445093-50dc08a59d9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Wavys founders"
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section ref={addToRefs} className="py-20 bg-[#1A1A1A] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold font-montserrat mb-6">Our Mission</h2>
          <p className="text-3xl font-medium max-w-4xl mx-auto">
            Empowering <span className="text-[#1E90FF]">individuality</span> and <span className="text-[#1E90FF]">confidence</span> through fashion.
          </p>
        </div>
      </section>

      {/* Design Philosophy */}
      <section ref={addToRefs} className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold font-montserrat mb-12 text-center text-[#1E90FF]">Our Design Philosophy</h2>
          <p className="text-xl text-center max-w-4xl mx-auto mb-16 text-gray-700">
            Inspired by the fluidity of the ocean, the spirit of adventure, and the pulse of the streets, Wavys is all about embracing freedom, confidence, and individuality. Our designs capture the vibe you want.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group overflow-hidden rounded-lg shadow-lg">
                <img
                  src={`https://source.unsplash.com/random/600x600/?fashion,men,${item}`}
                  alt={`Design ${item}`}
                  className="w-full h-64 md:h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section ref={addToRefs} className="py-20 bg-[#1A1A1A] text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold font-montserrat mb-12 text-center text-[#1E90FF]">Meet the Team</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Alex Rivera', role: 'Founder & CEO', bio: 'Visionary leader with 15+ years in fashion industry' },
              { name: 'Jamie Chen', role: 'Head Designer', bio: 'Creative force behind our signature styles' },
              { name: 'Taylor Smith', role: 'Marketing Director', bio: 'Brand strategist and digital marketing expert' },
              { name: 'Morgan Lee', role: 'Operations Manager', bio: 'Ensures our collections reach you seamlessly' },
            ].map((member, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg">
                <img
                  src={`https://source.unsplash.com/random/600x600/?portrait,${index}`}
                  alt={member.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                  <p className="text-[#00BFFF] mb-4">{member.role}</p>
                  <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section ref={addToRefs} className="py-32 bg-white relative overflow-hidden">
        {/* Floating particles (reduced to 5) */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#1E90FF] opacity-10"
            style={{
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              willChange: 'transform',
              animation: `float ${Math.random() * 5 + 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}

        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold font-montserrat mb-6 text-[#1A1A1A]">Our Vision</h2>
          <p className="text-3xl font-medium max-w-4xl mx-auto text-gray-700">
            To <span className="text-[#1E90FF] font-bold">redefine</span> men's fashion with <span className="text-[#1E90FF] font-bold">bold</span>,{' '}
            <span className="text-[#1E90FF] font-bold">sustainable</span>, and <span className="text-[#1E90FF] font-bold">innovative</span> designs.
          </p>
        </div>
      </section>

      {/* Collection Showcase */}
      <section ref={addToRefs} className="py-20 bg-[#1A1A1A] text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold font-montserrat mb-12 text-center text-[#1E90FF]">Our Signature Collection</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Ocean Breeze', category: 'Summer Collection' },
              { name: 'Urban Pulse', category: 'Streetwear' },
              { name: 'Midnight Waves', category: 'Evening Wear' },
            ].map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl h-96">
                <img
                  src={`https://source.unsplash.com/random/600x800/?fashion,men,${index + 5}`}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white">{item.name}</h3>
                  <p className="text-[#00BFFF]">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section ref={addToRefs} className="py-20 bg-white">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-bold font-montserrat mb-6 text-[#1E90FF]">Sustainable Fashion</h2>
            <p className="text-lg mb-6 text-gray-700">
              We're committed to ethical production and sustainable materials. Our fabrics are sourced responsibly and our manufacturing processes minimize environmental impact.
            </p>
            <div className="flex flex-wrap gap-4">
              {['Organic Cotton', 'Recycled Materials', 'Low-Waste Production'].map((item, i) => (
                <span key={i} className="bg-[#1E90FF]/10 text-[#1E90FF] px-4 py-2 rounded-full text-sm font-medium">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2 rounded-xl overflow-hidden shadow-2xl hover:shadow-[0_0_30px_rgba(30,144,255,0.3)] transition-all duration-500">
            <img
              src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Sustainable materials"
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section ref={addToRefs} className="py-32 bg-gradient-to-r from-[#1E90FF] to-[#00BFFF] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold font-montserrat mb-8">Ready to Ride the Wave?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">Join thousands of men who have discovered their signature style with Wavys.</p>
          <button className="bg-white text-[#1E90FF] px-12 py-5 rounded-full font-bold text-xl hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300">
            SHOP NOW
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#1A1A1A] text-gray-400">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white text-lg font-bold mb-4">WAVYS</h3>
              <p className="text-sm">Ride the wave of style with our bold, unique fashion.</p>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-[#00BFFF] transition-colors">
                    Collections
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#00BFFF] transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#00BFFF] transition-colors">
                    Sustainability
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-[#00BFFF] transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#00BFFF] transition-colors">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#00BFFF] transition-colors">
                    Shipping
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-[#00BFFF] transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#00BFFF] transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#00BFFF] transition-colors">
                    Cookie Preferences
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-700 text-center">
            <p>© {new Date().getFullYear()} Wavys. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;