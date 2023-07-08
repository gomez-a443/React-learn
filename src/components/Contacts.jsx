import Logo from "../assets/Logo.JPG";
export default function Contacts() {
  return (
    <div className=" h-auto  bg-gray-600 flex flex-row justify-evenly">
      {/* Contact us */}
      <div className=" mt-10 mb-10">
        <h1 className=" font-bold text-white text-5xl">Contact Us</h1>
        <h1 className="  text-white text-4xl">Send Us a message</h1>

        <form>
          <input
            type="text"
            placeholder="Full name"
            className="placeholder-gray-600 h-10 w-18 mt-4"
          ></input>
          <br></br>
          <input
            type="text"
            placeholder="Your email"
            className="placeholder-gray-600 h-10 w-18 mt-3"
          ></input>
          <br></br>
          <textarea
            type=" text"
            placeholder="Your message"
            className="placeholder-gray-600 row-10 mt-3"
          ></textarea>
          <br></br>
          <button className=" bg-gray-800 px-6 py-2 mt-4 text-white">
            Submit
          </button>
        </form>
      </div>
      {/* Site map */}
      <div className=" mt-10 mb-10">
        <h1 className=" font-bold text-white text-5xl">Sitemap</h1>
        <h1 className="  text-white text-4xl">All our pages</h1>
        <div className=" mt-4">
          <h1 className="  text-white text-4xl">-Home</h1>
          <h1 className="  text-white text-4xl">-About us</h1>
          <h1 className="  text-white text-4xl">-Feature</h1>
          <h1 className="  text-white text-4xl">-Pricing</h1>
          <h1 className="  text-white text-4xl">-Contact Us</h1>
        </div>
      </div>
      {/* Logo */}
      <div className=" mt-10 mb-10 ">
        <img src={Logo} className=" h-40 w-40 rounded-full" alt="logo"></img>
        <div className=" mt-3">
          <h1 className=" text-white text-4xl">(08) 400 2000</h1>
          <h1 className="  text-white text-4xl">email@gmail.com</h1>
        </div>
      </div>
    </div>
  );
}
