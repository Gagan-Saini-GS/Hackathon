export interface I_Date {
  days: string;
  hours: string;
  minutes: string;
}
export const convertToDaysHoursMinutes = (dateTimeString: string): I_Date => {
  const targetDate = new Date(dateTimeString);
  const currentDate = new Date();

  // Calculate the difference in milliseconds
  const diffInMs = targetDate.getTime() - currentDate.getTime();

  // Convert milliseconds to days, hours, and minutes
  const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));

  return {
    days: days < 10 ? "0" + days : days.toString(),
    hours: hours < 10 ? "0" + hours : hours.toString(),
    minutes: minutes < 10 ? "0" + minutes : minutes.toString(),
  };
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear().toString().slice(-2);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const period = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  // Determine the ordinal suffix for the day
  const ordinalSuffix = (n: number) => {
    const s = ["th", "st", "nd", "rd"],
      v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
  };

  return `${day}${ordinalSuffix(
    day
  )} ${month}'${year} ${formattedHours}:${formattedMinutes} ${period}`;
};
