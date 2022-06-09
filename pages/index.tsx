import { Button } from "antd";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold font-sans underline">
        Next + ANTD + TAILWINDCSS
      </h1>
      <h2 className=" font-bold font-fancy text-2xl">
        Next + AntD + TailwindCss is wonderful
      </h2>

      <p className="text-sm">
        This is a demo project to configure next js with antD and tailwindcss
      </p>

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
