const Nav = () => {
    return(
        <nav className="flex w-2/10">
            <div className="nav-btn-div flex flex-col items-center justify-center">
                <button className="up">Up</button>
                <button className="down">Down</button>
            </div>
            <div className="nav-link-div">
                <a href="" className="nav-link">Introduction</a>
                <a href="" className="nav-link">About</a>
                <a href="" className="nav-link">Projects</a>
            </div>
        </nav>
    )
}

export default Nav;

