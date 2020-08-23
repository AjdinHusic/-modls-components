import jss, { Component, html, css, registerComponent } from "../modls.js";
import theme from "../theme.js";
import clsx from "../clsx/dist/clsx.m.js";

const style = {
    root: {
        display: "inline-block",
        fontWeight: 400,
        color: "#212529",
        textAlign: "center",
        verticalAlign: "middle",
        "-webkit-user-select": "none",
        "-moz-user-select": "none",
        "-ms-user-select": "none",
        "user-select": "none",
        backgroundColor: "transparent",
        border: "1px solid transparent",
        padding: "0.375rem 0.75rem",
        fontSize: "1rem",
        lineHeight: 1.5,
        borderRadius: "0.25rem",
        transition: "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
        '&:not(:disabled)': {
            cursor: "pointer"
        },
        '&:hover': {
            outline: 0,
            boxShadow: "0 0 0 0.2rem rgba(0, 123, 255, 0.25)"
        },
        '&:disabled': {
            opacity: 0.65,
        },
        '&:focus': {
            outline: 0,
            boxShadow: "0 0 0 0.2rem rgba(0, 123, 255, 0.25)"
        }
    },
    primary: {
        color: "#fff",
        backgroundColor: "#007bff",
        borderColor: "#007bff",
        '&:hover': {
            color: "#fff",
            backgroundColor: "#0069d9 !important",
            borderColor: "#0062cc"
        }
    },
    secondary: {
        color: "#fff",
        backgroundColor: "#6c757d",
        borderColor: "#6c757d",
        '&:hover': {
            color: "#fff",
            backgroundColor: "#5a6268",
            borderColor: "#545b62"
        },
        '&:focus': {
            color: "#fff",
            backgroundColor: "#5a6268",
            borderColor: "#545b62",
            boxShadow: "0 0 0 0.2rem rgba(130, 138, 145, 0.5)"
        }
    }
    
}

const sheet = jss.createStyleSheet(style);
const {classes} = sheet;

export default class ProccButton extends Component {
    static get props() {
        return {
            color: 'primary'
        };
    }

    styles() {
        return css`${sheet.toString()}`;
    }

    render() {
        const { color } = this.props;
        return html`
            <button class=${clsx(
                classes.root,
                {
                    [classes.primary]: color === 'primary',
                    [classes.secondary]: color === 'secondary',
                }
            )}>
                ${this.contents}
            </button>
        `;
    }
}

registerComponent(ProccButton, "procc-button");