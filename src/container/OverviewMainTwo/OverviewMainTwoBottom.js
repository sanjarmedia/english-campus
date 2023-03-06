import React, {useState} from "react";
import OverviewMainTwoBottomLeft from "./Overview-MainTwo-Bottom-Left";
import OverviewMainTwoBottomRight from "./Overview-MainTwo-Bottom-Right";
import OverviewMainTwoBottomLeftOnclick from "./OverviewMainTwoBottomLeftOnclick";
import OverviewMainTwoBottomRightOnclick from "./OverviewMainTwoBottomRightOnclick";

function OverviewMainTwoBottom() {
  const [pageState, setPageState] = useState(false);
  const pageTab = () => {
    setPageState(prevState => !prevState)
  };

  return (
    <div className="w-screen bg-white">
      <div className="container m-auto h-auto xl:w-full lg:w-[980px] w-11/12">
        <div className="h-24 mt-20 rounded-3xl bg-germain flex items-center justify-evenly">

          <button onClick={pageTab} className=" w-full h-20 bg-white rounded-3xl grid place-items-center ml-4"
                  data-aos="flip-left">
            <h1 className={!pageState ?
              "md:text-3xl text-xl xl:px-0 px-2 bg-clip-text bg-gradient-to-r from-gradientStart to-gradientFinish text-transparent"
              : "md:text-3xl text-lg text-black xl:px-0 px-2"}
            >
              Janubiy Koreyada o’qish
            </h1>
          </button>
          <button onClick={pageTab} className="w-full h-20 bg-white rounded-3xl grid place-items-center mx-4"
                  data-aos="flip-right"
          >
            <h1
              className={!pageState ? "md:text-3xl text-xl  text-black"
                    :
                    "md:text-3xl text-base text-lg bg-clip-text bg-gradient-to-r from-gradientStart to-gradientFinish text-transparent"
            }>
              Germaniyada work and travel
            </h1>
          </button>

        </div>
      </div>

      {!pageState ?
        <div className="container w-full h-full lg:flex justify-center mt-12 m-auto rounded-3xl">
          <OverviewMainTwoBottomLeft/>
          <OverviewMainTwoBottomRight/>
        </div> :
        <div className="container w-full md:flex justify-between mt-12 m-auto rounded-3xl">
          <OverviewMainTwoBottomLeftOnclick/>
          <OverviewMainTwoBottomRightOnclick/>
        </div>
      }
    </div>
  );
}

export default OverviewMainTwoBottom;