import React from 'react'
import styled from 'styled-components'
import Title from '../components/Title'

const stack = [
  { id: 1, title: 'React' },
  { id: 2, title: 'Next.js' },
]
const about = () => {
  return (
    <Wrapper className='about-page'>
      <div className='section-center about-center'>
        {/* <Image fluid={image.childImageSharp.fluid} className='about-img' /> */}
        <article className='about-text'>
          <Title title='About' />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            repellendus illum numquam neque eligendi vel accusamus aut eos atque
            dolore qui perferendis excepturi natus, commodi officiis
            consequuntur ipsam soluta. Fugit.
          </p>
          <div className='about-stack'>
            {stack.map((item) => {
              return <span key={item.id}>{item.title}</span>
            })}
          </div>
        </article>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 7rem 0;

  .about-img {
    margin-bottom: 2rem;
    height: 25rem;
  }
  .about-text .section-title {
    margin-bottom: 2rem;
    text-align: left;
  }
  .about-text .underline {
    margin-left: 0;
    margin-right: 0;
  }
  .about-text p {
    line-height: 2;
  }
  .stack-container {
    width: 30rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 0.5rem;
  }
  .stack-container span {
    text-transform: uppercase;
    display: flex;
    align-items: center;
    letter-spacing: 1px;
    color: var(--clr-grey-4);
  }
  .stack-icon {
    color: var(--clr-primary-5);
    margin-right: 0.25rem;
    font-size: 1rem;
  }
  .about-stack span {
    display: inline-block;
    background: var(--clr-grey-9);
    color: var(--clr-grey-5);
    margin-right: 0.5rem;
    margin-top: 0.5rem;
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.85rem;
  }
  @media screen and (min-width: 992px) {
    .about-center {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      align-items: center;
      column-gap: 4rem;
    }
    .about-img {
      grid-column: 1 / span 5;
      margin-bottom: 0;
    }
    .about-text {
      grid-column: 6 / -1;
    }
  }
`
export default about
