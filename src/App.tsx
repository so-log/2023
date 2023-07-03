import React from "react";
import { QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import Router from "./router";
import { queryClient } from "./queries";

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <RecoilRoot>
                <Router />
            </RecoilRoot>
        </QueryClientProvider>
    );
}

export default App;
