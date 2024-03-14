import { render, fireEvent, waitFor, act, cleanup } from "@testing-library/react";
import ProjectAction from "./ProjectAction";
import { useCart, useCartActions } from "@/app/hooks";
import { MockData, MockCartItemData } from "@/app/components/Projects/data";
import ProjectCardContext from '@/app/context/ProjectCardContext';


jest.mock("../../hooks/useCart");
jest.mock("../../hooks/useCartActions");

const mockSetCartItems = jest.fn();
const mockAddItem = jest.fn();

const mockProject = MockData[0];

const updatedCartAfterIncrease = {
  "id": "1",
  "image": "https://ceezer-public-assets.s3.eu-central-1.amazonaws.com/project_type_sample_images/Fugitives/38bb530f5caf513be9f2a41f2d909f47-min.jpeg",
  "name": "EverGreen CarbonScape",
  "offeredVolume": 15,
  "pricePerTon": 650,
  "volume": 1
}

function setup() {
  (useCart as jest.Mock).mockReturnValue({
    cartItems: MockCartItemData.cartItems,
    setCartItems: mockSetCartItems
  });

  (useCartActions as jest.Mock).mockReturnValue({
    addItem: mockAddItem
  });
  const utils = render(
    <ProjectCardContext.Provider value={{ project: mockProject }}>
      <ProjectAction />
    </ProjectCardContext.Provider>
  );
  return {
    ...utils,
  };
}
describe("ProjectAction Component", () => {

  beforeEach(() => {
    (useCart as jest.Mock).mockReturnValue({
      cartItems: MockCartItemData.cartItems,
      setCartItems: mockSetCartItems
    });

    (useCartActions as jest.Mock).mockReturnValue({
      addItem: mockAddItem
    });
    
  });

  afterEach(cleanup);


  it('renders without crashing', () => {
    const { asFragment } = setup();
    expect(asFragment()).toMatchSnapshot();
  });


  it("User can enter required volume in input box", async () => {
    const { getByPlaceholderText, getByText } = setup();

    const inputElement = getByPlaceholderText("Volume");
    const buttonElement = getByText("Add to Card");

    act(() => {
      fireEvent.change(inputElement, { target: { value: 1 } });
    });

    expect(buttonElement).not.toBeDisabled();

    act(() => {
      fireEvent.click(buttonElement);
    });

    await waitFor(() => {
      expect(mockAddItem).toHaveBeenCalledWith(
        updatedCartAfterIncrease
      );
    });
  });

  it("User can enter required volume in input box", async () => {
    const { getByPlaceholderText, getByText } = setup();

    const inputElement = getByPlaceholderText("Volume");
    const buttonElement = getByText("Add to Card");

    act(() => {
      fireEvent.change(inputElement, { target: { value: 16 } });
    });

    expect(buttonElement).toBeDisabled();
  });
});
