import { useErrorStore } from "@/stores/useErrorStore/store";

const ErrorPage = () => {
  const { error } = useErrorStore();
  return (
    <div>
      <h1>Error</h1>
      <p>{error}</p>
    </div>
  );
};

export default ErrorPage;
