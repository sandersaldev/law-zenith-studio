import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-scales-justice.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Scales of Justice - Premium Law Firm"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white-pure mb-6 fade-in-up">
            Excelência Jurídica
            <span className="block text-gold-primary">desde 1992</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white-soft mb-8 font-body fade-in-up max-w-3xl mx-auto">
            Mais de 30 anos defendendo seus direitos com dedicação, experiência e resultados 
            comprovados. Seu parceiro jurídico de confiança.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-up">
            <Button variant="premium" size="lg" className="text-lg px-8 py-4">
              <i className="fas fa-calendar-alt mr-2"></i>
              Agendar Consulta Gratuita
            </Button>
            <Button variant="outline-premium" size="lg" className="text-lg px-8 py-4">
              <i className="fas fa-phone mr-2"></i>
              (11) 9999-9999
            </Button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gold-primary/20">
            <div className="text-center fade-in-up">
              <div className="counter text-4xl md:text-5xl font-bold mb-2">30+</div>
              <p className="text-white-soft">Anos de Experiência</p>
            </div>
            <div className="text-center fade-in-up">
              <div className="counter text-4xl md:text-5xl font-bold mb-2">500+</div>
              <p className="text-white-soft">Casos Resolvidos</p>
            </div>
            <div className="text-center fade-in-up">
              <div className="counter text-4xl md:text-5xl font-bold mb-2">85%</div>
              <p className="text-white-soft">Taxa de Sucesso</p>
            </div>
            <div className="text-center fade-in-up">
              <div className="counter text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <p className="text-white-soft">Atendimento</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <i className="fas fa-chevron-down text-gold-primary text-2xl"></i>
        </div>
      </div>
    </section>
  );
};

export default Hero;