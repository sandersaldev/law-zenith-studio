import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Início', href: '#home' },
    { label: 'Sobre', href: '#about' },
    { label: 'Áreas de Atuação', href: '#services' },
    { label: 'Equipe', href: '#team' },
    { label: 'Depoimentos', href: '#testimonials' },
    { label: 'Contato', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark-primary/95 backdrop-blur-md shadow-dark' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
              <i className="fas fa-balance-scale text-dark-primary text-xl"></i>
            </div>
            <div>
              <h1 className="font-display text-2xl font-bold text-white-pure">Advocacia</h1>
              <p className="text-gold-primary text-sm">Premium</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white-pure hover:text-gold-primary transition-colors duration-300 font-body font-medium gold-underline"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Social Icons & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex space-x-3">
              <a href="#" className="text-white-pure hover:text-gold-primary transition-colors duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white-pure hover:text-gold-primary transition-colors duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white-pure hover:text-gold-primary transition-colors duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <Button variant="premium">
              Agendar Consulta
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white-pure"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gold-primary/20">
            <nav className="flex flex-col space-y-4 mt-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white-pure hover:text-gold-primary transition-colors duration-300 font-body font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button variant="premium" className="mt-4 w-full">
                Agendar Consulta
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;