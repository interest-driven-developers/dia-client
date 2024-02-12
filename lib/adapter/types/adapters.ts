import type { Account, Awaitable, User } from "@auth/core/types";

export interface AdapterSession {
  /**
   * A randomly generated value that is used to look up the session in the database
   * when using `"database"` `AuthConfig.strategy` option.
   * This value is saved in a secure, HTTP-Only cookie on the client.
   */
  sessionToken: string;
  /** Connects the active session to a user in the database */
  memberPk: string;
  /**
   * The absolute date when the session expires.
   *
   * If a session is accessed prior to its expiry date,
   * it will be extended based on the `maxAge` option as defined in by `SessionOptions.maxAge`.
   * It is never extended more than once in a period defined by `SessionOptions.updateAge`.
   *
   * If a session is accessed past its expiry date,
   * it will be removed from the database to clean up inactive sessions.
   *
   */
  expires: Date;
}

export interface AdapterUser extends User {
  /** A unique identifier for the user. */
  id: string;
  /** The user's email address. */
  email: string;
  /**
   * Whether the user has verified their email address via an [Email provider](https://authjs.dev/reference/core/providers/email).
   * It is `null` if the user has not signed in with the Email provider yet, or the date of the first successful signin.
   */
  emailVerified: Date | null;
  username: string;
  image_url: string;
}
