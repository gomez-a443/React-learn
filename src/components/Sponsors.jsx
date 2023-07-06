const Sponsors = () => {
  const sponsorDetails = [
    {
      url: "#",
      imagePath: "https://asia.olympus-imaging.com/content/000104502.jpg",
      alt: "girl",
    },
    {
      url: "#",
      imagePath: "https://asia.olympus-imaging.com/content/000104497.jpg",
      alt: "red girl",
    },
    {
      url: "#",
      imagePath: "https://asia.olympus-imaging.com/content/000104506.jpg",
      alt: "yellow girl",
    },
    {
      url: "#",
      imagePath: "https://asia.olympus-imaging.com/content/000104509.jpg",
      alt: "violet girl",
    },
    {
      url: "#",
      imagePath: "https://asia.olympus-imaging.com/content/000104506.jpg",
      alt: "red girl",
    },
    {
      url: "#",
      imagePath: "https://asia.olympus-imaging.com/content/000104502.jpg",
      alt: "red girl",
    },
  ];
  return (
    <div className=" bg-gray-200 h-sponsor  flex flex-col items-center justify-center p-32">
      <div className=" flex flex-col justify-center items-center mb-8 pt-12">
        <h1 className=" font-bold text-5xl">Sponsors Example</h1>
        <h1 className=" text-3xl">Sponsors Description</h1>
      </div>
      <div className="flex justify-center items-center ">
        {sponsorDetails.map((sponsor) => (
          <a href={sponsor.url} key={sponsor.url}>
            <img
              src={sponsor.imagePath}
              className=" h-48 w-48 m-2 hover:h-52 hover:w-52 hover:animate-spin"
              alt={sponsor.alt}
            ></img>
          </a>
        ))}
      </div>
    </div>
  );
};
export default Sponsors;
