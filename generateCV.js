const CVname = document.getElementById('first-name');
const CVlastName = document.getElementById('last-name');
const CVprofession = document.getElementById('profession');
const CVphoneNumber = document.getElementById('cv-phone-number');
const CVemail = document.getElementById('cv-email');
const CVwebpage = document.getElementById('cv-webpage');
const CVlocation = document.getElementById('cv-location');

//about CV

const CVabout = document.getElementById('cv-about');

// experience CV

const CVjobTitle = document.getElementById('cv-job-title');
const CVjobDate = document.getElementById('cv-job-date');
const CVcompanyName = document.getElementById('cv-company-name');
const CVpositionDescription = document.getElementById('cv-position-description');

// Education CV

const CVstudyTitle = document.getElementById('cv-study-title');
const CVstudyDate = document.getElementById('cv-study-date');
const CVschoolName = document.getElementById('cv-school-name');
const CVschoolDescription = document.getElementById('cv-school-description');

//Trainings

const CVtrainingTitle = document.getElementById('cv-training-title');
const CVtrainingDate = document.getElementById('cv-training-dates');
const CVtrainingSchoolName = document.getElementById('cv-training-school-name');
const CVtrainingSchoolDescription = document.getElementById('cv-training-school-description');

const fillContactCVmodule = () => {
    for(let i=0; i<userData.contact.length; i++) {
        // name
        if(userData.contact[i].name === "fname") {
            CVname.innerHTML = userData.contact[i].value;
        }
        //surname
        if(userData.contact[i].name === "sname") {
            CVlastName.innerHTML = userData.contact[i].value;
        }
        //profession
        if(userData.contact[i].name === "iprofession") {
            CVprofession.innerHTML = userData.contact[i].value;
        }
        //phone number
        if(userData.contact[i].name === "phoneNumber") {
            CVphoneNumber.innerHTML = userData.contact[i].value;
        }
        //email
        if(userData.contact[i].name === "email") {
            CVemail.innerHTML = userData.contact[i].value;
        }
        //website
        if(userData.contact[i].name === "pwebsite") {
            CVwebpage.innerHTML = userData.contact[i].value;
        }
        //location
        if(userData.contact[i].name === "location") {
            CVlocation.innerHTML = userData.contact[i].value;
        }
    }
    // about 
    CVabout.innerHTML = userData.about[0].value;

    // experience

}
// generating experience part of CV
function fillExperienceCVmodule() {
    for(let i=0; i<userData.experience.length / 5; i++){
       // add modure artcile container
        div(`module-article-${i}`, 'module-article', '#experience-module');
            // add left-module div
            div(`left-module-${i}`,'left-module',`#module-article-${i}`);
                // add module title
                div(`module-title-${i}`, 'module-title', `#left-module-${i}`);
                    //add h4
                    h4(`cv-job-title-${i}`,`#module-title-${i}`);
                    h5(`cv-job-date-${i}`, `#module-title-${i}`);
                    //add clear
                    div(`clear-${i}`,'clear',`#module-title-${i}`);
            //add right module div
            div(`right-module-${i}`,'right-module',`#module-article-${i}`);
                //add module-name container for h4 and h5
                div(`module-name-${i}`, 'module-name', `#right-module-${i}`);
                    //adding h4 and h5
                    h4(`cv-company-name-${i}`,`#module-name-${i}`);
                    h5(`cv-position-description-${i}`,`#module-name-${i}`);
            //adding clear for left and right module 
            div(`clearix-${i}`,'clear',`#module-article-${i}`);
        const title = document.querySelector(`#cv-job-title-${i}`);
        const titleDate = document.querySelector(`#cv-job-date-${i}`);
        const company = document.querySelector(`#cv-company-name-${i}`)
        const aboutJob = document.querySelector(`#cv-position-description-${i}`)
        userData.experience.forEach( item => {
            if(item.id === (i+1)) {
                if(item.name==='job-title') {
                    title.innerHTML = `${item.value}`;
                }
                if(item.name==='working-years-from') {
                    titleDate.innerHTML = `${item.value} - `;
                }
                if(item.name==='working-years-until') {
                    titleDate.innerHTML+= `${item.value}`;
                }
                if(item.name==='company-name') {
                    company.innerHTML = `${item.value}`;
                }
                if(item.name==='about-job') {
                    aboutJob.innerHTML = `${item.value}`;
                }
            }
        });
    }
    
}

// generating education part of CV

