import Image from "next/image";
import UploadModal from "./UploadModal";

function Landing() {
  return (
    <div
      className="flex justify-between items-end pt-[9rem] pb-[4rem] px-[8rem] gap-[2rem]"
      id="home"
    >
      <div className="flex flex-col gap-[2rem] w-[40rem] pt-[2rem]">
        <h2 className="text-[3rem] font-bold">
          Denoisify: AI Powered Image Denoiser
        </h2>
        <p className="text-[1.2rem] mb-4">
        Denoisify is an AI-powered solution that uses the GAN model for image denoising. This model effectively reduces noise while preserving essential image details, delivering better results than traditional methods. To achieve this, simply upload your noisy images, and our model will restore them with removing noises and better results than before.


        </p>
        {/* <button
          className="bg-[#2563EB] text-[#f0efef] border border-transparent py-[0.8rem] px-[1.8rem] rounded-[0.5rem] w-[14rem] 
                        transition-all duration-500 ease-in-out hover:border-white relative inline-block group"
        >
          <span className="relative inline-block transition-all duration-500 pr-0 group-hover:pr-6">
            Upload Image
            <span className="absolute opacity-0 top-0 right-[-20px] transition-all duration-500 group-hover:opacity-100 group-hover:right-0">
              &raquo;
            </span>
          </span>
        </button> */}
        <UploadModal />
      </div>
      <div>
        <Image
          src="/images/pic.png"
          width={"500"}
          height={"500"}
          alt="images"
        ></Image>
      </div>
    </div>
  );
}

export default Landing;