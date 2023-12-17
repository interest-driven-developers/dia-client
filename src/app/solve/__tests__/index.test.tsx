import { render, screen } from "@testing-library/react";
import Home from "../page";
// import { server } from "@/mocks/server";
// import { http, HttpResponse } from "msw";
import "@testing-library/jest-dom";

test("init page", () => {
  render(<Home />);
  // 스크립트 작성 버튼이 보이는지 확인
  expect(screen.getByText("작성")).toBeInTheDocument();
  // 스크립트가 비어있을때 '스크립트를 작성해보세요'라는 문구 출력
  expect(screen.getByText("스크립트를 작성해보세요")).toBeInTheDocument();
  // 비로그인시 세션 스토리지에 데이터 저장?
});
// 로그인 X) 초기 풀이 화면에는 아무 스크립트도 없음
test("메인 화면에 스크립트가 비어있을때 ", () => {
  render(<Home />);
  expect(screen.getByText("스크립트를 작성해보세요")).toBeInTheDocument();
});
// 로그인 O) 초기 풀이 화면에 '스크립트를 작성해보세요'라는 문구 출력
// 로그인이 되어있지 않다면 '로그인 후 작성할 수 있습니다' 메세지 출력
test("", () => {});

// 로그인 후에도 아직 작성하지 않은 문제라면 '스크립트를 작성해보세요' 메세지
test("", () => {});

// 스크립트에는 일단 텍스트 제외 내용은 작성 불가능함(추후 그림 업로드 추가)
test("", () => {});


// // msw test
// test("mock server test", async () => {
//     server.use(
//       http.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/test`, () => {
//         return HttpResponse.json({ message: "hello there" });
//       })
//     );
//     render(<Home />);
//     const greeting = await screen.findByText("hello there");
//     expect(greeting).toBeInTheDocument();
// });
    