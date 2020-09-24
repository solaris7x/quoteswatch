export default function Body({ quoteMap, imageURL }) {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(" +
          imageURL +
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
        {quoteMap.quote}
      </div>
      <div className="text-lg text-right px-3 md:px-6 lg:px-12">
        - {quoteMap.character} , {quoteMap.game}
      </div>
    </div>
  );
}
