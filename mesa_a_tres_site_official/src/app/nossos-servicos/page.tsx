import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nossos Serviços - Mesa a Três",
  description: "Conheça os serviços oferecidos pela Mesa a Três para tornar seu evento inesquecível.",
};

export default function NossosServicosPage() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg space-y-10">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-mesa-primary mb-4">Nossos Serviços</h1>
        <p className="text-xl text-mesa-text max-w-2xl mx-auto">
          Criando Experiências Únicas e Saborosas para Sua Celebração.
        </p>
      </header>

      <section id="decoracao">
        <h2 className="text-3xl font-semibold text-mesa-primary mb-6">1. Decoração Personalizada e Curadoria de Materiais</h2>
        <p className="text-mesa-text leading-relaxed mb-4">
          Sob a liderança criativa de Isabela Bighe, nossa equipe de decoração trabalha para traduzir sua visão em realidade. Não se trata apenas de arranjos e objetos, mas de criar uma atmosfera que conte a sua história e envolva seus convidados. Realizamos:
        </p>
        <ul className="list-disc list-inside space-y-3 text-mesa-text pl-4 mb-6">
          <li>
            <strong>Concepção do Projeto de Decoração:</strong> Desenvolvemos um conceito visual exclusivo para seu evento, alinhado ao tema, estilo e paleta de cores desejados. Desde festas de aniversário temáticas para jovens até mesas montadas com elegância para diversas ocasiões.
          </li>
          <li>
            <strong>Curadoria de Materiais:</strong> Selecionamos cuidadosamente cada item que comporá o cenário da sua celebração. Embora ainda não tenhamos um acervo próprio completo, nossa expertise em curadoria nos permite encontrar e locar os melhores suplás, louças, boleiras, arranjos florais e demais peças decorativas em parceria com fornecedores especializados e de confiança. A &quot;Mesa a Três&quot; não cobra comissão sobre os valores de locação; o contrato e pagamento desses itens são feitos diretamente entre o cliente e o fornecedor, com nossa total assessoria na seleção e organização.
          </li>
          <li>
            <strong>Logística de Materiais:</strong> Coordenamos toda a logística de entrega e retirada dos materiais de decoração, garantindo que tudo esteja perfeito no dia do evento. Este serviço está incluso no nosso pacote de decoração.
          </li>
          <li>
            <strong>Montagem e Desmontagem:</strong> Nossa equipe cuida de toda a montagem do ambiente no local do evento e da desmontagem ao final, para sua total comodidade.
          </li>
        </ul>
      </section>

      <section id="bolos">
        <h2 className="text-3xl font-semibold text-mesa-primary mb-6">2. Bolos Artísticos por Beca</h2>
        <p className="text-mesa-text leading-relaxed mb-4">
          O bolo é, muitas vezes, o coração da celebração. Com o talento de Beca, oferecemos bolos que são verdadeiras obras de arte, personalizados para refletir o tema e a personalidade do seu evento. Cada bolo é:
        </p>
        <ul className="list-disc list-inside space-y-3 text-mesa-text pl-4 mb-6">
          <li><strong>Exclusivamente Desenhado:</strong> Criamos designs únicos, desde os mais clássicos e elegantes até os mais modernos e divertidos.</li>
          <li><strong>Sabor Incomparável:</strong> Utilizamos ingredientes de alta qualidade para garantir que, além de lindos, nossos bolos sejam deliciosos.</li>
          <li><strong>Adaptado à Ocasião:</strong> Seja um bolo de aniversário, um bolo temático para uma festa jovem ou uma criação especial para uma mesa montada, Beca dedica sua arte para superar suas expectativas.</li>
        </ul>
      </section>

      <section id="doces">
        <h2 className="text-3xl font-semibold text-mesa-primary mb-6">3. Doces Gourmet por Laura Lerner</h2>
        <p className="text-mesa-text leading-relaxed mb-4">
          Os doces de Laura Lerner são a assinatura de sabor e requinte que complementam qualquer mesa. Reconhecida por seus brigadeiros gourmet, Laura traz para a &quot;Mesa a Três&quot; uma variedade de delícias que conquistam pelo visual e pelo paladar:
        </p>
        <ul className="list-disc list-inside space-y-3 text-mesa-text pl-4 mb-6">
          <li><strong>Brigadeiros Gourmet:</strong> Uma seleção especial dos famosos brigadeiros de Laura, em sabores clássicos e inovadores.</li>
          <li><strong>Outros Doces Finos:</strong> Além dos brigadeiros, oferecemos outras opções de doces finos e personalizados para compor sua mesa, sempre com a qualidade e o carinho que são marcas registradas da Laura.</li>
          <li><strong>Harmonização com o Evento:</strong> Os doces podem ser personalizados em cores e formatos para se integrarem perfeitamente à decoração e ao tema da sua celebração.</li>
        </ul>
      </section>

      <section id="personalizados">
        <h2 className="text-3xl font-semibold text-mesa-primary mb-6">4. Itens Personalizados e Papelaria Exclusiva</h2>
        <p className="text-mesa-text leading-relaxed mb-4">
          Para adicionar um toque ainda mais especial e único ao seu evento, desenvolvemos itens personalizados e papelaria que seguem a identidade visual da sua celebração:
        </p>
        <ul className="list-disc list-inside space-y-3 text-mesa-text pl-4 mb-6">
          <li><strong>Criação da Identidade Visual do Evento:</strong> Se necessário, podemos desenvolver uma identidade visual específica para o seu evento, que será aplicada nos itens personalizados.</li>
          <li><strong>Itens Personalizados:</strong> Copos, taças, guardanapos, lembrancinhas, tags e outros detalhes que fazem a diferença e encantam os convidados. A produção desses itens é orçada à parte, conforme materiais e quantidades escolhidas.</li>
          <li><strong>Papelaria Exclusiva:</strong> Convites, menus, marcadores de lugar e outros itens de papelaria desenhados para complementar a decoração e o estilo do seu evento.</li>
        </ul>
      </section>

      <section className="bg-mesa-secondary/10 p-8 rounded-lg shadow-inner mt-12">
        <h2 className="text-3xl font-bold text-mesa-primary mb-6 text-center">Nosso Diferencial: A Sinergia do Trio</h2>
        <p className="text-mesa-text text-lg leading-relaxed mb-4">
          O grande diferencial da &quot;Mesa a Três&quot; é a conveniência e a harmonia de encontrar três serviços de alta qualidade – decoração, bolo e doces – em um único lugar. Essa integração garante que todos os elementos da sua festa conversem entre si, resultando em uma celebração coesa, elegante e com a sua assinatura.
        </p>
        <p className="text-mesa-text text-lg leading-relaxed">
          Nosso compromisso é com a excelência em cada detalhe, desde o planejamento até a execução, para que seu evento seja exatamente como você sonhou, ou ainda melhor. Entre em contato conosco para montarmos uma proposta personalizada para sua próxima celebração!
        </p>
      </section>
    </div>
  );
}

