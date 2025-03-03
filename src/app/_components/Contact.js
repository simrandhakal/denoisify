function Contact() {
    return (
      <div
        id="contact"
        className="px-[8rem] py-[7rem] flex flex-col gap-[5rem]"
      >
        <h1 className="text-[2.5rem] font-bold text-center">Contact Our Team</h1>
  
        <div className="grid grid-cols-4 gap-3">
          {[
            {
                name: "Simran Dhakal",
                email: "077bei037@ioepc.edu.np",
                image: "/images/simran.jpg",
            },
            {
                name: "Stuti Acharya",
                email: "077bei039@ioepc.edu.np",
                image: "/images/stuti.jpg",
            },
            {
                name: "Shraddha Bhattarai",
                email: "077bei036@ioepc.edu.np",
                image: "/images/shraddha.jpg",
            },
            {
                name: "Arati Shrestha",
                email: "077bei047@ioepc.edu.np",
                image: "/images/arati.jpg",
            },
            
          ].map((member, index) => (
            <div
              key={index}
              className="bg-[#1d1d29] px-[1rem] py-[2.2rem] rounded-2xl shadow-lg text-center"
            >
              <img
                src={member.image}
                alt={"image"}
                className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
              />
              <h2 className="text-[1.5rem] font-bold text-[#2563EB] text-center">{member.name}</h2>
              <p className="text-[0.9rem] mt-1 text-[#f0efef]">{member.email}</p>
              <a
                href={`mailto:${member.email}`}
                className="inline-block bg-[#40405a] mt-4 px-9 py-2 text-cream font-medium rounded-md 
                            transition duration-300 ease-in-out 
                            border border-transparent hover:border-white"
                >
                Contact
            </a>

            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Contact;
  