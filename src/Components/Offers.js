import deal1 from "../Images/img/deals-1.jpg"
import deal2 from "../Images/img/deals-2.png"
import CountdownTimer from "./Timer"
export default function Offer(){
    return (
        <div className="offers">
        <div className="deal">
          <h2>Deal of the day</h2>
          <h3>Summer Collection New Modern Design</h3>
          <p>$139.00</p>
          <button>Shop Now</button>
          <div className="timer">
           <h4> Offer Expires in :</h4>
           
          <CountdownTimer />
          </div>
        </div>
        
        <div className="img-container">
          <img src={deal1} alt="fine"></img>
        </div>
        <div className="img-container">
          <img src={deal2} alt="fine"></img>
          <div className="img-text">
            <h4>Womens Clothing</h4>
            <p>Shorts & Bags !</p>
            <h3>Try something new on Vacation!</h3>
            <button>Shop Now</button>
            <div className="fine">
           
            <h2>Offers Expires In :</h2>
            <br></br>
           
            <CountdownTimer />
            </div>
          </div>
        </div>
      </div>
    )
}