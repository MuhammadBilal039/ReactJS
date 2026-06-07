import { useLoaderData } from "react-router-dom";

const About = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h1>About</h1>
      <div className="flex flex-wrap gap-5 justify-center">
        {data.map((user) => {
          return (
            <div className="w-60 p-4 bg-[lightseagreen] rounded-xl">
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
              <p>Website: {user.website}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
