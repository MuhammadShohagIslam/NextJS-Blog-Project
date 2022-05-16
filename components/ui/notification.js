import ReactDom from "react-dom";
import classes from "./notification.module.css";

function Notification({ title, message, status }) {
    let statusClass;
    if (status === "pending") {
        statusClass = "";
    }
    if (status === "success") {
        statusClass = classes.success;
    }
    if (status === "error") {
        statusClass = classes.error;
    }
    const activeClass = `${classes.notification} ${statusClass}`;

    return ReactDom.createPortal(
        <div className={activeClass}>
            <h2>{title}</h2>
            <p>{message}</p>
        </div>,
        document.getElementById("notification")
    );
}
export default Notification;
