import React from "react";

interface ItemList {
  id: number;
  image: string;
  name: string;
  price: string;
}

const shoppingItems: ItemList[] = [
  { id: 0, image: "images/shopping1.png", name: "Chelsea Home Kit 21 / 22", price:"$150.10" },
  { id: 1, image: "images/shopping2.png", name: "West Ham Home Kit 21 / 22", price:"$150.10" },
  { id: 2, image: "images/shopping3.png", name: "Man City Away Kit 21/22", price:"$150.10" },
  { id: 3, image: "images/shopping4.png", name: "Arsenal Away Kit 21/22", price:"$150.10" },
  { id: 4, image: "images/shopping1.png", name: "Liverpool Home Kit 21/22", price:"$150.10"  },
  { id: 5, image: "images/shopping2.png", name: "Chelsea Home Kit 21 / 22", price:"$150.10"},
  { id: 6, image: "images/shopping3.png", name: "Chelsea Home Kit 21 / 22", price:"$150.10" },
  { id: 7, image: "images/shopping4.png", name: "Chelsea Home Kit 21 / 22", price:"$150.10" },
  { id: 8, image: "images/shopping1.png", name: "Chelsea Home Kit 21 / 22", price:"$150.10"},
  { id: 9, image: "images/shopping2.png", name: "Chelsea Home Kit 21 / 22", price:"$150.10" },
  { id: 10, image: "images/shopping3.png", name: "Chelsea Home Kit 21 / 22", price:"$150.10" },
  { id: 11, image: "images/shopping4.png", name: "Chelsea Home Kit 21 / 22", price:"$150.10" },
  { id: 12, image: "images/shopping1.png", name: "Chelsea Home Kit 21 / 22", price:"$150.10" },
  { id: 13, image: "images/shopping2.png", name: "Chelsea Home Kit 21 / 22", price:"$150.10" },
];

const CompanyLogos: React.FC = () => {
  return (
    <div className="mt-4 mb-4">
 <div className="flex justify-between pt-2 pb-6">
            <div className="flex items-center gap-2">
         
              <p className="text-xl font-semibold">👕 Shopping</p>
            </div>
            <div className="flex items-center gap-1">
              View All
              <img src="images/rightA.png" alt="flag1" />
            </div>
</div>

      <div className="overflow-x-auto">
        <div className="flex gap-4">
          {shoppingItems.map((items) => (
            <div
              key={items.id}
              className="shrink-0 hover:scale-105 duration-300 dark:bg-slate-900 dark:text-white"
            >
              <figure>
                <img
                  src={items.image}
                  alt={`Item ${items.id}`}
                  className="object-contain"
                  style={{
                    width: "224px",
                    height: "282px",
                  }}
                />
              </figure>
              <div className="">
                <p>{items.name}</p>

                <p className="text-[#5742A9] font-semibold">{items.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;
