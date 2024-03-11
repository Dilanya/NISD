import React from "react";
import logo from "../images/logo.png";
import facebook from "../images/facebook.png";
import linkedin from "../images/linkedin.png";

import News from "../Pages/News";
import Home from "../Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewsSingle from "./SingleNews";
import Events from "../Pages/Events";
import EventSingle from "./SingleEvent";
import About from "../Pages/About";
import Boards from "../Pages/Boards";
import GoverningCouncil from "../Pages/GoverningCouncil";
import AAB from "../Pages/AAB";
import BGS from "../Pages/BGS";
import DG from "../Pages/DG";
import ADG from "../Pages/ADG";
import History from "../Pages/History";
import Undergraduate from "../Pages/Undergraduate";
import Postgraduate from "../Pages/Postgraduate";
import HigherDip from "../Pages/HigherDiploma";
import Diploma from "../Pages/Diploma";
import Certificates from "../Pages/Certificates";
import UpcomingCourses from "../Pages/UpcomingCorses";
import CoursesSingle from "./SingleCourses";
import Department from "../Pages/Department";
import Journals from "../Pages/Journel";
import Conference from "../Pages/Conference";
import Research from "../Pages/Research";
import CQA from "../Pages/CQA";
import Library from "../Pages/Library";
import International from "../Pages/International";
import Alumni from "../Pages/Alumni";
import Students from "../Pages/Students";
import StaffProfile from "./StaffProfile";

