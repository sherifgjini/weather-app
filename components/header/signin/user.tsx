"use client";
import ArrowDown from "public/icons/ArrowDown";
import Styles from "../header.module.scss";
import Dropdown from "@/components/dropDown";
import Button from "@/components/button";

interface UserProps {
  name: string;
  image: string;
  email: string;
  signOut: () => void;
}

const User: React.FC<UserProps> = ({ image, name, signOut, email }) => {
  return (
    <div>
      <Dropdown
        iniciator={
          <div className={Styles.user}>
            <img className={Styles.avatar} src={image} alt="Profile picture" />
            <span>{name}</span>
            <ArrowDown />
          </div>
        }
      >
        <div>
          <b>{name}</b>
          <p>{email}</p>
          <hr />
          <Button large onClick={signOut}>
            Log out
          </Button>
        </div>
      </Dropdown>
    </div>
  );
};

export default User;
