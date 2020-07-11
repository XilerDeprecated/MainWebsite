/*
 ©Xiler - Arthurdw
 Xiler is under a CC0-1.0 License (View the license here: https://legal.xiler.net/license)
 By proceeding to this site you agree with our ToS. (View the tos here: https://legal.xiler.net/tos)
*/
import React from "react";

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";

// Pages:
import HomePage from "./pages/"
import PageNotFound from "./pages/404"

// Discord Bot community pages:
import EmbedGenerator from "./pages/community/discord/generator"

// Layouts
import Layout from "./layouts/Layout";

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" render={() => (
                        <Layout>
                            <HomePage />
                        </Layout>
                    )} />
                    <Route exact path="/404" render={() => (
                        <Layout>
                            <PageNotFound />
                        </Layout>
                    )} />
                    <Route exact path="/community/dc/embed_generator" render={() => (
                        <Layout>
                            <EmbedGenerator />
                        </Layout>
                    )} />
                    <Route exact path="/license" component={() => { window.location.href = "https://legal.xiler.net/license"; return null;  }} />
                    <Route exact path="/tos" component={() => { window.location.href = "https://legal.xiler.net/ToS"; return null; }} />
                    <Redirect exact path="/community/discord" to="/community/dc/embed_generator" />
                    {/* <Redirect to="/404" /> */}
                </Switch>
            </Router>
        );
    }
}

export default App;
