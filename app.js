let accordion = document.getElementsByClassName("accordion");

function openAccordion() {
	for (i = 0; i < accordion.length; i++) {
		accordion[i].addEventListener("click", function() {
	  
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

