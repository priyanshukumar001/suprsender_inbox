import Inbox from "./Bell.js";


const Nav = () => {
    return (
        <>
            <div className='nav'>
                <h2 className='nav-head'>Inbox <span style={{ color: "white" }}>Integeration</span></h2>
                {/* <button className='notification'>&#128276;</button> */}
                <Inbox></Inbox>

            </div>
        </>
    )
}

export default Nav;