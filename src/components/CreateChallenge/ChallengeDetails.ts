import { HackathonLevel } from "../../enum";
import { I_ChallengeForm } from "./CreateChallengeForm";

export const initailChallengeForm: I_ChallengeForm = {
  challengeName: "",
  startDate: "",
  endDate: "",
  description: "",
  image: "",
  level: HackathonLevel.Easy,
};

export const challengeFormValidations = {
  challengeName: (value: string) => {
    if (!value) {
      return "Hackathon name is required";
    }
  },
  startDate: (value: string) => {
    if (!value) {
      return "Hackathon state date is required";
    }
  },
  endDate: (value: string, formData: I_ChallengeForm) => {
    if (!value) {
      return "Hackathon end date is required";
    }
    if (new Date(formData.endDate) < new Date(formData.startDate)) {
      return "Hackathon end date must be greter than start date";
    }
  },
  description: (value: string) => {
    if (!value) {
      return "Hackathon description is required";
    }
  },
  image: (value: string) => {
    if (!value) {
      return "Hackathon image is required";
    }
  },
};
