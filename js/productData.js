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
           wages : "Apple’s phone is a status symbol - not so much though for those assembling it. Suppliers in China like Foxconn are known for their bad working conditions, low wages and high suicide rates.",
           materials : "Phones have a huge set of features nowadays. Therefore, they need top quality components and raw material, for exampe rare earths - the latter being hard to harvest and therefor very expensive.",
           logistics : "The more you ship, the cheaper it gets for each item. Apple is a global player selling it’s products all over the world, but they do sell a lot - which leads to a powerful position when negotioating with logistics companies.",
           taxes : "Multinationals like Apple use very sophisticated systems to avoid paying taxes. Apple for example uses a system that is called the \"Double Irish with Dutch Sandwich\" and involves branches in Ireland and the Netherlands.",
           profit : "More than half of the retail price goes into Apple’s cash stash. That made it the wealthiest company in the world, with a war chest worth almost 160 billion US-Dollars.",
           marketing : "Apple is known for it’s ad campaigns - compared to other tech companies, they are pretty tightfisted with their marketing budget, however. They spend a mere 1.1 Billion USD, competitor Samsung for example spends 14 Billion USD."
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
            wages : "Hight prices? High wages? Not really, people working at gas stations don’t really make a million because they sell gasoline.",
           materials : "Gas is getting short. The rising prices of gas at stock exchanges make it less lucrative to sell gas at the station.",
           logistics : "Giant pipelines transport the \"black gold\" to the rafineries. However, many accidents happen and these pipelines are often used as a pressurizing medium within countries in conflicts."
           taxes : "Environment taxes, taxes for gas, sales taxes - most of the price of gasoline is for taxes, no doubt about that.",
           profit : "Filling stations do not get most of their profit thanks to the sell of gasoline. It is more profitable for them to sell goods for resale intheir own shop."
           marketing : "Men working at gas stations can’t dictate the price of their gas. The prices of other filling stations are collected and then adapted."
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
           materials : "Less bakeries are actually producing their bread by themselve. They let other companies preproduce their products, so they can save time",
           logistics : "Each day, tons of prezels, bread and bread rolls are transported across the country.",
           taxes : "The consumer in Germany can be happy: For food taxes are lower than for other industrie products.",
           profit : "Bakeries can dictate their prices for their product themselves. However, they depend on the prices of their competitors."
           marketing : "Products like bread don’t need a lot of marketing, because it’s an everyday product."
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
            wages : "Most T-Shirts of H&M are produced by sewers in Bangladesh. However, the production conditions are far from fair ",
           materials : "Materials used for T-Shirts mostly come from Asian countries like Bangladesh and Taiwan. ",
           logistics : "Because the wages for sewers in Asian countries are so low, the logistic prices are a lot higher.",
           taxes : "19 Percent for taxes might sound quite a lot, however, the profit range for clothing companies are quite high.",
           profit : "Even if the T-Shirt costs only 5 Euros, it’s a very profitable price for H&M. Due to its low production costs, the company can set the price that low without loosing a lot of profit",
           marketing : "The clothing industry is hightly competitive. Profit can chance rapidly within months if the consumer decides to buy from the competitor. So marketing is very important to H&M."

        }

    }
];

var currentProductIndex = 0;