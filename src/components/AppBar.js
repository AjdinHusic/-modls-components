import {Component, html, css, registerComponent} from "../modls.js";
import MenuIcon from "../icons/MenuIcon.js";
import NotificationsIcon from "../icons/NotificationsIcon.js";

export default class AppBar extends Component {
    styles() {
        return css`
        .appbar {
            display: block;
            box-sizing: border-box;
            height: 64px;
            background-color: #94cb42;
            border: 0;
            padding: 24px;
            box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
        }`;
    }

    render() {
        return html`
            <header class="topnavbar-wrapper appbar">
                <nav>
                    <menu-icon color="#fff"></menu-icon>
                    ${this.contents}
                    <notifications-icon color="#fff" style="float: right"></notifications-icon>
                </nav>
            </header>`; 
    }
    
}

registerComponent(AppBar, "app-bar");