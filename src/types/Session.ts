export type Session = {
  expires: string;
  user: {
    pk: number;
    nickname: string;
    email: string;
    access_token: string;
    github_id: string;
    image_url: string;
  }
};
