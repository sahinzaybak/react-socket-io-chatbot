import { X } from 'react-bootstrap-icons';
import '../../assets/scss/user-info/user-info.scss'

const UserInfo = () => {
  return (
    <div className="user-info__wrp">
      <div className="user-info__item">
        <h5 className="user-info__title">EMAIL</h5>
        <a href="mailto:sttek@example.com" className="user-info__text">ssttek@example.com</a>
      </div>
      <div className="user-info__item">
        <h5 className="user-info__title">PHONE</h5>
        <a href="tel:053943412141" className="user-info__text">0539 434 12 141</a>
      </div>
      <div className="user-info__item--labels">
        <h5 className="user-info__title mb-2">LABELS</h5>
        <div className="d-flex flex-wrap">
          <p className="user-info__tag">React <X className="icon" /></p>
          <p className="user-info__tag">Socket.io <X className="icon" /></p>
          <p className="user-info__tag mb-0">Şahin Zaybak <X className="icon" /></p>
        </div>
      </div>
      <div className="user-info__item--attachment mb-0">
        <h5 className="user-info__title">ATTACHMENTS</h5>
        <p className="user-info__text">Dataset.csv</p>
        <p className="user-info__text">bot_face.jpg</p>
        <p className="user-info__all">View All</p>
      </div>
      <div className="text-center">
        <button className="user-info__action">React</button>
      </div>
    </div>
  );
};

export default UserInfo;