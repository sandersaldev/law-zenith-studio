import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: 'fas fa-users',
      title: 'Direito Civil',
      description: 'Contratos, responsabilidade civil, direitos reais e família. Soluções jurídicas completas para questões do dia a dia.',
      features: ['Contratos', 'Família', 'Sucessões', 'Responsabilidade Civil']
    },
    {
      icon: 'fas fa-gavel',
      title: 'Direito Penal',
      description: 'Defesa criminal especializada com estratégias personalizadas para cada caso e acompanhamento integral.',
      features: ['Defesa Criminal', 'Recursos', 'Habeas Corpus', 'Júri']
    },
    {
      icon: 'fas fa-home',
      title: 'Direito Imobiliário',
      description: 'Compra, venda, locação e regularização de imóveis. Segurança jurídica em todas as transações.',
      features: ['Compra e Venda', 'Locação', 'Regularização', 'Condomínio']
    },
    {
      icon: 'fas fa-briefcase',
      title: 'Direito Empresarial',
      description: 'Consultoria jurídica para empresas, contratos comerciais, sociedades e recuperação judicial.',
      features: ['Sociedades', 'Contratos', 'Recuperação', 'Compliance']
    },
    {
      icon: 'fas fa-hard-hat',
      title: 'Direito Trabalhista',
      description: 'Defesa dos direitos trabalhistas, ações judiciais e consultoria preventiva para empresas e empregados.',
      features: ['Ações Trabalhistas', 'Consultoria', 'Rescisões', 'Acordos']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white-pure">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <span className="text-gold-primary font-body font-semibold text-lg">Nossas Especialidades</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-dark-primary mt-2 mb-6">
            Áreas de Atuação
          </h2>
          <p className="text-gray-medium text-xl max-w-3xl mx-auto font-body">
            Oferecemos serviços jurídicos especializados nas principais áreas do direito, 
            sempre com excelência técnica e atendimento personalizado.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card-premium p-8 hover-lift fade-in-up">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-gold rounded-lg flex items-center justify-center shadow-gold mb-4">
                  <i className={`${service.icon} text-2xl text-dark-primary`}></i>
                </div>
                <h3 className="font-display text-2xl font-semibold text-dark-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-medium font-body leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="mb-6">
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-medium font-body">
                      <i className="fas fa-check text-gold-primary mr-3"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Button variant="outline-premium" className="w-full">
                Saiba Mais
              </Button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 fade-in-up">
          <div className="bg-gradient-dark rounded-lg p-8 md:p-12">
            <h3 className="font-display text-3xl font-bold text-white-pure mb-4">
              Precisa de Orientação Jurídica?
            </h3>
            <p className="text-white-soft text-lg mb-6 font-body">
              Nossa equipe está pronta para analisar seu caso e oferecer a melhor solução jurídica.
            </p>
            <Button variant="premium" size="lg" className="text-lg px-8 py-4">
              <i className="fas fa-phone mr-2"></i>
              Consulta Gratuita
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;