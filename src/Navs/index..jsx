import { useState } from "react"
import { SideBar } from '../sideBar/index'
import tools from '../image/tools.svg'
import './style.css'
export function NavBar() {
    const [sideBar, setSideBar] = useState(false)
    const openSide = () => setSideBar(!sideBar, console.log("ABERTO"))

    return (
        <div>
            <div className="container-nav-bar">
                <h1>Logo</h1>
            </div>
                <SideBar modal={sideBar} toogleModal={openSide} />
                <h1>CONTEUDO</h1>
        </div>
    )
}