import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-mesa-primary text-mesa-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold font-playfair-display">
          Mesa a Três
        </Link>
        <div className="space-x-4">
          <Link href="/" className="hover:text-mesa-secondary transition-colors">
            Início
          </Link>
          <Link href="/sobre-nos" className="hover:text-mesa-secondary transition-colors">
            Sobre Nós
          </Link>
          <Link href="/nossos-servicos" className="hover:text-mesa-secondary transition-colors">
            Nossos Serviços
          </Link>
          <Link href="/galeria" className="hover:text-mesa-secondary transition-colors">
            Galeria
          </Link>
          <Link href="/contato" className="hover:text-mesa-secondary transition-colors">
            Contato
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

