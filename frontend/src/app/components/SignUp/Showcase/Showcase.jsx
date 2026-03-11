import Advantages from "@/app/components/SignUp/Showcase/components/Advantages";
import SubscribeLink from "@/app/components/SignUp/Showcase/components/SubscribeLink";
import UserReview from "@/app/components/SignUp/Showcase/components/UserReview";
import background from "@/app/components/SignUp/Showcase/assets/background@2x.png";
import Image from "next/image";

const Showcase = () => (
  <div className="relative p-8">
    <Image
      className="absolute"
      src={background}
      fill
      alt="showcase background"
    />
    <div className="relative h-full">
      <SubscribeLink />
      <UserReview />
      <Advantages />
    </div>
  </div>
);

export default Showcase;
