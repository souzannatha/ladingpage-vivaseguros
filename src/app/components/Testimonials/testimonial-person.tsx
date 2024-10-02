import Image from "next/image";

interface TestimonialPersonProps {
  name: string;
  photo: string;
  description: string;
  retired: string;
}

export function TestimonialPerson({
  name,
  photo,
  description,
  retired,
}: TestimonialPersonProps) {
  return (
    <div className="flex items-center gap-4 w-[350px] h-60 xl:w-[762px] xl:h-[530px]">
      <div className="relative">
        <Image
          src={photo}
          width={170}
          height={250}
          alt="pessoa sorrindo"
          className="w-[170px] h-[250px] xl:w-96 xl:h-[500px]"
        />
        <Image
          src="quotes.svg"
          width={38}
          height={38}
          alt="ícone de aspas"
          className="absolute -left-3 -top-2 xl:w-20 xl:h-20 xl:-left-8 xl:-top-10"
        />
      </div>

      <div className="flex flex-col justify-center w-36 h-40 xl:w-80 xl:h-full">
        <h2 className="font-bold text-base text-blue-05 xl:text-4xl text-left">
          {name}
        </h2>
        <p className="font-bold text-xs text-blueBlack xl:text-xl text-left">
          {retired}
        </p>
        <p className="font-medium text-blueBlack text-sm xl:text-lg text-left">
          {description}
        </p>
      </div>
    </div>
  );
}
