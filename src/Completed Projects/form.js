const name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const submit = document.getElementsByClassName('myform')[0];

submit.addEventListener (submit,(e) => {
    e.preventDefault();
    console.log("Clicked");


Email.send({
  SecureToken : "ebcf13a9-0109-4779-a5b4-ab1093038334",
  To : 'bedohossam404@gmail.com',
  From : "bedohossam404@gmail.com",
  Subject : "This is the subject",
  Body : "you got a message!"
}).then(
message => alert(message)
);
});