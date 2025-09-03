import { useDashboard } from "./hooks";

const DashboardPage = () => {
  const { data, error, isLoading } = useDashboard();
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>No dashboard data found.</p>;
  return (
    <div>
      <h1>Dashboard</h1>
      <p>{data[0].title}</p>
    </div>
  );
};

export default DashboardPage;
