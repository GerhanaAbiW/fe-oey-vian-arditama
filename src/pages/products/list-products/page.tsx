import { useListProducts } from "./hooks";

const ListProductsPage = () => {
  const { data, isLoading } = useListProducts();
  if (isLoading) return <p>Loading...</p>;
  if (!data || data.length === 0) return <p>No products found.</p>;
  return (
    <div>
      <h1>{data.length} List of Products</h1>
    </div>
  );
};

export default ListProductsPage;