function fillEducationCVmodule() {
    for(let i=0; i<userData.education.length / 5; i++){
       // add modure artcile container
        div(`module-education-article-${i}`, 'module-article', '#education-module');
            // add left-module div
            div(`left-education-module-${i}`,'left-module',`#module-education-article-${i}`);
                // add module title
                div(`module-education-title-${i}`, 'module-title', `#left-education-module-${i}`);
                    //add h4
                    h4(`cv-study-title-${i}`,`#module-education-title-${i}`);
                    h5(`cv-study-date-${i}`, `#module-education-title-${i}`);
                    //add clear
                    div(`clear-${i}`,'clear',`#module-education-title-${i}`);
            //add right module div
            div(`right-education-module-${i}`,'right-module',`#module-education-article-${i}`);
                //add module-name container for h4 and h5
                div(`module-education-name-${i}`, 'module-name', `#right-education-module-${i}`);
                    //adding h4 and h5
                    h4(`cv-school-name-${i}`,`#module-education-name-${i}`);
                    h5(`cv-school-description-${i}`,`#module-education-name-${i}`);
            //adding clear for left and right module 
            div(`clearix-${i}`,'clear',`#module-education-article-${i}`);
        const title = document.querySelector(`#cv-study-title-${i}`);
        const titleDate = document.querySelector(`#cv-study-date-${i}`);
        const company = document.querySelector(`#cv-school-name-${i}`)
        const aboutJob = document.querySelector(`#cv-school-description-${i}`)
        userData.education.forEach( item => {
            if(item.id === (i+1)) {
                if(item.name==='study-title') {
                    title.innerHTML = `${item.value}`;
                }
                if(item.name==='studying-years-from') {
                    titleDate.innerHTML = `${item.value} - `;
                }
                if(item.name==='studying-years-until') {
                    titleDate.innerHTML+= `${item.value}`;
                }
                if(item.name==='school-name') {
                    company.innerHTML = `${item.value}`;
                }
                if(item.name==='about-school') {
                    aboutJob.innerHTML = `${item.value}`;
                }
            }
        });
    }
    
} 


//generating training module 
function fillTrainingsCVmodule() {

    for(let i=0; i<userData.training.length / 5; i++){
       // add modure artcile container
        div(`module-trainings-article-${i}`, 'module-article', '#trainings-module');
            // add left-module div
            div(`left-trainings-module-${i}`,'left-module',`#module-trainings-article-${i}`);
                // add module title
                div(`module-trainings-title-${i}`, 'module-title', `#left-trainings-module-${i}`);
                    //add h4
                    h4(`cv-training-title-${i}`,`#module-trainings-title-${i}`);
                    h5(`cv-training-date-${i}`, `#module-trainings-title-${i}`);
                    //add clear
                    div(`clear-${i}`,'clear',`#module-trainings-title-${i}`);
            //add right module div
            div(`right-trainings-module-${i}`,'right-module',`#module-trainings-article-${i}`);
                //add module-name container for h4 and h5
                div(`module-trainings-name-${i}`, 'module-name', `#right-trainings-module-${i}`);
                    //adding h4 and h5
                    h4(`cv-training-name-${i}`,`#module-trainings-name-${i}`);
                    h5(`cv-training-description-${i}`,`#module-trainings-name-${i}`);
            //adding clear for left and right module 
            div(`clearix-${i}`,'clear',`#module-trainings-article-${i}`);
        const title = document.querySelector(`#cv-training-title-${i}`);
        const titleDate = document.querySelector(`#cv-training-date-${i}`);
        const company = document.querySelector(`#cv-training-name-${i}`)
        const aboutJob = document.querySelector(`#cv-training-description-${i}`)
        userData.training.forEach( item => {
            if(item.id === (i+1)) {
                if(item.name==='trainings-title') {
                    title.innerHTML = `${item.value}`;
                }
                if(item.name==='trainings-years-from') {
                    titleDate.innerHTML = `${item.value} - `;
                }
                if(item.name==='trainings-years-until') {
                    titleDate.innerHTML+= `${item.value}`;
                }
                if(item.name==='trainings-name') {
                    company.innerHTML = `${item.value}`;
                }
                if(item.name==='about-trainings') {
                    aboutJob.innerHTML = `${item.value}`;
                }
            }
        });
    }
    
} 


//generating skilles 

function fillSkillesCVmodule() {
    for(let i=0; i<userData.skilles.length; i++){
        //adding li in the of skilles-module-list > ul
        li(`skill-list-item-${i}`,`#skilles-module-list > ul`);
            //adding fontawesome tags
            iconFas(`skill-icon-${i}`,'fa-check',`#skill-list-item-${i}`);
            //adding text of the li    
            span(`skill-${i}`,`#skill-list-item-${i}`);
            const addSkill = document.querySelector(`#skill-${i}`);
            addSkill.innerHTML = userData.skilles[i].value;
    }
}
function fillLanguagesCVmodule() {
    for(let i=0; i<userData.languages.length; i++){
        //adding li in the of languages-module-list > ul
        li(`languages-list-item-${i}`,`#languages-module-list > ul`);
            //adding fontawesome tags
            iconFas(`languages-icon-${i}`,'fa-check',`#languages-list-item-${i}`);
            //adding text of the li    
            span(`languages-${i}`,`#languages-list-item-${i}`);
            const addLanguage = document.querySelector(`#languages-${i}`);
            addLanguage.innerHTML = userData.languages[i].value;
    }
}


const renderCV = () => {
    fillLanguagesCVmodule(); 
    fillSkillesCVmodule();
    fillTrainingsCVmodule();
    fillEducationCVmodule();
    fillExperienceCVmodule();
    fillContactCVmodule(); 
}