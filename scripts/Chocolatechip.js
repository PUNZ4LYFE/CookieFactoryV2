var Chocolatechip = (
	function () {
		function Chocolatechip() {
			Producto.call(this);
			this.categoria = 2;
			//this.div = document.createElement('div');
			//document.body.appendChild(this.div);
			//this.div.className = 'box';

			//this.SetPositioAndStyle();
		}

		//Inheritance
		Chocolatechip.prototype = Object.create(Cookie.prototype);
		Chocolatechip.prototype.constructor = Cookie;

		

		return Chocolatechip;
	}
)();
