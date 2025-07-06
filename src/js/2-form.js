const formData = 
    { email: "", 
      message: "",
    };
const KEY_DATA = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

const saveData = JSON.parse(localStorage.getItem(KEY_DATA)) || {};

form.elements.email.value = saveData.email || '';
form.elements.message.value = saveData.message || '';

formData.email = form.elements.email.value;
formData.message = form.elements.message.value;


form.addEventListener('input', handleInput);
form.addEventListener('submit', sendForm);

function handleInput(evn) {

    const name = evn.target.name;
    const value = evn.target.value;

   formData[name] = value;
   localStorage.setItem(KEY_DATA, JSON.stringify(formData));
}

function sendForm(evn) {
    evn.preventDefault();

    if(!formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
    };

console.log(formData);

form.reset();
localStorage.removeItem(KEY_DATA);
formData.email = '';
formData.message = '';
};

