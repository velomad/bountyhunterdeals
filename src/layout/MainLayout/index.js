import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

// material-ui
import { useTheme } from "@mui/material/styles";
import { Box, CssBaseline, useMediaQuery } from "@mui/material";

import BottomNavigation from "layout/BottomNavigation";
import Header from "layout/Header";
import HomeBannerSlider from "layout/HomeBannerSlider";
import RecommendedFor from "layout/RecommendedFor";
import MegaDeals from "layout/MegaDeals";
import SuperDeals from "layout/SuperDeals";

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box>
      <CssBaseline />

      <Header />
      <HomeBannerSlider />
      <RecommendedFor />
      <MegaDeals />
      <SuperDeals />
      <div className={matchDownMd ? "block" : "hidden"}>
        <BottomNavigation />
      </div>

      <div>
        <Outlet />
      </div>
    </Box>
  );
};

export default MainLayout;
