import {
  FilterOptionsByStatus,
  LanguageOptions,
  SortingOptions,
} from "@/enums/enums";

export const sortOptions = [
  {
    value: SortingOptions.ASC,
    label: "Sort by reviews number (ASC)",
  },
  {
    value: SortingOptions.DESC,
    label: "Sort by reviews number (DESC)",
  },
];

export const statusOptions = [
  {
    value: FilterOptionsByStatus.ALL,
    label: "Filter by status",
  },
  {
    value: FilterOptionsByStatus.ONLINE,
    label: "Online",
  },
  {
    value: FilterOptionsByStatus.OFFLINE,
    label: "Offline",
  },
];

export const languageOptions = [
  {
    value: LanguageOptions.ALL,
    label: "Filter by language",
  },
  {
    value: LanguageOptions.EN,
    label: "English",
  },
  {
    value: LanguageOptions.FR,
    label: "French",
  },
  {
    value: LanguageOptions.ES,
    label: "Spanish",
  },
  {
    value: LanguageOptions.DE,
    label: "German",
  },
];
