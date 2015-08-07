
var info = [{"Name" : "Burj Al Arab" , "Description" : "The Burj Al Arab (Tower of the Arabs) is the world's only 7 star hotel and designed to resemble a billowing sail, the Burj Al Arab soars to a height of 321 metres, dominating the Dubai skyline making it the fourth tallest hotel in the world. It truly is one of the most iconic symbols of Dubai and is a majestic building. No trip to Dubai would be complete without at least seeing it!" , "Img" : "BurjalArab.jpg"},
			{"Name" : "Burj Khalifa" , "Description" : "The Burj Khalifa is the world's tallest tower and is an amazing feat of engineering- the story of which you can see if you take a trip to &quot;At The Top&quot; - the highest viewing platform in the world. The high point of any Burj Khalifa experience is the view from At The Top. Located on level 124 of the world's tallest tower, this observatory is destined to be the highlight of any visit to the Middle East. The journey begins in the lower ground level of The Dubai Mall. Throughout the journey to the top, visitors are entertained by a multi-media presentation of the exotic history of Dubai and the marvel that is the Burj Khalifa. " , "Img" : "BurjKhalifa.jpg"},
			{"Name": "The Dubai Fountains", "Description" : "At the base of the world's tallest tower is one of the world's most amazing fountains! In fact it is the world's largest dancing fountain! Set on the 30-acre Burj Khalifa Lake, the fountain shoots water jets as high as 500 ft, equivalent to that of a 50-storey building. The fountain is 900 ft  long and has five circles of varying sizes and two central arcs. It is designed by California-based WET, the creators of the Fountains of Bellagio in Las Vegas. The Dubai Fountain performs daily, with the performance repertoire including Sama Dubai; Baba Yetu, an award-winning song in Swahili; the Arab world’s top-selling dance number Shik Shak Shok; and the signature piece of world-renowned Italian tenor Andrea Bocelli, Con te partiro (Time to Say Goodbye).", "Img" : "fountains.jpg"}, 
			{"Name": "Atlantis Hotel", "Description" : "Atlantis is the majestic resort in Dubai situated on the Palm, a man-made island that has captured the world’s imagination with its magnificent scale and ingenuity. From the moment you arrive, you will be immersed in a dazzling world of imagination, pleasure and luxury of 5-star hotels.", "Img" : "atlantis.jpg"},
			{"Name": "Global Village", "Description" : "For the past 15 years, Global Village has been providing cultural entertainment along with an international shopping experience to millions of visitors. Breathtaking live performances, mouth-watering cuisine, authentic handicrafts and merchandise from different countries await you at the many national pavilions in Global Village.", "Img" : "GlobalVillage.jpeg"},
			{"Name": "Palm Island", "Description" : "Palm Jumeirah has everything you need to enjoy a wonderful holiday break. World famous hotel names, amazing tourist attractions, luxury fashion and shopping malls are starting to open up. Whether you just want to relax or immerse yourself in an exciting world of leisure and entertainment, this is a truly inspirational holiday destination in Dubai.", "Img" : "palm.jpg"},
			{"Name": "Dubai Creek", "Description" : "The natural seawater inlet that cuts through the centre of the city is the historical part of Dubai where visitors can take an abra (small water taxi) and view the old trading port and the dhows from the water. A cruise to Al Maktoum Bridge will pass many of the city's historic as well as modern landmarks. A stroll around the wharf offers a picturesque glimpse of Dubai's trading heritage, where dhows bound for distant places dock to unload their goods.", "Img" : "creek.jpg"},
			{"Name": "Ski Dubai", "Description" : "Ski Dubai is the first indoor ski resort in the Middle East and offers an amazing snow setting to enjoy skiing, snowboarding and tobogganing, or just playing in the snow. Young or old, there is something for everyone, from the beginner to the snow sport enthusiast. Ski Dubai is a unique mountain-themed attraction that offers you the opportunity to enjoy real snow in Dubai all year round.", "Img" : "ski.jpg"},
			{"Name": "Dubai Marina", "Description" : "One of Dubai's newer tourist attractions is Dubai marina. The marina is set in the backdrop of the amazing buildings of JBR and has great views, walkways and boat rides available. It is amazing either during the day or in the evenings. Dubai Marina is the largest man-made marina in the world and is home to super yachts and also Dubai Marina Mall. Set in the heart of ‘new Dubai’, Dubai Marina Yacht Club (DMYC) has rapidly gained a reputation as one of the renowned private yacht clubs of the region, with a purpose built clubhouse forming the centre-piece of four distinctive marinas. Arrayed along the length of a remarkable 3.5km canal, the marinas provide sheltered berthing for over five hundred yachts, in a setting that is simply unrivalled.", "Img" : "marina.jpg"},
			{"Name": "Wild Wadi", "Description" : "Located in front of the  Burj Al Arab, Wild Wadi offers 30 rides and attractions for all the family. Wild Wadi is themed around the tale of Juha, a known character from the Arabian folklore.", "Img" : "wildwadi.jpg"}];

function title()
{
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext('2d');

	// Create gradient
	var grd = ctx.createLinearGradient(0,0,700,200);
	grd.addColorStop(0,"blue");
	grd.addColorStop(0.5,"green");
	grd.addColorStop(0.7, "yellow");
	grd.addColorStop(1, "red");

	// Fill with gradient
	ctx.fillStyle = grd;
	ctx.font="50pt Cambria";
	ctx.lineWidth = 3;
	ctx.strokeStyle = 'green';
	ctx.textAlign = "center";
	ctx.strokeText("The most visited places in Dubai", c.width/2, c.height/2);
	ctx.fillText("The most visited places in Dubai", c.width/2, c.height/2); 
}


var rows = 10;

function gridGenerator()
{
	var grid = $('.container-fluid');
	var form = $('#main-form');

	for(var i = 0; i < rows ; i++)
	{
		grid = "<div class = 'row'>";		
		grid += "<span class = 'col-md-1' >" + (i+1) + ".</span>";
		grid += "<span class = 'col-md-2' >" + info[i].Name +"</span>";
		grid += "<span class = 'col-md-4' >" + info[i].Description + "</span>";
		grid += "<span class = 'col-md-3' >" + "<center><img src = 'img/" + info[i].Img + " ' alt = 'Dubai' class = 'img-thumbnail' data-action = 'zoom'>"
				+ "<br/><label id='jRate" + i +"'></label>&nbsp;<span class ='badge' id = 'badge" + i + "'>" + ratingTrack[i] + "</span></center></span></div><br>";
		form.append(grid);
	}
	
}

    
$(document).ready(function()
{
	title();
	gridGenerator();
	keepRatingTrack();
});

var ratingTrack = [0,0,0,0,0,0,0,0,0,0];
var total = [0,0,0,0,0,0,0,0,0,0];
var rates = [0,0,0,0,0,0,0,0,0,0];
var average = 0.0;
var toolitup;

function calculateRate(input)
{
	var that = this;
	toolitup = $("#jRate" + input).jRate({
		rating: 0,
		onSet: function(rating) {
			console.log("OnSet: Rating: " + rating);
			total[input] += rating;
			rates[input] += 1;
			average = total[input]/rates[input]; 
			ratingTrack[input] = average;
			$('#badge' + input).empty().append(ratingTrack[input].toFixed(2));
		}
	});
}

function keepRatingTrack()
{
	for(var i = 0 ; i < rows ; i++)
		$('#jRate'+i).click(calculateRate(i));
}