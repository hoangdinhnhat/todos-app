import { attach } from "./library/store.js";
import App from "./component/App.js";

attach(App, document.querySelector('.todoapp'))