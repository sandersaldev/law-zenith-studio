import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: 'Maria Fernanda Silva',
      role: 'Empresária',
      company: 'Silva & Associados Ltda.',
      text: 'Excelente atendimento e profissionalismo exemplar. Resolveram minha questão empresarial de forma rápida e eficiente. Recomendo totalmente os serviços da Advocacia Premium.',
      rating: 5
    },
    {
      name: 'João Carlos Mendes',
      role: 'Diretor Comercial',
      company: 'Construtora Mendes',
      text: 'Profissionais extremamente competentes e éticos. Conseguiram um acordo muito favorável em meu processo trabalhista. Gratidão total pela dedicação da equipe.',
      rating: 5
    },
    {
      name: 'Ana Paula Costa',
      role: 'Proprietária',
      company: 'Imobiliária Costa',
      text: 'Acompanhamento jurídico impecável em todas as transações imobiliárias. Segurança e transparência em cada etapa do processo. Parceria de confiança há mais de 5 anos.',
      rating: 5
    },
    {
      name: 'Roberto Oliveira',
      role: 'Contador',
      company: 'Oliveira Contabilidade',
      text: 'Consultoria jurídica de altíssima qualidade. Sempre muito atenciosos e disponíveis para esclarecer dúvidas. Conhecimento técnico impressionante.',
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-dark-primary">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <span className="text-gold-primary font-body font-semibold text-lg">Depoimentos</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white-pure mt-2 mb-6">
            O que Nossos Clientes Dizem
          </h2>
          <p className="text-white-soft text-xl max-w-3xl mx-auto font-body">
            A satisfação de nossos clientes é nossa maior conquista. Veja alguns depoimentos reais.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-dark-secondary/50 p-8 md:p-12 rounded-lg text-center">
                    {/* Stars */}
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <i key={i} className="fas fa-star text-gold-primary text-xl mx-1"></i>
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-white-soft text-lg md:text-xl font-body leading-relaxed mb-8 italic">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Author */}
                    <div>
                      <h4 className="font-display text-xl font-semibold text-white-pure mb-2">
                        {testimonial.name}
                      </h4>
                      <p className="text-gold-primary font-body font-medium">
                        {testimonial.role}
                      </p>
                      <p className="text-white-soft font-body text-sm">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 bg-gold-primary rounded-full flex items-center justify-center text-dark-primary hover:bg-gold-accent transition-colors duration-300"
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 bg-gold-primary rounded-full flex items-center justify-center text-dark-primary hover:bg-gold-accent transition-colors duration-300"
          >
            <i className="fas fa-chevron-right"></i>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentSlide ? 'bg-gold-primary' : 'bg-white-soft/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gold-primary/20">
          <div className="text-center fade-in-up">
            <div className="w-16 h-16 mx-auto mb-4 bg-gold-primary/10 rounded-full flex items-center justify-center">
              <i className="fas fa-certificate text-2xl text-gold-primary"></i>
            </div>
            <p className="text-white-soft font-body text-sm">Registro OAB</p>
          </div>
          <div className="text-center fade-in-up">
            <div className="w-16 h-16 mx-auto mb-4 bg-gold-primary/10 rounded-full flex items-center justify-center">
              <i className="fas fa-shield-alt text-2xl text-gold-primary"></i>
            </div>
            <p className="text-white-soft font-body text-sm">Ética Profissional</p>
          </div>
          <div className="text-center fade-in-up">
            <div className="w-16 h-16 mx-auto mb-4 bg-gold-primary/10 rounded-full flex items-center justify-center">
              <i className="fas fa-handshake text-2xl text-gold-primary"></i>
            </div>
            <p className="text-white-soft font-body text-sm">Confiança</p>
          </div>
          <div className="text-center fade-in-up">
            <div className="w-16 h-16 mx-auto mb-4 bg-gold-primary/10 rounded-full flex items-center justify-center">
              <i className="fas fa-clock text-2xl text-gold-primary"></i>
            </div>
            <p className="text-white-soft font-body text-sm">Pontualidade</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;