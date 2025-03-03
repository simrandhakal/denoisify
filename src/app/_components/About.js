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
                <p className="text-[1.1rem] mb-4">We are a team of fourth-year engineering students from Purwanchal Campus, Dharan, working on our final year project, Denoisify. This AI-powered image denoising platform utilizes the Generative Adverserial Networks "GAN" model to enhance image quality. Our goal is to provide an easy-to-use, automated solution for anyone struggling with noisy images, removing noise while preserving important details for clearer visuals. This website serves as a demonstration of our project, showcasing our approach to making noisy image restoration accessible to all.
                </p>
            </div>
        </div>

        <div className="flex justify-between items-center gap-[10rem]">
            <div className="flex flex-col justify-center gap-[1rem] w-[45rem]">
                <h2 className="text-[1.5rem] font-bold text-[#2563EB]">Introducing Denoisify</h2>
                <p className="text-[1.1rem] mb-4">Denoisify is an innovative AI-powered image denoising platform designed to transform noisy, unclear images into detailed visuals. Powered by the cutting-edge GAN model, Denoisify has been trained to tackle a variety of noise types, including Gaussian, Speckle and Salt_Pepper. The result? A powerful tool that restores images with precision while preserving crucial details. Its performance is rigorously tested using PSNR and SSIM, metrics ensuring top-tier quality with every image processed. With its lightning-fast, automated, and intuitive interface, Denoisify makes image enhancement effortless, bringing image clarity right to your fingertips.</p>
            </div>
            <div>
                <Image src='/intro.svg' width={'500'} height={'500'} alt="images"></Image>
            </div>
        </div>

    </div>
  )
}

export default About