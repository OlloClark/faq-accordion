


function openAccordion() {
	const accordion = document.getElementsByClassName("accordion")
	for (i = 0; i < accordion.length; i++) {
		accordion[i].addEventListener("click", function() {
		this.classList.toggle("active");
		  let dropdown = this.nextElementSibling;
		  let arrow = this.firstElementChild;
//Welcome, Airbnb Team! 
// I was particulary pleased to develop the dropdown functionality here. I have since been shown the
// <details> element, but I feel like my solution has more opportunity for customization, as beyond
// the toggling of visibility, I was able to animate the arrows, and could quickly adjust the
// styling for any client.
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
