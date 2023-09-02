import styled from 'styled-components'
import { FaRegEnvelopeOpen, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
  return (
    <Wrapper className='px-2 '>
      <div className='flex items-center gap-2 py-1'>
        <FaRegEnvelopeOpen />
        <p>shariful_islam@ananta.com.bd</p>
      </div>

      <div className='flex items-center gap-2 py-1'>
        <FaPhoneAlt />
        <p>88 01712 187 040</p>
      </div>

      <div className='flex items-center gap-2'>
        <FaMapMarkerAlt />
        <p>Mirpur, Dhaka</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: #2d2a2a;
  border-radius: 5px;
  color: white;
  /* max-width: 960px; */
  /* margin: 0 auto; */
  /* padding: 0.5rem 2rem; */
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  border-bottom-width: 2rem;

  p {
    font-weight: 700;
  }

  @media screen and (max-width: 680px) {
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 1rem;
    padding: 0.5rem 0;
  }
`

export default Contact
