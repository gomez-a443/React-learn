import Profile from "../assets/Logo.JPG";
export default function About() {
  return (
    <div className="h-auto bg-white flex justify-center items-center py-8">
      <img src={Profile} className="h-64 w-64 m-10"></img>
      <div className=" w-1/3 m-10">
        <h1 className=" font-bold text-4xl">About Us Example</h1>
        <h1 className=" text-gray-600 font-semibold text-xl">
          About Us Sub-title Description
        </h1>
        <p className="block">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <button className=" bg-gray-500 text-white px-6 py-1 mt-3">
          Read More
        </button>
      </div>
    </div>
  );
}
