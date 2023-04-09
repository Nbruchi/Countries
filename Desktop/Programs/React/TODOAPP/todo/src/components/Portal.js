import Modal from "./Modal";
import { useState } from "react";
const portal_btn_styles = {
    backgroundColor: "green",
    width: "100px",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "10px",
    position: "fixed",
    top: "5px",
    right: "5px",
    zIndex: 1,
};
function Portal() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <button onClick={() => setIsOpen(true)} style={portal_btn_styles}>
                Sign in
            </button>
            <Modal open={isOpen} onClose={() => setIsOpen(false)} />
        </div>
    );
}
export default Portal;
