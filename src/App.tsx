import { FC } from "react";
import { Theme } from "@radix-ui/themes";
import Navigator from "./viewports/Navigator";
import { BrowserRouter } from "react-router";
import "@radix-ui/themes/styles.css";
import "./index.css";

const App: FC = () => {
  return (
    <Theme appearance="dark">
      <BrowserRouter>
        <Navigator />
      </BrowserRouter>
    </Theme>
  );
};

export default App;
