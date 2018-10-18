//		Variabler
		let belob;
		let varighed;
		const rente = 0.07;

		//		eventlisteners for slidere
		document.querySelector("#belob_slider").addEventListener("input", VisBelob);
		document.querySelector("#varighed_slider").addEventListener("input", visVarighed);



		function VisBelob() {

			console.log("VisBelob: " + this.value);

			belob = parseInt(this.value);

			//		vis det valgte beløb ved slideren
			document.querySelector(".vis_belob").textContent = belob;

			//		Gå til udregning hvis der er valgt beløb og varighed
			if (belob != undefined && varighed != undefined) {
				visUdregning();
			}

		}

		function visVarighed() {

			console.log("visVarighed: " + this.value);

			varighed = parseInt(this.value);

			//		vis det antal måneder ved slideren
			document.querySelector(".vis_varighed").textContent = varighed;

			//		Gå til udregning hvis der er valgt beløb og varighed
			if (belob != undefined && varighed != undefined) {
				visUdregning();
			}

		}

		function visUdregning() {
			console.log("visUdregning kører");

			//			Udregn rente
			let rentebelob = belob * rente;

			//			Læg rente til beløbet
			let rentesum = belob + rentebelob;

			//			Udregn afdrag pr måned
			let udregning = rentesum / varighed;

			//			Afrund til hele kroner
			let afrunding = Math.round(udregning);

			//			Vis udregning
			document.querySelector(".vis_udregning").textContent = afrunding;
		}



		//		function tusindPunktum(x) {
		//			alert("tusindPunktum");
		//			x = x.toString();
		//			var pattern = /(-?\d+)(\d{3})/;
		//			while (pattern.test(x))
		//				x = x.replace(pattern, "$1.$2");
		//			return x;
		//		}
