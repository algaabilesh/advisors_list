import { GetServerSideProps } from "next";
import axios from "axios";
import { useEffect, useState } from "react";
import AdvisorsList from "@/components/advisors-list";
import Select from "@/components/select";
import useInfiniteScroll from "@/hooks/use-infinite-scroll";
import {
  FilterOptionsByStatus,
  LanguageOptions,
  SortingOptions,
} from "@/enums/enums";
import sortAdvisors from "@/utils/sort-advisors";
import Loader from "@/components/loader";
import {
  languageOptions,
  sortOptions,
  statusOptions,
} from "@/constants/constants";
import filterAdvisors from "@/utils/filter-advisors";
import NoResults from "@/components/no-results/no-results";

export default function Home({ initialData }: { initialData: Advisor[] }) {
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreAdvisors);

  const [advisors, setAdvisors] = useState(initialData);
  const [sortingOption, setSortingOption] = useState(SortingOptions.ASC);
  const [statusFilter, setStatusFilter] = useState(FilterOptionsByStatus.ALL);
  const [languageFilter, setLanguageFilter] = useState(LanguageOptions.ALL);

  let loaderTimeout = null;

  async function fetchMoreAdvisors() {
    setIsFetching(true);
    loaderTimeout = setTimeout(() => setIsFetching(false), 1000);

    const res = await axios.get("http://localhost:4000/api/advisors", {
      params: { offset: advisors.length, sort: sortingOption },
    });
    const newAdvisors = [...advisors, ...res.data];

    const sortedAdvisors = sortAdvisors(
      newAdvisors,
      sortingOption,
      "reviewsNumber"
    );

    setAdvisors(sortedAdvisors);
    if (!loaderTimeout) {
      setIsFetching(false);
    }
    loaderTimeout = null;
  }

  useEffect(() => {
    setAdvisors(sortAdvisors(advisors, sortingOption, "reviewsNumber"));
  }, [sortingOption]);

  useEffect(() => {
    if (isFetching) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isFetching]);

  return (
    <div className="app-container">
      <div className="control-group">
        <Select
          options={sortOptions}
          onOptionSelected={(value) => {
            setSortingOption(value as SortingOptions);
          }}
        />
        <Select
          options={statusOptions}
          onOptionSelected={(value) => {
            setStatusFilter(value as FilterOptionsByStatus);
          }}
        />
        <Select
          options={languageOptions}
          onOptionSelected={(value) => {
            setLanguageFilter(value as LanguageOptions);
          }}
        />
      </div>
      {advisors.length > 0 ? (
        <AdvisorsList
          advisors={filterAdvisors(advisors, statusFilter, languageFilter)}
        />
      ) : (
        <NoResults />
      )}

      {isFetching && <Loader />}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<{
  initialData: Advisor[];
}> = async () => {
  const res = await axios.get("http://localhost:4000/api/advisors");
  const initialData = sortAdvisors(
    res.data as Advisor[],
    SortingOptions.ASC,
    "reviewsNumber"
  );

  return {
    props: { initialData },
  };
};
