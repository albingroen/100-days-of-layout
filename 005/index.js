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
  faEllipsisV
} from "@fortawesome/free-solid-svg-icons";

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
      <div className="logo" />
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
    color: "#00c1ce"
  },
  {
    value: "Paused",
    background: "#fff4f3",
    color: "#ff7867"
  },
  {
    value: "Done",
    background: "#effaf5",
    color: "#4fd3a0"
  }
];

const Card = ({ course }) => (
  <div className="card">
    <header>
      <div className="left">
        <div className="icon" />
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
    </section>
    <hr />
    <footer>
      <div className="author">
        <div className="profile" />
        <span>{course.author}</span>
      </div>
      <button>Continue</button>
    </footer>
  </div>
);

const courses = [
  {
    title: "AngularJS",
    state: 1,
    category: "Frontend development",
    description:
      "Master Angular 5 from the basics to building an advanced application with Firebase´s Firestore as well...",
    author: "Brad Traversy"
  },
  {
    title: "Codeigniter",
    state: 3,
    category: "Backend development",
    description:
      "Learn Php Codeigniter and understand working with MVC and HMVC from zero to hero",
    author: "InsideCode M"
  },
  {
    title: "Laravel",
    state: 1,
    category: "Backend development",
    description:
      "Build a RESTful API for a market system using Laravel and dominates the challenging RESTful skills",
    author: "JuanD MeGon"
  },
  {
    title: "NodeJS",
    state: 1,
    category: "Backend development",
    description:
      "Dive deep under the hood of NodeJS. Learn V8, Express, the MEAN stack, core Javascript concepts, and more.",
    author: "Anthony Alicea"
  },
  {
    title: "AngularJS",
    state: 1,
    category: "Frontend development",
    description:
      "Master Angular 5 from the basics to building an advanced application with Firebase´s Firestore as well...",
    author: "Brad Traversy"
  },
  {
    title: "Sketch",
    state: 1,
    category: "UI / UX Design",
    description:
      "Finally a comprehensive guide to using Sketch for designing mobile. Learn to design an app from A to Z.",
    author: "Joseph Angelo"
  },
  {
    title: "Bootstrap",
    state: 3,
    category: "Web Design",
    description:
      "This tutorial has been prepared for anyone who has a basic knowledge of HTML and CSS to develop websites.",
    author: "Janice Carroll"
  },
  {
    title: "Firebase",
    state: 3,
    category: "Backend development",
    description:
      "Full-stack Development with Angular 8, Firestore, Firebase Storage&Hosting. Firebase Cloud Functions..",
    author: "Sara Perkins"
  },
  {
    title: "Github",
    state: 1,
    category: "Version Control",
    description:
      "Go from complete novice to expert in Git and GitHub using step-by-step, no-assumotions learning.",
    author: "Sara Perkins"
  },
  {
    title: "Principle",
    state: 2,
    category: "Interaction design",
    description:
      "Learn to prototype UI animations and micro-interactions using Sketch, Flinto, Principle, Marvel & Invision Craft Plugin",
    author: "Joshua Burton"
  },
  {
    title: "ReactJS",
    state: 1,
    category: "Frontend Development",
    description:
      "Dive in and learn React 16.8 from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js...",
    author: "Debra Oliver"
  },
  {
    title: "YII Framework",
    state: 1,
    category: "Backend Framework",
    description:
      "Fast track your web application development by harnessing the power of the YII PHP framework.",
    author: "Deborah Pena"
  }
];

const Dashboard = () => (
  <div className="dashboard">
    <h2>
      My courses for <span>"All Courses"</span>
    </h2>

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
        <Sidebar />
        <Dashboard />
      </div>
    );
  }
}
