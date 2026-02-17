import Image from "next/image";

import logo from "./assets/logo@2x.png";

const Header = () => (
  <div className="fixed right-0 left-0 z-1 bg-white p-8">
    <Image src={logo} alt="CareerMate AI logo" width={184} height={24} />
  </div>
);

export default Header;
