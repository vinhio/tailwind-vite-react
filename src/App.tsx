import { Fragment, BottomNavBar } from "@/components";
import {Home} from "@/screens";

function App() {
  const handleMenuSelect = (index: number) => {
    console.log(`Menu item ${index} selected`);
  };

  return (
    <Fragment>
      <Home/>
      <div className="flex justify-center items-center min-h-screen bg-[#F3F3F4]">
        <BottomNavBar onMenuSelect={handleMenuSelect} />
      </div>
    </Fragment>
  );
}

export default App;
