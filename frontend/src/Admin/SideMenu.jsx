import * as React from "react";
import * as Mui from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import SellIcon from "@mui/icons-material/Sell";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import PaidIcon from "@mui/icons-material/Paid";
import SettingsIcon from "@mui/icons-material/Settings";
import CategoryIcon from "@mui/icons-material/Category";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import { NavLink } from "react-router-dom";

export default function SideMenu() {
  return (
    <nav
      className=" text-slate-400 nav lg:block hidden col-lg-3 col-md-3 lg:w-1/5"
      aria-label="main mailbox folders"
    >
      <div className="my-5 text-left px-5 mt-10">
        <div className="item-color rounded-lg px-5 py-3">
          <h3 className="text-lg font-bold text-white">Admin</h3>
          <h3>admin@mail.com</h3>
        </div>
      </div>
      <Mui.Divider className="bg-slate-700" />
      <div className="my-8 pt-0 p-5">
        <NavLink to="/dashboard">
          <Mui.ListItemButton className="font-thin item-btn">
            <span className="mr-5">
              <SignalCellularAltIcon fontSize="small" className="icon" />
            </span>
            <span className="font-semibold text-sm">Dashboard</span>
          </Mui.ListItemButton>
        </NavLink>
        <Mui.ListItemButton className="font-thin item-btn">
          <span className="mr-5">
            <SellIcon fontSize="small" className="icon" />
          </span>
          <span className="font-semibold text-sm">All Orders</span>
        </Mui.ListItemButton>
        <Mui.ListItemButton className="font-thin item-btn">
          <span className="mr-5">
            <ProductionQuantityLimitsIcon fontSize="small" className="icon" />
          </span>
          <span className="font-semibold text-sm">Current Orders</span>
        </Mui.ListItemButton>
        <Mui.ListItemButton className="font-thin item-btn">
          <span className="mr-5">
            <PaidIcon fontSize="small" className="icon" />
          </span>
          <span className="font-semibold text-sm">Payment Status</span>
        </Mui.ListItemButton>
        <NavLink to="/dashboard/category">
          <Mui.ListItemButton className="font-thin item-btn">
            <span className="mr-5">
              <CategoryIcon fontSize="small" className="icon" />
            </span>
            <span className="font-semibold text-sm">Category</span>
          </Mui.ListItemButton>
        </NavLink>
        <Mui.ListItemButton className="font-thin item-btn">
          <span className="mr-5">
            <ShoppingBasketIcon fontSize="small" className="icon" />
          </span>
          <span className="font-semibold text-sm">Add Product</span>
        </Mui.ListItemButton>
        <div className="my-5">
          <Mui.Divider className="bg-slate-700 " />
        </div>
        <Mui.ListItemButton className="font-thin item-btn">
          <span className="mr-5">
            <SettingsIcon fontSize="small" className="icon" />
          </span>
          <span className="font-semibold text-sm">Setting</span>
        </Mui.ListItemButton>
        <Mui.ListItemButton className="font-thin item-btn">
          <span className="mr-5">
            <LogoutIcon fontSize="small" className="icon" />
          </span>
          <span className="font-semibold text-sm">Logout</span>
        </Mui.ListItemButton>
      </div>
    </nav>
  );
}