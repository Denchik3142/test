import { Link } from 'react-router-dom';
import basket from '../../assets/images/basket.svg';
import logo from '../../assets/images/logo.svg';

const Header = () => {
  return (
    <header class="header">
      <div class="container">
        <div class="header__content">
          <Link to='/'><img src={logo} alt="logo" /></Link>
          <div class="header__content__right">
            <button>
              <span>Связаться с нами</span>
            </button>
          <Link to="/basket"><img src={basket} alt="basket" /></Link>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
