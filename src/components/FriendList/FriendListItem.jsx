import css from "./FriendList.module.css";

export default function FriendListItem ({ avatar, name, isOnline }) {
  return (
    <div className={css.friend}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      {isOnline ? (
        <p className={css.online}>Online</p>
      ) : (
        <p className={css.offline}>Offline</p>
      )}
    </div>
  );
};