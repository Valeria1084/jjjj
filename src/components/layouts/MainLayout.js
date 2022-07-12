import React from 'react';
import {Outlet} from "react-router";

import Header from "../header/Header";


function MainLayout() {
    return (
        <div>
        <Header/>
            <h2>Contrnt</h2>
            <Outlet/>
        </div>
    );
}

export {MainLayout};