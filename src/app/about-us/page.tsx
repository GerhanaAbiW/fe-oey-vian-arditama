import { useAboutUs } from "./hooks";

const AboutUsPage = () => {
  const { data, error, isLoading } = useAboutUs();
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>No about us data found.</p>;
  return (
    <div>
      <h1>About Us</h1>
      <p>{data[0].title}</p>
    </div>
  );
};

export default AboutUsPage;
