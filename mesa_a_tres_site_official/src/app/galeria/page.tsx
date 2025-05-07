import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galeria - Mesa a Três",
  description: "Inspire-se com os eventos realizados pela Mesa a Três.",
};

export default function GaleriaPage() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-mesa-primary mb-4">Galeria de Eventos</h1>
        <p className="text-xl text-mesa-text max-w-2xl mx-auto">
          Inspiração para Sua Próxima Celebração
        </p>
      </header>

      <section className="text-center">
        <p className="text-lg text-mesa-text leading-relaxed mb-6">
          Nesta seção, em breve, você encontrará um portfólio visual com alguns dos momentos mágicos que tivemos o prazer de ajudar a criar. A &quot;Mesa a Três&quot; se dedica a transformar cada evento em uma experiência única e memorável, e nada ilustra melhor nossa paixão e nosso trabalho do que as imagens das celebrações que realizamos.
        </p>
        <p className="text-lg text-mesa-text leading-relaxed mb-6">
          Estamos trabalhando para compilar nossas melhores fotos de decorações personalizadas, mesas montadas com carinho, bolos artísticos que encantam e doces gourmet que adoçam a vida. Você poderá navegar por diferentes tipos de eventos, desde aniversários vibrantes e cheios de personalidade até chás de bebê delicados e confraternizações elegantes.
        </p>
        <p className="text-lg text-mesa-text leading-relaxed mb-6">
          Enquanto preparamos este espaço com o cuidado que ele merece, convidamos você a imaginar o seu próprio evento. Pense nas cores, nos temas, nos sabores e nas sensações que você deseja proporcionar aos seus convidados. A &quot;Mesa a Três&quot; está aqui para ouvir suas ideias e transformá-las em realidade.
        </p>
        
        <div className="bg-mesa-secondary/10 p-6 rounded-lg shadow-inner mb-8">
          <h2 className="text-2xl font-semibold text-mesa-primary mb-4">O que você verá aqui em breve:</h2>
          <ul className="list-disc list-inside space-y-2 text-mesa-text text-left max-w-md mx-auto">
            <li><strong>Decorações Temáticas:</strong> Exemplos de como adaptamos temas e estilos para criar ambientes únicos.</li>
            <li><strong>Mesas Montadas:</strong> Detalhes de mesas de doces, mesas de convidados e outros arranjos que fazem a diferença.</li>
            <li><strong>Bolos e Doces em Destaque:</strong> Close-ups das nossas criações de confeitaria, mostrando a arte e o sabor.</li>
            <li><strong>Eventos Diversos:</strong> Uma amostra da nossa versatilidade em atender diferentes tipos de celebrações.</li>
          </ul>
        </div>

        <p className="text-lg text-mesa-text leading-relaxed">
          Aguarde! Estamos ansiosas para compartilhar com você um pouco da magia da &quot;Mesa a Três&quot;. Enquanto isso, sinta-se à vontade para entrar em contato e conversar sobre como podemos tornar seu próximo evento inesquecível. Siga-nos também no Instagram para inspirações diárias!
        </p>
        {/* Adicionar um placeholder para o feed do Instagram ou link direto */}
        <div className="mt-8">
          <a 
            href="#" /* Substituir pelo link real do Instagram */
            className="bg-mesa-primary text-mesa-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-opacity-80 transition-colors shadow-md"
          >
            Siga-nos no Instagram
          </a>
        </div>
      </section>
    </div>
  );
}

