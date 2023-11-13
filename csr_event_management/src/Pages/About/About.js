import React from "react";
import AboutImg from "../../assets/About.png"
import "./About.css";

const About = () => {
    return (
        <>
            {/* <div className="section"></div> */}
            <div className="container">
                <div className="c1">
                    <div className="title">
                        <h1>About Us</h1>
                        <img src={AboutImg} height="300" width="300" alt="" />
                    </div>
                    <div className="image-section">
                    </div>
                    <div className="content">
                        <div className="article">
                            <h3>The university sports control board organizing training / coaching camps of different games and sports teams of the University, with the help of our Director Sports, Sports Officer, Asst. Sports Officers and Coaches. The University has set up sports board with the purpose of conducting inter campus sport tournaments, preparing and coaching of university team for the Inter university tournaments and
                                send teams for the East Zone / All India and Odisha university tournaments.</h3>
                            <p>The aim of sports is to the university sports control board organizing training / coaching camps of different games and
                                sports teams of the University, with the help of our Director Sports, Sports Officer, Asst. Sports Officers and Coaches.The University has set up sports board with the purpose of conducting inter campus sport
                                tournaments, preparing and coaching of university team for the Inter university tournaments and
                                send teams for the East Zone / All India and Odisha university tournaments.University Sports Control Board was established in its present form in 2019, with the objective
                                of promoting sportsmanship and team spirit among the university students.


                                Organizing such games and sports activities that are recognized by the board and promoting Inter University
                                fellowship by organizing and taking part in tournaments and extending assistance to constituent
                                campuses.</p>

                            <div className="button">
                                <a href="#read more">Read More</a>
                            </div>
                        </div>
                    </div>

                    <div className="social">
                        <a href="#facebook"><i className="fab fa-facebook-f"></i></a>
                        <a href="#facebook"><i className="fab fa-twitter"></i></a>
                        <a href="#facebook"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </>
    );
};
export default About;
