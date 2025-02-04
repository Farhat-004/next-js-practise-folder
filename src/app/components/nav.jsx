import Link from "next/link";
const Nav = () => {
  return (
    <>
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auhref flex justify-between items-center">
          <div className="text-white text-lg font-bold">Fortune</div>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-white hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/AddProduct"
                className="text-white hover:text-gray-300"
                Nav
              >
                Add Product
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="text-white hover:text-gray-300"
                Nav
              >
                Products
              </Link>
            </li>

            <li>
              <Link href="/contact" className="text-white hover:text-gray-300">
                Contact
              </Link>
            </li>

            <li>
              <Link href="/cart" className="text-white hover:text-gray-300">
                Cart
              </Link>
            </li>

            <li>
              <Link href="/about" className="text-white hover:text-gray-300">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
