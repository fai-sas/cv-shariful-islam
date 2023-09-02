import styled from 'styled-components'
import { GrHomeRounded } from 'react-icons/gr'

const PersonalDetails = () => {
  return (
    <Wrapper className='px-8 py-8 '>
      <div className='flex items-center gap-4 py-2 '>
        <GrHomeRounded className='icon' />
        <h1 className='font-bold uppercase title exp '>Personal Details</h1>
      </div>

      <article className='flex flex-wrap gap-4 pt-4'>
        <p className='px-3 py-1 '>Date of Birth: August 1977</p>
        <p className='px-3 py-1 '>Marital Status : Married</p>
        <p className='px-3 py-1 '>Permanent Address: Comilla, Bangladesh</p>
      </article>
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

  p {
    border: 1.5px solid #615c5c;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
  }
`

export default PersonalDetails
