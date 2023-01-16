import './style.css'


export function SideBar({ id = 'modal', toogleModal }) {
    const outSideClick = (e) => e.target.id === id ? toogleModal() : null

    return (
        <div id={id} className='container-side-bar' onClick={outSideClick}>
            <div className='side-bar'>
                <div>
                    <h1>Logo</h1>
                    <button onClick={toogleModal} className='btn-close' />
                </div>
                <h1>Side Bar</h1>
                <h1>Item</h1>
                <h1>Item</h1>
            </div>
        </div>
    )
}