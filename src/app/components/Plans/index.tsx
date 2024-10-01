import { GridContainer } from "../GridContainer";
import { PlansCardFamily } from "./plans-family";
import { PlansCardIndividual } from "./plans-individual";

export function Plans() {
  return (
    <section className="mt-16 bg-blue-01">
      <GridContainer>
        <span className="inline-block font-medium text-sm text-white mt-8">
          Nossos Planos
        </span>
        <h2 className="font-bold text-3xl/8 text-white mt-1">
          Planos que cabem no seu bolso
        </h2>
        <div className="flex flex-col gap-8">
          <PlansCardFamily />
          <PlansCardIndividual />
        </div>
      </GridContainer>
    </section>
  );
}
