import type { FC } from "react";
import { DESCRIPTION, NAME, TITLE } from "../constants/personal-info";

const Header: FC = () => {
  return (
    <header className="bg-primary text-neutral grid gap-2 max-w-90">
      <h1 className="text-5xl font-bold">{NAME}</h1>
      <h2 className="text-2xl">{TITLE}</h2>
      <p className="text-lg text-neutral-400">{DESCRIPTION}</p>
    </header>
  );
};

export default Header;
