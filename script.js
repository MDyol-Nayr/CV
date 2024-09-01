// Menu w position fixed po minięciu headera
const changeMenuPosition = () => {
	const wielkoscSkrola = window.scrollY;
	const menuFixed = document.querySelector('.menu');
	const wysokoscSekcji1 = document.querySelector(".header").clientHeight;
	if (wysokoscSekcji1 <= wielkoscSkrola) {
		menuFixed.classList.add('menuFixed');
	} else if (wysokoscSekcji1 > wielkoscSkrola) {
		menuFixed.classList.remove('menuFixed');
	}
}

window.addEventListener('scroll', changeMenuPosition)

// Podsietlanie części menu przy skrollowaniu

function colorMenu() {
	const wielkoscSkrola = window.scrollY;
	const podswietlenieProfileMenu = document.querySelector(".profileMenu");
	const podswietlenieExperienceMenu = document.querySelector(".experienceMenu");
	const podswietlenieAbilitiesMenu = document.querySelector(".abilitiesMenu");
	const podswietlenieProjectMenu = document.querySelector(".projectsMenu");
	const podswietlenieContactMenu = document.querySelector(".contactMenu");


	const wysokoscSekcji1 = document.querySelector(".header").clientHeight;
	const wysokoscSekcji2 = document.querySelector(".profile").clientHeight;
	const OdlegloscOdPoczatkuSekcji4 = document.querySelector(".abilities")
		.offsetTop;
	const OdlegloscOdPoczatkuSekcji5 = document.querySelector(".projects")
		.offsetTop;
	const OdlegloscOdPoczatkuSekcji6 = document.querySelector(".footer")
		.offsetTop;
	const windowSide = window.innerHeight;

	if (wysokoscSekcji1 <= wielkoscSkrola) {
		podswietlenieProfileMenu.classList.add("colorMenu");
	} else if (wysokoscSekcji1 > wielkoscSkrola) {
		podswietlenieProfileMenu.classList.remove("colorMenu");
	}
	if (wysokoscSekcji1 + wysokoscSekcji2 <= wielkoscSkrola) {
		podswietlenieExperienceMenu.classList.add("colorMenu");
		podswietlenieProfileMenu.classList.remove("colorMenu");
	} else if (wysokoscSekcji1 + wysokoscSekcji2 > wielkoscSkrola) {
		podswietlenieExperienceMenu.classList.remove("colorMenu");
	}
	if (OdlegloscOdPoczatkuSekcji4 <= wielkoscSkrola) {
		podswietlenieAbilitiesMenu.classList.add("colorMenu");
		podswietlenieExperienceMenu.classList.remove("colorMenu");
	} else if (OdlegloscOdPoczatkuSekcji4 > wielkoscSkrola) {
		podswietlenieAbilitiesMenu.classList.remove("colorMenu");
	}
	if (OdlegloscOdPoczatkuSekcji5 <= wielkoscSkrola) {
		podswietlenieProjectMenu.classList.add("colorMenu");
		podswietlenieAbilitiesMenu.classList.remove("colorMenu");
	} else if (OdlegloscOdPoczatkuSekcji5 > wielkoscSkrola) {
		podswietlenieProjectMenu.classList.remove("colorMenu");
	}
	if (OdlegloscOdPoczatkuSekcji6 - windowSide <= wielkoscSkrola) {
		podswietlenieContactMenu.classList.add("colorMenu");
		podswietlenieProjectMenu.classList.remove("colorMenu");
	} else if (OdlegloscOdPoczatkuSekcji6 - windowSide > wielkoscSkrola) {
		podswietlenieContactMenu.classList.remove("colorMenu");
	}
}

window.addEventListener("scroll", colorMenu);