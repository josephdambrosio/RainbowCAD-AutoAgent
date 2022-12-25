chrome.runtime.sendMessage({function: "getDefaults"}, function(response) {

	var username = response.username;
	var password = response.password;

	if (window.location.href.toLowerCase().match("/newworld.cadview/account/login")) {

		var userBox = document.querySelector('#Username');
		var passBox = document.querySelector('#passwordField');


		userBox.value = username;
		passBox.value = password;

		document.querySelector("#loginbtn").click();
	}
	if (window.location.href.toLowerCase().match('https://nc911mspprd/newworld.cadview/dashboard'))
	{
			window.location.href = 'https://nc911mspprd/newworld.cadview/current-calls';
	}
});
