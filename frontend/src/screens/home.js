import React, { useState } from "react";

import course1 from "../ui/course1.png";
import course2 from "../ui/course2.jpg";

function HomePage() {
    const [popularCourse, setPopularCourse] = useState([
        {
            ID: 1,
            title: "Learning How To Create A Beautiful Scenes In Illustrator in 60 mins",
            tutor: {
                ID: 1,
                name: "Lana Marandina",
                username: "marandina",
                dp: "http://placeimg.com/100/100/people-" + 1
            },
            duration: "82 mins",
            poster: course1
        },
        {
            ID: 2,
            title: "Creating a beautiful potriate illustration. Learn the tricks and techniques",
            tutor: {
                ID: 2,
                name: "Uran Design",
                username: "urancd",
                dp: "http://placeimg.com/100/100/people-" + 2
            },
            duration: "1 hr 20 mins",
            poster: course2
        }
    ]);

    const [topTutors, setTopTutors] = useState([
        {
            ID: 1,
            name: "Lana Marandina",
            username: "marandina",
            dp: "http://placeimg.com/100/100/people?tutors-" + 1
        },
        {
            ID: 2,
            name: "Lana Marandina",
            username: "marandina",
            dp: "http://placeimg.com/100/100/people?tutors-" + 2
        },
        {
            ID: 3,
            name: "Lana Marandina",
            username: "marandina",
            dp: "http://placeimg.com/100/100/people?tutors-" + 3
        },
        {
            ID: 4,
            name: "Lana Marandina",
            username: "marandina",
            dp: "http://placeimg.com/100/100/people?tutors-" + 4
        },
        {
            ID: 5,
            name: "Lana Marandina",
            username: "marandina",
            dp: "http://placeimg.com/100/100/people?tutors-" + 5
        },
        {
            ID: 6,
            name: "Lana Marandina",
            username: "marandina",
            dp: "http://placeimg.com/100/100/people?tutors-" + 6
        }
    ]);

    // Live Tutor List
    var tutorList = [];
    for (let i = 0; i < 8; i++) {
        tutorList.push(
            <button className="tutor rel" key={"tutor-live-" + i}>
                <img src={"http://placeimg.com/100/100/people?tutor" + i} className="bl" alt="tutor" />
            </button>
        );
    }

    // Popular This Week List
    var courseList = [];
    for (let i = 0; i < popularCourse.length; i++) {
        courseList.push(
            <a href="#" className="course rel" key={"popular-course-" + i}>
                <div className="block" style={{
                    background: "#e2e2e2 url(" + popularCourse[i].poster + ") no-repeat center"
                }}>

                    <div className="user abs flex aic">
                        <div className="pic">
                            <img src={popularCourse[i].tutor.dp} alt="tutor dp" className="bl" />
                        </div>
                        <div className="meta rel">
                            <h2 className="s15 fontb cfff name">{popularCourse[i].tutor.name}</h2>
                            <h2 className="s13 fontn cfff uname">@{popularCourse[i].tutor.username}</h2>
                        </div>
                    </div>

                    <div className="dura abs">
                        <h2 className="s13 fontb cfff name">{popularCourse[i].duration}</h2>
                    </div>

                    <div className="course-title abs">
                        <h2 className="s15 fontb cfff name">{popularCourse[i].title}</h2>
                    </div>
                </div>
            </a>
        );
    }

    // To Tutors List
    var topTutorsList = [];
    for (let i = 0; i < topTutors.length; i++) {
        topTutorsList.push(
            <a href="#" className="user-block rel noul" key={"popular-course-" + i}>
                <div className="user flex aic">
                    <div className="pic">
                        <img src={topTutors[i].dp} alt="tutor dp" className="bl" />
                    </div>
                    <div className="meta rel">
                        <h2 className="s15 fontb c333 name">{topTutors[i].name}</h2>
                        <h2 className="s13 fontn c333 uname">@{topTutors[i].username}</h2>
                    </div>
                </div>
            </a>
        );
    }

    return (
        <div className="home-page rel">
            { /**Tutors Live Now */}
            <div className="section rel">
                <h2 className="title s24 fontb"> Streaming <span className="fontn">Now</span></h2>
                <div className="tutors rel flex">
                    {tutorList}
                </div>
            </div>

            { /**Popular This Week */}
            <div className="section section-b rel">
                <h2 className="title s24 fontb"> Popular <span className="fontn">This Week</span></h2>
                <div className="courses rel flex">
                    {courseList}
                </div>
            </div>

            { /**Top Tutors */}
            <div className="section section-b rel">
                <h2 className="title s24 fontb"> Top <span className="fontn">Tutors</span></h2>
                <div className="top-tutors rel flex">
                    {topTutorsList}
                </div>
            </div>
        </div>
    )
}

export default HomePage;