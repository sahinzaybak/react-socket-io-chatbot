import '../../assets/scss/chat/headers.scss'
import { Eye, Clock } from 'react-bootstrap-icons';
import favicon from '../../assets/images/favicon.png'

const Header = () => {
  return (
    <div className="chat__header">
      <div className="d-flex align-items-center">
        <div className="chat__header-avatar">
          <img src={favicon} />
        </div>
        <div className="chat__header-info">
          <h4>ssttek</h4>
          <p>Cloud, The Internet</p>
        </div>
      </div>
      <div className="chat__header-right">
        <div className="d-flex mr-4 pr-3">
          <Eye color="#515151" size={25} />
          <p>botty-beep-boop</p>
        </div>
        <div className="d-flex">
          <Clock color="#515151" size={20} />
          <p>5m</p>
        </div>
      </div>
    </div>
  );
};

export default Header;