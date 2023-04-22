import React from "react";

//Components
import TheNav from "../Components/TheHeader/TheNav";

interface IProps {}

const TheHomePage: React.FC<IProps> = (props) => {
  return (
    <main>
      <TheNav />
    </main>
  );
};

export default TheHomePage;
