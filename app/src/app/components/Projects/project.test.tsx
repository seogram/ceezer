import React from "react";
import { render } from "@testing-library/react";
import Projects from "./Projects";
import { useData } from "@/app/hooks";
import { MockData } from "./data";
import { QueryClient, QueryClientProvider } from "react-query";

jest.mock("../../hooks/useData");

const mockProjectData = useData;

jest.mock("next/navigation", () => ({
  useRouter: jest.fn()
}));

describe("Projects Component ", () => {

  let queryClient: QueryClient;
  beforeEach(() => {
    queryClient = new QueryClient();
    (mockProjectData as jest.Mock).mockReturnValue({
      data: MockData,
      isFetching: false,
      isError: false,
    });
  });

  test("should render Projects without crashing", async () => {

    const { queryAllByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <Projects />
      </QueryClientProvider>
    );
    const projectCard = queryAllByTestId("project-card");
    expect(projectCard).toHaveLength(5);
  });


  test("should render Projects without crashing with search term", async () => {
    const { getByText, queryByTestId, queryAllByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <Projects searchTerm="green" />
      </QueryClientProvider>
    );
    const result = queryByTestId("result")
    expect(result).toBeInTheDocument();
    expect(getByText(/Showing Projects for: green/)).toBeInTheDocument();

    const projectCard = queryAllByTestId("project-card");
    expect(projectCard).toHaveLength(2);

  });
});
