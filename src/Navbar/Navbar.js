import { Link, useMatch, useResolvedPath } from "react-router-dom"

const Navbar = () => {
    return(
        <nav className="nav">
            <Link to="/" className="site-title">Introduction</Link>
            <ul>
                    <CustomLink to="/usestate">UseState Hook</CustomLink>
                    <CustomLink to="/usereducer">UseReducer Hook</CustomLink>
                    <CustomLink to="/useeffect">UseEffect Hook</CustomLink>
                    <CustomLink to="/useref">UseRef Hook</CustomLink>
                    <CustomLink to="/uselayouteffect">UseLayoutEffect Hook</CustomLink>
                    <CustomLink to="/imparativehandle">ImparativeHandle Hook</CustomLink>
                    <CustomLink to="/createcontext">CreateContext Hook</CustomLink>
                    <CustomLink to="/usememo">UseMemo Hook</CustomLink>
                    <CustomLink to="/usecallback">UseCallBack Hook</CustomLink>
            </ul>
        </nav>
    );
};

const CustomLink = ({ to, children, ...props }) => {
    const resolvePath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvePath.pathname, end: true })

    return(
    <li className= {isActive ? "active" : ""}>
        <Link to={to} {...props}>
            {children}
        </Link>
    </li>
    );
}

export default Navbar;