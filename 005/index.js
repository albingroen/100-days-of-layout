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
import profile_0 from "./assets/profiles/profile_0.jpg";
import profile_3 from "./assets/profiles/profile_3.jpg";
import profile_5 from "./assets/profiles/profile_5.jpg";
import profile_8 from "./assets/profiles/profile_8.jpg";
import profile_9 from "./assets/profiles/profile_9.jpg";
import profile_10 from "./assets/profiles/profile_10.jpg";
import profile_11 from "./assets/profiles/profile_11.jpg";

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
        <div
          className="profile"
          style={{
            backgroundImage: `url(${course.author.img})`
          }}
        />
        <span>{course.author.name}</span>
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
    author: {
      name: "Brad Traversy",
      img: profile_0
    }
  },
  {
    title: "Codeigniter",
    state: 3,
    category: "Backend development",
    description:
      "Learn Php Codeigniter and understand working with MVC and HMVC from zero to hero",
    author: {
      name: "InsideCode M"
    }
  },
  {
    title: "Laravel",
    state: 1,
    category: "Backend development",
    description:
      "Build a RESTful API for a market system using Laravel and dominates the challenging RESTful skills",
    author: {
      name: "JuanD MeGon"
    }
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
    }
  },
  {
    title: "AngularJS",
    state: 1,
    category: "Frontend development",
    description:
      "Master Angular 5 from the basics to building an advanced application with Firebase´s Firestore as well...",
    author: {
      name: "Brad Traversy",
      img: profile_0
    }
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
    }
  },
  {
    title: "Bootstrap",
    state: 3,
    category: "Web Design",
    description:
      "This tutorial has been prepared for anyone who has a basic knowledge of HTML and CSS to develop websites.",
    author: {
      name: "Janice Carroll"
    }
  },
  {
    title: "Firebase",
    state: 3,
    category: "Backend development",
    description:
      "Full-stack Development with Angular 8, Firestore, Firebase Storage&Hosting. Firebase Cloud Functions..",
    author: {
      name: "Wayne Patel"
    }
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
    }
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
    }
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
    }
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
    }
  }
];

const Dashboard = ({ images }) => (
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
        <Dashboard images={this.state.images} />
      </div>
    );
  }
}
