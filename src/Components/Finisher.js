import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
export default function Finisher (){
    return (
      <div className="header extra">
        <div className="div">
          <div className="first">
          <FontAwesomeIcon icon={faEnvelope} />
       <span>Signup to  NewSletter</span>
      </div>
      <div className="second">
      <header>...and receive 25% coupon for first shopping</header>
      </div>
      <div className="third">
       <input placeholder='Enter Your Email'></input>
      <button>Subscribe</button> 
      </div>
        </div>
       
       
      </div>
      
    )
  }
  