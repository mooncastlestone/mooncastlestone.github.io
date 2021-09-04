import React, { useContext } from "react"
import "../../../styles/style.css"
import THEME, { Theme } from "../../theme/theme"
import { ThemeContext } from "../../theme/ThemeContext"
import { Container } from "./SideBar.style"
import CategoryTitle from "../CategoryTitle"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

const SideBar = () => {
  const [themeMode, onToggle] = useContext(ThemeContext)
  const theme = THEME[themeMode]

  return (
    <div css={Container(theme)}>
      <div className="sidebar-box">
        <StaticImage
          src="https://res.cloudinary.com/dr4ka7tze/image/upload/v1630397760/me_nqhaci.jpg"
          alt="profile"
          className="profile"
        ></StaticImage>
        <div className="intro">FE Developer</div>
        <div className="icon-box">
          <a href="https://github.com/mooon3356">
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
          <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=mooon3356@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
          </a>
        </div>
        <CategoryTitle link="/javascript">Javascript</CategoryTitle>
        <CategoryTitle link="/react">React</CategoryTitle>
        <CategoryTitle link="/study">Study</CategoryTitle>
        <CategoryTitle link="/personal">Personal</CategoryTitle>
        <CategoryTitle link="/about">About</CategoryTitle>
      </div>
    </div>
  )
}

export default SideBar
