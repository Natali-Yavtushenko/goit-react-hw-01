import FriendListItem from "../FriendListItem/FriendListItem";
import PropTypes from 'prop-types';
import css from './FriendList.module.css';

function FriendList({ friends }) {
    return (
      <div className={css.container}>
        <ul className={css.friendsList}>
          {friends.map(friend => (
            <li className={css.friendsItem} key={friend.id}>
              <FriendListItem friend={friend} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      })
    ),
  };
  
  export default FriendList;