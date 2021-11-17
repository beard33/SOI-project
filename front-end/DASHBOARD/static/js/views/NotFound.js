import GeneralView from "./GeneralView.js";

export default class extends GeneralView {

    constructor(){
        super();
        this.setTitle("Whops")
    }

    async getHTML(){
        return  `<h3 id="title">There is nothing here...</h3>
                <div class="view">
                    <div class="lost"> 
                        <a>
                            <img src="static/img/404.gif" width="550" height="400"/>
                        </a>
                    </div>                                       
                </div>`
    }

}