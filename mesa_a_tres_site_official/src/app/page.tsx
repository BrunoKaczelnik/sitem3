import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="text-center py-12 bg-mesa-secondary/20 rounded-lg shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-mesa-primary mb-6">
          Bem-Vindos à Mesa a Três!
        </h1>
        <p className="text-lg md:text-xl text-mesa-text max-w-3xl mx-auto mb-8">
          Onde Celebrações Ganham Vida e Sabor!
        </p>
        <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-8 rounded-full overflow-hidden shadow-2xl border-4 border-mesa-primary">
          <Image 
            src="/home/ubuntu/upload/.recovery/Imagem do WhatsApp de 2025-05-07 à(s) 13.02.50_35247a9c.jpg" 
            alt="Logo Mesa a Três" 
            layout="fill"
            objectFit="cover"
          />
        </div>
        <a 
          href="/contato"
          className="bg-mesa-primary text-mesa-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-opacity-80 transition-colors shadow-md"
        >
          Planeje Seu Evento Conosco
        </a>
      </section>

      <section className="py-10">
        <h2 className="text-3xl font-bold text-center text-mesa-primary mb-10">Nossa Essência</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-mesa-primary mb-3">Decoração Criativa</h3>
            <p className="text-mesa-text">
              Transformamos seus sonhos em ambientes únicos e personalizados, com atenção a cada detalhe.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-mesa-primary mb-3">Bolos Artísticos</h3>
            <p className="text-mesa-text">
              Criações que são verdadeiras obras de arte comestíveis, refletindo a alma da sua celebração.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-mesa-primary mb-3">Doces Gourmet</h3>
            <p className="text-mesa-text">
              Sabores que encantam e adoçam seus momentos, feitos com paixão e os melhores ingredientes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-mesa-primary mb-6">Unindo Paixões para Sua Celebração</h2>
        <p className="text-mesa-text text-lg leading-relaxed mb-4">
          Em um mundo que corre, parar para celebrar os momentos especiais é mais do que um luxo, é uma necessidade da alma. Na &quot;Mesa a Três&quot;, compreendemos profundamente o valor de cada sorriso, cada brinde, cada encontro que marca a vida. Nascemos da união de três paixões – a arte da decoração de eventos, a magia dos bolos artísticos e o encanto dos doces gourmet – para oferecer a você uma experiência completa e inesquecível na organização da sua celebração.
        </p>
        <p className="text-mesa-text text-lg leading-relaxed mb-4">
          Imagine um lugar onde a criatividade encontra a praticidade, onde a beleza se une ao sabor, e onde seus sonhos para um evento perfeito são cuidadosamente transformados em realidade. Esse lugar é a &quot;Mesa a Três&quot;. Sob a batuta de Isabela Bighe, especialista em dar vida a ambientes e criar atmosferas únicas, e com o talento culinário de Laura Lerner, mestra na arte dos brigadeiros que conquistam corações, e Beca, cujos bolos são verdadeiras obras de arte comestíveis, sua festa está destinada a ser memorável.
        </p>
        <p className="text-mesa-text text-lg leading-relaxed mb-4">
          Nossa proposta é simplificar sua jornada, oferecendo em um só lugar a expertise necessária para cuidar de detalhes cruciais do seu evento. Desde a concepção visual da decoração, passando pela escolha da papelaria exclusiva que reflete sua identidade, até a curadoria de materiais e, claro, a estrela da festa: um bolo deslumbrante acompanhado de doces que são pura poesia para o paladar. Nosso foco inicial são eventos de todos os portes, especialmente aniversários de jovens e mesas montadas que encantam pela riqueza de detalhes, mas estamos prontas para abraçar o desafio de transformar qualquer ocasião em um acontecimento único.
        </p>
        <p className="text-mesa-text text-lg leading-relaxed">
          Convidamos você a navegar pelo nosso site e descobrir um pouco mais sobre como podemos tornar seu próximo evento uma celebração autêntica, cheia de charme e, acima de tudo, com a sua cara. Explore nossos serviços, inspire-se com ideias e entre em contato para que possamos, juntas, começar a desenhar o seu momento especial. Na &quot;Mesa a Três&quot;, cada detalhe é pensado com carinho, porque acreditamos que celebrar é uma arte, e nós amamos ser suas artistas.
        </p>
      </section>
    </div>
  );
}

