function testLength(value, length, exactLength){
	var x = value.length;
	if(exactLength){
		if(x == length){
			return true;
		}
		else{
			return false;
		}
	}
	else{
		if(x >= length){
			return true;
		}
		else{
			return false;
		}
	}

}
function testNumber(value){
	
	if(isNaN(value)){
		return false;
	}
	else{
		return true;
	}


}

function updateForm(id){
	if(id === radio1){
		document.getElementById("formDiv").innerHTML =

		'<table name ="creditCard">\
				<tr><td>First Name</td><td><input type="text" name="FirstName" required></td></tr>\
				<tr><td>Last Name</td><td><input type="text" name="LastName" required></td></tr>\
				<tr><td>Address</td><td><input type="text" name="Address" required></td></tr>\
				<tr><td>City</td><td><input type="text" name="City" required></td></tr>\
				<tr><td>Zip</td><td><input id = "Zip" type="text" name="Zip" required></td></tr>\
				<tr><td>Email</td><td><input id = "Email" type="text" name="Email" required></td></tr>\
				<tr><td>Name on Card</td><td><input type="text" name="CardName" required></td></tr>\
				<tr><td>Card Number</td><td><input id = "CardNum" type="text" name="CardNum" required></td></tr>\
				<tr><td>CVV2/CVC<span id = "cvcInfo"><a href="https://en.wikipedia.org/wiki/Card_security_code" targer = "_blank"> What is this?</a></span></td><td><input id = "CVC" type="text" name="CVC" required></td></tr>\
				<tr><td>State</td><td><select id = "stateSel" required><option value="Select State">Select State</option>\
						<option value="AL">AL</option>\
						<option value="AK">AK</option>\
						<option value="AR">AR</option>\
						<option value="CA">CA</option>\
						<option value="CO">CO</option>\
						<option value="CT">CT</option>\
						<option value="DE">DE</option>\
						<option value="FL">FL</option>\
						<option value="GA">GA</option>\
						<option value="HI">HI</option>\
						<option value="ID">ID</option>\
						<option value="IL">IL</option>\
						<option value="IN">IN</option>\
						<option value="IA">IA</option>\
						<option value="KS">KS</option>\
						<option value="KY">KY</option>\
						<option value="LA">LA</option>\
						<option value="ME">ME</option>\
						<option value="MD">MD</option>\
						<option value="MA">MA</option>\
						<option value="MI">MI</option>\
						<option value="MN">MN</option>\
						<option value="MS">MS</option>\
						<option value="MO">MO</option>\
						<option value="MT">MT</option>\
						<option value="NE">NE</option>\
						<option value="NV">NV</option>\
						<option value="NH">NH</option>\
						<option value="NJ">NJ</option>\
						<option value="NM">NM</option>\
						<option value="NY">NY</option>\
						<option value="NC">NC</option>\
						<option value="ND">ND</option>\
						<option value="OH">OH</option>\
						<option value="OK">OK</option>\
						<option value="OR">OR</option>\
						<option value="PA">PA</option>\
						<option value="RI">RI</option>\
						<option value="SC">SC</option>\
						<option value="SD">SD</option>\
						<option value="TN">TN</option>\
						<option value="UT">UT</option>\
						<option value="VT">VT</option>\
						<option value="VA">VA</option>\
						<option value="WA">WA</option>\
						<option value="WV">WV</option>\
						<option value="WI">WI</option>\
						<option value="WY">WY</option>\
					</select></td>\
				</tr>\
				<tr><td>Exp Date:</td><td><input id = "cardDate" type="month" required min="2017-01" max="2030-12" value="2017-12"></td></tr>\
			</table>'

	}
	else if(id === radio2){
		document.getElementById("formDiv").innerHTML = 
		'<table name = "payPal"><tr><td>Email Address</td>\
		<td><input id = "PPEmail" type="Email" name="ppEmail" required></td></tr><tr><td>Password</td><td>\
		<input id = "PPPasswd" type="password" name="ppPass" required></td></tr></table>';

	}

}

