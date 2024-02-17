import AdvisorCard from "../components/advisor-card";

const AdvisorCardStory = {
  component: AdvisorCard,
};

export const Default = {
  args: {
    advisor: {
      firstName: "John",
      lastName: "Doe",
      city: "New York",
      languages: ["English", "French"],
      reviewsNumber: 1200,
      isOnline: true,
      avatar: "url",
    },
  },
};

export default AdvisorCardStory;
