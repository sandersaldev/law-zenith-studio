import ladyJusticeImage from '@/assets/lady-justice-statue.jpg';

const Legacy = () => {
  return (
    <section className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="fade-in-up">
            <div className="relative">
              <img 
                src={ladyJusticeImage} 
                alt="Lady Justice - Symbol of Legal Excellence"
                className="w-full max-w-md mx-auto rounded-lg shadow-elegant"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gold-primary rounded-full flex items-center justify-center shadow-gold">
                <i className="fas fa-balance-scale text-3xl text-dark-primary"></i>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="fade-in-up">
            <div className="mb-6">
              <span className="text-gold-primary font-body font-semibold text-lg">Nossa História</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white-pure mt-2 mb-6">
                Tradição e Credibilidade em Cada Caso
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-white-soft text-lg font-body leading-relaxed">
                Fundado em 1992, nosso escritório construiu uma sólida reputação baseada em 
                princípios fundamentais: excelência técnica, ética profissional e compromisso 
                inabalável com a justiça.
              </p>

              <p className="text-white-soft text-lg font-body leading-relaxed">
                Ao longo de mais de três décadas, desenvolvemos expertise nas mais diversas 
                áreas do direito, sempre mantendo o foco na defesa dos interesses de nossos 
                clientes com dedicação e resultados comprovados.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-6 bg-dark-accent/50 rounded-lg">
                  <div className="text-3xl font-display font-bold text-gold-primary mb-2">1992</div>
                  <p className="text-white-soft font-body">Ano de Fundação</p>
                </div>
                <div className="text-center p-6 bg-dark-accent/50 rounded-lg">
                  <div className="text-3xl font-display font-bold text-gold-primary mb-2">5</div>
                  <p className="text-white-soft font-body">Áreas de Especialização</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legacy;