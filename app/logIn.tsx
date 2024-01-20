"use client";
import React, { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const Login = () => {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <div>
        <p>{session.user.name}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }
  if (status === "unauthenticated") {
    return (
      <button onClick={() => signIn("google")}>SIGN IN WITH GOOGLE</button>
    );
  }
  if (status === "loading") {
    return <p>loading...</p>;
  }
};

export default Login;
