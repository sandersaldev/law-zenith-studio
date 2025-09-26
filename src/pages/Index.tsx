import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Highlights from '@/components/Highlights';
import Legacy from '@/components/Legacy';
import Services from '@/components/Services';
import Excellence from '@/components/Excellence';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import Blog from '@/components/Blog';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    // Observe all fade-in-up elements
    const animateElements = document.querySelectorAll('.fade-in-up');
    animateElements.forEach((el) => observer.observe(el));

    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    // Parallax effect for hero section
    const handleParallax = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax');
      
      parallaxElements.forEach((element) => {
        const speed = 0.5;
        const yPos = -(scrolled * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleParallax);

    // Cleanup
    return () => {
      observer.disconnect();
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('scroll', handleParallax);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Highlights />
        <Legacy />
        <Services />
        <Excellence />
        <Team />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  );
};

export default Index;