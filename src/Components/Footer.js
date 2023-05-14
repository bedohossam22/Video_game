
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import payment from "../Images/img/payment-method.png"
export default function Footer (){
    return(
        <div className="footer">
    <div className="row-1">
    <h1>Evana</h1>
    <h2>Contact</h2>
    <p> Address: 562 Wllington Road , Street 32 ,San francisco</p>
    <p> Phone: +0111111111 </p>
    <p>Hours: 10:00 -18:00, Mon - Sat</p>
    <p>Follow us</p>
    <div className='media'>
      <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} /></a>
      <a href="https://www.twitter.com/"><FontAwesomeIcon icon={faTwitter} /></a>
      <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a>
      <a href="https://www.youtube.com/"><FontAwesomeIcon icon={faYoutube} /></a>
      <br></br><br></br>
    </div>
    
    </div>
        <div className="adress">
            <h1>Adress</h1>
            <p>Abous Us</p>
            <p>Delivery Informations</p>
            <p>Privacy Policy</p>
            <p>Terma & conditions</p>
            <p>Contact us</p>
            <p>Support Center</p>
        </div>
        <div className="account">
            <h1>Account</h1>
            <p>Sign in</p>
            <p>View My card</p>
            <p>My Wishlist</p>
            <p>Track my order</p>
            <p>Help</p>
            <p>Other</p>
        </div>
        <div className="payment">
           <h1>Secured Payment Gateways</h1>
           <img src={payment} alt='fine'></img>
        </div>
    </div>
    )}