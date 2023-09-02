// import { AnantaJD } from '../utils/data'
import styled from 'styled-components'
import AnantaLogo from '../assets/ananta.jpg'

const Ananta = () => {
  return (
    <Wrapper className='flex justify-between  gap-8 pb-8 lg:gap-72'>
      <article className=''>
        <h2 className='font-bold pt-6-8'>Sr. General Manager - Commercial</h2>
        <p className='agl'>Ananta Companies (7 Group Concerns)</p>
        <p className='italic'>November 2015 to present</p>
        <p className='italic text-gray-500'>
          100% Export Oriented Woven RMG Manufacturer
        </p>
      </article>
      <img
        src={AnantaLogo}
        className=' lg:w-24 lg:h-auto w-16 h-24 logo'
        alt='ananta'
      />

      {/* <main className='flex items-center justify-between'>
        <div></div> */}
      {/* <img src={AnantaLogo} className='logo' alt='ananta' /> */}
      {/* </main> */}

      {/*  */}
      {/* 
      <div>
        <p className='italic'>Core Responsibilities</p>
        <ul className=''>
          {AnantaJD.map((jd) => {
            const { id, text } = jd
            return (
              <li className='pt-2 text-justify jd ' key={id}>
                {text}
              </li>
            )
          })}
        </ul>
      </div> */}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  h2 {
    font-size: 1.3rem;
  }
  .agl {
    font-size: 1.1rem;
    font-weight: 700;
  }
  .jd {
    font-size: 1rem;
  }

  .logo {
    /* width: 50px; */
    display: block;
    object-fit: cover;
  }
`

export default Ananta
