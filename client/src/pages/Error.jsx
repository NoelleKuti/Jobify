import Wrapper from '../assets/wrappers/ErrorPage'
import { Link } from 'react-router-dom'
import img from '../assets/images/not-found.svg'


function Error() {
  return (
    <Wrapper className='full-page'>
        <div>
            <img src={img} alt='not-found' />
            <h3>text</h3>
            <Link to={'/'}>Back Home</Link>

        </div>
    </Wrapper>
  );
}
export default Error