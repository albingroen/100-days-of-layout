import "./style.scss";
import { Component } from "preact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faMedal,
  faClipboardList,
  faTrophy,
  faCalendarCheck,
  faAddressBook,
  faHeadset,
  faCog,
  faSignOutAlt,
  faEllipsisV,
  faAngleDown,
  faFilter,
  faBars,
  faThLarge,
  faSearch,
  faBell
} from "@fortawesome/free-solid-svg-icons";
import profile_0 from "./assets/profiles/profile_0.jpg";
import profile_3 from "./assets/profiles/profile_3.jpg";
import profile_5 from "./assets/profiles/profile_5.jpg";
import profile_8 from "./assets/profiles/profile_8.jpg";
import profile_9 from "./assets/profiles/profile_9.jpg";
import profile_10 from "./assets/profiles/profile_10.jpg";
import profile_11 from "./assets/profiles/profile_11.jpg";

import angular from "./assets/logos/angular.svg";
import bootstrap from "./assets/logos/bootstrap.png";
import codeigniter from "./assets/logos/codeigniter.png";
import firebase from "./assets/logos/firebase.png";
import github from "./assets/logos/github.png";
import html from "./assets/logos/html.png";
import laravel from "./assets/logos/laravel.png";
import node from "./assets/logos/node.png";
import principle from "./assets/logos/principle.png";
import react from "./assets/logos/react.png";
import sketch from "./assets/logos/sketch.png";
import yii from "./assets/logos/yii.png";
import user_img from "./assets/profile.jpg";

const sideBarItems = [
  {
    value: "Dashboard",
    icon: faHome
  },
  {
    value: "Badges",
    icon: faMedal
  },
  {
    value: "My courses",
    icon: faClipboardList
  },
  {
    value: "Completed Courses",
    icon: faTrophy
  },
  {
    value: "Code Challanges",
    icon: faCalendarCheck
  },
  {
    value: "Community",
    icon: faAddressBook
  }
];

const sideBarItemsBottom = [
  {
    value: "Help",
    icon: faHeadset
  },
  {
    value: "Settings",
    icon: faCog
  },
  {
    value: "Logout",
    icon: faSignOutAlt
  }
];

const Sidebar = () => (
  <div class="sidebar">
    <header>
      <img className="logo" src="./assets/logo.png" />
      <h3>E-Studieses</h3>
    </header>

    <h4>Main menu</h4>

    <ul>
      {sideBarItems.map(item => (
        <li>
          <i>
            <FontAwesomeIcon icon={item.icon} />
          </i>{" "}
          <span>{item.value}</span>
        </li>
      ))}
    </ul>

    <h4>Settings</h4>

    <ul>
      {sideBarItemsBottom.map(item => (
        <li>
          <i>
            <FontAwesomeIcon icon={item.icon} />
          </i>{" "}
          <span>{item.value}</span>
        </li>
      ))}
    </ul>
  </div>
);

const states = [
  {
    value: "Ongoing",
    background: "#ebf9fb",
    color: "#00c1ce",
    button: "Continue"
  },
  {
    value: "Paused",
    background: "#fff4f3",
    color: "#ff7867",
    button: "Continue"
  },
  {
    value: "Done",
    background: "#effaf5",
    color: "#4fd3a0",
    button: "Claim Reward"
  }
];

const Card = ({ course }) => {
  const getInitials = name => {
    const { length } = name;
    const letters = name.split("");

    const first = letters[0];
    const last = letters[length - 1];

    return `${first}${last}`;
  };

  return (
    <div className="card">
      <header>
        <div className="left">
          <img src={course.logo} alt="" className="icon" />
          <h3>{course.title}</h3>
          <div>__</div>
        </div>
        <div className="right">
          <div
            className="tag"
            style={{
              background: states[course.state - 1].background,
              color: states[course.state - 1].color
            }}
          >
            {states[course.state - 1].value}
          </div>

          <i>
            <FontAwesomeIcon icon={faEllipsisV} />
          </i>
        </div>
      </header>
      <section>
        <h4>{course.category}</h4>
        <p>{course.description}</p>
        <div className="range">
          <div className="fill" style={{ width: `${course.range}%` }}>
            <div className="content" />
            <div className="point" />
          </div>
        </div>
      </section>
      <footer>
        <div className="author">
          <div
            className="profile"
            style={{
              backgroundImage: `url(${course.author.img})`
            }}
          >
            {!course.author.img && <h4>{getInitials(course.author.name)}</h4>}
          </div>
          <span>{course.author.name}</span>
        </div>
        <button
          style={{
            color: states[course.state - 1].color
          }}
        >
          {states[course.state - 1].button}
        </button>
      </footer>
    </div>
  );
};

