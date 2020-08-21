import {Component, html, css, registerComponent} from "../modls.js";

export default class MenuIcon extends Component {
    static get props() {
        return {
            component: "",
            color: ""
        };
    }

    styles() {
        return css`
            button.button {
                color: inherit;
                margin-left: -12px;
                flex: 0 0 auto;
                padding: 12px;
                overflow: visible;
                font-size: 1.5rem;
                text-align: center;
                transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
                border-radius: 50%;
                border: 0;
                cursor: pointer;
                margin: 0;
                display: inline-flex;
                outline: 0;
                position: relative;
                align-items: center;
                user-select: none;
                vertical-align: middle;
                justify-content: center;
                text-decoration: none;
                background-color: transparent;
                color: inherit;
            }`;
    }

    renderIcon() {
        return html`
            <span>
                <svg>
                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill=${this.props.color}></path>
                </svg>
            </span>
        `;
    }

    render() {
        const {component} = this.props;
        switch (component){
            case "":
                return this.renderIcon();
            case "button":
                return html`<button class="button">${this.renderIcon()}</button>`;
            default:
                return this.renderIcon();
        }
    }
}

registerComponent(MenuIcon, "menu-icon");