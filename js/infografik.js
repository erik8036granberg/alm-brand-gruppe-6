		document.addEventListener("DOMContentLoaded", function () {
			runProgram();
		});


		async function runProgram() {

			let selected;
			let selectedID;
			let color;
			let active;
			let infoboks;

			// 1. Load svg map
			//------------------------------------------------------------------------------------


			if (window.innerWidth <= 768) {

				let mySvg = await fetch("images/infografik_alm_brand_mobil.svg");
				console.log(mySvg);

				//tolk svg som text
				let svg = await mySvg.text();
				console.log(svg);

				//vis svg'en ved indsætte den i div'en
				document.querySelector("#infografik").innerHTML = svg;
			}

			if (window.innerWidth > 768) {
				let mySvg = await fetch("images/infografik_alm_brand.svg");
				console.log(mySvg);

				//tolk svg som text
				let svg = await mySvg.text();
				console.log(svg);

				//vis svg'en ved indsætte den i div'en
				document.querySelector("#infografik").innerHTML = svg;
			}



			// 2. find infobokse og link og skjul dem
			//------------------------------------------------------------------------------

			let info_1 = document.querySelector("#infografik #infoboks-1");
			let info_2 = document.querySelector("#infografik #infoboks-2");
			let info_3 = document.querySelector("#infografik #infoboks-3");
			let info_4 = document.querySelector("#infografik #infoboks-4");
			let info_5 = document.querySelector("#infografik #infoboks-5");
			let link_1 = document.querySelector("#infografik #link-1");

			info_1.style.visibility = "hidden";
			info_2.style.visibility = "hidden";
			info_3.style.visibility = "hidden";
			info_4.style.visibility = "hidden";
			info_5.style.visibility = "hidden";
			link_1.style.visibility = "hidden";


			// 3. Skift farve ved klik, og vis infoboks
			//-----------------------------------------------------------------------

			document.querySelector("#infografik #dots").addEventListener("click", clicked);


			//function clicked
			//--------------------------------------------------------------------

			function clicked() {
				if (infoboks != undefined) {
					infoboks.style.visibility = "hidden";
				}

				// a. find det klikkede element
				//----------------------------------------------

				selected = event.target;

				// b. find det klikkede elementets ID
				//---------------------------------------------

				selectedID = selected.getAttribute("id");
				console.log(selectedID);


				// c. find  det klikkede elements fillfarve
				//---------------------------------------------

				color = selected.getAttribute("fill");
				console.log(color);

				// d. vis infobokse
				//--------------------------------------------

				if (selectedID === "dot-1") {
					info_1.style.visibility = "visible";
					infoboks = info_1;
					link_1.style.visibility = "visible";
				}
				if (selectedID === "dot-2") {
					info_2.style.visibility = "visible";
					infoboks = info_2;
					link_1.style.visibility = "hidden";
				}
				if (selectedID === "dot-3") {
					info_3.style.visibility = "visible";
					infoboks = info_3;
					link_1.style.visibility = "hidden";
				}
				if (selectedID === "dot-4") {
					info_4.style.visibility = "visible";
					infoboks = info_4;
					link_1.style.visibility = "hidden";
				}
				if (selectedID === "dot-5") {
					info_5.style.visibility = "visible";
					infoboks = info_5;
					link_1.style.visibility = "hidden";
				}



				// 4. hvis der tidligere har været klikket skal det forige element skifte farve til original
				//------------------------------------------------------------------------------------


				if (active != undefined) {
					active.setAttribute("fill", color);

				}



				//gør det klikkede til det aktive
				//-------------------------------------------------------------------------

				active = selected;


				//skift farve på det valgte
				//-------------------------------------------------------------------------


				if (color === "#cce4e8") {
					document.querySelector("#" + selectedID).setAttribute("fill", "#e51147");
				}

				//reset farve og skjul tekst + link hvis valgt elementet allerede er aktivt
				//------------------------------------------------------------------------
				else {
					document.querySelector("#" + selectedID).setAttribute("fill", "#cce4e8");
					infoboks.style.visibility = "hidden";
					link_1.style.visibility = "hidden";
				}

				//tilføj eventlistener til link, så det kan klikkes på

				document.querySelector("#infografik #link-1").addEventListener("click", () => {
					console.log("link til formular");
				})

			}
		};
