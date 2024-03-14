import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
// import NavBar from "./DashNavbar";
// import NavBar from "../NavBar";
// import { IoMdArrowRoundBack } from "react-icons/io";

const team = [
  {
    name: "Sumit Verma",
    role: "Backend Developer",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1vELV7zyd9nwSOGeYzy8XzFWSnaKjz-uY&sz=w500",
  },
  {
    name: "Devanshi Gupta",
    role: "Frontend Developer",
    imageUrl:"https://drive.google.com/thumbnail?id=1D3qMv-eYednp2ew8ShaBBibYfwHkeF7F&sz=w1000"  },
  {
    name: "Rahul Verma",
    role: "Frontend Developer",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1iXtEMStuvgrOplUuxbgpvP-ku3eGnRov&sz=w1000",
  },
  {
    name: "Deepak Das",
    role: "Backend Developer",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1QMpoQ05yznD8fqc-Ovu0mTyMiBdr_ExV&sz=w1000",
  },
];

const AboutUs = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-center mt-6">
        <div className="flex md:w-1/2 justify-between w-full ml-4 mr-4">
        <Link className="nav__logo" style={{ color: "white" }}>
                SourceFolio&nbsp;<span style={{ color: "orange" }}>.</span>
              </Link>
          <div >
            {/* <IoMdArrowRoundBack className="text-white" /> */}
            <p className="text-white cursor-pointer nav__item" onClick={() => navigate(`/`)}>Back to home</p>
          </div>
        </div>
      </div>
      <div className="md:ml-36 mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="m-auto text-center md:ml-14">
            <div className="max-w-5xl lg:mx-0 text-center m-auto">
              <div>
                <h2 className="tracking-tight md:text-6xl text-center text-white text-4xl aboutUsHeading font-black">
                  OUR TEAM
                </h2>
              </div>
              <p className="mt-6 text-lg leading-8 text-white text-center">
                Meet our amazing team. We worked on sourceFolio together. Build your amazing portfolio with sourceFolio.
              </p>
            </div>
            <ul className="mt-20 grid max-w-2xl grid-cols-2 gap-x-12 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6 m-auto md:pl-40"
            >
              {team.map((person) => (
                <li key={person.name} className="text=center">
                  <img
                    className="mx-auto h-36 w-36 rounded-full"
                    src={person.imageUrl}
                    alt=""
                  />
                  <h3 className="mt-6 text-base font-semibold tracking-tight text-white">
                    {person.name}
                  </h3>
                  <p className="text-sm leading-6 text-gray-400">
                    {person.role}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
