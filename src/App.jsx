import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Inicio from "./components/Inicio/Inicio";
import Proyectos from "./components/Proyectos/Proyectos";
import SobreMi from "./components/SobreMi/SobreMi";
import Nav from "./components/Nav/Nav";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function App() {
  const location = useLocation();



  return (
    <div>
      <Nav />

      <Routes>
        <Route
          path="/"
          element={
            <TransitionGroup>
              <CSSTransition key="home" classNames="fade" timeout={300}>
                <Inicio />
              </CSSTransition>
            </TransitionGroup>
          }
        />
        <Route
          path="/proyectos"
          element={
            <TransitionGroup>
              <CSSTransition key="proyectos" classNames="fade" timeout={300}>
                <Proyectos />
              </CSSTransition>
            </TransitionGroup>
          }
        />
        <Route
          path="/sobremi"
          element={
            <TransitionGroup>
              <CSSTransition key="about" classNames="fade" timeout={300}>
                <SobreMi />
              </CSSTransition>
            </TransitionGroup>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
