import { StrictMode } from "react";
import "./styles.css";
import { CalendarApp } from "./CalendarApp";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <>
    <CalendarApp />
  </>
);
