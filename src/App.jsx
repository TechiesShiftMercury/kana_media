import { useCallback } from "react"
import { useState } from "react";
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import RetractableSidebar from "./components/RetractableSidebar"
import WhatWeDo from "./components/WhatWeDo"
import WhoWeAre from "./components/WhoWeAre"


function App() {
  
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);

  const handleOnClickClose = useCallback(() => setIsSidebarOpened(false), []);

  return (
    <>
      <Header onMenuClick={setIsSidebarOpened} />
      <RetractableSidebar
        opened={isSidebarOpened}
        onClickClose={handleOnClickClose}
      />
      <Hero />
      <WhoWeAre />
      <WhatWeDo />
      <Footer />
      </>
  );
}

export default App
