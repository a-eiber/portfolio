import Image from 'next/image';
import Link from 'next/link';
import errorImage from '../public/assets/error.png';
import Header from '../components/Header';

const ErrorPage = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col md:flex-row items-center justify-center m-5">
        <div>
          <Image src={errorImage} alt="error" width="500" height="500" />
        </div>
        <div>
          <h1 className="py-4 mt-4 text-gray-700">I have bad news for you</h1>
          <p className="py-4 text-gray-600 m-auto">
            The page you are looking for might be removed or is unavailable
          </p>
          <Link href="/" className="flex justify-center">
            <button
              type="button"
              className="w-[90%] mx-auto p-4 text-gray-100 mt-4 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#21568a] to-[#1d97bd] cursor-pointer hover:scale-105 ease-in duration-300"
            >
              Return to Home Page
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
