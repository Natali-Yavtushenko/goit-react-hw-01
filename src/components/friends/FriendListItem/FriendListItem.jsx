import PropTypes from 'prop-types';
import css from './FriendListItem.module.css'


function FriendListItem({ friend: { avatar, name, isOnline: isTrue } }) {
    return (
      <>
        <img className={css.friendavatar} src={avatar} alt="Avatar" width="96" />
        <p className={css.friendsname}>{name}</p>
        <p className={isTrue ? css.isOnline : css.isOffline}>{isTrue ? 'Online' : 'Offline'}</p>
      </>
    );
  }
  
  FriendListItem.propTypes = {
    friend: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  };
  
  export default FriendListItem;
