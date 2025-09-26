import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BlogList = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const blogPosts = [
    {
      slug: 'inteligencia-artificial-direito',
      title: 'Inteligência Artificial e Direito: Desafios jurídicos da era digital',
      excerpt: 'Explore os principais desafios jurídicos da IA e como a regulamentação está evoluindo no Brasil e no mundo.',
      date: '20 de Março, 2024',
      category: 'Direito Digital',
      readTime: '8 min',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop&crop=center',
      author: 'Dra. Patricia Moreira'
    },
    {
      slug: 'nova-lei-protecao-dados',
      title: 'Nova Lei de Proteção de Dados: O que sua empresa precisa saber',
      excerpt: 'Entenda as principais mudanças na legislação de proteção de dados e como adequar sua empresa às novas normas.',
      date: '15 de Março, 2024',
      category: 'Direito Digital',
      readTime: '5 min',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=250&fit=crop&crop=center',
      author: 'Dr. João Silva'
    },
    {
      slug: 'direitos-trabalhistas-2024',
      title: 'Direitos Trabalhistas: Principais mudanças em 2024',
      excerpt: 'Conheça as alterações na legislação trabalhista que podem impactar sua empresa e seus funcionários.',
      date: '10 de Março, 2024',
      category: 'Direito Trabalhista',
      readTime: '7 min',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&crop=center',
      author: 'Dra. Maria Santos'
    },
    {
      slug: 'planejamento-sucessorio',
      title: 'Planejamento Sucessório: Protegendo o patrimônio familiar',
      excerpt: 'Estratégias jurídicas para garantir a transferência segura do patrimônio para as próximas gerações.',
      date: '5 de Março, 2024',
      category: 'Direito Civil',
      readTime: '6 min',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop&crop=center',
      author: 'Dr. Carlos Oliveira'
    },
    {
      slug: 'recuperacao-judicial',
      title: 'Recuperação Judicial: Como salvar sua empresa da falência',
      excerpt: 'Entenda quando e como utilizar a recuperação judicial como ferramenta de reestruturação empresarial.',
      date: '1 de Março, 2024',
      category: 'Direito Empresarial',
      readTime: '8 min',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop&crop=center',
      author: 'Dra. Ana Costa'
    },
    {
      slug: 'direito-imobiliario-2024',
      title: 'Direito Imobiliário: Novas regulamentações em 2024',
      excerpt: 'As principais mudanças no mercado imobiliário e como elas afetam compradores e vendedores.',
      date: '25 de Fevereiro, 2024',
      category: 'Direito Imobiliário',
      readTime: '6 min',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop&crop=center',
      author: 'Dr. Pedro Lima'
    },
    {
      slug: 'crimes-ciberneticos',
      title: 'Crimes Cibernéticos: Como se proteger no mundo digital',
      excerpt: 'Entenda os principais crimes digitais e como empresas podem se proteger legalmente.',
      date: '20 de Fevereiro, 2024',
      category: 'Direito Penal',
      readTime: '5 min',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop&crop=center',
      author: 'Dr. João Silva'
    }
  ];

  const categories = ['Todos', 'Direito Digital', 'Direito Trabalhista', 'Direito Civil', 'Direito Empresarial', 'Direito Imobiliário', 'Direito Penal'];

  const filteredPosts = selectedCategory === 'Todos' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white-pure">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-dark">
          <div className="container mx-auto px-6 text-center">
            <span className="text-gold-primary font-body font-semibold text-lg">
              Conhecimento Jurídico
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white-pure mt-2 mb-6">
              Blog e Notícias
            </h1>
            <p className="text-white-soft text-xl max-w-3xl mx-auto font-body">
              Mantenha-se atualizado com as principais mudanças na legislação, análises jurídicas e dicas importantes para empresas e pessoas físicas.
            </p>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-12 bg-gray-light">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-body font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gold-primary text-dark-primary shadow-gold'
                      : 'bg-white-pure text-gray-dark hover:bg-gold-primary hover:text-dark-primary hover:shadow-gold'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.slug} className="card-premium overflow-hidden hover-lift fade-in-up">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gold-primary text-dark-primary px-3 py-1 rounded-full text-sm font-body font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta */}
                    <div className="flex items-center justify-between text-sm text-gray-medium font-body mb-3">
                      <time>{post.date}</time>
                      <span className="flex items-center">
                        <i className="far fa-clock mr-1"></i>
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl font-semibold text-dark-primary mb-3 hover:text-gold-primary transition-colors duration-300">
                      <Link to={`/blog/${post.slug}`} className="gold-underline">
                        {post.title}
                      </Link>
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-medium font-body leading-relaxed mb-4">
                      {post.excerpt}
                    </p>

                    {/* Author & Read More */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-medium font-body">
                        Por {post.author}
                      </span>
                      <Link to={`/blog/${post.slug}`}>
                        <Button variant="outline-premium" size="sm">
                          Leia Mais
                          <i className="fas fa-arrow-right ml-2"></i>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline-premium">
                <i className="fas fa-plus mr-2"></i>
                Carregar Mais Artigos
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-gradient-dark">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="font-display text-3xl font-bold text-white-pure mb-4">
                Receba Atualizações Jurídicas
              </h3>
              <p className="text-white-soft text-lg mb-8 font-body">
                Inscreva-se em nossa newsletter e receba as principais mudanças na legislação diretamente em seu e-mail.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="flex-1 px-4 py-3 rounded-lg border border-gold-primary/30 bg-dark-secondary/50 text-white-pure placeholder-white-soft/70 focus:outline-none focus:border-gold-primary transition-colors duration-300"
                />
                <Button variant="premium">
                  <i className="fas fa-envelope mr-2"></i>
                  Inscrever-se
                </Button>
              </div>

              <p className="text-white-soft/70 text-sm mt-4 font-body">
                Seus dados estão seguros conosco. Sem spam, apenas conteúdo relevante.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogList;