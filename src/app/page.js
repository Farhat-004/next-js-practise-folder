import Image from "next/image";
import ProductCard from "./components/ProductCard";

export default async function Home() {
  const res = await fetch("http://localhost:5000/products");
  const products = await res.json();

  return (
    <div>
      <header className="bg-blue-100 py-12 text-center mb-5">
        <h1 className="text-4xl font-bold">Welcome to Our Shop</h1>
      </header>
      <main className="container mx-auto grid grid-cols-1 md:grid-cols-3 ">
        {products?.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </main>
    </div>
  );
}
