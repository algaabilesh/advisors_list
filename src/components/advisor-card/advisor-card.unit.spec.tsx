import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import AdvisorCard from "./advisor-card";
import { FilterOptionsByStatus } from "@/enums/enums";

test("renders AdvisorCard with correct advisor data", () => {
  const mockAdvisor = {
    id: "1",
    firstName: "TestFirst",
    lastName: "TestLast",
    city: "TestCity",
    languages: ["English", "French"],
    reviewsNumber: 4,
    isOnline: true,
    avatar: "testAvatar.jpg",
  };

  render(<AdvisorCard advisor={mockAdvisor} />);

  expect(screen.getByText(/TestFirst/i)).toBeInTheDocument();
  expect(screen.getByText(/TestLast/i)).toBeInTheDocument();
  expect(screen.getByText(/TestCity/i)).toBeInTheDocument();
  expect(screen.getByText(/English/i)).toBeInTheDocument();
  expect(screen.getByText(/French/i)).toBeInTheDocument();
  expect(screen.getByText(FilterOptionsByStatus.ONLINE)).toBeInTheDocument();
  expect(screen.getByAltText("avatar")).toHaveAttribute(
    "src",
    "testAvatar.jpg"
  );
});
