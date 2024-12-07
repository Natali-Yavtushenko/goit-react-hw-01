
import userData from './components/Profile/userData.json'
import friends from './components/friends/friends.json'
import Profile from "./components/Profile/Profile"
import FriendList from './components/friends/FriendList/FriendList'
import TransactionHistory from './components/Transaction/TransactionHistory'
import transactions from './components/Transaction/transactions.json'

const App = () => {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App
