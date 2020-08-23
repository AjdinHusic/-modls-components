import {Component, RawComponent, html, registerComponent, svg} from "../modls.js";
import SvgIcon from "../components/SvgIcon.js";

export default class MenuIcon extends Component {
    static get props() {
        return {
            component: "",
            fontSize: "40px",
            color: "#fff"
        }
    }


    render() {
        return html`
            <svg-icon color=${this.props.color} fontSize=${this.props.fontSize} component=${this.props.component}>
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
            </svg-icon>`;
    }
}

registerComponent(MenuIcon, "menu-icon");