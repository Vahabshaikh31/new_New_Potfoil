import  './Footer.css'
import Link from './Link';
const Footer = () => {
  return (
    <>
      <footer className=" rounded-lg shadow m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://flowbite.com/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img
                src="/Logo-Photoroom.png"
                className="h-16"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                ABDULVAHAB
              </span>
            </a>
            <Link />
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block font-[600]  text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 ABDULVAHAB . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;










