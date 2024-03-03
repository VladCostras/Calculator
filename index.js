const afisaj = document.getElementById("afisaj");

function appendToAfisaj(input){
    afisaj.value += input;
}

function clearAfisaj(){
    afisaj.value = "";
}

function calculate(){
    try{
        afisaj.value = eval(afisaj.value);
    }
    catch(error){
        afisaj.value = "Error"
    }
}
