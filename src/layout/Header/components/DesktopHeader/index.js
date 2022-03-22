import React from "react";
import { SearchBar, CategoryBar } from "components";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const DesktopHeader = () => {
  return (
    <React.Fragment>
      <div className="flex flex-row justify-between items-center space-x-4 p-2 bg-yellow">
        <div className="w-full flex flex-row justify-between items-center">
          <div>
            <img
              src="https://z.nooncdn.com/s/app/com/noon/images/logos/noon-black-en.svg"
              width="120px"
            />
          </div>
          <div className="w-full">
            <SearchBar />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex space-x-2 items-center w-full border-r border-gray-300 p-2">
            <div className="font-bold text-sm whitespace-nowrap">Sign In</div>
            <div>
              <PersonOutlineIcon />
            </div>
          </div>

          <div className="w-full flex space-x-2 items-center p-2">
            <div className="font-bold text-sm">Cart</div>
            <div>
              <ShoppingCartOutlinedIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="category-bar-container">
        <CategoryBar />
      </div>
    </React.Fragment>
  );
};

export default DesktopHeader;
