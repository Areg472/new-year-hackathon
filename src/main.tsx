import {ComponentPreviews, useInitial} from "./dev";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {HelmetProvider} from "react-helmet-async";
import {DevSupport} from "@react-buddy/ide-toolbox";
import posthog from 'posthog-js'

posthog.init('phc_XQgkstCJjmQRzIJWB10I4QUMs1ihtNeLxCb0slcDlw0',
    {
        api_host: 'https://us.i.posthog.com',
        person_profiles: 'identified_only' // or 'always' to create profiles for anonymous users as well
    }
)

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <DevSupport
            ComponentPreviews={ComponentPreviews}
            useInitialHook={useInitial}
        >
            <HelmetProvider>
                    <App />
            </HelmetProvider>
        </DevSupport>
    </StrictMode>,
)