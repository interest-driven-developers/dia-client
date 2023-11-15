import { rest } from "msw";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const handlers = [
  rest.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/test`, (req, res, ctx) => {
    return res(ctx.json({ remain_cnt: 1 }));
  }),
];
