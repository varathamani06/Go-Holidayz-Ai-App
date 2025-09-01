


import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { title } from "process";

 
export function PopularCtiyList() {
  const cards = data.map((card, index) => (
    <div className="">
        <Card key={card.src} card={card} index={index} />
    </div>
  ));
 
  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Popular destination to visit
      </h2>
      <div >
        <Carousel items={cards}  />
      </div>
    </div>
  );
}
 
const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};
 
const data = [
     {
    category: "Paris, France",
    title: "Explore the City of Lights-Eiffel Tower, Louvre & more",
    src: "https://images.pexels.com/photos/4802552/pexels-photo-4802552.jpeg",
    content: <DummyContent />,
  },
  {
    category: "New York, USA",
    title: "Experience NYC-Times Square. Central Park, Broadway",
    src: "https://images.pexels.com/photos/1634278/pexels-photo-1634278.jpeg",
    content: <DummyContent />,
  },
  {
    category: "Tokyo, Japan",
    title: "Discover Tokyo-Shibuya, Cherry Blossoms, Temples",
    src: "https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg",
    content: <DummyContent />,
  },
  {
    category: "Rome, Italy",
    title: "Walk through History Colosseum, Vatican, Roman Forum",
    src: "https://images.pexels.com/photos/531602/pexels-photo-531602.jpeg",
    content: <DummyContent />,
  },
 
  {
    category: "Dubai, UAE",
    title: "Luxury and Innovation-Burj Khalifa, Desert Safari",
    src: "https://images.pexels.com/photos/325193/pexels-photo-325193.jpeg",
    content: <DummyContent />,
  },
  {
    category: "India",
    title: "Harbour Views Opera House, Bondi Beach & Wildlife",
    src: "https://images.pexels.com/photos/3370598/pexels-photo-3370598.jpeg",
    content: <DummyContent />,
  },
  
];