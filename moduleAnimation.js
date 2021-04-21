// label('Sname', 'surname: ' ,'.form-contact-info');
// input('text', 'Sname', 'Sname', '.form-contact-info');
const modules = document.querySelectorAll('.form-module');
// modules.forEach( module => module.style.display = "none" )
// const defueltModule = moduleCount => modules[moduleCount].style.display = "block";
// defueltModule(moduleCount)
// const changeModule = moduleCount => moduleCount++ && defueltModule(moduleCount) && console.log('working');


modules.forEach( module => module.style.display = "none");
modules[0].style.display = "block";
const changeModule  = (moduleCount) => { 
    for(let i=0; i<modules.length; i++) {
        modules[i].style.display = "none";
    }
    modules[moduleCount].style.display = "block";
}