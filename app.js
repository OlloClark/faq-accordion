
function openAccordion() {
	const accordion = document.getElementsByClassName("accordion")
	for (i = 0; i < accordion.length; i++) {
		accordion[i].addEventListener("click", function() {
		this.classList.toggle("active");
		  let dropdown = this.nextElementSibling;
		  let arrow = this.firstElementChild;
		  if (dropdown.style.display === "block") {
			dropdown.style.display = "none";
			this.style.borderBottom = "hsl(240, 5%, 91%) 1px solid";
			arrow.style.transform = "none";
		  } else {
			dropdown.style.display = "block";
			this.style.borderBottom = "none";
			arrow.style.transform = "rotate(180deg)";
		  }
		});
	  }
}

openAccordion()
