import React, { useState } from "react";
import logo from '../ui/logo.svg';

function Rightbar() {
    return (
        <div className="rightbar rel">
            { /**Advanced Search */}
            <div className="section section-b rel">
                <h2 className="title s24 fontb"> Advanced <span className="fontn">Search</span></h2>
                <div className="search-box rel flex">
                    <input type="text" placeholder="Start Writing Something" className="qry s15 fontb" />
                    <button className="go cfff s15 fontb">Find</button>
                </div>
            </div>
        </div>
    )
}

export default Rightbar;