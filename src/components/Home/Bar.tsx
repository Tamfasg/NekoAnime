import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom"
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons"
import React from "react"

const Bar: React.FC = () => {
  return (
    <header>
      <nav>
        <FontAwesomeIcon icon={faBars} id="bar" size="2xl" />
        <Link to={'/search/'} >
          <FontAwesomeIcon icon={faMagnifyingGlass} id="search" size="xl" />
        </Link>
      </nav>
    </header>
  )
};
export default Bar;
