import styled from 'styled-components'
import OpexLogo from '../assets/opex-removebg-preview.png'

const Opex = () => {
  return (
    <Wrapper className='flex justify-between gap-8  lg:gap-60'>
      <article className=''>
        <h2 className='font-bold pt-6-8'>General Manager - Commercial</h2>
        <p className='agl'>Opex Group </p>
        <p className='italic'>January 1999 to November 2015</p>
        <p className='italic text-gray-500'>
          100% Export Oriented Woven RMG Manufacturer
        </p>
      </article>
      <img
        src={OpexLogo}
        className=' lg:w-44 lg:h-auto w-16 h-24 logo'
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
    /* width: 5rem; */
    display: block;
    object-fit: cover;
  }
`
export default Opex
