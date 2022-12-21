import { Link } from "react-router-dom";
import { resources } from "../../resources";

import s from "./Header.module.css";

export function Header() {
  const { links } = resources.Header;

  return (
    <header className={s.root}>
      {links.map(({ href, text }) => (
        <Link key={href} to={href}>
          {text}
        </Link>
      ))}
    </header>
  );
}
