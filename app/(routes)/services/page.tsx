import Avatar from "@/components/avatar";
import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
  return (
  <>
        <TransitionPage />
        <CircleImage />
        <AvatarServices />
        <div className=" grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2 md:px-20">
          <div className="max-w-[450px] mt-20 md:mt-0">
            <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
              Mis{" "} <span className="font-bold text-secundary">servicios.</span>
            </h1>
              <p className="mb-3 text-xl text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            <button  className=" px-3 py-2 rounded-lg bg-secundary hover:bg-secundary/65">
              contactame
            </button>
          </div>

          {/* Slider */}

          <div>
            <SliderServices />
          </div>
        </div>

  </>
  );
}

export default ServicesPage;