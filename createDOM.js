
// creating contact info has started

// //fname
// div('','form-contact-info',`#all`);
// label('fname', 'Name: ' ,'.form-contact-info');
// input('text', 'fname', 'fname', '.form-contact-info');

// //surname
// div('','form-contact-info',`#all`);
// label('Sname', 'surname: ' ,'.form-contact-info');
// input('text', 'Sname', 'Sname', '.form-contact-info');

// //phone number
// div('','form-contact-info',`#all`);
// label('Sname', 'surname: ' ,'.form-contact-info');
// input('text', 'Sname', 'Sname', '.form-contact-info');

// //email
// div('','form-contact-info',`#all`);
var moduleCount = 1;

let count = 0;

const contactNextBtn = document.querySelector('#contact-next');
contactNextBtn.addEventListener('click', () => {
    changeModule(moduleCount++);
    const  getAllinput = document.querySelectorAll('.form-contanct-info input');
    getAllinput.forEach( input => userData.contact.push({ name: input.name, value: input.value}));
});


const experienceForms = ( count ) => {
    // form group
    div(`experience-form-group${count}`, 'form-group', '.form-user-experience');
        //input field for job title
        div(`title-input-field${count}`, 'input-field', `#experience-form-group${count}` );
            //adding label for input
            label('job-title', 'Job title', `#title-input-field${count}`);
            //adding input
            input('text','job-title', 'job-title', `#title-input-field${count}`);
        //input field for working years
        div(`working-years-input-field${count}`, 'input-field', `#experience-form-group${count}` );
            //adding label for input
            label('working-years', 'Working years', `#working-years-input-field${count}`);
            //adding input
            input('date','working-years-from', 'working-years-from', `#working-years-input-field${count}`);
            input('date','working-years-until', 'working-years-untul', `#working-years-input-field${count}`);
        //input field for company name
        div(`company-name-input-field${count}`, 'input-field', `#experience-form-group${count}` );
            //adding label for input
            label('company-name', 'Company name', `#company-name-input-field${count}`);
            //adding input
            input('text','company-name', 'company-name', `#company-name-input-field${count}`);
        //input field for about users position
        div(`about-position-input-field${count}`, 'input-field', `#experience-form-group${count}`);
            //adding label for input
            label('about-job', 'about-job', `#about-position-input-field${count}`);
            //adding input
            input('text','about-job', 'about-job', `#about-position-input-field${count}`);
    }
const addBtn = document.querySelector('#add-more');
const next = document.querySelector('#next');
experienceForms( count )

addBtn.addEventListener('click', () => {
    count++;
    experienceForms(count)
    })

next.addEventListener('click', () => {
    changeModule(moduleCount++);
    const allInputMassive = [];
    const getInputs = document.querySelectorAll('.form-user-experience input');
    getInputs.forEach( input => { allInputMassive.push(input) })
    let countElements = 1;
    let id=1;

for(let i=0; i<allInputMassive.length; i++) {
    if(countElements>5) {
        id++;
        countElements=1;
    }
    countElements++
    
    let name = allInputMassive[i].name;
    let value = allInputMassive[i].value;
    userData.experience.push({ id: id, name, value})

}
}
)

const educationForms = ( count ) => {
    // form group
    div(`education-form-group${count}`, 'form-group', '.form-user-education');
        //input field for job title
        div(`study-title-input-field${count}`, 'input-field', `#education-form-group${count}` );
            //adding label for input
            label('study-title', 'study title', `#study-title-input-field${count}`);
            //adding input
            input('text','study-title', 'study-title', `#study-title-input-field${count}`);
        //input field for working years
        div(`studying-years-input-field${count}`, 'input-field', `#education-form-group${count}` );
            //adding label for input
            label('studying-years', 'studying years', `#studying-years-input-field${count}`);
            //adding input
            input('date','studying-years-from', 'studying-years-from', `#studying-years-input-field${count}`);
            input('date','studying-years-until', 'studying-years-untul', `#studying-years-input-field${count}`);
        //input field for company name
        div(`school-name-input-field${count}`, 'input-field', `#education-form-group${count}` );
            //adding label for input
            label('school-name', 'school name', `#school-name-input-field${count}`);
            //adding input
            input('text','school-name', 'school-name', `#school-name-input-field${count}`);
        //input field for about users position
        div(`about-school-position-input-field${count}`, 'input-field', `#education-form-group${count}`);
            //adding label for input
            label('about-school', 'about-school', `#about-school-position-input-field${count}`);
            //adding input
            input('text','about-school', 'about-school', `#about-school-position-input-field${count}`);
    }

    educationForms( count )

const addBtnedc = document.querySelector('#add-more-education');
const nextEducation = document.querySelector('#next-education');
addBtnedc.addEventListener('click', () => {
    count++;
    educationForms(count)
    })
