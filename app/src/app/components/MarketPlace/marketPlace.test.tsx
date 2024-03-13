import React from "react";
import { useSearchParams } from "next/navigation";
import { render } from "@testing-library/react";
import MarketPlace from ".";
import { useData } from "@/app/hooks";

import { QueryClient, QueryClientProvider } from "react-query";

jest.mock("../../hooks/useData");

const mockProjectData = useData;

jest.mock("next/navigation", () => ({
  useSearchParams: jest.fn(),
  useRouter: jest.fn()
}));

describe("Marketplace Component ", () => {

  let queryClient: QueryClient;
  beforeEach(() => {
    queryClient = new QueryClient();
  });

  test("should render Marketplace without crashing when there is a query param : key=", async () => {
    (useSearchParams as jest.Mock).mockReturnValue({ get: () => "eco" });
    (mockProjectData as jest.Mock).mockReturnValue({
      data: [],
      isFetching: false,
      isError: false,
    });
    const { getByText, queryByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <MarketPlace />
      </QueryClientProvider>
    );

    const result = queryByTestId("result")
    expect(result).toBeInTheDocument();
    expect(getByText(/eco/)).toBeInTheDocument();

  });

});
