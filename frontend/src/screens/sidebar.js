import React, { useState } from "react";
import logo from '../ui/logo.svg';

function Sidebar() {
    const [nav, setNav] = useState([
        { label: "Home", slug: "/", icon: "icon-home" },
        { label: "Discover", slug: "discover", icon: "icon-list2" },
        { label: "Categories", slug: "categories", icon: "icon-price-tags" },
        { label: "My Courses", slug: "my-courses", icon: "icon-briefcase" }
    ])

    const [currentPage, seCurrentPage] = useState("/")
    var navigation = [];
    for (let index = 0; index < nav.length; index++) {
        navigation.push(
            <li key={"nav " + index + " " + nav[index].slug}>
                <a href={nav[index].slug} className={"aic link noul flex c333 " + (currentPage == nav[index].slug ? " on" : "")}>
                    <div className={"ico s15 " + nav[index].icon} />
                    <h2 className="lbl s15">{nav[index].label}</h2>
                </a>
            </li>
        )
    }

    return (
        <div className="sidebar rel">
            <a href="#" className="logo bl">
                <img src={logo} className="bl" atl="logo" title="logo" />
            </a>
            <ul className="nav">
                {navigation}
            </ul>
            <div className="updated-course flex aic">
                <div className="icon icon-checkbox-checked s15 cfff" />
                <div className="lbl s15 fontb c333">
                    Updated Course
                    <h2 className="author s13 c777">by Vincent Oti</h2>
                </div>
            </div>

            <div className="stats flex aic">
                <div className="stats-box flex">
                    <div className="ico icon-home s20 icon-points" />
                    <h2 className="val s15 c333 fontb">1800</h2>
                    <h2 className="lbl s13 c777">Points</h2>
                </div>
                <div className="stats-box flex">
                    <div className="ico icon-home s20 icon-battery" />
                    <h2 className="val s15 c333 fontb">45.3%</h2>
                    <h2 className="lbl s13 c777">Complete</h2>
                </div>
            </div>

            <div className="me flex aic">
                <div className="photo s24 cfff">
                    <img src="http://placeimg.com/100/100/people" className="bl" alt="profile-pic" />
                </div>
                <div className="lbl s15 fontb c333">
                    Vincent Oti
                    <h2 className="uname s13 c777">@mrvincentoti</h2>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;