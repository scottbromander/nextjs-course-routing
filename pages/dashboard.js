const Dashboard = ({ name, bio }) => {
  return (
    <>
      <h1>{name}</h1>
      <p>{bio}</p>
    </>
  );
};

Dashboard.getInitialProps = async () => {
  const response = await fetch(`https://api.github.com/users/scottbromander`);

  const user = response.json();
  return user;
};

export default Dashboard;
