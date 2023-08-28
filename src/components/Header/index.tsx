import Link from "next/link";

interface HeaderProps {

}
export function Header(props : HeaderProps){
    return(
        <header className="w-full bg-[#f4f4f4] flex items-center justify-center h-12">
          <nav>
            <ul className="flex gap-5">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/cep-page">Formulario</Link></li>
              <li><Link href="/contact">Contato</Link></li>
            </ul>
          </nav>
        </header>
    )
}