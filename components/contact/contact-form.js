import { useState, useEffect } from "react";
import Notification from "../ui/notification";
import classes from "./contact-form.module.css";

async function createMessage(userMessage) {
    const response = await fetch("/api/contact/", {
        method: "POST",
        body: JSON.stringify(userMessage),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();
    console.log(data);
    if (!response.ok) {
        throw new Error(data.message || "something went wrong");
    }
}

function ContactForm() {
    const [requestStatus, setRequestStatus] = useState();
    const [error, setError] = useState();
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredName, setEnteredName] = useState("");
    const [enteredMessage, setEnteredMessage] = useState("");

    useEffect(() => {
        if (requestStatus === "success" || requestStatus === "error") {
            const timer = setTimeout(() => {
                setRequestStatus(null);
                setError(null);
            }, 3000);
            return () => {
                clearTimeout(timer);
            };
        }
    }, [requestStatus]);

    async function handleContactMessage(event) {
        event.preventDefault();

        setRequestStatus("pending");
        try {
            await createMessage({
                email: enteredEmail,
                name: enteredName,
                message: enteredMessage,
            });
            setRequestStatus("success");
        } catch (error) {
            setError(error.message);
            setRequestStatus("error");
        }
    }
    let notification;

    if (requestStatus === "pending") {
        notification = {
            status: "pending",
            title: "Pending",
            message: "Message Pending",
        };
    }
    if (requestStatus === "success") {
        notification = {
            status: "success",
            title: "SuccessFully!",
            message: "Message SuccessFully Send",
        };
    }
    if (requestStatus === "error") {
        notification = {
            status: "error",
            title: "Error",
            message: error || "Message Send Failed!",
        };
    }
    return (
        <section className={classes.contact}>
            <h1>How Can I Help You!</h1>
            <form className={classes.form} onSubmit={handleContactMessage}>
                <div className={classes.controls}>
                    <div className={classes.control}>
                        <label htmlFor="email">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter Your Email"
                            value={enteredEmail}
                            onChange={(event) =>
                                setEnteredEmail(event.target.value)
                            }
                            required
                        />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="name">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter Your Name"
                            value={enteredName}
                            onChange={(event) =>
                                setEnteredName(event.target.value)
                            }
                            required
                        />
                    </div>
                </div>
                <div className={classes.control}>
                    <label htmlFor="message">Your Message</label>
                    <textarea
                        id="message"
                        placeholder="Enter Your Message"
                        rows="5"
                        value={enteredMessage}
                        onChange={(event) =>
                            setEnteredMessage(event.target.value)
                        }
                        required
                    />
                </div>
                <div className={classes.actions}>
                    <button
                        type="submit"
                        disabled={requestStatus === "pending"}
                    >
                        {requestStatus === "pending"
                            ? "Loading"
                            : "Send Message"}
                    </button>
                </div>
            </form>
            {notification && (
                <Notification
                    status={notification.status}
                    title={notification.title}
                    message={notification.message}
                />
            )}
        </section>
    );
}

export default ContactForm;
