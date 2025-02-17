import { FC } from "react";
import { Theme } from "@radix-ui/themes";
import Navigator from "./viewports/Navigator";
import { BrowserRouter } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@radix-ui/themes/styles.css";
import "./index.css";

const queryClient = new QueryClient();

const App: FC = () => {
    return (
        <Theme appearance="dark">
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <Navigator />
                </BrowserRouter>
            </QueryClientProvider>
        </Theme>
    );
};

export default App;
