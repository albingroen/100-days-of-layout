import "./style";
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
  faSignOutAlt
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

const Dashboard = () => <div className="dashboard">Dashboard</div>;

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
