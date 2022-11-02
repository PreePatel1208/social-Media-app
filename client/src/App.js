import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import { AuthProvider } from "./context/auth";
import AuthRoute from "./utils/AuthRoute";
import "semantic-ui-css/semantic.min.css";
import MenuBar from "./components/MenuBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SinglePost from "./pages/SinglePost";
import { ErrorBoundary } from 'react-error-boundary'
import ExceptionHandler, { BuggyCounter } from "./components/ExceptionHandler";
import "./App.css";



function App() {

    function ErrorFallback({ error }) {
        return (
            <div role="alert">
                <p>Something went wrong:</p>
                <pre style={{ color: 'red' }}>{error.message}</pre>
            </div>
        )
    }

    return (
        <>
            {/* <ExceptionHandler/> */}
            {/* <h2>react error boundry</h2> */}
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <AuthProvider>
                    <Router>
                        <Container>
                            <MenuBar />
                            <Route exact path="/" component={Home} />
                            <AuthRoute exact path="/login" component={Login} />
                            <AuthRoute exact path="/register" component={Register} />
                            <Route exact path="/posts/:postId" component={SinglePost} />
                        </Container>
                    </Router>
                </AuthProvider>
            </ErrorBoundary>
        </>
    )

}

export default App;
