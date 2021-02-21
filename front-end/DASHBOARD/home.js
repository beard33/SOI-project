function generate_form() {

    var $dataform = $('<form id="form1" runat="server" method="post" name="submit_data" enctype="multipart/form-data"></form>');

    var $table = $('<table>');
    $table
    // thead
    .append('<thead>').children('thead')
    .append('<tr />').children('tr').append('<th> </th><th> </th><th> </th>'); //queste sono le colonne della tabella
    
    //tbody
    var $tbody = $table.append('<tbody />').children('tbody');
    
    // ADD ROW 'TITOLO PROGETTO'
    $tbody.append('<tr />').children('tr:last')
    .append("<td>Titolo progetto</td>")
    .append("&nbsp;&nbsp;&nbsp;")
    .append("<input type=text class=title_project placeholder=Titolo required>")
    
    // ADD ROW 'TIPOLOGIA PROGETTO'
    $tbody.append('<tr />').children('tr:last')
    .append("<td>Tipologia progetto</td>")
    .append("&nbsp;&nbsp;&nbsp;")
    .append("<label> <input type=radio name=type_project id=type_photo value=Foto onclick=check_radio()> Foto </label>")
    .append("&nbsp;&nbsp;")
    .append("<label> <input type=radio name=type_project id=type_text value=File di testo onclick=check_radio()> File di testo </label>")
  
    // ADD ROW 'FILE DI TESTO'
    $tbody.append('<tr />').children('tr:last')
    .append("<td>File di testo</td>")
    .append("&nbsp;&nbsp;&nbsp;")
    .append("<input type=text class=text_project placeholder=WriteYourFileName id=file>")
    .append("<input type=file name=file class=text_file>")
    //.append("<button type=button class=btn_text>Browse...</button>")

    //.append("&nbsp;&nbsp;&nbsp;")
    //.append("<input type=text class=text_project placeholder=UploadFile>")
    //.append("<button type=button class=btn_text>Browse...</button>")

    // ADD ROW 'FOTO'
    $tbody.append('<tr />').children('tr:last')
    .append("<td>Foto</td>")
    .append("&nbsp;&nbsp;&nbsp;")
    //.append("<input type=submit name=submit value=Upload />")
    //.append("<img id=output />")
    //.append("<img src=# alt=yourimage id=preview class=img-thumbnail>")
    .append("<input type=file name=file class=photo_file id=file><br>")
    .append("&nbsp;&nbsp;&nbsp;")
    .append("<input type=text class=photo_project placeholder=WriteYourPhotoName>")  
    //.append("<button type=button class=btn_photo onclick=UploadFile()>Browse...</button>") 

    //.append("&nbsp;&nbsp;&nbsp;") 
    //.append("<button type=button class=btn_photo>Browse...</button>") 
    
    // ADD TABLE TO FORM
    $dataform.append($table);
    // ADD FORM TO DOM
    $dataform.appendTo(".projects");
}

//manca la funzione che fa vedere la preview dell'immagine.. io ho provato quelle che ho visto su stack : https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27002935#27002935

//funzione che disabilita alcuni campi in base alla tipologia di progetto scelto
function check_radio(){
    if(document.getElementById("type_photo").checked) {
        $(".text_project").prop("disabled", true);  //disable textbox 'WriteYourFileName'
        $(".text_file").prop("disabled",true);    //disable input file
        $("#type_text").prop("disabled", true);   //disable radio button text
        //$(".btn_text").prop("disabled",true);
    }else if(document.getElementById("type_text").checked) {
        //$("#photo_file").prop("disabled", true);     
        $(".photo_project").prop("disabled", true);   //disable textbox 'WriteYourPhotoName'
        $(".photo_file").prop("disabled",true);       //disable input photo
        $("#type_photo").prop("disabled", true);  //disable radio button photo
        //$(".btn_photo").prop("disabled",true);
    }
}

function addprojects(){
    var myobj = document.getElementById("h3");
    myobj.remove();

    generate_form();

    //bottone che invia tutti i dati del nuovo progetto
    var $submit_button = $('<input type="button" value="Create Project">');
    $submit_button.appendTo($("table"));

}

