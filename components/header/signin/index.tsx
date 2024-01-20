"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import User from "./user";
import Button from "@/components/button";

const Login = () => {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <div>
        <User
          name={session.user.name}
          image={session.user.image}
          signOut={() => signOut()}
          email={session.user.email}
        />
      </div>
    );
  }
  if (status === "unauthenticated") {
    return (
      <Button large onClick={() => signIn("google")}>
        Sign in with Google
      </Button>
    );
  }
  if (status === "loading") {
    return <p>loading...</p>;
  }
};

export default Login;
