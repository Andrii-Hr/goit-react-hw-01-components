import PropTypes from 'prop-types';
import css from '../FriendList/FriendList.module.css';
import { UserStatus } from './UserStatus';
export const FriendList = ({ friends }) => {
  return (
    <section className={css.friends}>
      <ul className={css.friends__list}>
        {friends.map(({ avatar, name, isOnline, id }) => {
          return (
            <UserStatus
              key={id}
              avatar={avatar}
              isOnline={isOnline}
              name={name}
            />
          );
        })}
      </ul>
    </section>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
