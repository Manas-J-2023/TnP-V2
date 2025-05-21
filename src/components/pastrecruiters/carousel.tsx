import React, { useState } from "react";
import { Briefcase, Car } from "lucide-react";

const recruiters = [
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" },
  { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/488px-Apple_logo_black.svg.png" },
  { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Adobe_Systems_logo_and_wordmark.svg/1280px-Adobe_Systems_logo_and_wordmark.svg.png" },
  { name: "Cisco", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1280px-Cisco_logo_blue_2016.svg.png" },
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" },
  { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/800px-IBM_logo.svg.png" },
  { name: "Intel", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Intel-logo.svg/1005px-Intel-logo.svg.png" },
  { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/512px-Meta_Platforms_Inc._logo.svg.png" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png" },
  { name: "Nvidia", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Nvidia_logo.svg/2560px-Nvidia_logo.svg.png" },
  { name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/1024px-Oracle_logo.svg.png" },
  { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png" }
];

// Group recruiters by first letter
const groupedRecruiters = recruiters.reduce((acc, recruiter) => {
  const firstLetter = recruiter.name[0].toUpperCase();
  if (!acc[firstLetter]) acc[firstLetter] = [];
  acc[firstLetter].push(recruiter);
  return acc;
}, {});

const Carousel = () => {
  const [activeLetter, setActiveLetter] = useState("A");

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="py-16 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4">

        <div className="flex items-center justify-center mb-8">
          <Briefcase className="text-red-600 mr-3 h-6 w-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
            Past <span className="text-red-600">Recruiters</span>
          </h2>
        </div>

        {/* Alphabet Navigation */}
        <div className="flex justify-center flex-wrap gap-2 mb-8">
          {letters.map((letter) => (
            <button
              key={letter}
              className={`px-3 py-1 rounded text-sm font-medium ${
                activeLetter === letter ? "bg-red-600 text-white" : "bg-white border text-gray-600"
              }`}
              onClick={() => setActiveLetter(letter)}
            >
              {letter}
            </button>
          ))}
        </div>

        {/* Recruiter Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {groupedRecruiters[activeLetter]?.map((recruiter, idx) => (
            <div key={idx} className="bg-white p-4 flex items-center justify-center rounded-md shadow">
              <img src={recruiter.logo} alt={recruiter.name} className="max-h-12 max-w-full object-contain" />
            </div>
          )) || (
            <p className="col-span-full text-center text-gray-400">
              No recruiters under "{activeLetter}"
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Carousel;