const WhoWeAre = () => {
  return (
    <section id="who_we_are" className="bg-[#39b54a] h-dvh text-gray-900 text-center">
      <div className="mx-10 md:px-6 py-12 md:py-36 flex flex-col items-center">
        <div className="mt-4 mb-12">
          <p className="font-medium text-xs md:text-base mb-2 uppercase">
            a passionate team of Visual StoryTellers
          </p>
          <h2 className="text-white font-medium capitalize text-6xl md:text-8xl mb-8">
            We are kana media
          </h2>
          <hr className="bg-gray-400 w-6/12 mx-auto" />
        </div>
        <p className="text-justify md:text-center text-base md:text-xl font-medium tracking-wide leading-relaxed md:max-w-[85ch]">
          Kana Media & Food provides high-quality photography and videgraphy
          services for a variety of occasions, including family functions,
          corporate events, brand shoots, and general photoshoots. We alse offer
          a complete refreshment package with snacks and drinks to keep our
          guests comfortable and entertained. Our experienced team captures
          beautiful moments with a personal touch and delivers professionally
          crafted photo albums within 3 working days of your event, so you can
          relive the memories withour delay.
        </p>
      </div>
    </section>
  );
};

export default WhoWeAre;
