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
	else if(window.location.href.toLowerCase().match('https://www.iamresponding.com/'))
	{
		if (document.getElementsByClassName("CookieConsent").length >= 1)
		{
			console.log(document.getElementsByClassName("CookieConsent"));
			document.getElementsByClassName("CookieConsent")[0].getElementsByTagName('div')[1].getElementsByTagName('button')[0].click();
		}

		window.location.href = 'https://www.iamresponding.com/v3/Pages/memberlogin.aspx';
	}
});
