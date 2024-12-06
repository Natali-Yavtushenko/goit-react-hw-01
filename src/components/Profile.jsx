import PropTypes from 'prop-types';

function Profile ({username, usertag, userlocation, userstats,
useravatar="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
})
{
return (
<div className="container">
  <div>
    <img className="avatar"
      src={useravatar}
      alt="User avatar"
      />
      <p className={username}>{username}</p>
      <p className={usertag}>{usertag}</p>
      <p className={userlocation}>{userlocation}</p>
       </div>

      <ul className="userstatslist">
      <li className="userstatsitem">
     <span>Followers</span>
      <span>{userstats.followers}</span>
      </li>
      <li className="statsitem">
     <span>Views</span>
      <span>{userstats.views}</span>
      </li>
      <li className="statsitem">
      <span>Likes</span>
      <span>{userstats.likes}</span>
    </li>
  </ul>
</div> )}


Profile.propTypes = {
    useravatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    usertag: PropTypes.string.isRequired,
    userlocation: PropTypes.string.isRequired,
    userstats: PropTypes.object.isRequired,
  };

export default Profile;