const courses = [
  {
    title: "AngularJS",
    state: 1,
    category: "Frontend development",
    description:
      "Master Angular 5 from the basics to building an advanced application with Firebase´s Firestore as well...",
    author: {
      name: "Brad Traversy",
      img: profile_0
    },
    logo: angular,
    range: 60
  },
  {
    title: "Codeigniter",
    state: 3,
    category: "Backend development",
    description:
      "Learn Php Codeigniter and understand working with MVC and HMVC from zero to hero",
    author: {
      name: "InsideCode M"
    },
    logo: codeigniter,
    range: 100
  },
  {
    title: "Laravel",
    state: 1,
    category: "Backend development",
    description:
      "Build a RESTful API for a market system using Laravel and dominates the challenging RESTful skills",
    author: {
      name: "JuanD MeGon"
    },
    logo: laravel,
    range: 10
  },
  {
    title: "NodeJS",
    state: 1,
    category: "Backend development",
    description:
      "Dive deep under the hood of NodeJS. Learn V8, Express, the MEAN stack, core Javascript concepts, and more.",
    author: {
      name: "Anthony Alicea",
      img: profile_3
    },
    logo: node,
    range: 10
  },
  {
    title: "Sketch",
    state: 1,
    category: "UI / UX Design",
    description:
      "Finally a comprehensive guide to using Sketch for designing mobile. Learn to design an app from A to Z.",
    author: {
      name: "Joseph Angelo",
      img: profile_5
    },
    logo: sketch,
    range: 55
  },
  {
    title: "Bootstrap",
    state: 3,
    category: "Web Design",
    description:
      "This tutorial has been prepared for anyone who has a basic knowledge of HTML and CSS to develop websites.",
    author: {
      name: "Janice Carroll"
    },
    logo: bootstrap,
    range: 100
  },
  {
    title: "Firebase",
    state: 3,
    category: "Backend development",
    description:
      "Full-stack Development with Angular 8, Firestore, Firebase Storage&Hosting. Firebase Cloud Functions..",
    author: {
      name: "Wayne Patel"
    },
    logo: firebase,
    range: 100
  },
  {
    title: "Github",
    state: 1,
    category: "Version Control",
    description:
      "Go from complete novice to expert in Git and GitHub using step-by-step, no-assumotions learning.",
    author: {
      name: "Sara Perkins",
      img: profile_8
    },
    logo: github,
    range: 80
  },
  {
    title: "HTML 5",
    state: 2,
    category: "Web Design",
    description:
      "This tutorial has been prepared for anyone to know the basic knowledge of HTML5 to develop websites.",
    author: {
      name: "Brad Traversy",
      img: profile_0
    },
    logo: html,
    range: 45
  },
  {
    title: "Principle",
    state: 2,
    category: "Interaction design",
    description:
      "Learn to prototype UI animations and micro-interactions using Sketch, Flinto, Principle, Marvel & Invision Craft Plugin",
    author: {
      name: "Joshua Burton",
      img: profile_9
    },
    logo: principle,
    range: 90
  },
  {
    title: "ReactJS",
    state: 1,
    category: "Frontend Development",
    description:
      "Dive in and learn React 16.8 from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js...",
    author: {
      name: "Debra Oliver",
      img: profile_10
    },
    logo: react,
    range: 60
  },
  {
    title: "YII Framework",
    state: 1,
    category: "Backend Framework",
    description:
      "Fast track your web application development by harnessing the power of the YII PHP framework.",
    author: {
      name: "Deborah Pena",
      img: profile_11
    },
    logo: yii,
    range: 90
  }
];

const Filter = () => (
  <div className="filter">
    <div className="filter-dropdown-wrapper">
      <button className="filter-dropdown-button">
        <span>
          Sort By: <span>All categories</span>
        </span>
        <i>
          <FontAwesomeIcon icon={faAngleDown} />
        </i>
      </button>
    </div>

    <i className="filter-button">
      <FontAwesomeIcon icon={faFilter} />
    </i>

    <div className="double-icons">
      <i>
        <FontAwesomeIcon icon={faBars} />
      </i>
      <i>
        <FontAwesomeIcon icon={faThLarge} />
      </i>
    </div>
  </div>
);

const Navbar = () => (
  <nav className="main-nav">
    <i className="hamburger">
      <FontAwesomeIcon icon={faBars} />
    </i>
    <div className="input-wrapper">
      <i>
        <FontAwesomeIcon icon={faSearch} />
      </i>
      <input type="text" placeholder="Quick Search..." />
    </div>
    <div className="user">
      <i>
        <FontAwesomeIcon icon={faBell} />
      </i>
      <div className="avatar" style={{ backgroundImage: `url(${user_img})` }} />
      <h3>Sergio Roberto</h3>
    </div>
  </nav>
);

const Dashboard = ({ images }) => (
  <div className="dashboard">
    <header className="dashboard-header">
      <h2>
        My courses for <span>"All Courses"</span>
      </h2>

      <Filter />
    </header>

    <div className="cards">
      {courses.map(course => (
        <Card course={course} />
      ))}
    </div>
  </div>
);

export default class App extends Component {
  render() {
    const design =
      "https://dribbble.com/shots/6849239-Online-Course-Dashboard-Card-View-Data";

    return (
      <div className="wrapper">
        <Navbar />
        <Sidebar />
        <Dashboard images={this.state.images} />
      </div>
    );
  }
}
