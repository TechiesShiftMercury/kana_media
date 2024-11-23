import what_img from '../assets/kana_what_we_do.jpg'

const WhatWeDo = () => {
  return (
    <section id="what_we_do" className='bg-gray-50 text-gray-900'>
      <div>
        <h4>what we do</h4>
        <h2>Your event, our expertise</h2>
        <div className="flex gap-4 justify-between items-center">
          <div>
            <img src={what_img} alt="" />
          </div>
          <div>
            <p>
              We offer a comprehensive range of services designed to make your
              events unforgettable:
            </p>
            <ul>
              <li>
                <p>Photography & Videography:</p>
                <p>
                  Professional coverage of family functions, corporate events,
                  brand shoots, and more.
                </p>
              </li>
              <li>
                <p>Personalized Photo Albums:</p>
                <p>
                  Professionally crafted photo albums delivered within days, so
                  you can relive the magic quickly.
                </p>
              </li>
              <li>
                <p>Refreshment Packages:</p>
                <p>
                  Complete snack and drink packages to ensure your guests are
                  entertained and comfortable throughout the event.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo