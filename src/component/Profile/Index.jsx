import {
  AccountCircle,
  Delete,
  Close,
} from "@mui/icons-material";

import { useState } from "react";
import { Drawer, IconButton } from "@mui/material";

import Favourites from "./Sections/Favourites";
import FeedbackSection from "./Sections/Feedback";
import Order from "./Sections/Order";
import Refunds from "./Sections/Refunds";
import Privacy from "./sections/Privacy";
import Subscription from "./sections/Subscription";
import UserInfo from "./sections/UserInfo";
import Notification from "./Sections/Notification";

export default function SettingsDrawer() {
  const [open, setOpen] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

 

  return (
    <>
      {/* Trigger button (example) */}
      {/* <button onClick={() => setOpen(true)}>
        <AccountCircle />
      </button> */}

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          className: "w-full md:w-1/2 bg-white dark:bg-black-900 p-5 overflow-y-auto",
        }}
      >
        {/* Header */}
        {/* <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold">Settings</h1>
          <IconButton
            onClick={() => setOpen(false)}
            className="text-gray-500 hover:text-gray-800 dark:hover:text-white"
          >
            <Close />
          </IconButton>
        </div> */}

        {/* All Settings Sections Inline */}
        <div className="space-y-8">
          <UserInfo />
          <Refunds />
          <Notification />
          <Privacy />
          <Subscription />
          <Order />
          <Favourites />
          <FeedbackSection />

          {/* <div className="mt-6">
            <button
              onClick={() => setShowConfirmModal(true)}
              className="flex items-center gap-2 text-red-600 hover:text-red-800"
            >
              <Delete fontSize="small" /> Delete Account
            </button>
          </div> */}
        </div>
      </Drawer>

      
    </>
  );
}