nextEducation.addEventListener('click', () => {
    changeModule(moduleCount++);
    const allInputMassive = [];
    const getInputs = document.querySelectorAll('.form-user-education input');
    getInputs.forEach( input => { allInputMassive.push(input) })
    let countElements = 1;
    let id=1;

for(let i=0; i<allInputMassive.length; i++) {
    if(countElements>5) {
        id++;
        countElements=1;
    }
    countElements++
    
    let name = allInputMassive[i].name;
    let value = allInputMassive[i].value;
    userData.education.push({ id: id, name, value})

}
}
)


    const trainingForms = ( count ) => {
        // form group
        div(`trainings-form-group${count}`, 'form-group', '.form-user-trainings');
            //input field for job title
            div(`trainings-title-input-field${count}`, 'input-field', `#trainings-form-group${count}` );
                //adding label for input
                label('trainings-title', 'trainings title', `#trainings-title-input-field${count}`);
                //adding input
                input('text','trainings-title', 'trainings-title', `#trainings-title-input-field${count}`);
            //input field for working years
            div(`trainings-years-input-field${count}`, 'input-field', `#trainings-form-group${count}` );
                //adding label for input
                label('trainings-years', 'trainings years', `#trainings-years-input-field${count}`);
                //adding input
                input('date','trainings-years-from', 'trainings-years-from', `#trainings-years-input-field${count}`);
                input('date','trainings-years-until', 'trainings-years-untul', `#trainings-years-input-field${count}`);
            //input field for company name
            div(`trainings-name-input-field${count}`, 'input-field', `#trainings-form-group${count}` );
                //adding label for input
                label('trainings-name', 'trainings name', `#trainings-form-group${count}`);
                //adding input
                input('text','trainings-name', 'trainings-name', `#trainings-form-group${count}`);
            //input field for about users position
            div(`trainings-school-position-input-field${count}`, 'input-field', `#trainings-form-group${count}`);
                //adding label for input
                label('about-trainings', 'about-trainings', `#trainings-school-position-input-field${count}`);
                //adding input
                input('text','about-trainings', 'about-trainings', `#trainings-school-position-input-field${count}`);
        }
    
        trainingForms( count )

const addBtntrn = document.querySelector('#add-more-training');
const nextTraining = document.querySelector('#next-training');

addBtntrn.addEventListener('click', () => {
    count++;
    trainingForms(count)
    })
nextTraining.addEventListener('click', () => {
    changeModule(moduleCount++);
        const allInputMassive = [];
        const getInputs = document.querySelectorAll('.form-user-trainings input');
        getInputs.forEach( input => { allInputMassive.push(input) })
        let countElements = 1;
        let id=1;
    
    for(let i=0; i<allInputMassive.length; i++) {
        if(countElements>5) {
            id++;
            countElements=1;
        }
        countElements++
        
        let name = allInputMassive[i].name;
        let value = allInputMassive[i].value;
        userData.training.push({ id: id, name, value})
    
    }
    }
    )

const skillForm = ( count ) => {
    div(`form-user-skilles${count}`, 'form-user-skill', '.form-user-skilles');
        //label
        label('user-skill', 'write your skill', `#form-user-skilles${count}`);
        //input
        input('text', 'user-skill', 'user-skill', `#form-user-skilles${count}`);
    }
skillForm(count)
const addSkill = document.querySelector('#add-skill');
const nextSkill = document.querySelector('#next-skill');
addSkill.addEventListener('click', () => {
    count++;
    skillForm(count)
});
nextSkill.addEventListener('click', () => { 
    changeModule(moduleCount++);
    const getAllinput = document.querySelectorAll('.form-user-skilles input');
    getAllinput.forEach( input => userData.skilles.push({ name: input.name, value: input.value }));
 })
const languageForm = ( count ) => {
    div(`form-user-languages${count}`, 'form-user-skill', '.form-user-languages');
        //label
        label('user-languages', 'write your languages', `#form-user-languages${count}`);
        //input
        input('text', 'user-languages', 'user-languages', `#form-user-languages${count}`);
    }
    languageForm()
const addLanguage = document.querySelector('#add-language');
const saveAndGenerate = document.querySelector('#save-and-generate');
addLanguage.addEventListener('click', () => {
        count++;
        languageForm(count)
    });
saveAndGenerate.addEventListener('click', () => { 
        const getAllinput = document.querySelectorAll('.form-user-languages input');
        getAllinput.forEach( input => userData.languages.push({ name: input.name, value: input.value }));
        renderCV();
        document.querySelector('#wrapper').style.display = "block";
        getPDFFileButton();

    });


const userData = {
    contact: [],
    about: [],
    experience : [],
    education: [],
    training: [],
    skilles: [],
    languages: []
};

// about next button

const aboutNext = document.querySelector('#about-next');
aboutNext.addEventListener('click', () => {
    changeModule(moduleCount++);
    const  getAllinput = document.querySelectorAll('.form-about-me input');
    getAllinput.forEach( input => userData.about.push({ name: input.name, value: input.value}));
    
});