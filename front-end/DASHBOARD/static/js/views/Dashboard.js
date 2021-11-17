import GeneralView from "./GeneralView.js";

export default class extends GeneralView {
    constructor() {
        super();
        this.setTitle("Dashboard");
    };

    // async used to wait for data when AJAX is implemented
    async getHTML() {
        return  `<h3 id="title">Project list</h3>
                <div class="view">
                    <div class="project"> Project 1</div>
                    <div class="project"> Project 2</div>
                    <div class="project"> Project 3</div>
                    <div class="project"> Project 4</div>
                    <div class="project"> Project 5</div>
                    <div class="project"> Project 6</div>
                </div>`
    };  

}