import css from '../FriendList/UserStatus.module.css';
import { PropTypes } from 'prop-types';

export const UserStatus = ({ isOnline, avatar, name }) => {
  return (
    <li className={css.item}>
      {isOnline === true ? (
        <span className={css.status}>{isOnline}</span>
      ) : (
        <span className={css.status_online}>{isOnline}</span>
      )}
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

UserStatus.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
