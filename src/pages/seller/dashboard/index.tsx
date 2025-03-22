import React from "react"

import ChatMSG from "../../../components/general/chatComponents/chatMSG"
import Sidebar from "../../../components/layout/sidebar/seller/Sidebar"
import Dashboard from "../../../components/seller/dashboard/Dashboard"
import Deliverables from "../../../components/seller/dashboard/Deliverables"
import Inbox from "../../../components/seller/dashboard/Inbox"
import Inventory from "../../../components/seller/dashboard/Inventory"
import Invoices from "../../../components/seller/dashboard/Invoices"
import ManageGigs from "../../../components/seller/dashboard/ManageGigs"
import PerformanceAnalytics from "../../../components/seller/dashboard/PerformanceAnalytics"
import Settings from "../../../components/seller/dashboard/Settings"

const Pages = [
  Dashboard,
  Inbox,
  ManageGigs,
  PerformanceAnalytics,
  Deliverables,
  Invoices,
  Inventory,
  Settings,
]

const DashboardPage = () => {
  const [current, setCurrent] = React.useState(0)

  return (
    <>
      <Sidebar current={current} setCurrent={setCurrent}>
        {Pages[current]({
          onClick: () => {
            console.log("Hello")
          },
        })}
      </Sidebar>
      <ChatMSG />
    </>
  )
}

export default DashboardPage
