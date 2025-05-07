import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nós - Mesa a Três",
  description: "Conheça a equipe e a filosofia da Mesa a Três.",
};

export default function SobreNosPage() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-mesa-primary mb-8 text-center">Sobre Nós: A Arte de Celebrar em Trio</h1>
      
      <section className="mb-12">
        <p className="text-lg text-mesa-text leading-relaxed mb-6">
          Bem-vindos ao coração da &quot;Mesa a Três&quot;, um espaço onde a paixão por eventos se encontra com a expertise em criar momentos inesquecíveis. Somos Isabela Bighe, Laura Lerner e Beca, três amigas e empreendedoras que decidiram unir seus talentos e sonhos para oferecer uma solução completa e charmosa para suas celebrações.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-mesa-primary mb-6">Nossas Integrantes</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-mesa-secondary/10 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-mesa-primary mb-3">Isabela Bighe</h3>
            <p className="text-sm font-semibold text-mesa-primary mb-2">A Visionária da Decoração</p>
            <p className="text-mesa-text leading-relaxed">
              Com um olhar apurado para a estética e uma paixão por transformar espaços, Isabela é a mente criativa por trás das decorações da &quot;Mesa a Três&quot;. Sua experiência em eventos permite que ela compreenda os desejos de cada cliente, traduzindo personalidades e temas em ambientes que contam histórias e encantam os convidados. Para Isabela, cada evento é uma tela em branco, pronta para receber cores, texturas e elementos que reflitam a alegria do momento.
            </p>
          </div>
          <div className="bg-mesa-secondary/10 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-mesa-primary mb-3">Laura Lerner</h3>
            <p className="text-sm font-semibold text-mesa-primary mb-2">A Mestra dos Brigadeiros Gourmet</p>
            <p className="text-mesa-text leading-relaxed">
              Laura já é um nome conhecido por seus irresistíveis brigadeiros, que são mais do que doces, são pequenas joias de sabor. Trazendo sua marca de sucesso para a &quot;Mesa a Três&quot;, Laura adiciona uma camada de doçura e sofisticação a cada evento. Seus brigadeiros gourmet, feitos com ingredientes selecionados e uma dose extra de carinho, são a garantia de um toque especial que agrada a todos os paladares, desde os clássicos até os mais inovadores.
            </p>
          </div>
          <div className="bg-mesa-secondary/10 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-mesa-primary mb-3">Beca</h3>
            <p className="text-sm font-semibold text-mesa-primary mb-2">A Artista dos Bolos Esculpidos</p>
            <p className="text-mesa-text leading-relaxed">
              Os bolos de Beca são verdadeiras obras de arte. Com uma habilidade ímpar para criar designs que vão do elegante ao divertido, ela transforma o bolo no protagonista da mesa de doces. Cada criação é pensada nos mínimos detalhes, combinando sabor e beleza de forma harmoniosa. Para Beca, um bolo não é apenas uma sobremesa, mas uma peça central que celebra a ocasião e reflete a identidade do anfitrião.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-mesa-primary mb-6 text-center">Nossa Filosofia</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-mesa-text leading-relaxed mb-4 text-center">
            Celebrar com Alma e Praticidade
          </p>
          <p className="text-mesa-text leading-relaxed mb-4">
            A &quot;Mesa a Três&quot; nasceu do desejo de simplificar a organização de eventos, sem abrir mão da qualidade, da personalização e do toque humano. Acreditamos que, ao unir nossos talentos, podemos oferecer uma experiência mais fluida e completa para nossos clientes. Desde a primeira conversa até a execução final, nosso compromisso é com a sua satisfação e com a criação de memórias afetivas que durarão para sempre.
          </p>
          <p className="text-mesa-text leading-relaxed">
            Nosso foco é entender a sua visão e transformá-la em realidade, cuidando de cada detalhe para que você possa aproveitar ao máximo seu momento especial. Seja um aniversário vibrante, uma mesa de doces delicada para um chá, ou qualquer outra celebração que mereça ser única, estamos aqui para criar, decorar e adoçar com paixão e profissionalismo. Junte-se a nós nesta jornada de celebração e descubra como a &quot;Mesa a Três&quot; pode tornar seu próximo evento extraordinário.
          </p>
        </div>
      </section>
    </div>
  );
}

