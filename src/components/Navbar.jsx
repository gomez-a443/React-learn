import Logo from "../assets/Logo.JPG";
function Navbar() {
  return (
    <header>
      <div className="flex ml-28 mr-28 justify-center">
        <img src={Logo} height="60px" width="60px"></img>
        <div className="flex">
          <div>Home</div>
          <div>About Us</div>
          <div>Features</div>
          <div>Purchase</div>
          <div>Contact Us</div>
        </div>
      </div>
    </header>
  );
}
export default Navbar;
