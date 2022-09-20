import React from "react";
import goldline from "../../assets/goldline/goldline@2x.png";
import ideaa from "../../assets/ideaa/ideaa@2x.png";
import kanban from "../../assets/kanba/kanba@2x.png";
import lighting from "../../assets/lighting/lighting@2x.png";
import liva from "../../assets/liva/liva@2x.png";
import solaytic from "../../assets/solaytic/solaytic@2x.png";
import velocity9 from "../../assets/velocity-9/velocity-9@2x.png";
import ztos from "../../assets/ztos/ztos@2x.png";

const companiesLogoArray = [
  {
    id: 1,
    src: solaytic,
  },
  {
    id: 2,
    src: kanban,
  },
  {
    id: 3,
    src: lighting,
  },
  {
    id: 4,
    src: ztos,
  },
  {
    id: 5,
    src: kanban,
  },
  {
    id: 6,
    src: goldline,
  },
  {
    id: 7,
    src: ideaa,
  },
  {
    id: 8,
    src: liva,
  },
  {
    id: 9,
    src: velocity9,
  },
];

const Companies = () => {
  const margin = (index) => {
    if (index === 1) {
      return "mr-auto";
    }
    if (index === 5) {
      return "ml-auto";
    }
    return "mx-auto";
  };

  return (
    <div className="w-[80vw] mx-auto mt-[4rem] mb-[2rem]">
      <h2 className="text-[22px] text-primary-2 font-bold">
        Companies Who Trust Us
      </h2>
      <section className="flex flex-wrap mt-[3rem]">
        {companiesLogoArray.map((item) => {
          return (
            <div key={item.id} className="w-[20%] mb-[2rem] flex-grow">
              <img
                className={`h-[50px] mb-4rem ${margin(item.id)} `}
                src={item.src}
                alt={`logo no. ${item.id}`}
              />
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Companies;
