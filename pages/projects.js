import React from 'react'
import styled from 'styled-components'
import Project from '../components/Project'
import Title from '../components/Title'
import { projects } from '../lib/projects_data'

const Projects = () => {
  return (
    <Wrapper className='section projects'>
      <Title title='My projects' />
      <div className='section-center projects-center'>
        {projects.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--clr-grey-10);

  @media screen and (min-width: 992px) {
    .project:nth-of-type(even) .project-img {
      grid-column: 5 / -1;
      grid-row: 1 / 1;
    }
    .project:nth-of-type(even) .project-info {
      grid-column: 2 / span 7;
      grid-row: 1 / 1;
      text-align: left;
    }
  }
`

export default Projects
