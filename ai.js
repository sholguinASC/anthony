$(document).ready(function(){
	var sites = [
	"http://www.cannabisoilsale.net/",
	"https://www.quora.com/How-difficult-is-it-to-escape-from-prison", 
	"http://www.kirkbytimes.co.uk/alaughitems/crack/crack.html",
	"http://www.bulkapothecary.com/product/make-it/wine-making/herbs-spices/horny-goat-weed/?gclid=CjwKEAjwiru9BRDwyKmR08L3iS0SJABN8T4vP-DCIDG5ELg1ODDAghFfUUwxWyEfUhNtKccstxoq6RoCD5vw_wcB",
	"https://newpdsuslmzqazvr.onion.to/",
	"http://a056-crimestoppers.nyc.gov/crimestoppers/public/index.html",
	 ];
	var random;
	var input;
	$("#look").click(function(){
		random = sites[Math.floor(Math.random()*sites.length)]
		input = $("#search_input").val();
		$('#search_stuff').append('<a href="'+ random +'"><h3>'+  input +'</h3></a>');
	});
});