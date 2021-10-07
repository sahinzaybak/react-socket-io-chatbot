
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

//Components
import LeftHeader from '../components/user-list/header'
import UserList from '../components/user-list/user-list'
import MiddleHeader from '../components/chat/header'
import Messages from '../components/chat/messages'
import UserInfoHeader from '../components/user-info/header'
import UserInfo from '../components/user-info/user-info'

//Action
import { fetchUserList } from '../store/actions/users'

const Index = () => {
  const dispatch = useDispatch()
  let userList = useSelector(state => state.users.userList)

  useEffect(() => {
    dispatch(fetchUserList())
  }, []);

  return (
    <div className="d-flex">
      <div className="user-list">
        <LeftHeader />
        <UserList users={userList} />
      </div>
      <div className="chat">
        <MiddleHeader />
        <Messages />
      </div>
      <div className="user-info">
        <UserInfoHeader />
        <UserInfo />
      </div>
    </div>
  );
};

export default Index;