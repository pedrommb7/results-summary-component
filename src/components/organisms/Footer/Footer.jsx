import React from 'react'

const Footer = ({className}) => {
  return (
    <footer className={className}>
        Challenge by {" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/pedrommb7">Pedro Barbosa</a>.
    </footer>
  )
}

export default Footer