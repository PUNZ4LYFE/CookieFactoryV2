var Gingerbread = (
	function () {
		function Gingerbread() {
			
			//this.div = document.createElement('div');
			//document.body.appendChild(this.div);
			//this.div.className = 'box';

			//this.SetPositioAndStyle();
		}

		//Inheritance
		Gingerbread.prototype = Object.create(Cookie.prototype);
		Gingerbread.prototype.constructor = Cookie;

		return Gingerbread;
	}
)();
