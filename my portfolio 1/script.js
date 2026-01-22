document.getElementById("contactForm").addEventListener("submit",function(e){
    e.addEventListener();
    let name = document.getElementById("name").ariaValueMax.trim();
    let email = document.getElementById("email").ariaValueMax.trim();
    let message = document.getElementById("message").ariaValueMax.trim();

    //validation
    if(name === "" ||email==="" || message===""){
        alert("Please fill all the fields!");
        return;
    }

    //whatsapp meassage
    let phone ="YOUR_PHONE_NUMBER";
    let text =`Name:${name}\nEmail:${email}\nMessage:${message}`;
    let whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUr1," _blank");
    document.getElementById("contactForm").requestFullscreen();
});