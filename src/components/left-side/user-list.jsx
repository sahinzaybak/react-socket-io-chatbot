import '../../assets/scss/left-side/user-list.scss'
import Avatar from 'react-avatar';
import { useSelector } from 'react-redux'
import ContentLoader from 'react-content-loader'

const UserList = ({ users }) => {
  let lastMessage = useSelector(state => state.lastMessage.lastMessage)
  return (
    <>
      {users.length == 0 ?
        <>
          {[...Array(8)].map((i) =>
            <div className="col-12 col-md-12" key={i}>
              <ContentLoader speed={1} viewBox="0 0 400 100" backgroundColor="#fff" foregroundColor="#e0e0e0">
                <rect x="103" y="12" rx="3" ry="3" width="123" height="7" />
                <circle cx="44" cy="42" r="38" />
                <rect x="105" y="48" rx="3" ry="3" width="171" height="6" />
              </ContentLoader>
            </div>
          )}
        </>
        :
        <div className="user-list">
          {users.map((user, index) =>
            <div className="user-list__item" key={index}>
              <div className="user-list__avatar">
                <Avatar className="mr-3"
                  color={user.color}
                  name={user.name}
                  size={60}
                  textSizeRatio={0}
                  round={true} />
              </div>
              <div className="user-list__messages w-100">
                <div className="user-list__messages-info">
                  <h4>{user.name}</h4>
                  {user.isOnline && <span>Online</span>}
                </div>
                <p>{user.lastMessage}</p>
                {user.bot && <p>{lastMessage.message}</p>}
              </div>
            </div>
          )}
        </div>
      }
    </>
  );
};

export default UserList;