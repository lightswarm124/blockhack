// "use client";
// import Image from "next/image";
// import React, { useEffect, useRef, useState } from "react";

// const Carousel = ({ data }) => {
//   const [currentImg, setCurrentImg] = useState(0);
//   const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 });
//   const carouselRef = useRef(null);

//   useEffect(() => {
//     if (carouselRef.current) {
//       const elem = carouselRef.current;
//       const { width, height } = elem.getBoundingClientRect();
//       setCarouselSize({ width, height });
//     }
//   }, []);

//   const handlePrev = () => {
//     setCurrentImg((prevIndex) => {
//       const maxIndex = getMaxIndex();
//       return prevIndex === 0 ? maxIndex : prevIndex - 1;
//     });
//   };

//   const handleNext = () => {
//     setCurrentImg((prevIndex) => {
//       const maxIndex = getMaxIndex();
//       return prevIndex === maxIndex ? 0 : prevIndex + 1;
//     });
//   };

//   const getMaxIndex = () => {
//     const isMobile = window.innerWidth < 768;
//     return isMobile ? data.length - 1 : Math.ceil(data.length / 3) - 1;
//   };

//   return (
//     <div className="relative">
//       {/* Carousel container */}
//       <div className="relative h-60 w-full overflow-hidden rounded-md">
//         {/* Image container */}
//         <div
//           ref={carouselRef}
//           style={{
//             left:
//               -currentImg *
//               carouselSize.width *
//               (window.innerWidth < 768 ? 1 : 3),
//           }}
//           className="absolute flex h-full w-full transition-all duration-300"
//         >
//           {data.map((prize, i) => (
//             <div
//               key={i}
//               className={`relative h-full ${
//                 window.innerWidth < 768 ? "w-full" : "w-1/3"
//               } flex-shrink-0 p-4`}
//             >
//               <div className="bg-white p-4 rounded-lg shadow-lg h-full flex flex-col justify-center items-center">
//                 <Image
//                   alt={`prize-image-${i}`}
//                   src={prize.sponsorImage}
//                   layout="fill"
//                   objectFit="cover"
//                   className="rounded-lg"
//                 />
//                 <div className="absolute bottom-0 left-0 p-4 bg-white bg-opacity-75 rounded-t-lg">
//                   <h3 className="text-xl font-semibold">{prize.name}</h3>
//                   <p className="text-sm text-center">{prize.description}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Navigation buttons */}
//       <div className="mt-6 flex justify-center space-x-4">
//         <button
//           onClick={handlePrev}
//           className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition duration-300"
//         >
//           {"<"}
//         </button>
//         <button
//           onClick={handleNext}
//           className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition duration-300"
//         >
//           {">"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Carousel;
