import styled from 'styled-components'
import { FaRegMoneyBillAlt, FaCode } from 'react-icons/fa'
import { MdOutlinePsychology } from 'react-icons/md'
import { IoGameControllerOutline } from 'react-icons/io5'

const Interests = () => {
  return (
    <Wrapper className=' p-8  '>
      <div className='flex items-center gap-4 py-2 '>
        <IoGameControllerOutline className='icon' />
        <h1 className='font-bold title uppercase exp  '>Interests</h1>
      </div>

      <article className='flex flex-wrap gap-4'>
        {/*  */}
        <div className='flex items-center gap-2 box py-1 px-3 '>
          <FaRegMoneyBillAlt />
          <p>Finance</p>
        </div>

        {/*  */}
        <div className='flex items-center gap-2 box py-1 px-3'>
          <FaCode />
          <p>Programming</p>
        </div>
        {/*  */}
        <div className='flex items-center gap-2 box py-1 px-3'>
          <MdOutlinePsychology />
          <p>Psychology</p>
        </div>
        {/*  */}
        <div className='flex items-center gap-2 box py-1 px-3'>
          <IoGameControllerOutline />
          <p>Gaming</p>
        </div>
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

  .box {
    border: 1.5px solid #615c5c;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
  }
`

export default Interests
