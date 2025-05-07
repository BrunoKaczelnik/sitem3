const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-mesa-text text-mesa-white p-6 text-center mt-auto">
      <div className="container mx-auto">
        <p className="text-sm">
          &copy; {currentYear} Mesa a Três. Todos os direitos reservados.
        </p>
        <p className="text-xs mt-1">
          Criando momentos inesquecíveis, uma celebração por vez.
        </p>
        {/* Adicionar links para redes sociais ou informações de contato adicionais se necessário */}
        {/* Exemplo:
        <div className="mt-2">
          <a href="https://instagram.com/usuarioInstagramMesaATres" target="_blank" rel="noopener noreferrer" className="hover:text-mesa-secondary transition-colors">
            Instagram
          </a>
        </div>
        */}
      </div>
    </footer>
  );
};

export default Footer;

