import { useContext } from "react";
import ContactContext from "../../context/contact-context";
import Header from "../Header/Header";
import classes from "./FavoriteContacts.module.css";

const FavoriteContacts = () => {
  const friendContext = useContext(ContactContext);

  return (
    <>
      <Header>Favorites</Header>
      <ul className={classes.list}>
        {friendContext.favoritedFriends.map((friend) => {
          const removeFavoriteHandler = () => {
            friendContext.removeFavoriteFriend(friend.id);
          };
          return (
            <li
              key={friend.id}
              onClick={removeFavoriteHandler}
              className={classes.listItem}
            >
              {friend.firstName} {friend.lastName}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FavoriteContacts;
