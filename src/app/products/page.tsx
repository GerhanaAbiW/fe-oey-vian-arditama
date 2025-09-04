"use client";
import { useProducts } from "./hooks";

const ProductsPage = () => {
  const { data, isLoading } = useProducts();
  if (isLoading) return <p>Loading...</p>;
  if (!data || data.length === 0) return <div>No products found.</div>;
  return (
    <div>
      <h1>{data.length} List of Products</h1>
    </div>
  );
};

export default ProductsPage;
