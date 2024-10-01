import { GridContainer } from "../GridContainer";
import { BenefitsCard } from "./card-benefits";

export function SectionBenefits() {
  return (
    <section className="mt-20">
      <GridContainer>
        <span className="font-medium text-sm text-blue-05">
          Benefícios Exclusivos
        </span>
        <h2 className="font-bold text-3xl/8 text-blue-01 mt-1">
          Por que obter o Viva Multi Seguros?
        </h2>
        <div className="flex gap-4 mt-8 overflow-x-scroll overflow-y-hidden">
          <BenefitsCard
            icon="/symbol-dolar.svg"
            title="Economia Incomparavél"
            description="Sem juros, só taxas, menor custo e sem entrada."
            alt="icon"
          />
          <BenefitsCard
            icon="/symbol-plans.svg"
            title="Maior Flexibilidade"
            description="Escolha o valor e ajuste parcelas ao seu orçamento."
            alt="icon"
          />
          <BenefitsCard
            icon="/symbol-calendar.svg"
            title="Planejamento Financeiro"
            description="Um consórcio de  médio a longo prazo, incentiva planejamento e disciplina financeira."
            alt="icon"
          />
          <BenefitsCard
            icon="/symbol-percent.svg"
            title="Descontos Exclusivos"
            description="Aproveite descontos em seguros, coberturas e assistências."
            alt="icon"
          />
        </div>
      </GridContainer>
    </section>
  );
}
