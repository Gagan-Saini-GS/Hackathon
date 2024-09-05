import { Status } from "../enum";

export const getHackathonStatus = (
  startDateString: string,
  endDateString: string
): Status => {
  const startDate = new Date(startDateString);
  const endDate = new Date(endDateString);
  const today = new Date();

  if (startDate > today) {
    return Status.Upcoming;
  } else if (startDate <= today && endDate >= today) {
    return Status.Active;
  } else {
    return Status.Past;
  }
};
