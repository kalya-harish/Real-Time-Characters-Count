const textareaEl=document.getElementById("textarea");
const TotalCharactersEl=document.getElementById("Total-Characters")
const RemainingEl=document.getElementById("Remaining-Characters")
Updatecounter()

textareaEl.addEventListener("keyup",()=>{
    Updatecounter();
})
function Updatecounter(){
    TotalCharactersEl.innerText=textareaEl.value.length;
    RemainingEl.innerText=textareaEl.getAttribute("maxlength")-textareaEl.value.length;
}