import type {ReactNode} from "react";

import {Provider} from "react-redux";
import {store} from "./store/store";
import {HelmetProvider} from "react-helmet-async";
import {ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {theme} from "./theme";

import "./i18n/index.ts";
import {Layout} from "./components/Layout";

type Props = {
    children: ReactNode;
};

const Providers = ({children}: Props) => {
    return (
        <Provider store={store}>
            <HelmetProvider>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <Layout>
                        {children}
                    </Layout>
                </ThemeProvider>
            </HelmetProvider>
        </Provider>
    );
};

export default Providers;