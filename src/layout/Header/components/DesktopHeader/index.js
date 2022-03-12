import React from "react";
import { SearchBar } from "components";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const DesktopHeader = () => {
  return (
    <div className="flex items-center space-x-4 p-2 bg-yellow">
      <div>
        <img
          src="https://z.nooncdn.com/s/app/com/noon/images/logos/noon-black-en.svg"
          width="120px"
        />
      </div>
      <div className="w-4/6">
        <SearchBar />
      </div>

      <div className="flex space-x-2 items-center">
        <div>Sign In</div>
        <div>
          <PersonOutlineIcon />
        </div>
      </div>

      <div className="flex space-x-2 items-center">
        <div>Cart</div>
        <div>
          <ShoppingCartOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default DesktopHeader;
