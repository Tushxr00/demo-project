import React from "react";

const whyUsData = [
  {
    id: 1,
    primaryText: "Get More",
    SecondaryText: "Visibility",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus nobis minima inventore saepe.",
  },
  {
    id: 2,
    primaryText: "Organize Your",
    SecondaryText: "Candidates",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus nobis minima inventore saepe.",
  },
  {
    id: 3,
    primaryText: "Verify Their",
    SecondaryText: "Abilities",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus nobis minima inventore saepe.",
  },
];

const WhyUs = () => {
  return (
    <div className="w-[80vw] mx-auto mt-[6rem]">
      <h2 className="text-[22px] font-[600] text-primary-2">Why Us</h2>
      <ul className="mt-[2rem] flex justify-between">
        {whyUsData.map((item) => {
          return (
            <li
              key={item.id}
              className="w-[350px] h-[192px] bg-white p-[20px] rounded-md"
              style={{ boxShadow: " 0px 3px 6px #557DA526" }}
            >
              <header className="text-[22px] text-primary-4 leading-6 font-semibold">
                <h3>{item.primaryText}</h3>
                <h3>{item.SecondaryText}</h3>
              </header>
              <p className="text-[14px] mt-4">{item.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WhyUs;
