import { SortingOptions } from "@/enums/enums";

type SortableFields = "reviewsNumber"; // we can extend this type with other numeric fields for sorting

const sortAdvisors = (
  advisors: Advisor[],
  sort: SortingOptions,
  field: SortableFields
): Advisor[] => {
  const sortedAdvisors = [...advisors];

  if (sort === SortingOptions.ASC) {
    sortedAdvisors.sort((a, b) => a[field] - b[field]);
  } else if (sort === SortingOptions.DESC) {
    sortedAdvisors.sort((a, b) => b[field] - a[field]);
  }

  return sortedAdvisors;
};

export default sortAdvisors;
