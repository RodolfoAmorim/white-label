import Link from "next/link";
import { Input } from "../form/input";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";

export function Footer({ name }: { name: string }) {
  return (
    <footer className="bg-main-800 text-main-50 w-full pt-20 pb-6">
      <div className="container mx-auto flex flex-col items-center justify-start gap-8 px-6 lg:flex-row lg:flex-wrap lg:items-start">
        <div className="order-1 w-full xl:w-auto">
          <h4 className="text-center text-3xl leading-tight font-black tracking-tighter">
            {name}
          </h4>
        </div>

        <div className="order-3 space-y-8 text-center md:flex md:w-full md:items-start md:gap-4 md:space-y-0 lg:order-2 lg:flex-1">
          <div className="w-full space-y-4 md:flex-1">
            <h5 className="footer-group-title">Sobre Nós</h5>

            <ul className="footer-links-group">
              <li>
                <Link href={"/"}>Sobre a {name}</Link>
              </li>
              <li>
                <Link href={"/"}>Comunidade</Link>
              </li>
              <li>
                <Link href={"/"}>Acessibilidade</Link>
              </li>
              <li>
                <Link href={"/"}>Blog</Link>
              </li>
            </ul>
          </div>

          <div className="w-full space-y-4 md:flex-1">
            <h5 className="footer-group-title">Minha Conta</h5>

            <ul className="footer-links-group">
              <li>
                <Link href={"/"}>Resumo</Link>
              </li>
              <li>
                <Link href={"/"}>Favoritos</Link>
              </li>
              <li>
                <Link href={"/"}>Vender</Link>
              </li>
            </ul>
          </div>

          <div className="w-full space-y-4 md:flex-1">
            <h5 className="footer-group-title">Contato</h5>

            <ul className="footer-links-group">
              <li>
                <Link href={"/"}>Comprar</Link>
              </li>
              <li>
                <Link href={"/"}>Vender</Link>
              </li>
              <li>
                <Link href={"/"}>Solução de Problemas</Link>
              </li>
              <li>
                <Link href={"/"}>Segurança</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="order-2 w-full space-y-6 lg:order-3 lg:max-w-102.75 lg:flex-1">
          <h5 className="footer-group-title">Receba as novidades</h5>

          <div className="w-full space-y-3 xl:flex xl:flex-wrap xl:items-center xl:gap-4 xl:space-y-0">
            <Input.Root>
              <Input.Field placeholder="Seu nome" />
            </Input.Root>

            <Input.Root className="xl:w-auto xl:flex-1">
              <Input.Field placeholder="Seu e-mail" />
            </Input.Root>

            <button className="text-main-700 bg-main-100 flex h-10 w-full items-center justify-center rounded-xl px-4 leading-tight font-semibold tracking-wide xl:w-22">
              Enviar
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-10 flex flex-col-reverse items-center justify-center gap-6 px-6 xl:flex-row xl:justify-between">
        <p className="text-main-200 text-sm leading-tight tracking-wider">
          2026 &copy; Todos direitos reservados
        </p>

        <div className="flex items-center justify-center gap-2">
          <Link
            href={"/"}
            className="bg-main-600 text-main-200 rounded-xl p-1.5"
          >
            <FacebookIcon className="size-5" />
          </Link>

          <Link
            href={"/"}
            className="bg-main-600 text-main-200 rounded-xl p-1.5"
          >
            <InstagramIcon className="size-5" />
          </Link>

          <Link
            href={"/"}
            className="bg-main-600 text-main-200 rounded-xl p-1.5"
          >
            <YoutubeIcon className="size-5" />
          </Link>

          <Link
            href={"/"}
            className="bg-main-600 text-main-200 rounded-xl p-1.5"
          >
            <TwitterIcon className="size-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
