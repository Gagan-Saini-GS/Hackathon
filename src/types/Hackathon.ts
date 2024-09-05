import { HackathonLevel, Status } from "../enum";

export interface I_Hackathon {
  id: string;
  name: string;
  image: string;
  status?: Status;
  level: HackathonLevel;
  startDate: string;
  endDate: string;
  description: string;
}
