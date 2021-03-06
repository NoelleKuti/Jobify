import { Logo } from '../components'
import { Link } from 'react-router-dom';
import main from '../assets/images/main-alternative.svg';
import Wrapper from '../assets/wrappers/LandingPage'

const Landing = () => {
  return (
    <Wrapper>
        <nav>
          <Logo />  
        </nav>
        <div className='container page'>
          <div className='info'>
            <h1>
              job <span>tracking</span> app
            </h1>
            <p>
            I'm baby vegan stumptown mumblecore fanny pack crucifix direct trade selfies unicorn truffaut vexillologist, mixtape YOLO disrupt. Pop-up glossier adaptogen gentrify literally kombucha seitan venmo shoreditch hell of 90's. Salvia flexitarian intelligentsia shaman kickstarter pitchfork tumblr gentrify selvage typewriter. Beard hashtag tumeric DIY sustainable brunch austin synth pabst. Pabst 90's celiac truffaut. Polaroid truffaut iceland meh, neutra typewriter migas jianbing ethical palo santo cold-pressed man braid pabst squid before they sold out.
            </p>
            <Link to='/register' className='btn btn-hero'>
              Login/Register
            </Link>
          </div>
          <img src={main} alt="job hunt" className='img main-img' />
        </div>
    </Wrapper>
  )
}


export default Landing

