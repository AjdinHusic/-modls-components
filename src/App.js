import { Component, html, registerComponent } from "./modls.js";
import ProccButton from "./components/ProccButton.js";
import AppBar from "./components/AppBar.js";

export default class App extends Component {
    render() {
        return html`
            <app-bar></app-bar>
            <div style="padding: 50px">
                <procc-button color='secondary'>secondary</procc-button>
                <procc-button color='primary'>primary</procc-button>
            </div>
        `;
    }
}

registerComponent(App, "modls-app");