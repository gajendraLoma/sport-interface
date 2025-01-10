import React from "react";

interface LogoItem {
  id: number;
  image: string;
  name: string;
}

const logos: LogoItem[] = [
  { id: 0, image: "images/club0.png", name: "Club 0" },
  { id: 1, image: "images/club1.png", name: "Club 1" },
  { id: 2, image: "images/club2.png", name: "Club 2" },
  { id: 3, image: "images/club3.png", name: "Club 3" },
  { id: 4, image: "images/club4.png", name: "Club 4" },
  { id: 5, image: "images/club5.png", name: "Club 5" },
  { id: 6, image: "images/club6.png", name: "Club 6" },
  { id: 7, image: "images/club1.png", name: "Club 7" },
  { id: 8, image: "images/club2.png", name: "Club 8" },
  { id: 9, image: "images/club3.png", name: "Club 9" },
  { id: 10, image: "images/club4.png", name: "Club 10" },
  { id: 11, image: "images/club5.png", name: "Club 11" },
  { id: 12, image: "images/club6.png", name: "Club 12" },
  { id: 13, image: "images/club1.png", name: "Club 13" },
];

const CompanyLogos: React.FC = () => {
  return (
    <div className="mt-4 mb-4">
 <div className="flex justify-between pt-2 pb-6">
            <div className="flex items-center gap-2">
         
              <p className="text-xl font-semibold">🎮 Follow Club</p>
            </div>
            <div className="flex items-center gap-1">
              View All
              <img src="images/rightA.png" alt="flag1" />
            </div>
</div>

      <div className="overflow-x-auto">
        <div className="flex gap-4">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="shrink-0 hover:scale-105 duration-300 dark:bg-slate-900 dark:text-white"
            >
              <figure>
                <img
                  src={logo.image}
                  alt={`Logo ${logo.id}`}
                  className="object-contain"
                  style={{
                    width: "124px",
                    height: "124px",
                  }}
                />
              </figure>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;
