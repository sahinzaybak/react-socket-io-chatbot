import '../../assets/scss/user-info/header.scss'
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <div className="user-info__header">
      <img src={logo} alt="" />
    </div>
  );
};

export default Header;