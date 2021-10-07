import '../../assets/scss/user-list/headers.scss'
import { GearFill, ChevronDown } from 'react-bootstrap-icons';

const Header = () => {
  return (
    <div className="user-list__header">
      <p className="user-list__header-title">
        All Messages
      <ChevronDown className="user-list__header-icon ml-2" size={20} />
      </p>
      <GearFill className="user-list__header-icon" size={25} />
    </div>
  );
};

export default Header;