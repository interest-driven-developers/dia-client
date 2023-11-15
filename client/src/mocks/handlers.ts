import { http, HttpResponse } from "msw";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const handlers = [
  http.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/test`, () => {
    return HttpResponse.json({ message: "hello there" });
  }),
];
