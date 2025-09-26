import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BlogPost = () => {
  const { slug } = useParams();

  // Mock data - in a real app this would come from an API
  const blogPosts = {
    'nova-lei-protecao-dados': {
      title: 'Nova Lei de Proteção de Dados: O que sua empresa precisa saber',
      content: `
        <p>A Lei Geral de Proteção de Dados (LGPD) trouxe mudanças significativas no tratamento de dados pessoais no Brasil. As empresas precisam se adequar às novas normas para evitar penalidades que podem chegar a 2% do faturamento.</p>
        
        <h3>Principais Mudanças</h3>
        <p>As principais alterações incluem a necessidade de consentimento explícito para coleta de dados, a figura do encarregado de proteção de dados (DPO) e direitos específicos dos titulares dos dados.</p>
        
        <h3>Como se Adequar</h3>
        <p>1. Mapeamento de dados: Identifique todos os dados pessoais que sua empresa coleta, processa e armazena.</p>
        <p>2. Base legal: Defina a base legal para o tratamento de cada categoria de dados.</p>
        <p>3. Políticas e procedimentos: Implemente políticas claras de privacidade e procedimentos de segurança.</p>
        <p>4. Treinamento: Capacite sua equipe sobre as novas regras e responsabilidades.</p>
        
        <h3>Penalidades</h3>
        <p>O descumprimento da LGPD pode resultar em advertências, multas de até R$ 50 milhões por infração, e até mesmo a proibição do tratamento de dados.</p>
        
        <h3>Conclusão</h3>
        <p>A adequação à LGPD não é apenas uma obrigação legal, mas também uma oportunidade de melhorar a confiança dos clientes e a gestão de dados da empresa.</p>
      `,
      date: '15 de Março, 2024',
      category: 'Direito Digital',
      readTime: '5 min',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=400&fit=crop&crop=center',
      author: 'Dr. João Silva',
      authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=center'
    },
    'direitos-trabalhistas-2024': {
      title: 'Direitos Trabalhistas: Principais mudanças em 2024',
      content: `
        <p>O cenário trabalhista brasileiro passou por importantes alterações em 2024, impactando tanto empregadores quanto empregados. É fundamental estar atualizado com essas mudanças.</p>
        
        <h3>Novas Regras de Home Office</h3>
        <p>As regras para trabalho remoto foram aprimoradas, estabelecendo direitos e deveres mais claros para ambas as partes.</p>
        
        <h3>Alterações no FGTS</h3>
        <p>Mudanças nos critérios de saque e nas taxas de juros do FGTS afetam milhões de trabalhadores brasileiros.</p>
        
        <h3>Jornada de Trabalho</h3>
        <p>Novas modalidades de jornada foram regulamentadas, oferecendo maior flexibilidade para empresas e funcionários.</p>
      `,
      date: '10 de Março, 2024',
      category: 'Direito Trabalhista',
      readTime: '7 min',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop&crop=center',
      author: 'Dra. Maria Santos',
      authorImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=center'
    }
  };

  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen bg-dark-primary">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-6 py-20 text-center">
            <h1 className="font-display text-4xl font-bold text-white-pure mb-4">
              Post não encontrado
            </h1>
            <p className="text-white-soft mb-8">
              O artigo que você procura não existe ou foi removido.
            </p>
            <Link to="/blog">
              <Button variant="premium">
                Voltar ao Blog
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white-pure">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-16 bg-dark-primary">
          <div className="absolute inset-0 bg-gradient-dark opacity-90"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Category & Meta */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="bg-gold-primary text-dark-primary px-4 py-2 rounded-full text-sm font-body font-semibold">
                  {post.category}
                </span>
                <time className="text-white-soft font-body">{post.date}</time>
                <span className="text-white-soft font-body flex items-center">
                  <i className="far fa-clock mr-1"></i>
                  {post.readTime}
                </span>
              </div>
              
              {/* Title */}
              <h1 className="font-display text-4xl md:text-5xl font-bold text-white-pure mb-6">
                {post.title}
              </h1>
              
              {/* Author */}
              <div className="flex items-center justify-center">
                <img 
                  src={post.authorImage} 
                  alt={post.author}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div className="text-left">
                  <p className="text-white-pure font-body font-semibold">
                    Por {post.author}
                  </p>
                  <p className="text-white-soft text-sm font-body">
                    Especialista em {post.category}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-0">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-96 object-cover rounded-lg shadow-elegant -mt-16 relative z-10"
              />
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2">
                  <article className="prose prose-lg max-w-none">
                    <div 
                      className="text-gray-dark font-body leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                  </article>
                  
                  {/* Share Buttons */}
                  <div className="mt-12 pt-8 border-t border-gray-light">
                    <h4 className="font-display text-xl font-semibold text-dark-primary mb-4">
                      Compartilhe este artigo
                    </h4>
                    <div className="flex gap-4">
                      <Button variant="outline-premium" size="sm">
                        <i className="fab fa-facebook-f mr-2"></i>
                        Facebook
                      </Button>
                      <Button variant="outline-premium" size="sm">
                        <i className="fab fa-twitter mr-2"></i>
                        Twitter
                      </Button>
                      <Button variant="outline-premium" size="sm">
                        <i className="fab fa-linkedin-in mr-2"></i>
                        LinkedIn
                      </Button>
                      <Button variant="outline-premium" size="sm">
                        <i className="fab fa-whatsapp mr-2"></i>
                        WhatsApp
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <div className="sticky top-24">
                    {/* Author Card */}
                    <div className="card-premium p-6 mb-8">
                      <div className="text-center">
                        <img 
                          src={post.authorImage} 
                          alt={post.author}
                          className="w-20 h-20 rounded-full mx-auto mb-4"
                        />
                        <h4 className="font-display text-xl font-semibold text-dark-primary mb-2">
                          {post.author}
                        </h4>
                        <p className="text-gray-medium font-body mb-4">
                          Especialista em {post.category}
                        </p>
                        <Button variant="outline-premium" size="sm" className="w-full">
                          Ver Perfil
                        </Button>
                      </div>
                    </div>

                    {/* Related Posts */}
                    <div className="card-premium p-6">
                      <h4 className="font-display text-xl font-semibold text-dark-primary mb-6">
                        Artigos Relacionados
                      </h4>
                      <div className="space-y-4">
                        {Object.entries(blogPosts)
                          .filter(([key]) => key !== slug)
                          .slice(0, 3)
                          .map(([key, relatedPost]) => (
                            <Link 
                              key={key}
                              to={`/blog/${key}`}
                              className="block hover-lift"
                            >
                              <div className="flex gap-3">
                                <img 
                                  src={relatedPost.image} 
                                  alt={relatedPost.title}
                                  className="w-16 h-16 object-cover rounded"
                                />
                                <div className="flex-1">
                                  <h5 className="font-body font-semibold text-dark-primary text-sm line-clamp-2 mb-1">
                                    {relatedPost.title}
                                  </h5>
                                  <p className="text-gray-medium text-xs">
                                    {relatedPost.date}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Blog */}
        <section className="py-8 bg-gray-light">
          <div className="container mx-auto px-6 text-center">
            <Link to="/blog">
              <Button variant="outline-premium">
                <i className="fas fa-arrow-left mr-2"></i>
                Voltar ao Blog
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;