class Header extends React.Component {
  render() {
    return (
      <div>
        <div
          id="bottom-header"
          class="header-topbar"
          style={{ backgroundColor: "rgb(22, 11, 102)", fontSize: "20px" }}
        >
          <div class="container ">
            <div class="row">
              <div class="col-xs-12 col-sm-8 col-md-8">
                <div class="header-top_address">
                  <div class="header-top_list">
                    <a class="nav-link" href="/library">
                      Library<span class="sr-only">(current)</span>
                    </a>
                  </div>

                  <div class="header-top_list">
                    <a class="nav-link" href="/alumni">
                      Alumni<span class="sr-only">(current)</span>
                    </a>
                  </div>
                  <div class="header-top_list">
                    <a class="nav-link" href="/international">
                      International<span class="sr-only">(current)</span>
                    </a>
                  </div>
                  <div class="header-top_list">
                    <a class="nav-link" href="http://lms.nisd.ac.lk/">
                      LMS<span class="sr-only">(current)</span>
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="col-xs-12 col-sm-4 col-md-4"
                style={{ flexDirection: "row", width: "600px" }}
              >
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <a href="">
                    <img
                      src={facebook}
                      alt="fb"
                      className="socialmedia"
                      style={{
                        width: "24px",
                        height: "24px",
                        marginTop: "8px",
                        marginRight: "14px",
                      }}
                    />{" "}
                  </a>
                  <a href="">
                    <img
                      src={linkedin}
                      alt="linkedin"
                      className="socialmedia"
                      style={{
                        width: "24px",
                        height: "24px",
                        marginTop: "8px",
                        marginRight: "14px",
                      }}
                    />{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="bottom-header"
          data-toggle="affix"
          class="affix"
          style={{ backgroundColor: "white" }}
        >
          <div class="container nav-menu2">
            <div class="row">
              <div class="col-md-12">
                <nav class="navbar navbar2 navbar-toggleable-md navbar-light bg-faded">
                  <button
                    class="navbar-toggler navbar-toggler2 navbar-toggler-right"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                  >
                    <span class="icon-menu"></span>
                  </button>
                  <a href="/" className="navbar-brand nav-brand2">
                    <img
                      src={logo}
                      alt=""
                      style={{
                        width: "50px",
                        height: "50px",
                        marginRight: "10px",
                      }}
                    />
                  </a>
                  <a href="/" class="navbar-brand nav-brand2">
                    <h2 style={{ fontSize: "15px" }}>
                      <b>
                        National Institute of <br />
                        Social Development
                      </b>
                    </h2>
                  </a>
                  <div
                    class="collapse navbar-collapse justify-content-end"
                    id="navbarNavDropdown"
                  >
                    <ul class="navbar-nav">
                      <li class="nav-item dropdown">
                        <a
                          class="dropdown-toggle nav-link"
                          data-toggle="dropdown"
                          href="/about"
                        >
                          About
                          <span class="glyphicon glyphicon-chevron-down pull-right"></span>
                        </a>
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="/about">
                              The Institute
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="/boards">
                              Boards
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="/history-of-nisd">
                              Our History
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li class="nav-item dropdown">
                        <a
                          class="dropdown-toggle nav-link"
                          data-toggle="dropdown"
                          href="/undergraduate-degrees"
                        >
                          Courses
                          <span class="glyphicon glyphicon-chevron-down pull-right"></span>
                        </a>
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="/undergraduate-degrees">
                              Undergraduate Degrees
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="/postgraduate-degrees">
                              Postgraduate Degrees
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="/higher-diploma-courses">
                              Higher Diploma
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="/diploma-courses">
                              Diploma
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="/certificate-courses">
                              Certificates
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="/upcoming-courses">
                              Upcoming Courses
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li class="nav-item dropdown">
                        <a
                          href="academics.html"
                          class="dropdown-toggle nav-link"
                          data-toggle="dropdown"
                        >
                          Departments{" "}
                          <span class="glyphicon glyphicon-chevron-down pull-right"></span>
                        </a>
                        <ul class="dropdown-menu ">
                          <li>
                            <a class="dropdown-item" href="/department-of-social-work">
                              Department of Social Work & Social Sciences
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li class="nav-item dropdown">
                        <a
                          href="research.html"
                          class="dropdown-toggle nav-link"
                          data-toggle="dropdown"
                        >
                          Research
                          <span class="glyphicon glyphicon-chevron-down pull-right"></span>
                        </a>
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="/research">
                              Research
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="/journals">
                              Journals
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="/conference">
                              Conference
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item dropdown">
                        <a
                          href="/students"
                          class="dropdown-toggle nav-link"
                          data-toggle="dropdown"
                        >
                          Students
                          <span class="glyphicon glyphicon-chevron-down pull-right"></span>
                        </a>
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="/students">
                              Students
                            </a>
                          </li>
                          
                          
                          <li>
                            <a class="dropdown-item" href="/gallery">
                              Gallery
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/staff">
                          Staff
                        </a>
                      </li>
                      <li class="nav-item dropdown">
                        <a
                          href="academics.html"
                          class="dropdown-toggle nav-link"
                          data-toggle="dropdown"
                        >
                          Servicers
                          <span class="glyphicon glyphicon-chevron-down pull-right"></span>
                        </a>
                        <ul class="dropdown-menu">
                          <li class="dropdown">
                            <a
                              class="dropdown-item dropdown-toggle"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                              href="#"
                            >
                              Centres & Units
                            </a>
                            <ul class="dropdown-menu dropdown-menu1">
                            <li>
                                <a class="dropdown-item" href="/centre-for-quality-assurance">
                                  Centre for Quality Assurance
                                </a>
                              </li>
                              <li>
                                <a class="dropdown-item" href="index-3.html">
                                  Examination Unit
                                </a>
                              </li>
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="centre-fro-gender-studies"
                                >
                                  Centre for Gender Studies
                                </a>
                              </li>
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="/medical-center"
                                >
                                  Medical Center
                                </a>
                              </li>
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="/student-welfare-center"
                                >
                                  Student Welfare Center
                                </a>
                              </li>
                              <li>
                                <a class="dropdown-item" href="/it-center">
                                  IT Center
                                </a>
                              </li>
                              <li>
                                <a class="dropdown-item" href="/regional-centers">
                                  Regional Centers
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a class="dropdown-item" href="/downloads">
                              Downloads
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <BrowserRouter>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/news" Component={News} />
            <Route path="/news/:id/:title" element={<NewsSingle />} />
            <Route path="/events" Component={Events} />
            <Route path="/events/:id/:title" element={<EventSingle />} />
            <Route path="/about" Component={About} />
            <Route path="/boards" Component={Boards} />
            <Route path="/governing-council" Component={GoverningCouncil} />
            <Route path="/academic-affairs-board" Component={AAB} />
            <Route path="/board-of-graduate-studies" Component={BGS} />
            <Route path="/director-general" Component={DG} />
            <Route path="/additional-director-general" Component={ADG} />
            <Route path="/history-of-nisd" Component={History} />
            <Route path="/undergraduate-degrees" Component={Undergraduate} />
            <Route path="/postgraduate-degrees" Component={Postgraduate} />
            <Route path="/higher-diploma-courses" Component={HigherDip} />
            <Route path="/diploma-courses" Component={Diploma} />
            <Route path="/certificate-courses" Component={Certificates} />
            <Route path="/upcoming-courses" Component={UpcomingCourses} />
            <Route path="/course-detail" Component={CoursesSingle} />
            <Route path="/department-of-social-work" Component={Department} />
            <Route path="/research" Component={Research} />
            <Route path="/conference" Component={Conference} />
            <Route path="/journals" Component={Journals} />
            <Route path="/centre-for-quality-assurance" Component={CQA} />
            <Route path="/library" Component={Library} />
            <Route path="/international" Component={International} />
            <Route path="/alumni" Component={Alumni} />
            <Route path="/students" Component={Students} />
            <Route path="/staff-profile" Component={StaffProfile} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default Header;
