import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Cart from './Cart';
import { MockCartItemData } from "../Projects/data";
import { useCart } from "@/app/hooks";
import { CartItemsContext } from '@/app/context/CartItemsContext';

jest.mock("../../hooks/useCart");

jest.mock("next/navigation", () => ({
  useRouter: jest.fn()
}));
const mockSetCartItems = jest.fn();

const updatedCartAfterIncrease = [
  {
    "id": "1",
    "image": "https://ceezer-public-assets.s3.eu-central-1.amazonaws.com/project_type_sample_images/Fugitives/38bb530f5caf513be9f2a41f2d909f47-min.jpeg",
    "name": "EverGreen CarbonScape",
    "offeredVolume": 10,
    "pricePerTon": 650,
    "volume": 1.5
  },
  {
    "id": "3",
    "image": "https://ceezer-public-assets.s3.eu-central-1.amazonaws.com/project_type_sample_images/Afforestation+reforestation/marita-kavelashvili-ugnrXk1129g-unsplash-min.jpg",
    "name": "SustainaForest Carbon",
    "offeredVolume": 3, 
    "pricePerTon": 50,
    "volume": 2
  }
];

function setup() {
  const mockSetCartItems = jest.fn();
  const utils = render(
    <CartItemsContext.Provider value={{ cartItems: MockCartItemData.cartItems, setCartItems: mockSetCartItems }}>
      <Cart full />
    </CartItemsContext.Provider>
  );
  return {
    ...utils,
  };
}


describe('Cart component', () => {
  beforeEach(() => {
    (useCart as jest.Mock).mockReturnValue({
      cartItems: MockCartItemData.cartItems,
      setCartItems: mockSetCartItems
    });
  });
  afterEach(cleanup);

  it('renders without crashing', () => {
    const { asFragment } = setup();
    expect(asFragment()).toMatchSnapshot();
  });

  it('displays the total cost correctly', () => {
    const { getByTestId } = setup();
    expect(getByTestId("total-cost")).toHaveTextContent("Total Cost : €750.00");
  });

  it('correctly increases item volume and updates cart items', () => {
    const { getAllByTestId } = setup();

    fireEvent.click(getAllByTestId("increase-volume")[0]);
    expect(mockSetCartItems).toHaveBeenCalledWith(expect.arrayContaining(
      updatedCartAfterIncrease
    ));
  });
});


