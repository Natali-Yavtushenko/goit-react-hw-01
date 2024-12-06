import PropTypes from 'prop-types';

import css from "./Profile.module.css"

function Profile ({username, tag, location, stats,
avatar="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
})
{
return (
<div className="container">
  <div className="usercontainer">
    <img className="avatar"
      src={avatar}
      alt="User avatar"
      />
      <p className="username">{username}</p>
      <p className="usertag">{tag}</p>
      <p className="userlocation">{location}</p>
       </div>

      <ul className="userstatslist">
      <li className="userstatsitem">
     <span>Followers</span>
      <span>{stats.followers}</span>
      </li>
      <li className="statsitem">
     <span>Views</span>
      <span>{stats.views}</span>
      </li>
      <li className="statsitem">
      <span>Likes</span>
      <span>{stats.likes}</span>
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