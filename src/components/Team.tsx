import lawyerMale1 from '@/assets/lawyer-male-1.jpg';
import lawyerFemale1 from '@/assets/lawyer-female-1.jpg';
import lawyerSenior1 from '@/assets/lawyer-senior-1.jpg';
import { Button } from '@/components/ui/button';

const Team = () => {
  const teamMembers = [
    {
      name: 'Dr. Ricardo Silva',
      specialty: 'Direito Civil e Empresarial',
      image: lawyerMale1,
      description: 'Sócio fundador com mais de 30 anos de experiência em direito civil e empresarial.',
      credentials: ['OAB/SP 123.456', 'Mestre em Direito Civil'],
      social: {
        linkedin: '#',
        email: 'ricardo@advocaciapremium.com'
      }
    },
    {
      name: 'Dra. Ana Carolina',
      specialty: 'Direito Penal e Trabalhista',
      image: lawyerFemale1,
      description: 'Especialista em defesa criminal e questões trabalhistas com ampla experiência em tribunais.',
      credentials: ['OAB/SP 234.567', 'Especialista em Direito Penal'],
      social: {
        linkedin: '#',
        email: 'ana@advocaciapremium.com'
      }
    },
    {
      name: 'Dr. Eduardo Santos',
      specialty: 'Direito Imobiliário',
      image: lawyerSenior1,
      description: 'Consultor jurídico especializado em transações imobiliárias e direito urbanístico.',
      credentials: ['OAB/SP 345.678', 'Pós-graduado em Direito Imobiliário'],
      social: {
        linkedin: '#',
        email: 'eduardo@advocaciapremium.com'
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-white-soft">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <span className="text-gold-primary font-body font-semibold text-lg">Nossa Equipe</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-dark-primary mt-2 mb-6">
            Advogados Especialistas
          </h2>
          <p className="text-gray-medium text-xl max-w-3xl mx-auto font-body">
            Profissionais altamente qualificados e especializados, prontos para defender 
            seus interesses com dedicação e expertise.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="card-premium p-8 hover-lift fade-in-up text-center">
              {/* Photo */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-elegant">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold">
                  <i className="fas fa-balance-scale text-dark-primary"></i>
                </div>
              </div>

              {/* Info */}
              <div className="mb-6">
                <h3 className="font-display text-2xl font-semibold text-dark-primary mb-2">
                  {member.name}
                </h3>
                <p className="font-body font-semibold text-gold-primary mb-3">
                  {member.specialty}
                </p>
                <p className="text-gray-medium font-body leading-relaxed mb-4">
                  {member.description}
                </p>

                {/* Credentials */}
                <div className="space-y-1 mb-4">
                  {member.credentials.map((credential, idx) => (
                    <p key={idx} className="text-sm text-gray-medium font-body">
                      {credential}
                    </p>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-4">
                <a 
                  href={member.social.linkedin} 
                  className="w-10 h-10 bg-dark-primary rounded-full flex items-center justify-center text-white-pure hover:bg-gold-primary hover:text-dark-primary transition-colors duration-300"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a 
                  href={`mailto:${member.social.email}`}
                  className="w-10 h-10 bg-dark-primary rounded-full flex items-center justify-center text-white-pure hover:bg-gold-primary hover:text-dark-primary transition-colors duration-300"
                >
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 fade-in-up">
          <div className="bg-gradient-dark rounded-lg p-8 md:p-12">
            <h3 className="font-display text-3xl font-bold text-white-pure mb-4">
              Conheça Nossa Equipe Pessoalmente
            </h3>
            <p className="text-white-soft text-lg mb-6 font-body">
              Agende uma reunião e conheça os profissionais que cuidarão do seu caso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="premium" 
                size="lg" 
                className="text-lg px-8 py-4"
                asChild
              >
                <a href="tel:+5511999999999">
                  <i className="fas fa-phone mr-2"></i>
                  (11) 9999-9999
                </a>
              </Button>
              <Button 
                variant="outline-premium" 
                size="lg" 
                className="text-lg px-8 py-4"
                asChild
              >
                <a href="mailto:contato@advocaciapremium.com">
                  <i className="fas fa-envelope mr-2"></i>
                  contato@advocaciapremium.com
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;