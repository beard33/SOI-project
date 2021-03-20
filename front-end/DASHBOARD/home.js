$(document).ready(function(){
    $("#home-btn").on('click', renderHome);
    $("#new-project-btn").on('click', renderNewProject); 
    window.addEventListener('popstate', () => {
        let link = location.pathname.replace(/^.*[\\/]/, ""); 
        switch (link) {
            case 'home': {
                renderHome()
                break;
            }
            case 'new-project': {
                renderNewProject();
                break;
            }
        }
    })
});

function renderNewProject(ev){
    if (ev) { 
        ev.preventDefault();
        history.pushState({id:1}, 'new-project', '/new-project');
    }
    $(document).prop('title','New Project')
    $('#title').html("Create new project");
    $('#new-project-btn').addClass("active");
    $('#home-btn').removeClass('active');

    $('.page').empty().append(
        `<div id="project-title">
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
        </div>`
    );
}

function renderHome(ev){
    if (ev){
        ev.preventDefault()
        history.pushState({id:1}, 'home', '/home');
    }
    $(document).prop('title','Home')
    $('#title').html("Project list");
    $('#new-project-btn').removeClass("active");
    $('#home-btn').addClass('active');
    $('.page').empty().append(
        `<div class="project"> Project 1</div>
        <div class="project"> Project 2</div>
        <div class="project"> Project 3</div>
        <div class="project"> Project 4</div>
        <div class="project"> Project 5</div>
        <div class="project"> Project 6</div>`
    );
}




   