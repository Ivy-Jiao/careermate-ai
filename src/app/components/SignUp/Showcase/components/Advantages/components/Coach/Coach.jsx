import Image from "next/image";

import user1 from "@/app/components/SignUp/Showcase/components/Advantages/components/Coach/assets/user1.png";
import user2 from "@/app/components/SignUp/Showcase/components/Advantages/components/Coach/assets/user2.png";
import user3 from "@/app/components/SignUp/Showcase/components/Advantages/components/Coach/assets/user3.png";
import user4 from "@/app/components/SignUp/Showcase/components/Advantages/components/Coach/assets/user4.png";

const Coach = () => (
  <div className="flex">
    {[
      { name: "User 1", image: user1 },
      { name: "User 2", image: user2 },
      { name: "User 3", image: user3 },
      { name: "User 4", image: user4 },
    ].map((user) => (
      <Image
        key={user.name}
        src={user.image}
        alt={user.name}
        width={56}
        height={56}
        className="rounded-full border-2 border-white not-first:-ml-6"
      />
    ))}
  </div>
);

export default Coach;
