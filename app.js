function getProfilePicHeight(width, size){
    const picture = document.querySelector('#profile-picture');
    picture.style.height = `${width * size / 100}px`;
    picture.style.width = `${width * size / 100}px`;
}

getProfilePicHeight(document.querySelector('#wrapper').offsetWidth, 14.4);


function getPDFFileButton () {
    const height = document.querySelector('#wrapper').scrollHeight * 0.75;
    // Select which div with id that need to be printed
    // to print body $('body')
    // here printing div with content id $("#content")
    // using html canvas to save as required pdf to image to preserve css
    return html2canvas(document.querySelector('#wrapper'), {
        onrendered: function(canvas) {
            var myImage = canvas.toDataURL("image/jpeg,1.0");
            // jspdf changes
            var pdf = new jsPDF({
                  orientation: 'portrait',
                  unit: 'pt',
                  format: [595, height]
            });
            pdf.addImage(myImage, 'JPEG', 0, 0); 
            pdf.save('Download.pdf');
        },
        useCORS: true
    });
}   

const height1 = document.querySelectorAll('#wrapper');   
console.log(height1) 