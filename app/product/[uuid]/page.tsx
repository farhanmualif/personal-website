"use client";
import Navbar from "@/app/components/nav/Navbar";
import Review from "@/app/components/review/review";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  uuid: string;
  name: string;
  price: string;
  address: string;
  discount: string;
  description: string;
  freeShipping: string;
  rate: string;
}

async function getProduct(uuid: string) {
  const detailProduct = await fetch(
    `http://localhost:3000/api/product?uuid=${uuid}`
  );
  return await detailProduct.json();
}

export default function DetailProduct({
  params,
}: {
  params: { uuid: string };
}) {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(
    function () {
      getProduct(params.uuid).then((productData) => {
        if (!product) {
          setProduct(null);
        }
        setProduct(productData.data);
        console.log(productData.data);
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [params.uuid]
  );

  const [image, setImage] = useState(0);

  return (
    <>
      <Navbar />
      {/* detail product */}
      <div className="container mx-auto lg:px-6 sm:px-6 mt-6">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
              <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                <span className="text-5xl">{image}</span>
              </div>
            </div>

            <div className="flex -mx-2 mb-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex-1 px-2">
                  <button
                    onClick={() => setImage(i)}
                    className={`focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center ${
                      image === i ? "ring-2 ring-indigo-300 ring-inset" : ""
                    }`}>
                    <span className="text-2xl">{i}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
              {product?.name}
            </h2>
            <p className="text-gray-500 text-sm">
              By{" "}
              <a href="#" className="text-indigo-600 hover:underline">
                {product?.address}
              </a>
            </p>

            <div className="flex items-center space-x-4 my-4">
              <div>
                <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                  <span className="text-indigo-400 mr-1 mt-1">Rp</span>
                  <span className="font-bold text-indigo-600 text-3xl">
                    {product?.price}
                  </span>
                </div>
              </div>
              <div className="flex-1">
                {product?.discount ? (
                  <p className="text-green-500 text-xl font-semibold">
                    {product.discount}%
                  </p>
                ) : (
                  <div></div>
                )}
                <p className="text-gray-400 text-sm">
                  Dikirim Dari {product?.address}
                </p>
              </div>
            </div>

            <p className="text-gray-500">{product?.description}</p>

            <div className="flex py-4 space-x-4">
              <div className="relative">
                <div className="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">
                  Qty
                </div>
                <select className="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num}>{num}</option>
                  ))}
                </select>

                <svg
                  className="w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2"
                  xmlns=""
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                  />
                </svg>
              </div>

              <button
                type="button"
                className="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <hr className="max-w-2xl my-5 border-md" />
        <p className="text-2xl">Reviews</p>
        <hr className="max-w-2xl mt-5 border-md" />
        <Review />
      </div>
    </>
  );
}
