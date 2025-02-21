function Feature() {
    return (
      <div className="px-[8rem] py-[7rem] flex flex-col gap-[5rem]" id="feature">
        <h2 className="text-[2.5rem] font-bold text-center">Our Features</h2>
        <div className="grid grid-cols-2 gap-6">
          {[
            { title: "Feature 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
            { title: "Feature 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
            { title: "Feature 3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
            { title: "Feature 4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }
          ].map((feature, index) => (
            <div key={index} className="p-6 shadow-lg rounded-2xl bg-[#1d1d29] px-[2rem] py-[2.5rem]">
              <h2 className="text-[1.5rem] font-bold text-[#2563EB] text-center">{feature.title}</h2>
              <p className="text-[1.1rem] mt-2 text-[#f0efef]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Feature;
  