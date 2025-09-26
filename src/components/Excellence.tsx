import { useEffect, useRef, useState } from 'react';

const Excellence = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const CounterAnimation = ({ end, suffix = '' }: { end: number; suffix?: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const duration = 2000;
      const increment = end / (duration / 50);

      const timer = setInterval(() => {
        setCount(prev => {
          const next = prev + increment;
          if (next >= end) {
            clearInterval(timer);
            return end;
          }
          return next;
        });
      }, 50);

      return () => clearInterval(timer);
    }, [isVisible, end]);

    return (
      <span className="counter text-5xl md:text-6xl font-bold">
        {Math.floor(count)}{suffix}
      </span>
    );
  };

  return (
    <section ref={sectionRef} className="py-20 bg-dark-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <span className="text-gold-primary font-body font-semibold text-lg">Nossa Performance</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white-pure mt-2 mb-6">
            Excelência Jurídica Comprovada
          </h2>
          <p className="text-white-soft text-xl max-w-3xl mx-auto font-body">
            Números que refletem nosso compromisso com a excelência e a satisfação de nossos clientes.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center fade-in-up">
            <div className="mb-4">
              <CounterAnimation end={30} suffix="+" />
            </div>
            <h3 className="font-display text-xl font-semibold text-white-pure mb-2">
              Anos de Experiência
            </h3>
            <p className="text-white-soft font-body">
              Três décadas construindo reputação sólida no mercado jurídico
            </p>
          </div>

          <div className="text-center fade-in-up">
            <div className="mb-4">
              <CounterAnimation end={500} suffix="+" />
            </div>
            <h3 className="font-display text-xl font-semibold text-white-pure mb-2">
              Casos Resolvidos
            </h3>
            <p className="text-white-soft font-body">
              Processos bem-sucedidos em diversas áreas do direito
            </p>
          </div>

          <div className="text-center fade-in-up">
            <div className="mb-4">
              <CounterAnimation end={85} suffix="%" />
            </div>
            <h3 className="font-display text-xl font-semibold text-white-pure mb-2">
              Taxa de Sucesso
            </h3>
            <p className="text-white-soft font-body">
              Alto índice de vitórias e acordos favoráveis aos clientes
            </p>
          </div>

          <div className="text-center fade-in-up">
            <div className="mb-4">
              <CounterAnimation end={24} suffix="/7" />
            </div>
            <h3 className="font-display text-xl font-semibold text-white-pure mb-2">
              Atendimento
            </h3>
            <p className="text-white-soft font-body">
              Suporte jurídico disponível sempre que você precisar
            </p>
          </div>
        </div>

        {/* Excellence Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-dark-secondary/50 p-8 rounded-lg fade-in-up">
            <div className="w-16 h-16 bg-gradient-gold rounded-lg flex items-center justify-center shadow-gold mb-4">
              <i className="fas fa-medal text-2xl text-dark-primary"></i>
            </div>
            <h3 className="font-display text-xl font-semibold text-white-pure mb-3">
              Reconhecimento Profissional
            </h3>
            <p className="text-white-soft font-body">
              Premiações e reconhecimentos da OAB e instituições jurídicas renomadas.
            </p>
          </div>

          <div className="bg-dark-secondary/50 p-8 rounded-lg fade-in-up">
            <div className="w-16 h-16 bg-gradient-gold rounded-lg flex items-center justify-center shadow-gold mb-4">
              <i className="fas fa-graduation-cap text-2xl text-dark-primary"></i>
            </div>
            <h3 className="font-display text-xl font-semibold text-white-pure mb-3">
              Formação Continuada
            </h3>
            <p className="text-white-soft font-body">
              Equipe em constante atualização com as mais recentes mudanças legislativas.
            </p>
          </div>

          <div className="bg-dark-secondary/50 p-8 rounded-lg fade-in-up">
            <div className="w-16 h-16 bg-gradient-gold rounded-lg flex items-center justify-center shadow-gold mb-4">
              <i className="fas fa-shield-alt text-2xl text-dark-primary"></i>
            </div>
            <h3 className="font-display text-xl font-semibold text-white-pure mb-3">
              Segurança Jurídica
            </h3>
            <p className="text-white-soft font-body">
              Análise minuciosa e estratégias bem fundamentadas para cada caso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Excellence;