import Link from "next/link";
const links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Counter",
    route: "/counter",
  },
];

export function Navigation () {
    return (
        <header>
        <nav>
          <ul>
            {links.map(({ label, route }) => (
              <li key={route}>
                <Link href={route}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
}