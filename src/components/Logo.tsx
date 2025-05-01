import {Link} from "react-router-dom";

export const Logo = () => {
    return (
        <Link to="/"
        className="flex items-center">
            <img src="/ConvertFile.png" alt="Logo" height={85} width={85}/>
        </Link>
    );
    }

export default Logo;