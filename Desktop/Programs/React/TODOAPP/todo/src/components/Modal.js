import React from "react";
import ReactDOM from "react-dom";
const sign_in_styles = {
    width: "100%",
    borderRadius: "10px",
    boxSizing: "borderBox",
    padding: "10px",
    border: "1px solid #ccc",
    backgroundColor: "green",
    color: "white",
};
const input_styles = {
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "10px",
    border: "1px solid #333",
    outline: "none",
    font: "400 Arial, Helvetica, sans-serif",
    display: "block",
};
const overlay_styles = {
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: 100,
};
const modal_styles = {
    position: "fixed",
    top: "50%",
    left: "50%",
    backgroundColor: "#fff",
    transform: "translate(-50%, -50%)",
    padding: "30px",
    zIndex: 100,
    borderRadius: "10px",
};

const portal_btn_styles = {
    backgroundColor: "red",
    padding: "10px",
    borderRadius: "20%",
    border: "none",
    color: "#fff",

    fontSize: "20px",
    position: "fixed",
    top: 5,
    right: 5,
    margin: "2px",
};
const form_styles = {
    margin: "10px",
};
const fieldset = {
    marginTop: "20px",
    color: "gray",
    borderRadius: "20px",
    fontSize: "20px",
};
function Modal({ open, onClose }) {
    if (!open) return null;
    return ReactDOM.createPortal(
        <>
            <div style={overlay_styles} />
            <div style={modal_styles}>
                <button onClick={onClose} style={portal_btn_styles}>
                    X
                </button>
                <div style={form_styles}>
                    <form>
                        <fieldset style={fieldset}>
                            <legend>Sign in here</legend>
                            <label for="name">Name:</label>
                            <input
                                style={input_styles}
                                placeholder="Username.."
                            />
                            <label for="password" type="password">
                                Password
                            </label>
                            <input
                                style={input_styles}
                                placeholder="Password.."
                            />
                            <input
                                type="button"
                                value="Sign in"
                                style={sign_in_styles}
                            />
                        </fieldset>
                    </form>
                </div>
            </div>
        </>,
        document.getElementById("modal")
    );
}
export default Modal;
