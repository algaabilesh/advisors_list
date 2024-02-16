import { FilterOptionsByStatus, LanguageOptions } from "@/enums/enums";

function filterAdvisors(
  advisors: Advisor[],
  status: FilterOptionsByStatus,
  language: LanguageOptions
): Advisor[] {
  return advisors.filter((advisor) => {
    const statusCondition =
      status === FilterOptionsByStatus.ALL ||
      (status === FilterOptionsByStatus.ONLINE
        ? advisor.isOnline
        : !advisor.isOnline);

    const languageCondition =
      language === LanguageOptions.ALL || advisor.languages.includes(language);

    return statusCondition && languageCondition;
  });
}

export default filterAdvisors;
