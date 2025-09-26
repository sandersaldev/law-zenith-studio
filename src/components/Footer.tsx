const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    about: [
      { label: 'Nossa História', href: '#about' },
      { label: 'Missão e Valores', href: '#' },
      { label: 'Certificações', href: '#' },
      { label: 'Carreiras', href: '#' }
    ],
    services: [
      { label: 'Direito Civil', href: '#services' },
      { label: 'Direito Penal', href: '#services' },
      { label: 'Direito Imobiliário', href: '#services' },
      { label: 'Direito Empresarial', href: '#services' },
      { label: 'Direito Trabalhista', href: '#services' }
    ],
    useful: [
      { label: 'Blog Jurídico', href: '#blog' },
      { label: 'FAQ', href: '#' },
      { label: 'Documentos', href: '#' },
      { label: 'Política de Privacidade', href: '#' },
      { label: 'Termos de Uso', href: '#' }
    ]
  };

  return (
    <footer className="bg-dark-primary text-white-pure">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                <i className="fas fa-balance-scale text-dark-primary text-xl"></i>
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold">Advocacia</h3>
                <p className="text-gold-primary text-sm">Premium</p>
              </div>
            </div>
            
            <p className="text-white-soft font-body leading-relaxed mb-6">
              Há mais de 30 anos oferecendo serviços jurídicos de excelência com ética, 
              dedicação e resultados comprovados.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center">
                <i className="fas fa-map-marker-alt text-gold-primary w-5"></i>
                <span className="text-white-soft font-body ml-3">
                  Av. Paulista, 1000 - São Paulo, SP
                </span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-phone text-gold-primary w-5"></i>
                <span className="text-white-soft font-body ml-3">
                  (11) 9999-9999
                </span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-envelope text-gold-primary w-5"></i>
                <span className="text-white-soft font-body ml-3">
                  contato@advocaciapremium.com
                </span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-display text-xl font-semibold mb-6">Serviços</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white-soft font-body hover:text-gold-primary transition-colors duration-300 gold-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="font-display text-xl font-semibold mb-6">Links Úteis</h4>
            <ul className="space-y-3">
              {footerLinks.useful.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white-soft font-body hover:text-gold-primary transition-colors duration-300 gold-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-display text-xl font-semibold mb-6">Atendimento</h4>
            
            {/* Office Hours */}
            <div className="mb-6">
              <h5 className="font-body font-semibold text-gold-primary mb-3">Horário de Funcionamento</h5>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-white-soft">Segunda - Sexta:</span>
                  <span className="text-white-pure">8h às 18h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white-soft">Sábado:</span>
                  <span className="text-white-pure">8h às 12h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white-soft">Emergência:</span>
                  <span className="text-gold-primary">24/7</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h5 className="font-body font-semibold text-gold-primary mb-3">Redes Sociais</h5>
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-dark-secondary rounded-full flex items-center justify-center text-white-soft hover:bg-gold-primary hover:text-dark-primary transition-colors duration-300"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-dark-secondary rounded-full flex items-center justify-center text-white-soft hover:bg-gold-primary hover:text-dark-primary transition-colors duration-300"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-dark-secondary rounded-full flex items-center justify-center text-white-soft hover:bg-gold-primary hover:text-dark-primary transition-colors duration-300"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-dark-secondary rounded-full flex items-center justify-center text-white-soft hover:bg-gold-primary hover:text-dark-primary transition-colors duration-300"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gold-primary/20">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white-soft font-body text-sm mb-4 md:mb-0">
              © {currentYear} Advocacia Premium. Todos os direitos reservados.
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <div className="text-white-soft font-body text-sm">
                OAB/SP 123.456 | CNPJ: 12.345.678/0001-90
              </div>
              <div className="flex space-x-4 text-sm">
                <a href="#" className="text-white-soft hover:text-gold-primary transition-colors duration-300">
                  Política de Privacidade
                </a>
                <span className="text-white-soft">|</span>
                <a href="#" className="text-white-soft hover:text-gold-primary transition-colors duration-300">
                  Termos de Uso
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;