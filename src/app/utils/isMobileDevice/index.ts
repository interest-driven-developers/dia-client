
// User Agent 문자열에 모바일 특정 키워드가 포함되는지 확인
export default function isMobileDevice() {
  // 예시: "Android", "iPhone", "iPad" 등의 키워드로 모바일 여부 확인
  // User Agent 문자열을 가져옴
  const userAgent = navigator.userAgent;

  return /Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(userAgent);
}

