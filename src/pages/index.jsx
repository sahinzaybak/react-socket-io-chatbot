
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

//Components
import LeftHeader from '../components/left-side/header'
import UserList from '../components/left-side/user-list'
import MiddleHeader from '../components/middle-side/header'
import Messages from '../components/middle-side/messages'

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
      <div className="left-side">
        <LeftHeader />
        <UserList users={userList} />
      </div>
      <div className="middle-side">
        <MiddleHeader />
        <Messages />
      </div>
      <div className="right-side">
        <h1>s</h1>
      </div>
    </div>
  );
};

export default Index;