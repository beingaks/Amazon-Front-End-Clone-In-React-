import { Link } from "react-router-dom";
import searchIcon from "./searchIcon.png";
import shopingBascket from "./shopingBascket.png"
import {useStateValue} from "./StateProvider"

function Header(){


  const[{basket}] = useStateValue();


  console.log(basket);


    return (
      <nav className="header">
        <Link to="/">
          <img
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
            className="header__logo"
          />
        </Link>
        <div className="header__search">
          <input type="text" className="header__searchInput" />
          <button className="header__searchIcon">
            <img src={searchIcon} alt="" />
          </button>
        </div>
        <div className="header__nav">
          <Link to="/login" className="header__link">
            <div className="header__option">
              <span className="header__optionLine1">Hello Ashish</span>
              <span className="header__optionLine2">Sign In</span>
            </div>
          </Link>

          <Link to="/" className="header__link">
            <div className="header__option">
              <span className="header__optionLine1">Returns</span>
              <span className="header__optionLine2">& Orders</span>
            </div>
          </Link>

          <Link className="header__link">
            <div className="header__option">
              <span className="header__optionLine1">Your</span>
              <span className="header__optionLine2">Prime</span>
            </div>
          </Link>

          <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    <img src={shopingBascket} alt=''/>
                    <span className="header__optionLine2 header__basketCount">{basket.length}</span>
                </div>
          </Link>
         
        </div>
      </nav>
    );
  }

export default Header;
