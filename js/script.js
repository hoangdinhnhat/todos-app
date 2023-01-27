import { attach } from "../library/store.js";
import App from "../component/App.js";
import logLayer from "../component/log-layer.js";

attach(App, document.querySelector('.todoapp'))
attach(logLayer, document.querySelector('.log-layer'))
