import {Component, html, css, registerComponent} from "../modls.js";



export default class BootstrapButton extends Component {
    styles() {
        return css`
         .bootstrap-button:not(:disabled):not(.disabled) {
            cursor: pointer;
        }
        .bootstrap-button {
            margin: 8px;
            color: #fff;
            background-color: #28a745;
            border-color: #28a745;
            display: inline-block;
            font-weight: 400;
            text-align: center;
            white-space: nowrap;
            vertical-align: middle;
            user-select: none;
            border: 1px solid transparent;
            padding: .375rem .75rem;
            font-size: 1rem;
            line-height: 1.5;
            border-radius: .25rem;
            transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
        }`;
    }
    render() {
        return html`
            <button class="bootstrap-button">
                ${this.contents}
            </button>
        `;
    }
}

registerComponent(BootstrapButton, "bootstrap-button");