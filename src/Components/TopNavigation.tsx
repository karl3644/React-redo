import { Link } from "react-router-dom";

export default function TopNavigation() {
  const links = ["Landing", "FakeShop", "Crud"];
  return (
    <nav>
      <ul>
        {links.map((link) => (
          <Link to={`/Main/${link}`} key={link}>
            {link}
          </Link>
        ))}
      </ul>
    </nav>
  );
}
