var ChocolatechipFactory = (
	function () {
		function ChocolatechipFactory() {
			
			//this.div = document.createElement('div');
			//document.body.appendChild(this.div);
			//this.div.className = 'box';

			//this.SetPositioAndStyle();
		}

		//Inheritance
		ChocolatechipFactory.prototype = Object.create(CookieFactory.prototype);
		ChocolatechipFactory.prototype.constructor = CookieFactory;

		ChocolatechipFactory.prototype.getChocolateCookie = function () {
			var cookie = new DoubleChocolatechip();
		}

		ChocolatechipFactory.prototype.getVanillaCookie = function () {
			var cookie = new VanillaChocolatechip();
		}

		ChocolatechipFactory.prototype.getMarbleCookie = function () {
			var cookie = new MarbleChocolatechip();
		}

		return ChocolatechipFactory;
	}
)();
