import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const spotlightProjects = {
      "Coppellia Sim Robot": {
        title: "Coppellia Sim Robot",
        desc:
          "A robot with sensors in a Simulated enviroment navigating through it using diffrent decision making algorithms.",
        techStack: "Python,Jupyter Notebook",
        link: "https://github.com/Ibrahimsulu/LINE_FOLLOWING_ROBOT",
        image: "/assets/robot.jpg"
      },
      Database: {
        title: "Movie Reviews",
        desc:
          "A webapp for storing movie reviews using a Firebase Database.",
        techStack: "JAVASCRIPT, HTML, CSS",
        link: "https://github.com/Ibrahimsulu/Movie-reviews",
        image: "/assets/books.jpg"
      },
      "Bank": {
        title: "Bank Sim",
        desc:
          "A Java program simulates a bank account that processes deposits and withdrawals as separate Akka actor messages, ensuring concurrency-safe updates to the account balance",
        techStack: "Java",
        link: "https://github.com/Ibrahimsulu/BANK_SIM",
        image: "/assets/bank.jpg"
      },
      "Carer App": {
        title: "Carer App",
        desc:
          "A carer app for elderly amd the carers",
        techStack: "HTML,CSS,JAVASCRIPT,PHP,MYSQL",
        link: "https://github.com/Ibrahimsulu/SPEC_PROJECT",
        image: "/assets/spec.png"
      }
    };
    // const projects = {
    //   "TDSB Homework Management Interface": {
    //     desc:
    //       "An application created for Toronto District School Board, with a Flask back-end and a Vue front-end.",
    //     techStack: "Python (Flask), Vue.js, Bootstrap, SQL",
    //     link: "https://github.com/gazijarin/TDSBHomeworkManagement",
    //     open: "https://tdsb-app.herokuapp.com/"
    //   },
    //   "Adam A.I.": {
    //     desc:
    //       "A self-learning A.I. that learns to traverse through a complex maze using the genetic algorithm.",
    //     techStack: "Javascript, HTML / CSS",
    //     link: "https://github.com/gazijarin/adamai",
    //     open: "https://gazijarin.github.io/AdamAI/"
    //   },
    //   "Distributed Logging and Monitoring System": {
    //     desc:
    //       "A system that establishes an ORM connection to a Prisma client in order to communicate logs from microservices.",
    //     techStack: "Node.js (Express.js), React.js, PostgreSQL",
    //     link:
    //       "https://github.com/gazijarin/Distributed-Logging-and-Monitoring-System"
    //   },
    //   "Odin Bot": {
    //     desc:
    //       "A Telegram bot that helps you excel on your daily tasks through Node NLP.",
    //     techStack: "Javascript, Node.js, Natural NLP, Telegram API",
    //     link: "https://github.com/gazijarin/OdinBot",
    //     open: ""
    //   },
    //   "Game Centre": {
    //     desc:
    //       "An Android app consisting of three board games, including multiplayer, autosave, user authentication, etc.",
    //     techStack: "Java, Android Studio",
    //     link: "https://github.com/gazijarin/gamecentre",
    //     open: ""
    //   },
    //   "Minimax Stonehenge": {
    //     desc:
    //       "Two-player, zero-sum game with a strategic Minimax artificial intelligence.",
    //     techStack: "Python",
    //     link: "https://github.com/gazijarin/stonehenge",
    //     open: ""
    //   }
    // };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ pet projects</span>
        </div>
        <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        {/* <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div> */}
      </div>
    );
  }
}

export default Projects;
