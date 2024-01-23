import React from "react";
import Image from "next/image";

const companies = [
  {
    id: 1,
    name: "nextflows",
    logo: "/companies/nextflows.png",
  },
  {
    id: 2,
    name: "globalchart",
    logo: "/companies/globalchart.png",
  },
  {
    id: 3,
    name: "marketsavy",
    logo: "/companies/marketsavy.png",
  },
  {
    id: 4,
    name: "bestbank",
    logo: "/companies/bestbank.png",
  },
  {
    id: 5,
    name: "epicdev",
    logo: "/companies/epicdev.png",
  },
  {
    id: 6,
    name: "starsup",
    logo: "/companies/starsup.png",
  },
];

function CompanyList() {
  return (
    <div className="bg-black flex items-center justify-around absolute w-full left-0 p-4">
      {companies.map((company, i) => (
        <div key={i}>
          <Image
            src={company.logo}
            alt={company.name}
            width={150}
            height={30}
          />
        </div>
      ))}
    </div>
  );
}

export default CompanyList;
