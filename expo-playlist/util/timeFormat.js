import {secondsToMinutes} from 'date-fns';
export const secsToTimestamp = seconds => {
  //음악 플레이 시간을 나타내주는 타임 함수
    console.log(seconds);
  const mins = secondsToMinutes(seconds);
  const secs = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
  // 10초보다 작으면 앞에 0하나 붙여주기
  return `${mins}:${secs}`;
};