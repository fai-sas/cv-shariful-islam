import styled from 'styled-components'
import profileImage from '../assets/Picture1.jpg'

const ProfileImg = () => {
  return (
    <Wrapper className='px-8 py-4'>
      <img src={profileImage} alt='profile picture' />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  img {
    width: 250px;
    height: 300px;
    border-radius: 10px;
    margin: 0 auto;
    object-fit: cover;
    justify-self: center;
  }
`

export default ProfileImg
