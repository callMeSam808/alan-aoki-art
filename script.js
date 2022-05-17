// Get the modal
let modal = document.getElementById("myModal");

// Images and insert it inside the modal - use its "id" text as a caption
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");
document.querySelectorAll('.gallery').forEach(item => {
  item.addEventListener('click', (e) => {
    modal.style.display = "block";
    modalImg.src = e.target.src;
    captionText.textContent = e.target.id;
    console.log(e.target.id);
  })
})

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}