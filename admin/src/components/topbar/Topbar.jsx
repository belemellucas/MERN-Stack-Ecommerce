import React from "react"; 
import "./topbar.css"; 
import { NotificationsNone, Language, Settings } from "@material-ui/icons"; 


export default function Tobar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topbarLeft">
                    <span className="logo">Akasha Admin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topabarIconContainer">
                        <Setting />
                    </div>
                    <img src="" />
                </div>
            </div>
        </div>
    )
}