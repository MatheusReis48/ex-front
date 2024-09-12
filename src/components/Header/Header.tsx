import { Link } from "react-router-dom";

const Header = () => {
  // Info do usuário logado
  const username = "MatheusReis48";

  return (
    <header className="bg-white shadow-md p-4 flex items-center justify-between sticky top-0 z-50 w-full">
      <Link to="/" className="flex items-center space-x-2">
        <figure>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png"
            alt="Intagram Logo"
            className="h-8"
          />
        </figure>
      </Link>

      <Link to={`/${username}`} className="flex items-center space-x-2">
        <figure>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
            alt="User Profile"
            className="w-8 h-8 rounded-full"
          />
        </figure>
        <span className="font-semibold">{username}</span>
      </Link>
    </header>
  );
};

export default Header;
 