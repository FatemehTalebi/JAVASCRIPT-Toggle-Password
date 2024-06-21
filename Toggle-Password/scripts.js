function show_password(){
    var icon=document.getElementById("icon")
    var input=document.getElementById("input")
    type=input.getAttribute('type')==='password'? 'text':'password'
    input.setAttribute('type',type)
    icon.classList.toggle('fa-eye-slash')
}