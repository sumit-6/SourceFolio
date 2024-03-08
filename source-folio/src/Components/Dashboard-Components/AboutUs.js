import React from "react";
// import NavBar from "./DashNavbar";
// import NavBar from "../NavBar";
import { IoMdArrowRoundBack } from "react-icons/io";

const team = [
  {
    name: "Michael Foster",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: "Michael Foster",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: "Michael Foster",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: "Michael Foster",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
];

const AboutUs = () => {
  return (
    <>
      <div className="flex justify-center mt-6">
        <div className="flex md:w-1/2 justify-between w-full ml-4 mr-4">
          <div>
            SourceFolio&nbsp;<span style={{ color: "orange" }}>.</span>
          </div>
          <div>
            {/* <IoMdArrowRoundBack className="text-white" /> */}
            <p>Back to home</p>
          </div>
        </div>
      </div>
      <div className="md:ml-36 mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="m-auto text-center md:ml-14">
            <div className="max-w-5xl lg:mx-0 text-center m-auto">
              <div className="contentt">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center text-white">
                  OUR TEAM
                </h2>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center text-white">
                  OUR TEAM
                </h2>
              </div>
              {/* <p className="mt-6 text-lg leading-8 text-gray-600 text-center">
                Sit facilis neque ab nulla vel. Cum eos in laudantium.
                Temporibus eos totam in dolorum. Nemo vel facere repellendus ut
                eos dolores similique.
              </p> */}
            </div>
            <ul
              role="list"
              className="mt-20 grid max-w-2xl grid-cols-2 gap-x-12 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6 m-auto md:pl-40"
            >
              {team.map((person) => (
                <li key={person.name} className="text=center">
                  <img
                    className="mx-auto h-36 w-36 rounded-full"
                    src={person.imageUrl}
                    alt=""
                  />
                  <h3 className="mt-6 text-base font-semibold tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm leading-6 text-gray-600">
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
