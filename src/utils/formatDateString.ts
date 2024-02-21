export default function formatDateString(dateString : string) {
  // 날짜 문자열을 Date 객체로 파싱합니다.
  const date = new Date(dateString);
  
  // 각각 년, 월, 일을 추출합니다. getMonth()는 0부터 시작하기 때문에 1을 더해줍니다.
  const year = date.getFullYear();
  // getMonth()가 0부터 시작하므로, 실제 월보다 1 작은 값을 반환합니다. 따라서 1을 더해줍니다.
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 두 자릿수를 유지합니다.
  const day = date.getDate().toString().padStart(2, '0'); // 두 자릿수를 유지합니다.
  
  // 원하는 형식으로 문자열을 조합하여 반환합니다.
  return `${year}.${month}.${day}`;
}
