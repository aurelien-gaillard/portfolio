import React from 'react'
import Link from 'next/link'
import styled, { keyframes } from 'styled-components'
import { FaAlignRight } from 'react-icons/fa'
import Logo from './Logo'
const Navbar = ({ toggleSidebar }) => {
  return (
    <Wrapper>
      <div className='nav-center'>
        <div className='nav-header'>
          <a href='/'>
            <Logo />
          </a>

          <button type='button' className='toggle-btn' onClick={toggleSidebar}>
            <FaAlignRight />
          </button>
        </div>
        <ul className='page-links nav-links'>
          <li>
            <Link href='/projects'>
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href='/contact'>
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </Wrapper>
  )
}

const lineAnim = keyframes`
                to {
                stroke-dashoffset: 0;
                }
            `
const fill = keyframes`
                from {
                    fill: transparent;
                }
                to {
                    fill: var(--clr-primary-5);
                }
            `

const Wrapper = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  z-index: 200;
  background: var(--clr-white);

  .nav-center {
    width: 90vw;
    max-width: 1170px;
    margin: 0 auto;
  }
  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav-header img {
    margin-bottom: 0.375rem;
  }
  .toggle-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    transition: var(--transition);
  }
  .toggle-btn:hover {
    color: var(--clr-primary-2);
  }
  .nav-links {
    display: none;
  }
  @media screen and (min-width: 768px) {
    .toggle-btn {
      display: none;
    }
    .nav-links {
      display: flex;
      justify-content: flex-end;
    }
    .nav-links li {
      margin-right: 2rem;
    }
    .nav-links a {
      text-transform: capitalize;
      color: var(--clr-grey-1);
      font-weight: bold;
      letter-spacing: var(--spacing);
      transition: var(--transition);
      padding: 0.5rem 0;
    }
    .nav-links a:hover {
      color: var(--clr-primary-5);
      box-shadow: 0px 2px var(--clr-primary-5);
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
    }
  }

  @media screen and (min-width: 992px) {
    background: transparent;
  }

  svg {
    &.logo {
      width: 200px;
      fill: none;
      path:nth-child(-n + 8) {
        fill: var(--clr-grey-1);
        stroke: var(--clr-grey-1);
      }
      path:nth-child(n + 9) {
        stroke: var(--clr-primary-5);
        stroke-dasharray: 600;
        stroke-dashoffset: 600;
        animation: ${lineAnim} 3s ease forwards, ${fill} 1s ease forwards 1.7s;
      }
    }
  }
`

export default Navbar
