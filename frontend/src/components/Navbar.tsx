import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex gap-8 pt-4 justify-center">
      <Link to="/" className="font-Outfit text-xl hover:text-secondary cursor-pointer">
        First Page
      </Link>
      <Link to="/second" className="font-Outfit text-xl hover:text-secondary cursor-pointer">
        Second Page
      </Link>
    </div>
  );
};

export default Navbar;
