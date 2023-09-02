import styled from 'styled-components'
import { FaLanguage } from 'react-icons/fa'
FaLanguage

const Languages = () => {
  return (
    <Wrapper className='p-8 pt-4 pb-8 '>
      <div className='flex items-center gap-4'>
        <FaLanguage className='icon' />
        <h1 className='pt-2 pb-2 font-bold uppercase exp title '>
          Language Proficiency
        </h1>
      </div>

      <section className='flex justify-between gap-4 section'>
        <div>
          <p className='lang'>English</p>
          <p className='italic'>Full Professional Proficiency</p>
        </div>
        <div>
          <p className='lang'>Bangla</p>
          <p className='italic'>Native or Bilingual Proficiency</p>
        </div>
        <div>
          <p className='lang'>Arabic</p>
          <p className='italic'>Reading & Writing Proficiency</p>
        </div>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .exp {
    font-size: 1.5rem;
    letter-spacing: 1.5px;
  }
  .lang {
    font-size: 1.3rem;
    font-weight: 600;
  }
  .icon {
    /* color: black; */
    font-size: 3rem;
  }
  .section {
    padding-left: 1.3rem;
  }
`

export default Languages
