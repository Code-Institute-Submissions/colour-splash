function sendMail(contactForm){
    emailjs.send("service_xu52dyr", "colour_splash_contact", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.message.value,
    })
    .then(
        function(response){
            console.log("SUCCESS", response);
            document.getElementById("submit-button").innerHTML = "<p style = 'color: #46D9BD';>Thank You!<br>We will get back to you shortly.</p>";
        },
        function(error){
            console.log("FAILED", error);
            document.getElementById("fail-message").innerHTML = "<p style = 'color: #EF7566; text-align: center; padding-top: 10px'>Oops!<br>Your question can't be sent at the moment.<br>Please try again later.</p>";
        }
    );
    return false;
}