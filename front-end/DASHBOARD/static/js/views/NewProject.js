import GeneralView from "./GeneralView.js";

export default class extends GeneralView {
    constructor() {
        super();
        this.setTitle("New project");
    };

    // async used to wait for data when AJAX is implemented
    async getHTML() {
        return `<h3 id="title">New project</h3>
                    <div class="view"> 
                        <div id="project-title">
                            <p>Project name:</p>
                            <input name="project-name" type="text" size="40" placeholder="Project name" required>
                        </div>
                        <div id="project-type">
                            <p>Project type:</p>
                            <input name="project-type" id="photo-type" type="radio" value="Photo"> 
                            <label for="photo-type">Photo</label>
                            <input name="project-type" id="text-type" type="radio" value="Images">
                            <label for="text-type">Text</label>
                        </div>
                        <div id="project-files">
                            <p>Add files:</p>
                            <input name="project-files" type="file" multiple>
                        </div>
                        <div id="confirm-project">
                            <button type="button">Create project</button>
                        </div>
                    <div>`
    };
}