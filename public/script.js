const closeMessage = document.querySelector( "#closeMessage");
const message = document.querySelector( ".message" );

closeMessage.addEventListener( "click", () => {
    message.style.display = "none";
})