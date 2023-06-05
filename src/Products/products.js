const products = [
    {
        categoryId:1,
        categoryName:'Clothing',
        categoryItems:[
            {
                subCategoryId:1,
                subCategoryName:"Men",
                subCategoryItems:[
                    {
                        productId:1,
                        productName:"Shirt",
                        price:500
                    },
                    {
                        productId:2,
                        productName:"Jeans",
                        price:700
                    },
                    {
                        productId:3,
                        productName:"Coats",
                        price:1000
                    }
                ]
            },
            {
                subCategoryId:2,
                subCategoryName:"Women",
                subCategoryItems:[
                    {
                        productId:4,
                        productName:"Sarees",
                        price:800
                    },
                    {
                        productId:5,
                        productName:"Shirts",
                        price:400
                    },
                    {
                        productId:6,
                        productName:"Kurtis",
                        price:400
                    }
                ]
            }
        ]
    },
    {
        categoryId:2,
        categoryName:'Books',
        categoryItems:[
            {
                subCategoryId:1,
                subCategoryName:"Fiction",
                subCategoryItems:[
                    {
                        productId:7,
                        productName:"Ponnniyin Selvan",
                        price:1000
                    },
                    {
                        productId:8,
                        productName:"Fahrenheit 451",
                        price:700
                    },
                    {
                        productId:9,
                        productName:"1984",
                        price:200
                    }
                ]
            },
            {
                subCategoryId:2,
                subCategoryName:"NonFiction",
                subCategoryItems:[
                    {
                        productId:10,
                        productName:"Life is what you make it",
                        price:800
                    },
                    {
                        productId:11,
                        productName:"Theory of everything",
                        price:400
                    }
                ]
            }
        ]
    },
    {
        categoryId:3,
        categoryName:'Electronics',
        categoryItems:[
            {
                subCategoryId:1,
                subCategoryName:"Mobiles",
                subCategoryItems:[
                    {
                        productId:12,
                        productName:"S21 Ultra",
                        price:100000
                    },
                    {
                        productId:13,
                        productName:"Sony Xperia Mk V",
                        price:120000
                    },
                    {
                        productId:14,
                        productName:"Nokia C101",
                        price:4000
                    }
                ]
            },
            {
                subCategoryId:2,
                subCategoryName:"Laptops",
                subCategoryItems:[
                    {
                        productId:15,
                        productName:"HP Spectre",
                        price:100000
                    },
                    {
                        productId:16,
                        productName:"Sony Vaio",
                        price:55000
                    },
                    {
                        productId:17,
                        productName:"Lenovo Thinkpad",
                        price:80000
                    }
                ]
            }

        ]
    }
]

module.exports = products