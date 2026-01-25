import { Outlet } from "react-router"
import Navbar from "../components/shared/Navbar"
import { Footer } from "@/components/shared/Footer"

export const RootLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <Outlet />
      </main>
      <Footer></Footer>
    </>
  )
}
