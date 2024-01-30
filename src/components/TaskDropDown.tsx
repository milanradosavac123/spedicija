import { Dropdown } from "react-bootstrap";

export default function TaskDropDown() {
    return (
        <Dropdown className="d-inline mx-2" autoClose="outside">
            <Dropdown.Toggle id="dropdown-autoclose-outside">
                Clickable Inside
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}