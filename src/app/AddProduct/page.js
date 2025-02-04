"use client";

import { useState } from "react";
import addProduct from "../apis/productApi";

const AddProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    image: "",
    description: "",
    price: "",
  });
  // const [addProduct] = useAddProductMutation();
  // const navigate = useNavigate();

  const changeHandler = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const changeImageHandler = async (e) => {
    e.preventDefault();

    const file = e.target.files[0];
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "final-project");
    data.append("cloud_name", "dtk2ucppn");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dtk2ucppn/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const result = await res.json();
    setProduct({ ...product, image: result.secure_url });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    addProduct(product);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-200">
      <div className="w-full max-w-md p-8 space-y-6 bg-slate-300 rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Add Products</h2>
        <form className="space-y-4" name="sign-up" onSubmit={submitHandler}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              value={product.title}
              name="title"
              onChange={changeHandler}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <input
              type="text"
              value={product.description}
              onChange={changeHandler}
              name="description"
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              type="number"
              value={product.price}
              name="price"
              onChange={changeHandler}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Image
            </label>
            <input
              type="file"
              name="image"
              onChange={changeImageHandler}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
