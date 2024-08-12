import css from "./Friend_list.module.css";
import FriendListItem from "./FriendListItem";

export default function FriendList ({ friends }) {
  return (
    <ul className={css.friends}>
      {friends.map((friend) => {
        return (
          <li key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};