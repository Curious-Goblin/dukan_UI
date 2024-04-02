import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { Footer } from "./components/Footer"
import { Navbar } from "./components/NavBar"
import { Overview } from "./components/Overview"
import { RevenueCard } from "./components/RevenueCard"
import { RevenueCard1 } from "./components/RevenueCard1"
import { SideBar } from "./components/SideBar"
import { Table } from "./components/Table"
import { TableBar } from "./components/TableBar"
import { Transactions } from "./components/Transaction"
import { SideBarOpen } from "./components/OpenSidebar"
import { useEffect } from "react"


function App() {
  return (
    <RecoilRoot>
      <Main />
    </RecoilRoot>
  )
}
function Main() {
  let isSidebarOpen = useRecoilValue(SideBarOpen)
  let setIsSidebarOpen = useSetRecoilState(SideBarOpen)

  useEffect(() => {
    console.log(isSidebarOpen)
  }, [isSidebarOpen])

  const toggleSidebar = () => {
    setIsSidebarOpen(false)
    console.log(isSidebarOpen)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setIsSidebarOpen, isSidebarOpen]);

  return (
    <div className="flex mb-2 pr-7">
      <div className={`${isSidebarOpen ? 'block fixed' : 'hidden'} z-20 lg:block lg:fixed `}>
        <SideBar />
      </div>
      <div className={`${isSidebarOpen ? 'bg-black-500 opacity-50 ' : ''} w-full flex justify-between absolute`}>
      {isSidebarOpen && (
          <div className={`fixed h-screen inset-0 bg-black bg-opacity-20 flex justify-center items-center z-20 lg:hidden `}>
          </div>
        )}
        <div className={`${isSidebarOpen ? 'ml-64' : ''} w-full lg:ml-64`}>
          <div className="sticky z-10 top-0 left-0 right-0 bg-white">
            <div className="p-3 ">
              <Navbar />
            </div>
            <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-300" />
          </div>
          <div className="overflow-y-auto">
            <div className="p-3">
              <Overview />
            </div>
            <div className="p-3 grid grid-cols-1 gap-4 xl:grid-cols-3 md:grid-cols-2">
              <div className="">
                <RevenueCard1 title={"Next Payout"} orderCount={"45"} amount={"1,258,963"} />
              </div>
              <div className="">
                <RevenueCard title={"Amount"} orderCount={"13"} amount={"962,852"} />
              </div>
              <div className="w-full xl:block">
                <RevenueCard title={"Amount Proccessed"} amount={"962,852"} />
              </div>
            </div>
            <div>
              <Transactions />
            </div>
            <div>
              <TableBar />
            </div>
            <div>
              <Table />
            </div>
            <div className="m-7">
              <Footer />
            </div>
          </div>
        </div>
        <div className={`${isSidebarOpen ? 'top-4 right-8 text-black-900' : 'hidden'}  z-20 fixed`}>
          <button onClick={toggleSidebar} >
            <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 fill-black-900">
              <path  fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
export default App
