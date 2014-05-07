var productData = [
	{
		name : "iPhone 5S",
		imageUrl : "img/smartphone.png",
		costs : {
			wages : 12,
			materials : 34,
			logistics : 12,
			taxes : 34,
			profit : 56,
			marketing : 78
		},
        texts:{
            wages : "Rund acht Prozent des Preises eines iPhones gehen für die Fertigungskosten des Geräts drauf.",
			materials : "Das Material eines iPhones beschlagnahmt rund 20 Prozent des Gesamtpreises.",
			logistics : "Fünf Prozent der Kosten beträgt der Anteil für die Logistik.",
			taxes : "Die Mehrwertsteuer in Deutschland beträgt 19 Prozent.",
			profit : "Über 55 Prozent der Gesamtkosten eines iPhones gehen in den Gewinn über.",
			marketing : "Die Marketingkosten machen bei einem iPhone etwa 0,5 Prozent des Preises aus."
        }
	},
	{
		name : "1l Benzin",
		imageUrl : "img/benzin.png",
		costs : {
			wages : 1,
			materials : 37,
			logistics : 1.5,
			taxes : 58.5,
			profit : 1,
			marketing :1
		}
	},
	{
		name : "Roggenbrot",
		imageUrl : "img/brot.png",
		costs : {
			wages : 10,
			materials : 20,
			logistics : 10,
			taxes : 6,
			profit : 44,
			marketing : 10
		}
	},
	{
		name : "H&M T-Shirt",
		imageUrl : "img/tshirt.png",
		costs : {
			wages : 1,
			materials : 13,
			logistics : 6,
			taxes : 5,
			profit : 50,
			marketing : 25
		}
	}
];

var currentProductIndex = 0;