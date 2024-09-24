import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { ErrorBoundary } from "@/app/providers/ErrorBoundary";
import { ErrorMessage } from "@/widgets/ErrorMessage";
import App from "./app/App";
import "./app/styles/index.scss";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ErrorBoundary fallback={<ErrorMessage />}>
            <BrowserRouter>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </BrowserRouter>
        </ErrorBoundary>
    </StrictMode>,
);
