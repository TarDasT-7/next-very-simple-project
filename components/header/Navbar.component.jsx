import Link from "next/link";

import styles from './Navbar.module.css'

export default function NavbarComponent() {


    return (
        <nav className="navbar-dark bg-dark">
            <div className="row d-flex py-3 px-4">
                <div className="col-4 ">
                    <Link className="navbar-brand txt-red fs-4" href="/">Site Logo</Link>
                </div>
                <div className="col-8" dir="rtl">
                    <Link className={`navbar-brand mx-4 txt-red fs-5 ${styles.nv_itm}`} href="/musics">albums</Link>
                </div>
            </div>

        </nav>
    );

}