import Image from "next/image";

import logo1 from "@/app/components/SignUp/Showcase/components/Advantages/components/PoweredByAI/assets/logo1.png";
import logo2 from "@/app/components/SignUp/Showcase/components/Advantages/components/PoweredByAI/assets/logo2.png";
import logo3 from "@/app/components/SignUp/Showcase/components/Advantages/components/PoweredByAI/assets/logo3.png";
import logo4 from "@/app/components/SignUp/Showcase/components/Advantages/components/PoweredByAI/assets/logo4.png";

const PoweredByAI = () => (
  <div className="mt-auto flex gap-2 *:flex-1">
    {[
      { name: "logo1", image: logo1 },
      { name: "logo2", image: logo2 },
      { name: "logo3", image: logo3 },
      { name: "logo4", image: logo4 },
    ].map((logo) => (
      <div
        key={logo.name}
        className="flex items-center justify-center rounded-full bg-black p-2 odd:mb-6 even:mt-6"
      >
        <Image src={logo.image} alt={logo.name} />
      </div>
    ))}
  </div>
);

export default PoweredByAI;
