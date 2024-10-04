const button = document.getElementById('btn');
const notesbox = document.getElementById('notes-container');
const note = document.querySelectorAll('.input-box');


function updatedata(){
    localStorage.setItem("note", notesbox.innerHTML);
}

function shownotes() {
    notesbox.innerHTML = localStorage.getItem("note");
}

shownotes();



button.addEventListener('click', () =>{
    let notes = document.createElement('p');
    let img = document.createElement('img');
    notes.className = 'input-box';
    notes.setAttribute('contenteditable', "true");
    img.src = "delete.png";
    notesbox.appendChild(notes).appendChild(img);
    // updatedata();
});

notesbox.addEventListener('click', function(e){
    if (e.target.tagName === 'IMG'){
        e.target.parentElement.remove();
        updatedata();
    }
    else if(e.target.tagName === 'P')
    {
        let note = document.querySelectorAll('.input-box');
        note.forEach(nt => 
            {
            nt.onkeyup = function()
                {
                updatedata();
                }        
            });
    }
        
});




document.addEventListener('keydown', event=>{
    if(event.key === 'Enter'){
        document.execCommand('insertLineBreak');
        event.preventDefault();
    }
})