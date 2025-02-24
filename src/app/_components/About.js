import Image from "next/image"

function About() {
  return (
    <div className="px-[8rem] pb-[3rem] pt-[8rem] flex flex-col gap-[4rem]" id="about">
        <h2 className="text-[2.5rem] font-bold text-center">About Us</h2>
        <div className="flex justify-between items-center gap-[10rem] mb-[1.5rem]">
            <div>
                <Image src='/about.svg' width={'500'} height={'500'} alt="images"></Image>
            </div>
            <div className="flex flex-col justify-center gap-[1rem] w-[45rem]">
                <h2 className="text-[1.5rem] font-bold text-[#2563EB]">Who We Are</h2>
                <p className="text-[1.1rem] mb-4">We are a team of machine learning enthusiasts developing Denoisify, an AI-powered image denoising platform that enhances image quality using the Pix2Pix GAN model. Our goal is to provide anyone struggling with noisy images with an easy-to-use, automated solution that removes noise while preserving important details for sharper, clearer images. Unlike traditional methods, Denoisify leverages deep learning to deliver superior results instantly. With a user-friendly and effective approach, we aim to make noisy image restoration accessible to everyone.
                </p>
            </div>
        </div>

        <div className="flex justify-between items-center gap-[10rem]">
            <div className="flex flex-col justify-center gap-[1rem] w-[45rem]">
                <h2 className="text-[1.5rem] font-bold text-[#2563EB]">Introducing Denoisify</h2>
                <p className="text-[1.1rem] mb-4">Denoisify is an AI-powered image denoising platform that removes noise while preserving essential details. Built using the Pix2Pix GAN model, it has been trained on Gaussian, Speckle, Salt and Pepeer noise, Poission and Motion Blur noise using noisy-clean image pairs, ensuring effective noise reduction. Performance is evaluated using PSNR and SSIM, ensuring high-quality noise removal. Denoisify offers a fast, automated, and user-friendly way to improve image clarity and visual appeal effortlessly.</p>
            </div>
            <div>
                <Image src='/intro.svg' width={'500'} height={'500'} alt="images"></Image>
            </div>
        </div>

    </div>
  )
}

export default About