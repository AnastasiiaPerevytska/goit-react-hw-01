import Profile from "./profile/Profile";
import userData from "./userData.json";
import FriendList from "./friend_list/Friend_list";
import friends from "./friends.json";
import TransactionHistory from "./Transaction_history/transaction_history";
import transactions from "./transactions.json"

export default function App() {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}