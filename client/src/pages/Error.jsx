import Wrapper from '../assets/wrappers/ErrorPage'
import { Link } from 'react-router-dom'
import img from '../assets/images/not-found.svg'

function Error() {
  return (
    <Wrapper>
        <div>
            <img src={img} alt='not-found' />
            <h3>text</h3>
            <p>text</p>
            <Link to={'/'}>Back Home</Link>

        </div>
    </Wrapper>
  );
}
export default Error