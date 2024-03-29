import styled from 'styled-components'
import loadingSvg from '../../img/loading.svg'

const Wrapper = styled.div`
  display: block;
  margin: 16px auto;
`

const Loading = () => (
  <Wrapper>
    <img src={loadingSvg} width="100" alt="Loading" />
  </Wrapper>
)

export default Loading
