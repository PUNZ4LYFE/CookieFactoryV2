var Biscuit = (
	function () {
		function Biscuit() {
			//this.div = document.createElement('div');
			//document.body.appendChild(this.div);
			//this.div.className = 'box';

			//this.SetPositioAndStyle();
		}

		//Inheritance
		Biscuit.prototype = Object.create(Cookie.prototype);
		Biscuit.prototype.constructor = Cookie;

		return Biscuit;
	}
)();
