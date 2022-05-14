import { Fragment } from "react";
import Navigation from "../header/navigation";
import Footer from './../footer/footer';

function Layout({ children }) {
    return (
        <Fragment>
            <header>
                <Navigation />
            </header>
            <main>{children}</main>
            <footer>
                <Footer />
            </footer>
        </Fragment>
    );
}

export default Layout;
