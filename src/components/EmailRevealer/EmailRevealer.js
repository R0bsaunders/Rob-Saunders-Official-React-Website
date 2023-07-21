       
function printEmail(e) {
    e.preventDefault();
    const emailAddress = ["m","e","@","r","o","b","-","s","a","u","n","d","e","r","s",".","c","o",".","u","k"];
    const email = document.getElementById(e.currentTarget.dataset.id);
    email.innerHTML = `<a href="mailto:${emailAddress.join('')}">${emailAddress.join('')}</a>`;

};

export default printEmail;