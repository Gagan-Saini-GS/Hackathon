import { HackathonLevel, Status } from "./enum";
import { I_FilterData } from "./types/Filters";
import { I_Hackathon } from "./types/Hackathon";
import { getHackathonStatus } from "./utils/getHackathonStatus";
import HackathonImage1 from "./assets/cardimage/Group 1000002466.png";
import HackathonImage2 from "./assets/cardimage/Group 1000002766.png";
import HackathonImage3 from "./assets/cardimage/Group 1000002767.png";
import AIProjectIcon from "./assets/icons/AI Projects.svg";
import AIChallegneIcon from "./assets/icons/AI Chanllegne.svg";
import DataScientistsIcon from "./assets/icons/Data Scientists.svg";
import CarbonNoteBookIcon from "./assets/icons/carbon_notebook-reference.svg";
import VectorIcon from "./assets/icons/Vector.svg";
import RobotIcon from "./assets/icons/Robot.svg";
import IdentificationCardIcon from "./assets/icons/IdentificationCard.svg";
import { v4 as uuidv4 } from "uuid";
import { I_DataArray } from "./types/DataArrayTypes";

export const FiltersData: I_FilterData[] = [
  {
    id: "level",
    name: "Level",
    options: [
      {
        id: "easy",
        value: HackathonLevel.Easy,
      },
      {
        id: "medium",
        value: HackathonLevel.Medium,
      },
      {
        id: "hard",
        value: HackathonLevel.Hard,
      },
    ],
  },
  {
    id: "status",
    name: "Status",
    options: [
      {
        id: "all",
        value: Status.All,
      },
      {
        id: "upcoming",
        value: Status.Upcoming,
      },
      {
        id: "active",
        value: Status.Active,
      },
      {
        id: "past",
        value: Status.Past,
      },
    ],
  },
];

export const HackathonsListData: I_Hackathon[] = [
  {
    id: uuidv4(),
    name: "Hackathon 1",
    image: HackathonImage1,
    status: getHackathonStatus("2024-09-13T20:00", "2024-09-15T09:00"),
    level: HackathonLevel.Easy,
    startDate: "2024-09-13T14:00",
    endDate: "2024-09-15T14:00",
    description:
      "Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word Lepidoptera means scaly wings in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows.",
  },
  {
    id: uuidv4(),
    name: "Hackathon 2",
    image: HackathonImage2,
    status: getHackathonStatus("2024-09-01T20:00", "2024-09-10T09:00"),
    level: HackathonLevel.Hard,
    startDate: "2024-09-01T20:00",
    endDate: "2024-09-05T09:00",
    description:
      "Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word Lepidoptera means scaly wings in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows.",
  },
  {
    id: uuidv4(),
    name: "Hackathon 3",
    image: HackathonImage3,
    status: getHackathonStatus("2024-08-17T20:00", "2024-08-18T09:00"),
    level: HackathonLevel.Medium,
    startDate: "2024-08-17T20:00",
    endDate: "2024-08-18T16:00",
    description:
      "Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word Lepidoptera means scaly wings in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows.",
  },
];

export const HeroSectionOptions: I_DataArray[] = [
  {
    id: "1",
    image: AIProjectIcon,
    heading: "100K+",
    subheading: "AI model submissions",
  },
  {
    id: "2",
    image: DataScientistsIcon,
    heading: "50K+",
    subheading: "Data Scientists",
  },
  {
    id: "3",
    image: AIChallegneIcon,
    heading: "100+",
    subheading: "AI Challenges hosted",
  },
];

export const InformationCardData: I_DataArray[] = [
  {
    id: "1",
    image: CarbonNoteBookIcon,
    heading: "Prove your skills",
    subheading:
      "Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.",
  },
  {
    id: "2",
    image: VectorIcon,
    heading: "Learn from community",
    subheading:
      "One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them.",
  },
  {
    id: "3",
    image: RobotIcon,
    heading: "Challenge yourself",
    subheading:
      "There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder.",
  },
  {
    id: "4",
    image: IdentificationCardIcon,
    heading: "Earn recognition",
    subheading:
      "You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards.",
  },
];
