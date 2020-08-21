export default function Body() {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(" +
          "/destiny2/cayde/cayde-5.png" +
          ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "soft-light",
      }}
      className="md:col-span-1 text-white bg-material-black h-screen flex justify-center flex-col"
    >
      <div
        className="text-4xl text-center px-3 md:px-6 lg:px-12 w-full "
        style={{
          backdropFilter: "blur(2px)",
        }}
      >
        This is great. Anyone want a hug? Hugs?
      </div>
      <div className="text-lg text-right px-3 md:px-6 lg:px-12">
        - Cayde 6 , Destiny 2
      </div>
      {/* <div
        className="text-4xl text-center px-3 md:px-6 lg:px-12 w-full "
        style={{
          backdropFilter: "blur(2px)",
        }}
      >
        Well, this... this is awkward. I... y-you got a gun I could borrow?
      </div>
      <div className="text-lg text-right px-6 md:px-18 lg:px-32">
        - Cayde 6 , Destiny 2
      </div> */}
      {/* <div className="text-4xl text-center px-6 md:px-16 lg:px-24 w-full ">
        This is great. Anyone want a hug? Hugs?
      </div>
      <div className="text-lg text-right px-6 md:px-18 lg:px-32">
        - Cayde 6 , Destiny 2
      </div> */}
    </div>
  );
}
