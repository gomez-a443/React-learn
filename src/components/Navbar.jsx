import Logo from "../assets/Logo.JPG";
function Navbar() {
  return (
    <header className="flex bg-gray-200 h-60 justify-evenly items-center">
      <img src={Logo} className=" h-40 w-40 rounded-full"></img>
      <div className="flex">
        <div>Home</div>
        <div>About Us</div>
        <div>Features</div>
        <div>Purchase</div>
        <div>Contact Us</div>
      </div>
    </header>
  );
}
export default Navbar;
