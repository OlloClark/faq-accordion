
function openAccordion() {
	const accordion = document.getElementsByClassName("accordion")
	for (i = 0; i < accordion.length; i++) {
		accordion[i].addEventListener("click", function() {
		this.classList.toggle("active");
		  let dropdown = this.nextElementSibling;
		  if (dropdown.style.display === "block") {
			dropdown.style.display = "none";
		  } else {
			dropdown.style.display = "block";
		  }
		});
	  }
}

openAccordion()

