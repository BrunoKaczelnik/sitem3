"use client";

// import type { Metadata } from "next"; // Metadata não pode ser exportada de client components
import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  nomeCompleto: string;
  email: string;
  telefone: string;
  tipoEvento: string;
  dataEvento: string;
  numConvidados: string;
  localEvento: string;
  servicosInteresse: string[];
  outroServico: string;
  temaEstiloCores: string;
  referenciasVisuais: string;
  orcamento: string;
  comoConheceu: string;
  observacoes: string;
}

export default function ContatoPage() {
  const [formData, setFormData] = useState<FormData>({
    nomeCompleto: '',
    email: '',
    telefone: '',
    tipoEvento: '',
    dataEvento: '',
    numConvidados: '',
    localEvento: '',
    servicosInteresse: [],
    outroServico: '',
    temaEstiloCores: '',
    referenciasVisuais: '',
    orcamento: '',
    comoConheceu: '',
    observacoes: '',
  });

  const [formStatus, setFormStatus] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prevData => ({
        ...prevData,
        servicosInteresse: checked 
          ? [...prevData.servicosInteresse, value] 
          : prevData.servicosInteresse.filter(item => item !== value)
      }));
    } else {
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('Enviando...');
    // Aqui você integraria com um backend ou serviço de email
    // Por enquanto, vamos simular o envio e mostrar uma mensagem
    console.log("Dados do formulário:", formData);
    setTimeout(() => {
      setFormStatus('Formulário enviado com sucesso! Entraremos em contato em breve.');
      setFormData({
        nomeCompleto: '',
        email: '',
        telefone: '',
        tipoEvento: '',
        dataEvento: '',
        numConvidados: '',
        localEvento: '',
        servicosInteresse: [],
        outroServico: '',
        temaEstiloCores: '',
        referenciasVisuais: '',
        orcamento: '',
        comoConheceu: '',
        observacoes: '',
      });
    }, 2000);
  };

  const servicosOptions = [
    "Decoração Personalizada Completa",
    "Apenas Bolo Artístico",
    "Apenas Doces Gourmet",
    "Pacote de Bolo e Doces",
    "Papelaria Personalizada (convites, menus, etc.)",
    "Itens Personalizados (copos, taças, lembrancinhas, etc.)",
    "Consultoria e Curadoria de Materiais para Decoração",
    "Pacote Completo (Decoração, Bolo, Doces, Papelaria)"
  ];

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-mesa-primary mb-4">Contato</h1>
        <p className="text-xl text-mesa-text max-w-2xl mx-auto">
          Vamos Conversar Sobre Sua Celebração?
        </p>
      </header>

      <section className="max-w-3xl mx-auto">
        <p className="text-lg text-mesa-text leading-relaxed mb-6">
          A &quot;Mesa a Três&quot; está ansiosa para ouvir suas ideias e ajudar a transformá-las em um evento memorável. Se você está sonhando com uma celebração especial, seja um aniversário, um chá, uma pequena confraternização ou qualquer outro momento que mereça ser comemorado com estilo e carinho, entre em contato conosco. Queremos entender seus desejos, apresentar nossas soluções e, juntos, darmos o primeiro passo para a realização do seu evento.
        </p>
        <p className="text-lg text-mesa-text leading-relaxed mb-8">
          Para que possamos conhecer um pouco mais sobre o que você tem em mente, preparamos um breve questionário introdutório. Suas respostas nos ajudarão a direcionar nossa conversa inicial e a pensar nas melhores propostas para você. Após o envio, entraremos em contato o mais breve possível!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-mesa-primary mb-4">1. Informações de Contato</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nomeCompleto" className="block text-sm font-medium text-mesa-text mb-1">Nome Completo *</label>
                <input type="text" name="nomeCompleto" id="nomeCompleto" value={formData.nomeCompleto} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-mesa-primary focus:border-mesa-primary" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-mesa-text mb-1">Email para Contato *</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-mesa-primary focus:border-mesa-primary" />
              </div>
              <div>
                <label htmlFor="telefone" className="block text-sm font-medium text-mesa-text mb-1">Telefone para Contato (com DDD) *</label>
                <input type="tel" name="telefone" id="telefone" value={formData.telefone} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-mesa-primary focus:border-mesa-primary" />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-mesa-primary mb-4">2. Sobre o Evento</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="tipoEvento" className="block text-sm font-medium text-mesa-text mb-1">Tipo de Evento *</label>
                <input type="text" name="tipoEvento" id="tipoEvento" value={formData.tipoEvento} onChange={handleChange} placeholder="Ex: Aniversário Adulto, Chá de Bebê" required className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-mesa-primary focus:border-mesa-primary" />
              </div>
              <div>
                <label htmlFor="dataEvento" className="block text-sm font-medium text-mesa-text mb-1">Data Prevista (ou período)</label>
                <input type="text" name="dataEvento" id="dataEvento" value={formData.dataEvento} onChange={handleChange} placeholder="DD/MM/AAAA" className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-mesa-primary focus:border-mesa-primary" />
              </div>
              <div>
                <label htmlFor="numConvidados" className="block text-sm font-medium text-mesa-text mb-1">Número Estimado de Convidados</label>
                <input type="number" name="numConvidados" id="numConvidados" value={formData.numConvidados} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-mesa-primary focus:border-mesa-primary" />
              </div>
              <div>
                <label htmlFor="localEvento" className="block text-sm font-medium text-mesa-text mb-1">Local do Evento (se definido)</label>
                <input type="text" name="localEvento" id="localEvento" value={formData.localEvento} onChange={handleChange} placeholder="Cidade/Bairro ou nome do local" className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-mesa-primary focus:border-mesa-primary" />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-mesa-primary mb-4">3. Serviços de Interesse</h2>
            <p className="text-sm text-mesa-text mb-2">Quais serviços da &quot;Mesa a Três&quot; mais te interessam? (Pode marcar mais de uma opção)</p>
            <div className="space-y-2">
              {servicosOptions.map(servico => (
                <div key={servico} className="flex items-center">
                  <input 
                    type="checkbox" 
                    id={servico.replace(/\s+/g, '-')}
                    name="servicosInteresse"
                    value={servico}
                    checked={formData.servicosInteresse.includes(servico)}
                    onChange={handleChange}
                    className="h-4 w-4 text-mesa-primary border-gray-300 rounded focus:ring-mesa-primary"
                  />
                  <label htmlFor={servico.replace(/\s+/g, '-') } className="ml-2 block text-sm text-mesa-text">
                    {servico}
                  </label>
                </div>
              ))}
              <div className="flex items-center">
                <input type="checkbox" id="outro-servico-check" name="outroServicoCheck" onChange={e => { if (!e.target.checked) setFormData(prev => ({...prev, outroServico: ''})) }} className="h-4 w-4 text-mesa-primary border-gray-300 rounded focus:ring-mesa-primary"/>
                <label htmlFor="outro-servico-check" className="ml-2 block text-sm text-mesa-text">Outro (especifique):</label>
                <input type="text" name="outroServico" id="outroServico" value={formData.outroServico} onChange={handleChange} className="ml-2 flex-1 p-1 border border-gray-300 rounded-md shadow-sm focus:ring-mesa-primary focus:border-mesa-primary" />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-mesa-primary mb-4">4. Detalhes e Inspirações</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="temaEstiloCores" className="block text-sm font-medium text-mesa-text mb-1">Você tem algum tema, estilo ou paleta de cores em mente?</label>
                <textarea name="temaEstiloCores" id="temaEstiloCores" value={formData.temaEstiloCores} onChange={handleChange} rows={3} className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-mesa-primary focus:border-mesa-primary"></textarea>
              </div>
              <div>
                <label htmlFor="referenciasVisuais" className="block text-sm font-medium text-mesa-text mb-1">Referências visuais (links do Pinterest, Instagram, etc.)?</label>
                <textarea name="referenciasVisuais" id="referenciasVisuais" value={formData.referenciasVisuais} onChange={handleChange} rows={3} className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-mesa-primary focus:border-mesa-primary"></textarea>
              </div>
              <div>
                <label htmlFor="orcamento" className="block text-sm font-medium text-mesa-text mb-1">Orçamento estimado (Opcional)</label>
                <input type="text" name="orcamento" id="orcamento" value={formData.orcamento} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-mesa-primary focus:border-mesa-primary" />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-mesa-primary mb-4">5. Como nos Conheceu?</h2>
            <div>
              <label htmlFor="comoConheceu" className="block text-sm font-medium text-mesa-text mb-1">Como você conheceu a &quot;Mesa a Três&quot;?</label>
              <input type="text" name="comoConheceu" id="comoConheceu" value={formData.comoConheceu} onChange={handleChange} placeholder="Ex: Indicação, Instagram, Pesquisa no Google" className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-mesa-primary focus:border-mesa-primary" />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-mesa-primary mb-4">6. Observações Adicionais</h2>
            <div>
              <label htmlFor="observacoes" className="block text-sm font-medium text-mesa-text mb-1">Alguma observação adicional, pedido especial ou dúvida?</label>
              <textarea name="observacoes" id="observacoes" value={formData.observacoes} onChange={handleChange} rows={4} className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-mesa-primary focus:border-mesa-primary"></textarea>
            </div>
          </div>

          <div className="text-center">
            <button 
              type="submit"
              className="bg-mesa-primary text-mesa-white px-10 py-3 rounded-md text-lg font-semibold hover:bg-opacity-80 transition-colors shadow-md disabled:opacity-50"
              disabled={formStatus === 'Enviando...'}
            >
              {formStatus === 'Enviando...' ? 'Enviando...' : 'Enviar Questionário'}
            </button>
            {formStatus && formStatus !== 'Enviando...' && (
              <p className={`mt-4 text-sm ${formStatus.includes('sucesso') ? 'text-green-600' : 'text-red-600'}`}>{formStatus}</p>
            )}
          </div>
        </form>

        <hr className="my-12 border-gray-300" />

        <div className="text-center">
          <h2 className="text-2xl font-semibold text-mesa-primary mb-4">Outras Formas de Contato</h2>
          <p className="text-mesa-text mb-2">Se preferir, você também pode nos contatar diretamente:</p>
          <p className="text-mesa-text"><strong>Email:</strong> contato@mesaatres.com.br (Sugestão)</p>
          <p className="text-mesa-text"><strong>Telefone/WhatsApp:</strong> (XX) 9XXXX-XXXX (Sugestão)</p>
          <p className="text-mesa-text">
            <strong>Instagram:</strong> 
            <a href="#" /* Substituir pelo link real */ className="text-mesa-primary hover:underline">@usuarioInstagramMesaATres</a> (Sugestão)
          </p>
        </div>
      </section>
    </div>
  );
}

