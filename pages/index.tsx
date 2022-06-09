import { Button } from "antd";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold font-sans underline">Hello world!</h1>
      <p className=" font-bold font-fancy text-xl">Hello world!</p>

      <Button size="large" type="primary">
        Button
      </Button>

      <Button
        size="large"
        type="primary"
        className="bg-secondary border-secondary  ml-3  rounded-lg"
      >
        Button
      </Button>
    </div>
  );
};

export default Home;
