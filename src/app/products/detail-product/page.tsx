"use client";
import { useDetailProduct } from "./hooks";

const DetailProductPage = () => {
  const { data, error, isLoading } = useDetailProduct("product-id");
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>No product found.</p>;
  return (
    <div>
      <h1>Detail Product</h1>
      <p>{data.name}</p>
    </div>
  );
};

export default DetailProductPage;
