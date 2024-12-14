import {ComponentPreviews, useInitial} from "./dev";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {HelmetProvider} from "react-helmet-async";
import {DevSupport} from "@react-buddy/ide-toolbox";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <HelmetProvider>
            <DevSupport
                ComponentPreviews={ComponentPreviews}
                useInitialHook={useInitial}
            >
                <App />
            </DevSupport>
        </HelmetProvider>
    </StrictMode>,
)