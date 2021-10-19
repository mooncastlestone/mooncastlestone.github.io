import React, { useContext, useState } from "react"
import "../../../styles/style.css"
import THEME, { Theme } from "../../theme/theme"
import { ThemeContext } from "../../theme/ThemeContext"
import { Container } from "./SideBar.style"
import CategoryTitle from "../CategoryTitle"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { Link } from "gatsby"
import { SideBarProps } from "../../types/components"

const SideBar = ({ pageTitle, isOpen }: SideBarProps) => {
  const [themeMode, onToggle] = useContext(ThemeContext)
  const theme = THEME[themeMode]
  const [currentPage, setCurrentPage] = useState(`/${pageTitle}`)

  return (
    <nav css={Container(theme, isOpen)}>
      <div className="sidebar-box">
        <button type="button">
          <Link to="/" aria-label="메인 페이지 이동">
            <StaticImage
              src="https://res.cloudinary.com/dr4ka7tze/image/upload/v1630397760/me_nqhaci.jpg"
              alt="profile"
              className="profile"
            ></StaticImage>
          </Link>
        </button>
        <strong className="intro">FE Developer</strong>
        <div className="icon-box">
          <button type="button">
            <Link
              to="https://github.com/mooon3356"
              aria-label="유저 깃허브로 이동"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} className="icon" />
            </Link>
          </button>
          <button type="button">
            <Link
              to="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=mooon3356@gmail.com"
              aria-label="유저에게 이메일 보내기"
              target="_blank"
            >
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
            </Link>
          </button>
        </div>
        <ul className="category-title-box">
          <CategoryTitle currentPage={currentPage} link="/javascript">
            Javascript
          </CategoryTitle>
          <CategoryTitle currentPage={currentPage} link="/react">
            React
          </CategoryTitle>
          <CategoryTitle currentPage={currentPage} link="/study">
            Study
          </CategoryTitle>
          <CategoryTitle currentPage={currentPage} link="/personal">
            Personal
          </CategoryTitle>
        </ul>
      </div>
    </nav>
  )
}

export default SideBar
