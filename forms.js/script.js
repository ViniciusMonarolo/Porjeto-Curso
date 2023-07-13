const form = document.querySelector("form");

form.addEventListener("submit", event => {
    event.preventDefault();

    const FirstName = document.querySelector("#first-name").value;
    const Lastname = document.querySelector("#last-name").value;
    const Email = document.querySelector("#email").value;
    const Message = document.querySelector("#message").value;


    console.table([FirstName, Lastname, Email, Message]);
})