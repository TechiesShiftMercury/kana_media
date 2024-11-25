function Footer() {
  return (
    <footer className="bg-green-600 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Brand Name */}
          <div className="mb-6 md:mb-0">
            <h1 className="text-xl font-bold">Brand Name</h1>
          </div>

          {/* Contact Section */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-sm font-bold tracking-wider mb-2">CONTACT</h2>
            <p>insert email here</p>
            <hr className="border-white w-24 my-2" />
            <p>address line one</p>
            <p>address line two</p>
          </div>

          {/* Links */}
          <div className="flex flex-col space-y-2">
            <a href="#" className="hover:underline">
              ABOUT US
            </a>
            <a href="#" className="hover:underline">
              CURRENT SERIES
            </a>
            <a href="#" className="hover:underline">
              THE HOUSE
            </a>
            <a href="#" className="hover:underline">
              LOOKING BACK
            </a>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-8 border-t border-white/20 pt-4 text-sm text-center md:text-left">
          <p>Copyright © Footer 2014. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
