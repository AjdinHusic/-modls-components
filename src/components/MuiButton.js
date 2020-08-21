import {Component, html, css, registerComponent} from "../modls.js";

export default class MuiButton extends Component {
    styles() {
        return css`
            .mui-button:focus {
                background-color: rgb(17, 82, 147);
                box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
                text-decoration: none;
            }

            .mui-button:active {
                box-shadow: 0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12);
            }

            .mui-button {
                margin: 8px;
                box-shadow: rgba(0, 0, 0, .2) 0 3px 1px -2px, rgba(0, 0, 0, .14) 0 2px 2px 0, rgba(0, 0, 0, .12) 0 1px 5px 0;
                box-sizing: border-box;
                background-color: #1976d2;
                color: #fff;
                padding: 6px 16px;
                font-size: 0.875rem;
                min-width: 64px;
                transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
                font-family: "Roboto", "Helvetica", "Arial", sans-serif;
                font-weight: 500;
                line-height: 1.75;
                border-radius: 4px;
                letter-spacing: 0.02857em;
                text-transform: uppercase;
                border: 0;
                cursor: pointer;
                display: inline-flex;
                vertical-align: middle;
                justify-content: center;
            }

            .label {
                width: 100%;
                display: inherit;
                align-items: inherit;
                justify-content: inherit;
            }
            .ripple {
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 0;
                overflow: hidden;
                position: absolute;
                border-radius: inherit;
                pointer-events: none;
            }
            .ripple:focus {
                outline: -webkit-focus-ring-color auto 1px;
            }`;
    }

    render() {
        return html`
            <button class="mui-button">
                <span class="label">${this.contents}</span>
                <span class="ripple"></span>
            </button>
        `;
    }
}

registerComponent(MuiButton, "mui-button");
