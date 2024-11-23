const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement


form.addEventListener('submit', (event: Event) => {
    event.preventDefault();


    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const number = (document.getElementById('phone') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experiece = (document.getElementById('workexperience') as HTMLInputElement).value
    const skills = (document.getElementById('Skills') as HTMLInputElement).value


    const resumeHtml = `
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b>${name}</p>
    <p><b>Email:</b>${email}</p>
    <p><b>Phone Number:</b>${number}</p>

    <h3>Education</h3>
    <p>${education}</p>

     <h3>Experience</h3>
    <p>${experiece}</p>

     <h3>Skills</h3>
    <p>${skills}</p>
    `;

    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHtml;
    } else{
        console.error('The resume display element is missing')
    }
})