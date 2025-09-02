import Image from "next/image";
import React from "react";
import { ProductCardProps } from "./type";



const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  image,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer w-72 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden flex flex-col text-left"
    >
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 300px"
        />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
      </div>
    </button>
  );
};

export default ProductCard;
