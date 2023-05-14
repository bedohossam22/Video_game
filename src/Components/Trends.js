import image from "../Images/img/home-img.png";
export default function Trends(){
    return (
        <div className="sides">
            <div className="left-side">
          <span>Hot promotions</span>
          <h1>Fashion Trending</h1>
          <h2>Great Collection</h2>
          <p>Save more with coupons & up to 20% off</p>
          <button>Shop Now</button>
        </div>
        <div className="right-side">
            <img alt="ok" src={image}/>
        </div>
        </div>
    )
}