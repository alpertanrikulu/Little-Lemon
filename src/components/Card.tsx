import { Package } from "lucide-react";
import type React from "react";
import { useState } from "react";

interface Props {
  image: string;
  title: string;
  price: string;
  description: string;
}

const Card: React.FC<Props> = ({ image, title, price, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [newItemCount, setNewItemCount] = useState(0);

  return (
    <div
      className="w-[250px] bg-lemongray rounded-[16px] h-[500px] flex flex-col justify-between mt-[16px] md:mt-[0px]"
      role="article"
      aria-label={`${title} card, price $${price}`}
    >
      <img
        className="rounded-t-[16px]"
        src={image}
        alt={title}
        width={250}
        height={300}
      />
      <div className="p-[16px] flex flex-col justify-between gap-[24px] h-full">
        {isOpen ? (
          <div className="flex flex-col items-center justify-center text-center h-full gap-4">
            <div className="w-16 h-16 rounded-full bg-[#48742C] flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="font-karla font-bold text-[18px] text-green-700">
              Added to Basket
            </h3>
            <p className="text-gray-600 text-sm" aria-live="polite">
              Your item has been successfully added.
            </p>
            <button
              data-testid="order-count-button-continue"
              onClick={() => setIsOpen(false)}
              className="font-karla font-medium text-[16px] bg-lemonyellow text-black px-[16px] py-[8px] rounded-[16px] border-2 border-lemonyellow hover:bg-white hover:text-black hover:border-black transition"
              aria-label={`Continue shopping after adding ${title}`}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center">
              <h3 className="font-karla font-bold text-[18px]">{title}</h3>
              <p className="font-karla font-medium text-[16px] text-red-600">
                ${price}
              </p>
            </div>
            <p>{description}</p>
            <div className="flex justify-between items-center">
              <button
                data-testid="order-count-button"
                onClick={() => {
                  setIsOpen(true);
                  setNewItemCount((count) => count + 1);
                }}
                className="font-karla font-medium text-[16px] bg-lemonyellow text-black px-[16px] py-[8px] rounded-[16px]"
                aria-label={`Add ${title} to basket`}
              >
                Add to Basket
              </button>
              {newItemCount ? (
                <p
                  data-testid="order-count"
                  className="font-karla font-medium text-[18px]"
                  aria-live="polite"
                >
                  {newItemCount}
                </p>
              ) : (
                <Package aria-label="Package icon" />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
