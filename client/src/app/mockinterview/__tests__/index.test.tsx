import { render, screen } from "@testing-library/react";
import Home from "../page";
import "@testing-library/jest-dom";

// 초기 세팅
test("init page", () => {
    render(<Home />);
    // 타이틀이 보이는지 확인
    expect(screen.getByText("스크립트 별 모의 면접")).toBeInTheDocument();
    // 스크립트의 갯수가 보이는지 확인
    expect(screen.getByText("총 0개의 스크립트")).toBeInTheDocument();
    // TODO: 스크립트 리스트가 보이는지 확인
})
// 로그인 X) 연습은 할 수 있지만 히스토리가 남지 않음
test("", () => {});

// 로그인 X) 연습 후 '로그인하면 기록을 남길 수 있다'라는 메세지를 보여주어 가입 유도
test("", () => {});

// 엽습 후 내가 작성한 스크립트와 방금 말한 내용을 같이 보여주어 비교
test("", () => {});
