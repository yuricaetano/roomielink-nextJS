import Link from "next/link";
import Image from "next/image";
import "./styles.css";

export function Header() {
  return (
    <header className="header">
        <div>
            <Link href="/">
                <Image 
                src="/logoPreto.png" 
                alt="Logo" 
                width={100} 
                height={10} 
                className="logo"
                />
            </Link>
            <nav className="nav">
                <Link href="/login" className="nav-link">
                Entrar
                </Link>
                <Link href="/cadastro" className="nav-link">
                Cadastrar
                </Link>
                <Link href="/quero-anunciar" className="nav-button">
                Quero Anunciar
                </Link>
            </nav>
        </div>
    </header>
  );
}