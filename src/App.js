/*
 ©Xiler - Arthurdw
 Xiler is under a CC0-1.0 License (View the license here: https://legal.xiler.net/license)
 By proceeding to this site you agree with our ToS. (View the tos here: https://legal.xiler.net/tos)
*/
import React from "react";
import loadable from '@loadable/component'

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";

// Pages:
const HomePage = loadable(() => import("./pages/"))
const PageNotFound = loadable(() => import("./pages/404"))

// Discord Bot community pages:
const EmbedGenerator = loadable(() => import("./pages/community/discord/generator"))

// Layouts
const Layout = loadable(() => import("./layouts/Layout"))

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" render={() => (
                        <Layout title="Home - Online service provider" url="">
                            <HomePage />
                        </Layout>
                    )} />
                    <Route exact path="/404" render={() => (
                        <Layout title="404 - Page not found" url="404">
                            <PageNotFound />
                        </Layout>
                    )} />
                    <Route exact path="/community/dc/embed_generator" render={() => (
                        <Layout title="Discord Embed Generator" url="community/dc/embed_generator">
                            <EmbedGenerator />
                        </Layout>
                    )} />
                    <Route exact path="/license" component={() => { window.location.href = "https://legal.xiler.net/license"; return null;  }} />
                    <Route exact path="/tos" component={() => { window.location.href = "https://legal.xiler.net/ToS"; return null; }} />
                    <Redirect exact path="/community/discord" to="/community/dc/embed_generator" />
                    <Redirect to="/404" />
                </Switch>
            </Router>
        );
    }
}

export default App;
