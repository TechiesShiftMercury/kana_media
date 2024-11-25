import what_img from "../assets/kana_what_we_do.jpg";

const WhatWeDo = () => {
  return (
    <section id="what_we_do" className="bg-gray-50 text-gray-900">
      <div className="mx-10 md:px-6 py-12 md:py-36">
        <h4 className="font-medium text-base mb-2 uppercase">what we do</h4>
        <h2 className="text-gray-900 font-medium capitalize text-8xl mb-8">
          Your event, our expertise
        </h2>
        <p className="ml-4 text-lg">
          We offer a comprehensive range of services designed to make your
          events unforgettable:
        </p>
        <div className="flex justify-around align-items">
          <div className="w-80 h-80 bg-green-600 rounded">
            <div className="bg-black opacity-0 hover:opacity-100 w-full h-full rounded"></div>
          </div>
          <div className="w-80 h-80 bg-green-600 rounded">
            <div className="bg-black opacity-0 hover:opacity-100 w-full h-full rounded"></div>
          </div>
          <div className="w-80 h-80 bg-green-600 rounded">
            <div className="bg-black opacity-0 hover:opacity-100 w-full h-full rounded"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
