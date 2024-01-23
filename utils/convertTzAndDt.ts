import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

export const convertTzAndDt = (dt: number, tz: number) => {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  const utcOffsetInHours = tz / 3600;
  const formattedTime = dayjs
    .unix(dt)
    .utcOffset(utcOffsetInHours)
    .format("dddd, DD MMMM, HH:mm");
  return formattedTime;
};
