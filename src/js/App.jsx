import React, {useRef} from 'react';
import {BroadcastsBlock, InstallBlock, MainBlock} from "./components";
// import {MainBlock, InstallBlock, BroadcastsBlock} from "./components";

export const App = () => {
    const installBlockRef = useRef(null)
    const broadcastRef = useRef(null)

    return (
        <main>
            <MainBlock installBlockRef={installBlockRef}/>
            <InstallBlock installBlockRef={installBlockRef} broadcastRef={broadcastRef}/>
            <BroadcastsBlock broadcastRef={broadcastRef}/>
        </main>
    )
};
