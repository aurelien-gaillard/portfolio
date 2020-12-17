import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import { FaTimes } from 'react-icons/fa'
const Sidebar = ({ isOpen, toggleSidebar }) => {
  console.log(isOpen)
  return (
    <Wrapper>
      <aside className={`sidebar ${isOpen ? 'show-sidebar' : ''} `}>
        <button className='close-btn' onClick={toggleSidebar}>
          <FaTimes />
        </button>
        <div className='side-container'>
          <ul className='page-links sidebar-links'>
            <li>
              <Link href='/projects'>
                <a onClick={toggleSidebar}>Projects</a>
              </Link>
            </li>
            <li>
              <Link href='/about'>
                <a onClick={toggleSidebar}>About</a>
              </Link>
            </li>
            <li>
              <Link href='/contact'>
                <a onClick={toggleSidebar}>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .sidebar {
    background: var(--clr-grey-10);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    display: grid;
    place-items: center;
    opacity: 0;
    transition: var(--transition);
    transform: translateX(-100%);
  }
  .show-sidebar {
    opacity: 1;
    transform: translateX(0);
  }
  .sidebar-links li {
    opacity: 0;
  }
  .sidebar-links li a {
    display: block;
    text-align: center;
    text-transform: capitalize;
    color: var(--clr-grey-5);
    letter-spacing: var(--spacing);
    margin-bottom: 0.5rem;
    font-size: 2rem;
    transition: var(--transition);
    border-radius: var(--radius);
  }
  .sidebar-links li a:hover {
    background: var(--clr-primary-9);
    color: var(--clr-primary-5);
  }
  .close-btn {
    position: absolute;
    right: 4.75%;
    top: 2.75%;
    font-size: 2.5rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-red-dark);
    cursor: pointer;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      transform: translateX(-100%);
    }
  }
  /*
=============== 
Sidebar Animation
===============
*/
  .sidebar-links li {
    animation: slideRight 0.5s ease-in-out 0.3s forwards;
  }
  .sidebar-links li:nth-of-type(1) {
    animation-delay: 0.25s;
  }
  .sidebar-links li:nth-of-type(2) {
    animation-delay: 0.5s;
  }
  .sidebar-links li:nth-of-type(3) {
    animation-delay: 0.75s;
  }
  .sidebar-links li:nth-of-type(4) {
    animation-delay: 1s;
  }
  .sidebar-links li:nth-of-type(5) {
    animation-delay: 1.25s;
  }
  @keyframes slideRight {
    0% {
      transform: translateX(-200px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  .sidebar-icons li {
    opacity: 0;
    animation: slideUp 0.5s ease-in-out 0.3s forwards;
  }
  .sidebar-icons li:nth-of-type(1) {
    animation-delay: 0.25s;
  }
  .sidebar-icons li:nth-of-type(2) {
    animation-delay: 0.5s;
  }
  .sidebar-icons li:nth-of-type(3) {
    animation-delay: 0.75s;
  }
  .sidebar-icons li:nth-of-type(4) {
    animation-delay: 1s;
  }
  .sidebar-icons li:nth-of-type(5) {
    animation-delay: 1.25s;
  }
  @keyframes slideUp {
    0% {
      transform: translateY(200px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`

export default Sidebar
