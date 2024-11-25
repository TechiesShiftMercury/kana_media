import PersonalisedAlbums from "../assets/personalised_albums.jpg";
import Refreshment from "../assets/refreshment.jpeg";
import Photography from "../assets/photography.webp";

const WhatWeDo = () => {
  return (
    <section id="what_we_do" className="bg-gray-50 text-gray-900">
      <div className="mx-10 md:px-6 py-12 md:py-36">
        <h4 className="font-medium text-base mb-2 uppercase">what we do</h4>
        <h2 className="text-gray-900 font-medium capitalize text-8xl mb-8">
          Your event, our expertise
        </h2>
        <p className="ml-4 text-lg mb-8">
          We offer a comprehensive range of services designed to make your
          events unforgettable:
        </p>
        <div className="py-8 px-8 flex justify-around items-center">
          <div className="w-80 h-80 bg-green-600 rounded-3xl relative overflow-hidden group">
            <img
              src={Photography}
              alt="Photography"
              className="w-full h-full object-cover rounded-3xl"
            />
            <h5 className="text-white text-4xl font-medium absolute top-36 left-14 group-hover:opacity-0 trasition-opacity duration-300 ease-in-out">
              Photography
            </h5>
            <div className="bg-black bg-opacity-0 group-hover:bg-opacity-70 opacity-0 group-hover:opacity-90 transition-all duration-300 ease-in-out w-full h-full rounded-3xl absolute top-0 left-0 grid place-items-center">
              <p className="text-white text-lg font-normal p-8">
                Professional coverage of family functions, corporate events,
                brand shoots, and more.
              </p>
            </div>
          </div>
          <div className="w-80 h-80 bg-green-600 rounded-3xl relative overflow-hidden group">
            <img
              src={PersonalisedAlbums}
              alt="Personalised Albums"
              className="w-full h-full object-cover rounded-3xl"
            />
            <h5 className="text-white text-4xl font-medium absolute top-36 left-24 group-hover:opacity-0 trasition-opacity duration-300 ease-in-out">
              Albums
            </h5>
            <div className="bg-black bg-opacity-0 group-hover:bg-opacity-70 opacity-0 group-hover:opacity-90 transition-all duration-300 ease-in-out w-full h-full rounded-3xl absolute top-0 left-0 grid place-items-center">
              <p className="text-white text-lg font-normal p-8">
                Professionally crafted photo albums delivered within days, so
                you can relive the magic quickly.
              </p>
            </div>
          </div>
          <div className="w-80 h-80 bg-green-600 rounded-3xl relative overflow-hidden group">
            <img
              src={Refreshment}
              alt="Refreshment"
              className="w-full h-full object-cover rounded-3xl"
            />
            <h5 className="text-white text-4xl font-medium absolute top-36 left-16 group-hover:opacity-0 trasition-opacity duration-300 ease-in-out">
              Refreshment
            </h5>
            <div className="bg-black bg-opacity-0 group-hover:bg-opacity-70 opacity-0 group-hover:opacity-90 transition-all duration-300 ease-in-out w-full h-full rounded-3xl absolute top-0 left-0 grid place-items-center">
              <p className="text-white text-lg font-normal p-8">
                Complete snack and drink packages to ensure your guests are
                entertained and comfortable throughout the event.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
