const task3Element = document.getElementById('task-3');

function show (){
    alert('This is a function')
}
show();

function tellMe (name){
    alert(name);
}
tellMe('Fui');

task3Element.addEventListener('click', show);

function fullName (name1, name2, name3){
    alert(name1 + ' ' + name2 + ' ' + name3);
}
fullName('Fui', 'Afealete', 'Ocloo');