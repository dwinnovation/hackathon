var productData = [
    {
        name: "iPhone 5S",
        imageUrl: "img/smartphone.png",
        price: "699,00 €",
        costs: {
            wages: 12,
            materials: 34,
            logistics: 12,
            taxes: 34,
            profit: 56,
            marketing: 78
        },
        texts: {
            wages: "Rund acht Prozent des Preises eines iPhones gehen für die Fertigungskosten des Geräts drauf.",
            materials: "Das Material eines iPhones beschlagnahmt rund 20 Prozent seines Gesamtpreises.",
            logistics: "Fünf Prozent der Kosten beträgt der Anteil für die Logistik.",
            taxes: "Die Mehrwertsteuer in Deutschland beträgt 19 Prozent.",
            profit: "Über 55 Prozent der Gesamtkosten eines iPhones gehen in den Gewinn über.",
            marketing: "Die Marketingkosten machen bei einem iPhone etwa 0,5 Prozent des Preises aus."
        }
    },
    {
        name: "1l Benzin",
        imageUrl: "img/benzin.png",
        price: "1,54 €",
        costs: {
            wages: 1,
            materials: 37,
            logistics: 1.5,
            taxes: 58.5,
            profit: 1,
            marketing: 1
        },
        texts: {
            wages: "Rund ein Prozent des Benzinpreises geht an die Löhne.",
            materials: "Die Rohstoffe kosten rund 37 Prozent des Benzinpreises.",
            logistics: "Die Rohstoffe kosten rund 37 Prozent des Benzinpreises.",
            taxes: "Die Rohstoffe kosten rund 37 Prozent des Benzinpreises.",
            profit: "Die Rohstoffe kosten rund 37 Prozent des Benzinpreises.",
            marketing: "Die Rohstoffe kosten rund 37 Prozent des Benzinpreises."
        }

    },
    {
        name: "Roggenbrot",
        imageUrl: "img/brot.png",
        price: "2,52 €",
        costs: {
            wages: 10,
            materials: 20,
            logistics: 10,
            taxes: 6,
            profit: 44,
            marketing: 10
        },
        texts: {
            wages: "Rund 10 Prozent des Brotpreises gehen an die Löhne.",
            materials: "Die Rohstoffe kosten etwa 20 Prozent des Gesamtpreises.",
            logistics: "Der Transport beträgt schätzungsweise zehn Prozent des Gesamtpreises.",
            taxes: "Der Transport beträgt schätzungsweise zehn Prozent des Gesamtpreises.",
            profit: "Über 44 Prozent der Gesamtkosten gehen in den Gewinn über.",
            marketing: "Über 44 Prozent der Gesamtkosten gehen in den Gewinn über."
        }

    },
    {
        name: "H&M T-Shirt",
        imageUrl: "img/tshirt.png",
        price: "5,00 €",
        costs: {
            wages: 1,
            materials: 13,
            logistics: 6,
            taxes: 5,
            profit: 50,
            marketing: 25
        },
        texts: {
            wages: "Rund acht Prozent des Preises eines iPhones gehen für die Fertigungskosten des Geräts drauf.",
            materials: "Das Material eines iPhones beschlagnahmt rund 20 Prozent des Gesamtpreises.",
            logistics: "Fünf Prozent der Kosten beträgt der Anteil für die Logistik.",
            taxes: "Die Mehrwertsteuer in Deutschland beträgt 19 Prozent.",
            profit: "Über 55 Prozent der Gesamtkosten eines iPhones gehen in den Gewinn über.",
            marketing: "Die Marketingkosten machen bei einem iPhone etwa 0,5 Prozent des Preises aus."
        }

    }
];

var currentProductIndex = 0;