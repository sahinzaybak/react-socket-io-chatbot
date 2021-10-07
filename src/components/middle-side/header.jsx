import '../../assets/scss/middle-side/headers.scss'
import Avatar from 'react-avatar';
import { Eye, Clock } from 'react-bootstrap-icons';

const Header = () => {
  return (
    <div className="middle-side__header">
      <div className="d-flex align-items-center">
        <div className="middle-side__header-avatar">
          <Avatar className="mr-3" color="indianred" name="Şahin zaybak" size={60} textSizeRatio={0} round={true} />
        </div>
        <div className="middle-side__header-info">
          <h4>ssttek</h4>
          <p>Cloud, The Internet</p>
        </div>
      </div>
      <div className="middle-side__header-right d-flex align-items-center">
        <div className="d-flex mr-5">
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