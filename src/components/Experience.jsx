import styled from 'styled-components'
import Ananta from './Ananta'
import Opex from './Opex'

import { BsBriefcaseFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <Wrapper className='p-8 pt-4 '>
      <div className='flex items-center gap-4 '>
        {/* <BsBriefcaseFill className='icon' /> */}
        <h1 className='pb-2 font-bold uppercase exp title '>Work Experience</h1>
      </div>

      {/*  */}
      <section className='education__content'>
        <div className='education__time'>
          <span className='education__rounder'></span>
          <span className='education__line'></span>
        </div>
        <Ananta />

        <div></div>
      </section>
      {/*  */}
      {/*  */}
      <section className='education__content'>
        <div className='education__time'>
          <span className='education__rounder'></span>
          <span className='education__line'></span>
        </div>

        <div>
          <Opex />
        </div>
      </section>
      {/*  */}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .exp {
    font-size: 1.5rem;
    letter-spacing: 1.5px;
  }
  .icon {
    /* color: black; */
    font-size: 1.5rem;
  }
  .education__content,
  .experience__content {
    display: flex;
  }
  .education__time,
  .experience__time {
    padding-right: 1rem;
  }

  .education__rounder,
  .experience__rounder {
    position: relative;
    display: block;
    width: 16px;
    height: 16px;
    background-color: #707070;
    border-radius: 50%;
    margin-top: 0.25rem;
  }

  .education__line,
  .experience__line {
    display: block;
    width: 2px;
    height: 90%;
    background-color: #707070;
    transform: translate(7px, 0);
  }
`

export default Experience
