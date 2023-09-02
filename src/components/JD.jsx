import styled from 'styled-components'
import { MdSchool } from 'react-icons/md'
import {
  ImportJD,
  ExportJD,
  BondJD,
  FundJD,
  BankJD,
  GeneralJD,
} from '../utils/data'
import { RxDotFilled } from 'react-icons/rx'

const JD = () => {
  return (
    <Wrapper className='p-8 py-0 '>
      <div className='flex items-center gap-4'>
        <MdSchool className='icon' />
        <h1 className='pb-2 font-bold uppercase title edu'>Job Description</h1>
      </div>{' '}
      {/*  */}
      <div>
        <p className='py-4'>
          Responsible for managing a team to deliver excellent results and
          achieve the highest operational standards across all areas of the
          Commercial and Logistics Department. Also responsible for Cash
          Incentives & Trade Finance.
        </p>
        <p className='font-bold py-2'>With Import Department</p>
        <ul>
          {ImportJD.map((jd) => {
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
      </div>
      {/*  */}
      <div>
        <p className='font-bold py-2'>With Export Department</p>
        <ul>
          {ExportJD.map((jd) => {
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
      </div>
      {/*  */}
      <div>
        <p className='font-bold py-2'>Customs Bond and Cash Incentives</p>
        <ul>
          {BondJD.map((jd) => {
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
      </div>
      {/*  */}
      <div>
        <p className='font-bold py-2'>Fund/ Treasury Management</p>
        <ul>
          {FundJD.map((jd) => {
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
      </div>
      {/*  */}
      <div>
        <p className='font-bold py-2'>Banking</p>
        <ul>
          {BankJD.map((jd) => {
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
      </div>
      {/*  */}
      <div>
        <p className='font-bold py-2'>
          General Activities Which Does Not Happen Every Day
        </p>
        <ul>
          {GeneralJD.map((jd) => {
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
      </div>
      {/*  */}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .edu {
    font-size: 1.5rem;
    letter-spacing: 1.5px;
  }
  .icon {
    font-size: 2rem;
  }
`
export default JD
