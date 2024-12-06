import PropTypes from 'prop-types';

import css from "./Profile.module.css"

function Profile ({username, tag, location, stats,
avatar="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
})
{
return (
<div className={css.container}>
  <div className={css.usercontainer}>
    <img className={css.avatar}
      src={avatar}
      alt="User avatar"
      />
      <p className={css.username}>{username}</p>
      <p className={css.usertag}>{tag}</p>
      <p className={css.userlocation}>{location}</p>
       </div>

      <ul className={css.userstatslist}>
      <li className={css.userstatsitem}>
     <span>Followers</span>
      <span className={css.statsspan}>{stats.followers}</span>
      </li>
      <li className={css.userstatsitem}>
     <span>Views</span>
      <span className={css.statsspan}>{stats.views}</span>
      </li>
      <li className={css.userstatsitem}>
      <span>Likes</span>
      <span className={css.statsspan}>{stats.likes}</span>
    </li>
  </ul>
</div> )}


Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
  };

export default Profile;