import NextAuth from "next-auth";

type status = "authenticated" | "unauthenticated " | "loading";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    status: status;
    expires: string;
    user: {
      emai: string;
      image: string;
      name: string;
    };
  }
}
