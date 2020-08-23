import jss, {Component, RawComponent, html, css, registerComponent, svg} from "../modls.js";

const style = {
    button: {
        borderRadius: "50%",
        border: 0,
        background: "transparent",
        cursor: "pointer",
        padding: "0.3rem",
        '&:hover': {
            outline: 0,
            background: "#0002",
        },
        '&:focus': {
            outline: 0,
            background: "#0005"
        }
    }
}

const sheet = jss.createStyleSheet(style);
const {classes} = sheet;

export default class SvgIcon extends Component {
    static get props() {
        return {
            component: "",
            fontSize: '40px',
            color: "#fff"
        };
    }

    styles() {
        return css`
            ${sheet.toString()}
        `;
    }

    renderIcon() {
        const {color, fontSize} = this.props;
        return html`
            <svg width="1em" height="1em" viewBox="0 0 24 24" style="fill: ${color}; font-size: ${fontSize}">
                ${this.contents}
            </svg>
            
        `;
    }

    render() {
        const {component} = this.props;
        switch (component){
            case "":
                return this.renderIcon();
            case "button":
                return html`<button class=${classes.button}>${this.renderIcon()}</button>`;
            default:
                return this.renderIcon();
        }
    }
}

registerComponent(SvgIcon, "svg-icon");