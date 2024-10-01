import Image from "next/image";
import { GridContainer } from "../GridContainer";
import { CurvedFace } from "./curved-face";
import { Logo } from "./logo";
import { MenuHamburguer } from "./menu-hamburguer";

export function Header() {
  return (
    <header
      className="h-[800px] relative overflow-hidden"
      style={{ backgroundImage: `url("/background-image.svg")` }}
    >
      <GridContainer className="py-6">
        <div className="flex justify-between items-center">
          <Logo />
          <MenuHamburguer />
        </div>
        <div className="mt-10">
          <p className="font-bold text-base/5  text-blue-header">
            Sua segurança em cada curva
          </p>
          <h1 className="font-bold text-white text-2xl/9 mt-1 ">
            A nova era da proteção veicular é agora!
          </h1>
          <p className="mt-2 text-white text-sm/relaxed ">
            Oferecemos seguro veicular completo, garantindo sua proteção e
            tranquilidade ao dirigir.
          </p>
          <div className="flex items-center bg-white rounded-lg w-52 h-14 p-2 gap-2 mt-6">
            <CurvedFace />
            <div>
              <p className="text-xs/4 text-blue-01 font-medium">
                Cadastre-se agora
              </p>
              <p className="text-sm/4 text-blue-01 font-bold">
                conheça nossas ofertas de seguro!
              </p>
            </div>
          </div>
        </div>
      </GridContainer>
      <Image
        src="./symbol-header.svg"
        width={555}
        height={600}
        alt="Símbolo do Viva Multi"
        className="mt-16"
      />
    </header>
  );
}