function validateControl(control, name, length){
	if(name == 'Zip'){
		var x = document.getElementById(control).value;

		if(testLength(x, length, true)){
			if(testNumber(x)){
				return true;
			}
			else{
			document.getElementById("errorPrint").insertAdjacentHTML('beforeend', '<br>Zip is not number');
			return false;
			}
		}
		else{
			document.getElementById("errorPrint").insertAdjacentHTML('beforeend', '<br>Zip is incorrect length');
			return false;
		}
	}
	else if(name == 'CVV2/CVC'){
		var x = document.getElementById(control).value;

		if(testLength(x, length, true)){
			if(testNumber(x)){
				return true;
			}
			else{
			document.getElementById("errorPrint").insertAdjacentHTML('beforeend', '<br>CVC is not number');
			return false;
			}
		}
		else{
			document.getElementById("errorPrint").insertAdjacentHTML('beforeend', '<br>CVC is incorrect length');
			return false;
		}

	}

}

function validateCreditCard(credNum){
	var newCredNum = credNum.replace(/\s/g, '');

	//Amex length
	if(testLength(newCredNum, 15, true) || testLength(newCredNum, 16, true)){
		if(testNumber(newCredNum)){
			if((newCredNum[0] == 6 || newCredNum[0] == 5 || newCredNum[0] == 4) && testLength(newCredNum, 16, true)){
				return true; 
			}
			else if(newCredNum[0] == 3 && testLength(newCredNum, 15, true)){
				return true;
			}
			else{
				document.getElementById("errorPrint").insertAdjacentHTML('beforeend', '<br>Credit Card number incorrect');
				return false;
			}
		}
		else{
			document.getElementById("errorPrint").insertAdjacentHTML('beforeend', '<br>Credit Card is not number');
			return false;
		}

	}
	else{
		document.getElementById("errorPrint").insertAdjacentHTML('beforeend', '<br>Credit Card Number is incorrect length');
		return false; 
	}
}

function validateState(){
	var x = document.getElementById("stateSel").value;
	if(x == "Select State"){
		document.getElementById("errorPrint").insertAdjacentHTML('beforeend', '<br>Choose Valid State');
		return false;
	}
	else{
		return true;
	}
}

function validateDate(value){
	var date = new Date();
	var month = date.getMonth() + 1;
	var year = date.getFullYear();

	var thisYear = value.substring(0,4);
	var thisMonth = value.substring(5,7);

	if(thisYear >= year){
		if(thisMonth > month){
			return true;
		}
		else{
			document.getElementById("errorPrint").insertAdjacentHTML('beforeend', '<br>Date is expired');
			return false;
		}
	}
	else{
		document.getElementById("errorPrint").insertAdjacentHTML('beforeend', '<br>Date is expired');
		return false;
	}
}

function validateEmail(value){
	var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

	if(value.match(pattern)){
		return true;
	}
	else{
		document.getElementById("errorPrint").insertAdjacentHTML('beforeend', '<br>Email not valid');
		return false;
	}


}

function validatePassword(value, minLength){

	if(testLength(value, minLength, false)){
		return true;
	}
	else{
		document.getElementById("errorPrint").insertAdjacentHTML('beforeend', '<br>Password must be of length 6');
		return false;
	}

}



function validateForm(){
	//clear error prompts section 
	document.getElementById("errorPrint").innerHTML = '';

	var radioSel = document.getElementById("radio1").checked;

	if(radioSel){

		//validate credit card
		var vZip = validateControl('Zip','Zip',5);
		var vCVC = validateControl('CVC', 'CVV2/CVC', 3);
		var creditCardNumber = document.getElementById('CardNum').value;
		var vCredN = validateCreditCard(creditCardNumber);
		var vState = validateState();
		
		var cardDate = document.getElementById("cardDate").value;
		var vDate = validateDate(cardDate);
		
		var inputEmail = document.getElementById("Email").value;
		var vEmail = validateEmail(inputEmail);

		if(vZip && vCVC && vCredN && vState && vDate && vEmail){
			document.getElementById("errorPrint").innerHTML = 'Payment Successful';
		}
	}

	var radioSel2 = document.getElementById("radio2").checked;

	if(radioSel2){
		//validate PayPal
		var pEmail = document.getElementById("PPEmail").value;
		var vEmail = validateEmail(pEmail);

		var pPswd = document.getElementById("PPPasswd").value;
		var vPswd = validatePassword(pPswd, 6);

		if(vEmail && vPswd){
			document.getElementById("errorPrint").innerHTML = 'Payment Successful';
		}
	}

	return false;
}

