import React from "react";
import { createRoot } from "react-dom/client";
import Main from "./userRoute/Main";
import "./styles.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<Main />);