import styled from 'styled-components'
import StamfordLogo from '../assets/Stamford_University_Bangladesh_Monogram.svg.png'
import nationalLogo from '../assets/nationaluniversity.png'
import madrasaLogo from '../assets/Madrasah-board.png'

import { MdSchool } from 'react-icons/md'

const Education = () => {
  return (
    <Wrapper className='p-8 pt-8 pb-0 '>
      <div className='flex items-center gap-4'>
        <MdSchool className='icon' />
        <h1 className='pb-8 font-bold uppercase title edu'>Education</h1>
      </div>

      <section className='section'>
        <article className='flex items-center justify-between'>
          <main>
            <h2 className='font-bold text-md'>
              Masters of Business Administration
            </h2>
            <h2 className=' text-md'>Stamford University</h2>
            <div className='flex items-start justify-between max-w-sm italic'>
              <p>Major in Marketing</p>
              <p>1998</p>
            </div>
          </main>
          <img src={StamfordLogo} className='logo' alt='accalogo' />
        </article>
        <hr className='hr' />

        <article className='flex items-center justify-between'>
          <main>
            <h2 className='font-bold text-md'>M Com Pass</h2>
            <h2 className=' text-md'>National University</h2>
            <div className='flex items-start justify-between max-w-sm italic'>
              <p>Second Class</p>
              <p>2006</p>
            </div>
          </main>
          <img
            src={nationalLogo}
            className='logo logo-national'
            alt='accalogo'
          />
        </article>
        <hr className='hr' />

        {/*  */}
        <article className='flex items-center justify-between'>
          <main>
            <h2 className='font-bold text-md'>B Com Pass</h2>
            <h2 className=' text-md'>National University</h2>
            <div className='flex items-start justify-between max-w-sm italic'>
              <p>Second Class</p>
              <p>1998</p>
            </div>
          </main>
          <img
            src={nationalLogo}
            className='logo logo-national'
            alt='accalogo'
          />
        </article>
        <hr className='hr' />
        {/*  */}

        {/*  */}
        <article className='flex items-center justify-between py-2'>
          <main>
            <h2 className='font-bold text-md'>
              Higher Secondary School Certificate
            </h2>
            <p className='org'>Bangladesh Madrasah Education Board</p>
            <div className='flex justify-between max-w-sm italic'>
              <p>
                1<sup>st</sup> Divisiton
              </p>
              <p>1996</p>
            </div>
          </main>
          <img
            src={madrasaLogo}
            className='logo logo-madrasa '
            alt='kgc logo'
          />
        </article>
        <hr className='hr' />
        {/*  */}

        <article className='flex items-center justify-between py-2'>
          <main>
            <h2 className='font-bold text-md'>Secondary School Certificate</h2>
            <p className='org'>Bangladesh Madrasah Education Board</p>
            <div className='flex justify-between max-w-sm italic'>
              <p>
                1<sup>st</sup> Divisiton
              </p>
              <p>1994</p>
            </div>
          </main>
          <img
            src={madrasaLogo}
            className='logo logo-madrasa '
            alt='kgc logo'
          />
        </article>
        <hr className='hr' />
        {/*  */}
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .edu {
    font-size: 1.5rem;
    letter-spacing: 1.5px;
  }
  .section {
    padding-left: 1.3rem;
  }

  .icon {
    /* color: black; */
    font-size: 2rem;
  }

  h2 {
    font-size: 1.3rem;
    max-width: 500px;
  }
  .org {
    font-weight: 600;
  }
  .logo {
    width: 5rem;
    display: block;
    object-fit: cover;
    border-radius: 5px;
  }

  .logo-national {
    width: 8rem;
    margin-right: -1.5rem;
  }
  .logo-madrasa {
    width: 8rem;
    margin-right: -1.5rem;
  }

  .hr {
    /* width: 100%; */
    /* font-size: 5rem;
    width: 1rem;
    color: black; */
    border: 80% solid #707070;
    border-radius: 2px;
    margin-top: 1rem;
  }
`

export default Education
