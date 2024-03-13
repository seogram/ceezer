import React from 'react';
import { render, fireEvent, cleanup, RenderResult } from '@testing-library/react';
import Cart from './Cart';
import { MockCartItemData } from "../Projects/data";
import { useCart } from "@/app/hooks";
import { CartItemsContext } from '@/app/context/cartItems';

jest.mock("../../hooks/useCart");

jest.mock("next/navigation", () => ({
  useRouter: jest.fn()
}));
const mockSetCartItems = jest.fn();


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

const updatedCartAfterDelete = [
  {
    "id": "3",
    "image": "https://ceezer-public-assets.s3.eu-central-1.amazonaws.com/project_type_sample_images/Afforestation+reforestation/marita-kavelashvili-ugnrXk1129g-unsplash-min.jpg",
    "name": "SustainaForest Carbon",
    "pricePerTon": 50,
    "volume": 2
  }
];


describe('Cart component', () => {
 
  it('removes an item from cart when delete icon is clicked', () => {
    (useCart as jest.Mock).mockReturnValue({
      cartItems: MockCartItemData.cartItems,
      setCartItems: mockSetCartItems
    });

    const { getAllByTestId } = setup();
    fireEvent.click(getAllByTestId("remove-item")[0]);
    expect(mockSetCartItems).toHaveBeenCalledWith(updatedCartAfterDelete);
  });
});


