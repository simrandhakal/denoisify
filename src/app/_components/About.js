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
                <p className="text-[1.1rem] mb-4">We are a passionate team of four Electronics Engineering students from Purwanchal Campus, united by our vision to revolutionize digital advertising with AI. With expertise spanning AI/ML, Data Science, UI/UX, Frontend, and Backend Development, we combine cutting-edge technology with creative design to deliver intelligent ad generation solutions.</p>
            </div>
        </div>

        <div className="flex justify-between items-center gap-[10rem]">
            <div className="flex flex-col justify-center gap-[1rem] w-[45rem]">
                <h2 className="text-[1.5rem] font-bold text-[#2563EB]">Introducing Denoisify</h2>
                <p className="text-[1.1rem] mb-4">We are a passionate team of four Electronics Engineering students from Purwanchal Campus, united by our vision to revolutionize digital advertising with AI. With expertise spanning AI/ML, Data Science, UI/UX, Frontend, and Backend Development, we combine cutting-edge technology with creative design to deliver intelligent ad generation solutions.</p>
            </div>
            <div>
                <Image src='/intro.svg' width={'500'} height={'500'} alt="images"></Image>
            </div>
        </div>

    </div>
  )
}

export default About