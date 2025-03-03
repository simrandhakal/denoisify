function Feature() {
    return (
      <div className="px-[8rem] py-[7rem] flex flex-col gap-[5rem]" id="feature">
        <h2 className="text-[2.5rem] font-bold text-center">Our Features</h2> 
        <div className="grid grid-cols-2 gap-6">
          {[
            { title: "Noise Reduction Across Multiple Types", description: "Effectively removes noise types such as Gaussian, Speckle and Salt_Pepper from images, resulting in enhanced clarity and sharpness." },
            { title: "Detail Preservation", description: "Enhances image quality while maintaining essential textures, edges, and structural details to ensure clarity and sharpness." },
            { title: "AI-Powered Performance", description: "Uses advanced deep learning models like Generative Adversarial Networks (GAN) to intelligently distinguish noise from important image details, resulting in quality outputs." },
            { title: "User-Friendly & Fast Processing", description: "Provides a simple interface for uploading noisy images and quickly obtaining denoised results with minimal user effort." }
          ].map((feature, index) => (
            <div key={index} className="p-6 shadow-lg rounded-2xl bg-[#1d1d29] px-[3rem] py-[2.5rem]">
              <h2 className="text-[1.5rem] font-bold text-[#2563EB] text-center">{feature.title}</h2>
              <p className="text-[1.1rem] mt-10 text-[#f0efef]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Feature;
  