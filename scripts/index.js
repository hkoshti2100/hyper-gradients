$(function() {
	const navHamburger = $("header button.hamburger-menu");
	const navMobile = $("#nav-mobile");
	const navMobileClose = $("#nav-mobile .header > button");
	const navMobileBackdrop = $("#nav-mobile-backdrop");

	function toggleNavMobile() {
		navMobileBackdrop.toggleClass("open");
		navMobile.toggleClass("open");
	}

	jQuery.each([navHamburger, navMobileClose, navMobileBackdrop], function() {
		$(this).on("click", toggleNavMobile);
	});

	// const navHamburger = document.querySelector("header button.hamburger-menu");
	// const navMobile = document.querySelector("#nav-mobile");
	// const navMobileClose = document.querySelector("#nav-mobile .header > button");
	// const navMobileBackdrop = document.querySelector("#nav-mobile-backdrop");

	// function toggleNavMobile() {
	// 	navMobileBackdrop.classList.toggle("open");
	// 	navMobile.classList.toggle("open");
	// }

	// [navHamburger, navMobileClose, navMobileBackdrop].forEach(function(element) {
	// 	element.addEventListener("click", toggleNavMobile);
	// });

});