import Link from "next/link";
import Image from "next/image";

interface Product {
  id: number;
  uuid: string;
  name: string;
  price: string;
  address: string;
  rate: number;
  image: string;
  discount: number | null;
  freeShipping: boolean;
}

export default function CardMenu({ products }: { products: Product[] }) {
  return (
    <section className="py-2">
      <div className="container mx-auto lg:px-6 grid  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product, index) => (
          <article
            key={product.id}
            className="rounded-xl bg-white p-3 border-2 hover:border hover:transform hover:scale-105 duration-300 ">
            <Link href="#">
              <div className="relative flex items-end overflow-hidden rounded-xl">
                <Image
                  src={"/image/product/" + product.image}
                  alt="mockup"
                  width={500}
                  height={300}
                />
                {product.discount && (
                  <div className="absolute top-3 inline-flex items-center rounded-e-md bg-white p-2 shadow-md">
                    <span className="ml-1 text-sm text-slate-400">
                      Disc {product.discount}%
                    </span>
                  </div>
                )}
                {product.freeShipping && (
                  <p className="absolute bottom-0 inline-flex mt-1 text-sm items-center rounded-tr-xl bg-red-500 text-white px-2 py-2 w-34">
                    Free Ongkir
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 ml-1">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                      />
                    </svg>
                  </p>
                )}
              </div>
              <div className="mt-1 p-2">
                <h2 className="text-slate-700">{product.name}</h2>
                <p className="flex mt-1 text-sm text-slate-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                  {product.address}
                </p>

                <div className="mt-2 flex items-center">
                  {Array.from({ length: product.rate }, (_, starIndex) => (
                    <svg
                      key={starIndex}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-1 text-xs text-white bg-blue-400 py-1 px-2 rounded">
                    {product.rate}
                  </span>
                </div>

                <div className="mt-5 flex items-end justify-between">
                  <p className="text-lg font-bold text-blue-500">
                    Rp. {product.price}
                  </p>

                  <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>

                    <button className="text-sm">Add to cart</button>
                  </div>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
