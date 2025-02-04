"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
const addProduct = async (product) => {
  console.log(product);

  const res = await fetch("http://localhost:5000/products", {
    method: "POST",
    body: JSON.stringify(product),
    headers: {
      "Content-Type": "application/json",
    },
  });
  revalidatePath("/");
  redirect("/");
};
export default addProduct;
