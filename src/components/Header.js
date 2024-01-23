import React from "react";
import Image from "next/image";

function Header() {
  return (
    <div className="flex items-center justify-between py-4">
      <Image src="/logo.png" alt="logo" width={140} height={48} />
      <Image src="/menu.png" alt="logo" width={30} height={30} />
    </div>
  );
}

export default Header;
