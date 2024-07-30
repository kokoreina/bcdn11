import { Link } from "react-router-dom";
import { Select } from "../../atoms/select";

export function UserTemplate({ children }) {
    return (
        <>
            <header className="h-24 px-16 bg-black text-white sticky">
                <div>
                    <Link to={"/"}>
                        <img
                            className="h-[3.2rem]"
                            src="/loklok-white.webp"
                        ></img>
                    </Link>
                    <nav>
                        <Link to="/">Trang Chủ</Link>
                        <Link to="/showing-movie">Phim Đang Chiếu</Link>
                        <Link to="/coming-movie">Phim Chuẩn Bị Chiếu</Link>
                    </nav>
                </div>
                <div>
                    <Select></Select>
                </div>
            </header>
            {children}
        </>
    );
}
