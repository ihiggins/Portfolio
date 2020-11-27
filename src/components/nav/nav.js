import "./nav.css";
import React, { useState, useEffect } from "react";

export function Nav() {

  const [active, setActive] = useState(false);
  const [darken, setDarken] = useState("menu-icon__line");

  const handleScroll = () => {
    if (window.innerHeight < window.pageYOffset + 40) {
      setDarken("menu-icon__line menu-icon__line-dark");
    } else {
      setDarken("menu-icon__line");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function toggleNav() {
    var test = document.querySelector("body");
    setActive(!active);
    if (active) {
      test.classList.add("nav-active");
    } else {
      test.classList.remove("nav-active");
    }
  }
  function movePage(element) {
    var testDiv = document.getElementById(element);
    testDiv.scrollIntoView();
    toggleNav();
  }
  return (
    <div>
      <div
        id="burger"
        class="menu-icon"
        onClick={() => {
          toggleNav();
        }}
      >
        <span className={`${darken + " menu-icon__line-left"}`}></span>
        <span class={`${darken}`}></span>
        <span class={`${darken + " menu-icon__line-right"}`}></span>
      </div>

      <div class="nav">
        <div class="nav__content">
          <ul class="nav__list">
            <li
              class="nav__list-item"
              onClick={() => {
                movePage("landing");
              }}
            >
              Home
            </li>
            <li
              class="nav__list-item"
              onClick={() => {
                movePage("about");
              }}
            >
              About
            </li>
            <li
              class="nav__list-item"
              onClick={() => {
                movePage("experience");
              }}
            >
              Experience
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
