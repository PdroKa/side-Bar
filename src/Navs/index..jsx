import { useState } from "react"
import { SideBar } from '../sideBar/index'
import tools from '../image/tools.svg'
import './style.css'
export function NavBar() {
    const [sideBar, setSideBar] = useState(false)
    const openSide = () => setSideBar(!sideBar)

    return (
        <div>
            <div className="container-nav-bar">
                <button  onClick={openSide} className="btn-tools">
                    <img src={tools} alt="Tools"/>
                </button>

                <h1>Logo</h1>
            </div>

            {
                sideBar ? <SideBar toogleModal={openSide} /> : null
            }
        </div>
    )
}