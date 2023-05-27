import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <div className={css.friends}>
      <ul className={css.friend_list}>
        {friends.map(({ avatar, name, isOnline, id }) => {
          return (
            <li
              className={isOnline ? css.itemOnline : css.itemOffline}
              key={id}
            >
              <span className={isOnline ? css.online : css.offline}></span>
              <img className={css.avatar} src={avatar} alt={name} width="48" />
              <p className={css.name}>{name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
