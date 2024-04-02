import { RecoilRoot, useRecoilState } from "recoil"
import { SideBarOpen } from "./OpenSidebar"

export const Navbar = () => {
    return (
        <MainNavbar />
    )

}

function MainNavbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useRecoilState(SideBarOpen)

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }
    // console.log(isSidebarOpen)
    return <div className="flex justify-between mt-3">
        <div className="flex">
            <div className="flex justify-center flex-col pr-2 lg:hidden">
                <button onClick={toggleSidebar} className={`${isSidebarOpen ? 'hidden' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
            <div className="font-medium text-lg flex justify-center flex-col">
                Payouts
            </div>
            <div className="pl-2 ml-1 flex text-sm">
                <div className="flex justify-center flex-col">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                        <path className="text-gray-400" strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                </div>
                <div className="hidden sm:block sm:flex">
                    <div className=" pl-1 text-gray-400 flex justify-center flex-col ">
                        How it works
                    </div>
                </div>
            </div>
        </div>
        <div className="w-2/5 flex gap-2 rounded bg-gray-200 p-3 ">
            {/* transitionWidth duration-1000 ease-in-out md:w-32 lg:w-56 xl:w-80 */}
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path className="text-gray-400" strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </div>
            <div >
                <input className="w-11/12 bg-gray-200 outline-none " placeholder="Search features,etc.">
                    {/* transitionWidth duration-1000 ease-in-out md:w-20 lg:w-32 xl:w-56 */}
                </input>
            </div>
        </div>
        <div className="flex gap-2">

            <div className="bg-gray-200 rounded-full p-3">
                <button>
                    <div className="inline-block align-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                        </svg>
                    </div>
                </button>
            </div>
            <div className="bg-gray-200 rounded-full p-3">
                <button>
                    <div className="inline-block align-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
                        </svg>
                    </div>
                </button>
            </div>
        </div>
    </div>
}

