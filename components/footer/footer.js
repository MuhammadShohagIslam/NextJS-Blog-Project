import classes from "./footer.module.css";

function Footer() {
    return (
        <footer className={classes.footer}>
            <p>
                Created By Maximilian Schwarzmüller © {new Date().getFullYear()}
            </p>
        </footer>
    );
}

export default Footer;
