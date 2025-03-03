function Example() {
  const exampleImages = [
    { name: "noise_denoised_pair", image: "/images/examples/example (1).png" },
    { name: "noise_denoised_pair", image: "/images/examples/example (2).png" },
    { name: "noise_denoised_pair", image: "/images/examples/example (3).png" },
    { name: "noise_denoised_pair", image: "/images/examples/example (4).png" },
    { name: "noise_denoised_pair", image: "/images/examples/example (5).png" },
    { name: "noise_denoised_pair", image: "/images/examples/example (6).png" },
  ];

  return (
    <div id="examples" className="px-[6rem] py-[7rem] flex flex-col gap-[4rem]">
      <div>
        <h1 className="text-[2.5rem] font-bold text-center flex flex-col gap-5 justify-center items-center">
          Examples
        </h1>
        <p className="text-center">
          Check out some stunning results from Denoisify—where AI-powered
          denoising brings clarity to your images!
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {exampleImages.map((example, index) => (
          <div
            key={index}
            className="bg-[#ffffff] p-6 rounded-2xl shadow-lg text-center border-[2px] border-transparent 
                 transition-all duration-300 hover:border-[#2563EB]
                 flex flex-col items-center"
          >
            <img
              src={example.image}
              alt={example.name}
              className="w-auto h-65 rounded-lg mb-0 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Example;
