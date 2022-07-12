import React from 'react';
import {Outlet} from "react-router";
import {CommentsComponent} from "../components";


function CommentsPagets() {
    return (
        <div>
            <Outlet/>
            <CommentsComponent/>
        </div>
    );
}

export{CommentsPagets};