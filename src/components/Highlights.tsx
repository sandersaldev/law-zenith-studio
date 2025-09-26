const Highlights = () => {
  const highlights = [
    {
      icon: 'fas fa-award',
      title: 'Experiência Comprovada',
      description: 'Mais de três décadas atuando nas mais diversas áreas do direito com reconhecimento profissional.'
    },
    {
      icon: 'fas fa-handshake',
      title: 'Confiança e Credibilidade',
      description: 'Relacionamento sólido com clientes baseado em transparência, ética e resultados efetivos.'
    },
    {
      icon: 'fas fa-trophy',
      title: 'Resultados Excepcionais',
      description: 'Alta taxa de sucesso em processos jurídicos com estratégias personalizadas para cada caso.'
    }
  ];

  return (
    <section className="py-20 bg-white-soft">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="text-center fade-in-up">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold">
                <i className={`${highlight.icon} text-3xl text-dark-primary`}></i>
              </div>
              <h3 className="font-display text-2xl font-semibold text-dark-primary mb-4">
                {highlight.title}
              </h3>
              <p className="text-gray-medium font-body leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;