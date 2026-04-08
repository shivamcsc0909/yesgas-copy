import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Ensure dataLayer exists for GTM
(window as any).dataLayer = (window as any).dataLayer || [];

createRoot(document.getElementById("root")!).render(<App />);
