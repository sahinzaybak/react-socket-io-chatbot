import '../../assets/scss/user-list/user-list.scss'
import Avatar from 'react-avatar';
import { useSelector } from 'react-redux'
import ContentLoader from 'react-content-loader'
import favicon from '../../assets/images/favicon.png'

const UserList = ({ users }) => {
  let lastMessage = useSelector(state => state.lastMessage.lastMessage)
  return (
    <>
      {users.length == 0 ?
        <>
          {[...Array(8)].map((a,index) =>
            <div className="col-12 col-md-12" key={index}>
              <ContentLoader speed={1} viewBox="0 0 400 100" backgroundColor="#fff" foregroundColor="#e0e0e0">
                <rect x="103" y="12" rx="3" ry="3" width="123" height="7" />
                <circle cx="44" cy="42" r="38" />
                <rect x="105" y="48" rx="3" ry="3" width="171" height="6" />
              </ContentLoader>
            </div>
          )}
        </>
        :
        <div className="user-message">
          {users.map((user, index) =>
            <div className="user-message__item" key={index}>
              {!user.bot ?
                <div className="user-message__avatar">
                  <Avatar className="mr-3"
                    color={user.color}
                    name={user.name}
                    size={52}
                    textSizeRatio={0}
                    round={true} />
                </div>
                :
                <div className="user-message__botty">
                  <img src={favicon} />
                </div>
              }
              <div className="user-message__messages w-100">
                <div className="user-message__messages-info">
                  <h4>{user.name}</h4>
                  {user.isOnline ?
                    <span>Online</span> : <span className="last-active">{user.lastActiveTime}</span>
                  }
                </div>
                <p>{user.lastMessage}</p>
                {user.bot &&
                  <p>{lastMessage.message}</p>
                }
              </div>
            </div>
          )}
        </div>
      }
    </>
  );
};

export default UserList;