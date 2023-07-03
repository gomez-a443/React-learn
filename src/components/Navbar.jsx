import Logo from "../assets/Logo.JPG";
function Navbar() {
  return (
    <header className="flex bg-gray-200 h-60 justify-evenly items-center">
      <img src={Logo} className=" h-40 w-40 rounded-full"></img>
      <div className="flex bg-gray-300">
        <div className=" bg-gray-600 text-white p-2 pl-4 pr-4">Home</div>
        <div className="p-2 pl-4 pr-4">About Us</div>
        <div className="p-2 pl-4 pr-4">Features</div>
        <div className="p-2 pl-4 pr-4">Purchase</div>
        <div className="p-2 pl-4 pr-4">Contact Us</div>
      </div>
    </header>
  );
}
export default Navbar;
