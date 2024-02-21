export default function convertToHourMinute(number: number) {
  if (number < 0) {
    throw new Error("음수는 처리할 수 없습니다.");
  }

  const hours = Math.floor(number / 60);
  const minutes = number % 60;
  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  return `${formattedHours}:${formattedMinutes}`;
}
