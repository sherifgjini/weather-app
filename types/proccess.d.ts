declare namespace NodeJS {
  export interface ProcessEnv {
    NEXT_PUBLIC_BASE_URL: string;

    // # Next-auth
    NEXT_AUTH_SECRET: string;
    NEXT_AUTH_URL: stringl;

    // # Google
    GOOGLE_CLIENT_ID: string;
    GOOGLE_CLIENT_SECRET: string;

    // # Api
    NEXT_PUBLIC_API_URL: string;
    NEXT_PUBLIC_API_KEY: string;

    // # Weather Icon
    NEXT_PUBLIC_API_ICON_URL: string;
  }
}
