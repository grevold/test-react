import { Link } from "react-router-dom";
import { resources } from "../../resources";
import { navigation } from "../../resources";

import s from "./Header.module.css";

export function Header() {
  return (
    <header className={s.root}>
      {Object.values(navigation).map(({ href, text }) => (
        <Link key={href} to={href}>
          {text}
        </Link>
      ))}
    </header>
  );
}
