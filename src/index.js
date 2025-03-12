import { mount, unmount } from "svelte";
import App from "./App.svelte";

const root = document.getElementById("root");
const app = mount(App, { target: root });
