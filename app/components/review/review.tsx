import Image from "next/image";

export default function Review() {
  return (
    <div className="max-w-xl rounded-2xl py-8 transition duration-500">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="mt-5">
            <Image
              className="w-12 h-12 rounded-full"
              src="/"
              alt=""
              width={100}
              height={100}
            />
          </div>
          <div className="text-sm font-semibold">
            John Lucas • <span className="font-normal"> 5 minutes ago</span>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h1 className="text-lg text-gray-700 font-semibold hover:underline cursor-pointer">
          Product Review
        </h1>
        <div className="flex mt-2">
          {[...Array(4)].map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-yellow-400"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="my-4 text-md text-gray-600">
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happines.
        </p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="mt-5">
            <Image
              className="w-12 h-12 rounded-full"
              src="/"
              alt=""
              height={100}
              width={100}
            />
          </div>
          <div className="text-sm font-semibold">
            John Lucas • <span className="font-normal"> 5 minutes ago</span>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h1 className="text-lg text-gray-700 font-semibold hover:underline cursor-pointer">
          Product Review
        </h1>
        <div className="flex mt-2">
          {[...Array(4)].map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-yellow-400"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="my-4 text-md text-gray-600">
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happines.
        </p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="mt-5">
            <Image
              className="w-12 h-12 rounded-full"
              src="/"
              alt=""
              height={100}
              width={100}
            />
          </div>
          <div className="text-sm font-semibold">
            John Lucas • <span className="font-normal"> 5 minutes ago</span>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h1 className="text-lg text-gray-700 font-semibold hover:underline cursor-pointer">
          Product Review
        </h1>
        <div className="flex mt-2">
          {[...Array(4)].map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-yellow-400"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="my-4 text-md text-gray-600">
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happines.
        </p>
      </div>
    </div>
  );
}
