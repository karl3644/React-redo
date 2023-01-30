import { Link } from "react-router-dom";

export default function TopNavigation() {
  return (
    <nav>
      <ul>
        <Link to={"/Main/Landing"}>Main</Link>
        <Link to={"/Main/FakeShop"}>FakeShop</Link>
        <Link to={"/Main/CRUD"}>CRUD</Link>
      </ul>
    </nav>
  );
}
