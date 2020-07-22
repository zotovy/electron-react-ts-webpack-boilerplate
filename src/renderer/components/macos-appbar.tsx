import React from "react";
import { remote } from "electron";
import "@public/styles/appbar.css";

const MacOSAppBar: React.FC = () => {

    const window = remote.getCurrentWindow();

    const minimize = () => window.minimize();
    const maximize = () => window.isMaximized() ? window.unmaximize() : window.maximize();
    const close = () => window.close();

    return <div className="appbar">
        <div className="appbar-menu-buttons">
            <div className="appbar-menu-button" onClick={close} id="close"></div>
            <div className="appbar-menu-button" onClick={minimize} id="minimize"></div>
            <div className="appbar-menu-button" onClick={maximize} id="zoom"></div>
        </div>
        <div className="appbar-menu-drag">
            <div className="appbar-menu-title">Notepad</div>
        </div>
    </div>
}

export default MacOSAppBar;