import Logo from "../assets/Logo.JPG";
function Navbar() {
  return (
    <header className="flex bg-gray-200 h-60 justify-between px-80 items-center">
      <img src={Logo} className=" h-40 w-40 rounded-full" alt="logo"></img>
      <div className="flex bg-gray-300 w-1/2 justify-evenly">
        <div className=" bg-gray-600 text-white w-full flex items-center justify-center p-4">
          Home
        </div>
        <div className=" w-full flex justify-center items-center p-4">
          About Us
        </div>
        <div className=" w-full flex justify-center items-center p-4">
          Features
        </div>
        <div className=" w-full flex justify-center items-center p-4">
          Purchase
        </div>
        <div className=" w-full flex justify-center items-center p-4">
          Contact Us
        </div>
      </div>
    </header>
  );
}
export default Navbar;
