setTimeout(function() {
    var objects_text_identifier = document.getElementsByClassName("objects_text_identifier")

    let hello_word = ["H","e","l","l","o"," W","o","l","r","d"]

    document.getElementById('objects_text_identifier').appendChild(document.createElement("p")).classList.add ("genereted_objects")

    for (let i = 0; i < hello_word.length; i++) {
        setTimeout(function() {
            document.getElementsByClassName("genereted_objects")[0].innerHTML  += hello_word[i]
        }, 100*i);
    }

}, 1000);
