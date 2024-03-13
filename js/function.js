let valueDisplay = document.querySelectorAll(".p-dynamicText");
let interval = 2000;

valueDisplay.forEach((valueDisplay) => {
	let startValue = 0;
	let endValue = parseInt(valueDisplay.getAttribute("dataVal"));
	let duration = Math.floor(interval / endValue);
	let counter = setInterval(function () {
		startValue += 1;
		valueDisplay.textContent = startValue;
		if (startValue == endValue) {
			clearInterval(counter);
		}
	}, duration);
});

const swiper = new Swiper(".js-testimonials-slider", {
	grabCursor: true,
	spaceBetween: 30,
	pagination: {
		el: ".js-testimonials-pagination",
		clickable: true,
	},
	breakpoints: {
		767: {
			slidesPerView: 2,
		},
	},
});
document.getElementById("playButton").addEventListener("click", function () {
	var videoOverlay = document.querySelector(".video-overlay");
	var videoFrame = document.getElementById("videoFrame");
	var videoUrl =
		"https://player.vimeo.com/video/101587706?h=187bfc0989";

	videoFrame.src = videoUrl;
	videoOverlay.classList.add("show");
	videoFrame.style.display = "block";
});

document.querySelector(".video-overlay").addEventListener("click", function () {
	var videoOverlay = document.querySelector(".video-overlay");
	var videoFrame = document.getElementById("videoFrame");

	videoOverlay.classList.remove("show");
	videoFrame.style.display = "none";
	videoFrame.src = "";
});

function toggleSearch() {
	const searchOverlay = document.getElementById("search-overlay");
	searchOverlay.style.display =
		searchOverlay.style.display === "none" || searchOverlay.style.display === ""
			? "block"
			: "none";
}

function performSearch() {
	const searchInputValue = document.getElementById("search-input").value;
	console.log("Performing search for:", searchInputValue);
	toggleSearch();
}

//back to top
const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})

//change dark mode
function toggleIcon() {
	var header = document.getElementById("header");
	var moonIcon = document.getElementById("moonIcon");
	var about = document.getElementById("div-about");
	var buttons = document.querySelectorAll(".button-nav");
	var readMore = document.querySelectorAll(".button-readMore");
	var col = document.querySelectorAll(".col");
	var content = document.querySelectorAll(".a-content-grid");
	var divServices = document.getElementById("div-bg");
	var divGridServices = document.getElementById("div-grid");
	var divBenefit = document.getElementById("div-benefit");
	var text = document.querySelectorAll("text-dark-mode");
	var textLi = document.querySelectorAll("li-spacing-benefit");
	var divOurPlan = document.getElementById("div-ourPlan");
	var spacingOurPlan = document.getElementById("spacing-ourPlan");
	var contentOurPlan = document.getElementById("content-ourPlan");
	var divBetter = document.getElementById("div-better");
	var spacingBetter = document.getElementById("spacing-better");
	var contentBetter = document.getElementById("content-better");
	var divTest = document.getElementById("div-test");
	var spacingTest = document.getElementById("spacing-test");
	var contentTest = document.getElementById("content-test");
	var items = document.querySelectorAll(".testimonials-item");
	var name = document.querySelectorAll(".name");
	var divUpdate = document.getElementById("div-update");
	var spacingUpdate = document.getElementById("spacing-update");
	var contentUpdate = document.getElementById("content-update");
	var buttonSearch = document.getElementById("button-search");

	if (moonIcon.classList.contains("ph-moon")) {
		header.classList.add("dark-mode");
		buttons.forEach(function (button) {
			button.classList.add("dark-mode");
		});
		readMore.forEach(function (a) {
			a.classList.add("dark-mode");
		});
		col.forEach(function (div) {
			div.classList.add("dark-mode");
		});
		content.forEach(function (a) {
			a.classList.add("dark-mode");
		});
		about.classList.add("dark-mode");
		divServices.classList.add("dark-mode");
		divGridServices.classList.add("dark-mode");
		divBenefit.classList.add("dark-mode");
		text.forEach(function (a) {
			a.classList.add("dark-mode");
		});
		textLi.forEach(function (a) {
			a.classList.add("dark-mode");
		});
		divOurPlan.classList.add("dark-mode");
		spacingOurPlan.classList.add("dark-mode");
		contentOurPlan.classList.add("dark-mode");
		divBetter.classList.add("dark-mode");
		spacingBetter.classList.add("dark-mode");
		contentBetter.classList.add("dark-mode");
		divTest.classList.add("dark-mode");
		spacingTest.classList.add("dark-mode");
		contentTest.classList.add("dark-mode");
		items.forEach(function (div) {
			div.classList.add("dark-mode");
		});
		name.forEach(function (div) {
			div.classList.add("dark-mode");
		});
		divUpdate.classList.add("dark-mode");
		spacingUpdate.classList.add("dark-mode");
		contentUpdate.classList.add("dark-mode");
		buttonSearch.classList.add("dark-mode");

		moonIcon.classList.remove("ph-moon");
		moonIcon.classList.add("ph-sun");
	} else {
		header.classList.remove("dark-mode");
		buttons.forEach(function (button) {
			button.classList.remove("dark-mode");
		});
		readMore.forEach(function (a) {
			a.classList.remove("dark-mode");
		});
		col.forEach(function (div) {
			div.classList.remove("dark-mode");
		});
		content.forEach(function (a) {
			a.classList.remove("dark-mode");
		});
		about.classList.remove("dark-mode");
		divServices.classList.remove("dark-mode");
		divGridServices.classList.remove("dark-mode");
		divBenefit.classList.remove("dark-mode");
		text.forEach(function (li) {
			li.classList.add("dark-mode");
		});
		divOurPlan.classList.remove("dark-mode");
		spacingOurPlan.classList.remove("dark-mode");
		contentOurPlan.classList.remove("dark-mode");
		divBetter.classList.remove("dark-mode");
		spacingBetter.classList.remove("dark-mode");
		contentBetter.classList.remove("dark-mode");
		divTest.classList.remove("dark-mode");
		spacingTest.classList.remove("dark-mode");
		contentTest.classList.remove("dark-mode");
		items.forEach(function (div) {
			div.classList.remove("dark-mode");
		});
		divUpdate.classList.remove("dark-mode");
		spacingUpdate.classList.remove("dark-mode");
		contentUpdate.classList.remove("dark-mode");
		buttonSearch.classList.remove("dark-mode");

		moonIcon.classList.remove("ph-sun");
		moonIcon.classList.add("ph-moon");
	}
}
