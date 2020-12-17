import styled from 'styled-components'
import Project from '../components/Project'
import { projects } from '../lib/projects_data'

export default function Home() {
  return (
    <Wrapper className='section projects'>
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
`
