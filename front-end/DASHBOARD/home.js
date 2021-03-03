$(document).ready(function() {
    renderPage();
    $(window).on('hashchange', renderPage);
})

function renderPage() {
    const pageName = (window.location.hash);
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
    $('#new-project-btn').css('text-decoration', 'underline').css('color', '#e7e7c8');;
    $('#home-btn').css('text-decoration', 'none').css('color', '#ecf0f1');

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
    $('#new-project-btn').css('text-decoration', 'none').css('color', '#ecf0f1');
    $('#home-btn').css('text-decoration', 'underline').css('color', '#e7e7c8');
    $('.page').empty();
}