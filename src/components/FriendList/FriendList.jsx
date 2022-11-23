import PropTypes from 'prop-types';
import css from '../FriendList/FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <section className={css.friends}>
      <ul className={css.friends__list}>
        {friends.map(({ avatar, name, isOnline, id }) => {
          return (
            <li className={css.item} key={id}>
              {isOnline === true ? (
                <span className={css.status}>{isOnline}</span>
              ) : (
                <span className={css.status_online}>{isOnline}</span>
              )}
              <img
                className={css.avatar}
                src={avatar}
                alt="User avatar"
                width="48"
              />
              <p className={css.name}>{name}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

FriendList.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
};
