import styled from 'styled-components'

const Header = () => {
  return (
    <Wrapper className='p-8 '>
      <div>
        <h1 className='pb-2 font-bold capitalize exp title'>Shariful Islam</h1>
        <p className='section'>
          Results driven Senior General Manager with a proven track record of
          leading cross functional teams to achieve operational excellence and
          uphold the highest industry standards in Commercial and Logistics.
          With experience in managing Cash Incentives and Trade Finance
          operations, I am proficient in facilitating import and export
          processes, optimizing document handling, ensuring regulatory
          compliance, and adept at fund and treasury management. My objective is
          to leverage this extensive expertise to lead dynamic teams, optimize
          operational efficiency, and foster innovation within an organization
          committed to excellence. I aim to continue my successful track record,
          contributing significantly to the organization&apos;s growth while
          staying at the forefront of industry best practices.
        </p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  /* .section {
    padding-right: 1.7rem;
  } */
  .exp {
    font-size: 1.8rem;
    letter-spacing: 1.5px;
    padding-top: 1rem;
  }
  h1 {
    text-align: center;
  }
  p {
    line-height: 1.6;
    font-size: 1rem;
    text-align: justify;
  }

  img {
    /* width: 200px;
    margin: 0 auto; */
    width: 200px;
    height: 200px;
    border-radius: 10px;
    margin: 0 auto;
    justify-self: center;
  }
  @media screen and (min-width: 680px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    gap: 2rem;

    h1 {
      text-align: start;
    }
  }
`

export default Header
