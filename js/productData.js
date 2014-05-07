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
        texts:{
           wages : "Apple’s phone is a status symbol - not so much though for those assembling it. Suppliers in China like Foxconn are known for their bad working conditions, low wages and high suicide rates among their workers.",
           materials : "Phones have a huge set of features nowadays. Therefore, they need top quality components and raw materials, for example rare earths - the latter being hard to harvest and therefore very expensive.",
           logistics : "The more you ship, the cheaper it gets for each item. Apple is a global player selling its products all over the world and they sell a lot - which leads to a powerful position when negotioating with logistics companies.",
           taxes : "Multinationals like Apple use very sophisticated systems to avoid paying taxes. Apple for example uses a system that is called the \"Double Irish with Dutch Sandwich\" and involves branches in Ireland and the Netherlands.",
           profit : "More than half of the retail price goes into Apple’s cash stash. That made it the wealthiest company in the world, with a war chest worth almost 160 billion US-Dollars.",
           marketing : "Apple is known for its ad campaigns. Compared to other tech companies, they are pretty tightfisted with their marketing budget, however. They spent a mere 1.1 Billion USD, competitor Samsung for example spends 14 Billion USD."
       }
    },
    {
        name: "1l petrol",
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
            wages : "High prices? High wages? Not really, people working at gas stations don’t really make millions just because they sell gasoline.",
           materials : "Gas is getting short. The rising prices of gas at stock exchanges make it less lucrative to sell gas at the station.",
           logistics : "Giant pipelines transport the \"black gold\" to the rafineries. However, many accidents happen and these pipelines are often used as leverage within countries in conflicts.",
           taxes : "Environment taxes, taxes for gas, sales taxes - most of the gasoline price consists of taxes, no doubt about that.",
           profit : "Gas stations do not get most of their profit thanks to the sale of gasoline. It is more profitable for them to sell goods in their own shop.",
           marketing : "Selling gas is a hard business. Especially when your oil platforms spill millions of litres into the sea and your prices seemingly know only one direction - up. That makes marketing for gas very expensive."
        }

    },
    {
        name: "rye bread",
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
           wages : "Many bakeries have to fight for profit. More and more supermarkets integrate their own bakeries within their shop, so small family-driven bakeries don’t have a chance to survive.",
           materials : "Less bakeries are actually producing their bread by themselves. They let other companies preproduce their products, so they can save time",
           logistics : "Each day, tons of pretzels, bread and bread rolls are transported across the country.",
           taxes : "Consumers in Germany can consider themselves happy: food taxes are much lower than for other industry products.",
           profit : "Bakeries can dictate their prices for their product. However, they have to look at the prices of their competitors.",
           marketing : "Products like bread don’t need a lot of marketing because it’s an everyday product."
        }

    },
    {
        name: "t-shirt",
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
            wages : "Most t-Shirts are produced by sewers in sweatshops. However, the production conditions are far from fair.",
           materials : "Materials used for t-Shirts mostly come from Asian countries like Bangladesh and Taiwan.",
           logistics : "Since clothing companies prefer to produce in foreign countries, the cost for logistics is much higher.",
           taxes : "19 percent taxes on shirts might sound like a lot. In truth, though, the profits of the companies are much higher.",
           profit : "Even if the t-Shirt costs only 5 euros, it’s a very profitable price. Due to its low production costs, the company can set the price at this level without loosing a lot of profit.",
           marketing : "The clothing industry is highly competitive. Profit can change rapidly within months if consumers decide to buy from the competitor. Thus, marketing is very important."

        }

    }
];

var currentProductIndex = 0;