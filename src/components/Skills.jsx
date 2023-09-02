import styled from 'styled-components'
import {
  // FinanceExpertise,
  Training,
  TechnologyExpertise,
  PersonalAttributes,
  CodingSkills,
  ComputerSkills,
  ProfessionalExperience,
} from '../utils/data'
import { GoTasklist } from 'react-icons/go'
import { GrPersonalComputer, GrCode } from 'react-icons/gr'
import { RxDotFilled } from 'react-icons/rx'

const Skills = () => {
  return (
    <Wrapper className='p-8 py-0'>
      {/*  */}

      <div className='flex items-center gap-4 py-8'>
        <GoTasklist className='icon' />
        <h1 className='font-bold uppercase exp '>Professional Experience</h1>
      </div>

      <article className='section'>
        <ul>
          {ProfessionalExperience.map((jd) => {
            const { id, text } = jd
            return (
              <li className='pt-2 text-justify list-inside jd' key={id}>
                <div className='flex items-start gap-2 pb-2'>
                  <main className='mt-2 text-base'>
                    <RxDotFilled />
                  </main>
                  {text}
                </div>
              </li>
            )
          })}
        </ul>
      </article>
      {/*  */}

      <div className='flex items-center gap-4 py-8'>
        <GoTasklist className='icon' />
        <h1 className='font-bold uppercase exp '>AREAS OF EXPERTISE</h1>
      </div>
      <article className='section'>
        <ul>
          {TechnologyExpertise.map((jd) => {
            const { id, text } = jd
            return (
              <li className='pt-2 text-justify list-inside jd' key={id}>
                <div className='flex items-start gap-2 pb-2'>
                  <main className='mt-2 text-base'>
                    <RxDotFilled />
                  </main>
                  {text}
                </div>
              </li>
            )
          })}
        </ul>
      </article>
      {/*  */}

      <div className='flex items-center gap-4 py-8'>
        <GoTasklist className='icon' />
        <h2 className='py-2 text-lg font-bold'>Personal Attributes</h2>
      </div>
      <article className='section'>
        <ul>
          {PersonalAttributes.map((jd) => {
            const { id, text } = jd
            return (
              <li className='pt-2 text-justify list-inside jd' key={id}>
                <div className='flex items-start gap-2 pb-2'>
                  <main className='mt-2 text-base'>
                    <RxDotFilled />
                  </main>
                  {text}
                </div>
              </li>
            )
          })}
        </ul>
      </article>
      {/*  */}

      <div className='flex items-center gap-4 py-8'>
        <GoTasklist className='icon' />
        <h1 className='font-bold uppercase exp '>Training</h1>
      </div>

      <article className='section'>
        <ul>
          {Training.map((jd) => {
            const { id, text } = jd
            return (
              <li className='pt-2 text-justify list-inside jd' key={id}>
                <div className='flex items-start gap-2 pb-2'>
                  <main className='mt-2 text-base'>
                    <RxDotFilled />
                  </main>
                  {text}
                </div>
              </li>
            )
          })}
        </ul>
      </article>
      {/* TEST */}
      <div className='flex items-center gap-4 py-6'>
        <GrPersonalComputer className='icon' />
        <h1 className='font-bold uppercase exp title '>
          Computer Proficiency{' '}
        </h1>
      </div>

      <article className='flex flex-wrap gap-4 section pb-8 '>
        {ComputerSkills.map((jd) => {
          const { id, text } = jd
          return (
            <p className='px-2 py-1 computer-skills' key={id}>
              {text}
            </p>
          )
        })}
      </article>
      {/*  */}

      {/*  */}
      {/* <div className='flex items-center gap-4 py-6'>
        <GrCode className='icon' />
        <h1 className='font-bold uppercase exp title '>Coding Proficiency</h1>
      </div> */}
      {/* 
      <article className='flex flex-wrap gap-4 section'>
        {CodingSkills.map((jd) => {
          const { id, text } = jd
          return (
            <p className='px-2 py-1 computer-skills' key={id}>
              {text}
            </p>
          )
        })}
      </article> */}
      {/*  */}
      {/* END OF TEST */}
      {/*  */}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .section {
    padding-right: 1.7rem;
  }
  .exp {
    font-size: 1.5rem;
    letter-spacing: 1.5px;
  }
  .icon {
    /* color: black; */
    font-size: 2rem;
  }

  h2 {
    font-size: 1.3rem;
  }

  .jd {
    font-size: 1rem;
  }

  .exp {
    font-size: 1.5rem;
    letter-spacing: 1.5px;
  }

  .computer-skills {
    /* background-color: rgb(148 163 184); */
    /* background-color: #707070; */
    background-color: rgb(51 65 85);
    border-radius: 5px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    color: white;
    font-weight: 600;
  }

  .coding-skills {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 1rem;
  }
  @media screen and (min-width: 600px) {
    .coding-skills {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`

export default Skills
