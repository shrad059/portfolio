import React from "react";
import { Sidenav } from "rsuite";
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/SidebarNav.scss";

const isMobile = window.innerWidth < 600;

class SidebarNav extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    // this.setState({
    //   activeKey: eventKey
    // });
  }
  render() {
    const { expanded } = this.state;

    const links = [
      <a href="#intro">/home</a>,
      <a href="#about">/about</a>,
      <a href="#projects">/projects</a>
    ];

    return (
      <div className="sidebar-nav">
        {!isMobile && (
          <Sidenav
            expanded={expanded}
            defaultOpenKeys={["3", "4"]}
            // activeKey={this.state.activeKey}
            onSelect={this.handleSelect}
            appearance={"subtle"}
          >
            <Sidenav.Body>
              <div className="sidebar-links">
                {links.map((link, i) => (
                    <div>{link}</div>
                ))}
              </div>
            </Sidenav.Body>
          </Sidenav>
        )}
        <div className="icons" href="/">
          <a href="mailto:shraddhasingh059@gmail.com">
            <EmailRoundedIcon style={{ fontSize: 20 }}></EmailRoundedIcon>
          </a>
          <a href="https://github.com/shrad059">
            <GitHubIcon style={{ fontSize: 19 }}></GitHubIcon>
          </a>
          <a href="https://www.linkedin.com/in/">
            <LinkedInIcon style={{ fontSize: 21 }}></LinkedInIcon>
          </a>
        </div>
      </div>
    );
  }
}

export default SidebarNav;