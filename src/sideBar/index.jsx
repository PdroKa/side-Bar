import './style.css'
import tools from '../image/tools.svg'

export function SideBar({ id = 'modal', toogleModal, modal }) {
    const outSideClick = (e) => e.target.id === id ? toogleModal() : null

    return (
        <div id={id} className={modal ? "container-side-bar" : ""} onClick={outSideClick}>
            <aside className={`side-bar ${modal ? "open" : ""}`}>
                <button className="sidebar-toogle" onClick={toogleModal}>
                    {modal ? "/" : "="}
                </button>
                <h1>LOGO NFS</h1>
                <p>TOOLS</p>
                <p>TOOLS</p>
                <p>TOOLS</p>
                <p>CONFG</p>
                <p>USER</p>
            </aside>
        </div>
    )
}