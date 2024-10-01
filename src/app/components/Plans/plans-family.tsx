import { Button } from "../Button";
import { Fire } from "./fire";
import { SymbolCard } from "./symbol-card";

export function PlansCardFamily() {
  return (
    <div className="relative bg-white w-80 h-96 border-2 border-blueCustom-blue05 rounded-lg mt-4 px-4 py-5 overflow-hidden xl:w-[350px] xl:h-[400px]">
      <div className="absolute top-4 right-4 z-20">
        <SymbolCard className="relative z-30 -top-8 -right-12" />
      </div>

      <div className="flex w-36 h-9 gap-2 bg-orange-600 rounded-3xl p-2 xl:p4">
        <Fire />
        <span className="text-white font-medium xl:text-base">
          Mais popular
        </span>
      </div>

      <h3 className="text-xl font-medium text-blue-01 mt-2">Seguro de</h3>
      <h2 className="text-4xl font-bold text-blue-01">Carro</h2>
      <p className="text-xl font-medium text-blue-05 mt-6">
        Oferecemos proteção contra roubo e furto, indenização a terceiros,
        assistência 24 horas, guincho e cobertura em todo o país.
      </p>
      <div className="flex justify-center mt-4">
        <a href="https://api.whatsapp.com/send?phone=5543999958270">
          <Button variant="primary">Faça sua Cotação</Button>
        </a>
      </div>
    </div>
  );
}
