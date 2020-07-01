import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { AiOutlineCaretDown } from "react-icons/ai";
export default ({ isMobile, toggleFunc, currUser }) => {

  const [isClicked, setIsClicked] = useState(false)

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1240) {
        toggleFunc();
        setIsClicked(false)
      }
    });
  }, [])

  return (
    <div className="navbar" >
      <div className="menu">
        {isClicked ? (<GrClose onClick={() => {
          setIsClicked(!isMobile)
          toggleFunc();

        }} />) : (<GiHamburgerMenu onClick={() => {
          setIsClicked(!isMobile)
          toggleFunc();
        }} />)}

      </div>
      <div className="logo">
        <div className="text">
          <h2><b>Placement</b></h2>
          <h2><b>Saga</b></h2>
        </div>
        <div className="icon">
          <span>{"{"}</span>
          <div className="codeAnim">
            <div className="line0"></div>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line1"></div>
          </div>
          <span id="endBracket">{"}"}</span>
        </div>
      </div>
      <div className={isMobile && isClicked ? "sidebar" : "collapse"}>
        <h2 className="theories">Theories <AiOutlineCaretDown />
          <div className="dropdown">
            <h2>
              <a href="/ds">Data Structures</a>
            </h2>
            <h2>
              <a href="/os">Operating System</a> </h2>
            <h2>
              <a href="/dbms">DataBase Management System</a></h2>
          </div>
        </h2>
        <h2>
          <a href="/ques">Question Library</a>
        </h2>
        <h2>
          <a href="/mock">Mock Test</a>
        </h2>
        <h2>
          <a href="/Subscribe">Subscribe</a>
        </h2>

      </div>
      <h2 id="currUser">{currUser}</h2>
    </div>
  )
}