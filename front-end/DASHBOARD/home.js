$(document).ready(function() {
    renderPage();
    $(window).on('hashchange', renderPage);
})

function renderPage() {
    let pageName = location.hash;
    switch (pageName) {
        case '#new-project':
            renderNewProject();
            break;
        case '#home':
            renderHome();
            break;
    }
}

function renderNewProject(){
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

function renderHome(){
    $('#title').html("Project list");
    $('#new-project-btn').removeClass("active");
    $('#home-btn').addClass('active');
    $('.page').empty();
}