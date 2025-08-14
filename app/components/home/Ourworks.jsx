import React from "react";


const Ourworks = () => {
  return (
    <div className="min-h-screen flex items-center py-10 xl:py-20 justify-center">
      <div className="w-11/12 mx-auto grid gap-2 xl:gap-5 grid-cols-1 md:grid-cols-2">
        {/* Left large card */}
        <div className="bg-gray-200 rounded-3xl border border-gray-600 overflow-hidden p-8  flex flex-col relative aspect-square justify-center">
          <div className="absolute bg-white/20 backdrop-blur-sm px-3 py-2 rounded-full left-3 z-10 top-3 md:left-5 md:top-5 flex items-center gap-3">
            <span className="block h-3 w-3 rounded-full primary-bg"></span>
            <span className="text-white font-medium text-sm tracking-widest">
              OUR WORKS
            </span>
          </div>
          <img
            className="absolute  left-0 top-0 w-full h-full object-cover"
            src="https://pro2-bar-s3-cdn-cf4.myportfolio.com/af972f7ebf619a04447d16eb60a40890/f44b448d21ac5d5283961971db196c118d3713e9a7b46af043dde9b903f83d653734b7d8cdd014f6_car_1x1.png?h=9c32462a2692ab64eaeb2b4132539d93&url=aHR0cHM6Ly9taXItczMtY2RuLWNmLmJlaGFuY2UubmV0L3Byb2plY3RzL29yaWdpbmFsL2Q0ZDM2MjM0MDE0MTU4LlkzSnZjQ3d4T0RBekxERTBNVEFzTUN3dy5wbmc="
            alt=""
          />
        </div>

        {/* Right cards */}
        <div className="grid grid-cols-2 gap-2 xl:gap-5 ">
          {/* Web design */}

          <div className="relative overflow-hidden border border-gray-600 aspect-square bg-neutral-800 rounded-3xl p-3 text-white ">
            <div className="z-10 flex flex-col justify-end h-full relative">
              <span className="text-[8px] md:text-xs font-medium px-2 py-1 w-fit rounded-full bg-white/30 backdrop-blur-sm uppercase tracking-widest">
                Web design
              </span>
            </div>
            <img
              className="absolute top-0 left-0 w-full h-full"
              src="https://assets.website-files.com/63e7ba4e1a7c203618d9c82a/63ea2ecafd88cbbdd4b7dfbe_img_1.jpg"
              alt=""
            />
          </div>

          {/* Branding */}
          <div className="relative overflow-hidden border border-gray-600 aspect-square bg-neutral-800 rounded-3xl p-3 text-white ">
            <div className="z-10 flex flex-col justify-end h-full relative">
              <span className="text-[8px] md:text-xs font-medium px-2 py-1 w-fit rounded-full bg-white/30 backdrop-blur-sm uppercase tracking-widest">
                Branding
              </span>
            </div>
            <img
              className="absolute top-0 left-0 w-full h-full"
              src="https://abduzeedo.com/sites/default/files/styles/square_1x1/public/originals/popchicke-theme.jpg"
              alt=""
            />
          </div>
          {/* UI/UX */}
          <div className="relative overflow-hidden border border-gray-600 aspect-square bg-neutral-800 rounded-3xl p-3 text-white ">
            <div className="z-10 flex flex-col justify-end h-full relative">
              <span className="text-[8px] md:text-xs font-medium px-2 py-1 w-fit rounded-full bg-white/30 backdrop-blur-sm uppercase tracking-widest">
                UI/UX
              </span>
            </div>
            <img
              className="absolute top-0 left-0 w-full h-full"
              src="https://i.pinimg.com/originals/a5/4e/a3/a54ea3ef786ecf8110dc77828210d6de.jpg"
              alt=""
            />
          </div>
          {/* Creative Direction */}
          <div className="relative overflow-hidden border border-gray-600 aspect-square bg-neutral-800 rounded-3xl p-3 text-white ">
            <div className="z-10 flex flex-col justify-end h-full relative">
              <span className="text-[8px] md:text-xs font-medium px-2 py-1 w-fit rounded-full bg-white/30 backdrop-blur-sm uppercase tracking-widest">
                Creative Direction
              </span>
            </div>
            <img
              className="absolute top-0 left-0 w-full h-full"
              src="https://avatars.mds.yandex.net/i?id=e6a9335309e0b46f555e1e0a193881577a5b6ecc-10385249-images-thumbs&n=13"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourworks;
