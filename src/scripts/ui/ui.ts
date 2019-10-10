import {Toolbar} from "./toolbar";
import {InfoPane} from "./infopane";
import {SketchView} from "./sketchview";
import {Protractr} from "../protractr";

export class UI {
    protractr: Protractr;
    toolbar: Toolbar;
    infoPane: InfoPane;
    sketchView: SketchView;
    constructor(protractr: Protractr, canvas: HTMLCanvasElement, sidePane: HTMLDivElement, toolbar: HTMLUListElement) {
        this.protractr = protractr;
        this.sketchView = new SketchView(this.protractr.sketch, canvas);
        this.toolbar = new Toolbar(toolbar, this.sketchView);
        this.infoPane = new InfoPane(sidePane);
    }
}