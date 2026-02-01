// Restaurant page functionality

// Get restaurant data from URL parameter
function getRestaurantData() {
    // Try to get from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const restaurantId = urlParams.get('id');
    
    // If no URL parameter, redirect to home
    if (!restaurantId) {
        window.location.href = 'index.html';
        return null;
    }
    
    // Define restaurant data (same as in main.js)
    const restaurants = {
        'olas-nutrition': {
            name: 'Olas Nutrition',
            tagline: 'Authentic Nigerian Cuisine',
            location: 'Opposite Alhikmah University, Ilorin',
            deliveryTime: '30-45 minutes',
            hours: '8:00 AM - 11:00 PM',
            badges: ['🏆 Certified', '⚡ Fast', '🍗 Chicken', '🎓 Student Favorite'],
            menu: [
                {
                    id: 1,
                    name: 'Jollof Rice & Chicken',
                    description: 'One plate of authentic Nigerian jollof rice with well-seasoned chicken',
                    price: 2900,
                    category: 'rice'
                },
                {
                    id: 2,
                    name: 'Extra Jollof Rice & Chicken',
                    description: 'Large portion of jollof rice with extra chicken',
                    price: 3500,
                    category: 'rice'
                },
                {
                    id: 3,
                    name: 'Shawarma (No Sausage)',
                    description: 'Delicious shawarma wrap with chicken, vegetables, and special sauce',
                    price: 3000,
                    category: 'shawarma'
                },
                {
                    id: 4,
                    name: 'Shawarma (Single Sausage)',
                    description: 'Shawarma with chicken and sausage',
                    price: 3300,
                    category: 'shawarma'
                },
                {
                    id: 5,
                    name: 'Shawarma (Double Sausage)',
                    description: 'Shawarma with chicken and double sausage',
                    price: 3600,
                    category: 'shawarma'
                },
                {
                    id: 6,
                    name: 'Masa (Pack of 10)',
                    description: 'Traditional rice cakes, soft and delicious',
                    price: 500,
                    category: 'snacks'
                },
                {
                    id: 7,
                    name: 'Cow Leg',
                    description: 'Tender cow leg delicacy',
                    price: 1000,
                    category: 'proteins'
                },
                {
                    id: 8,
                    name: 'Chicken',
                    description: 'Well-seasoned chicken portion',
                    price: 2000,
                    category: 'proteins'
                }
            ]
        },
        'k-bakes': {
            name: 'K Bakes',
            tagline: 'Fresh Baked Goods & More',
            location: 'Near Alhikmah University, Ilorin',
            deliveryTime: '25-40 minutes',
            hours: '7:00 AM - 10:00 PM',
            badges: ['🏆 Certified', '🍞 Fresh', '🎓 Student Favorite', '🌙 Late Night'],
            menu: [
                {
                    id: 9,
                    name: 'Bread',
                    description: 'Freshly baked bread',
                    price: 800,
                    category: 'bread'
                },
                {
                    id: 10,
                    name: 'Bread (Large)',
                    description: 'Large freshly baked bread',
                    price: 1000,
                    category: 'bread'
                },
                {
                    id: 11,
                    name: 'Fish Bread',
                    description: 'Bread filled with fish',
                    price: 1200,
                    category: 'special-bread'
                },
                {
                    id: 12,
                    name: 'Sardine Bread',
                    description: 'Bread filled with sardine',
                    price: 2000,
                    category: 'special-bread'
                },
                {
                    id: 13,
                    name: 'Chocolate Bread',
                    description: 'Chocolate flavored bread',
                    price: 1000,
                    category: 'special-bread'
                },
                {
                    id: 14,
                    name: 'Coconut Bread',
                    description: 'Coconut flavored bread',
                    price: 2000,
                    category: 'special-bread'
                },
                {
                    id: 15,
                    name: 'Chicken Shawarma',
                    description: 'Chicken shawarma wrap',
                    price: 3000,
                    category: 'shawarma'
                },
                {
                    id: 16,
                    name: 'Chicken Shawarma (Jumbo)',
                    description: 'Extra large chicken shawarma',
                    price: 4000,
                    category: 'shawarma'
                },
                {
                    id: 17,
                    name: 'Beef Shawarma',
                    description: 'Beef shawarma wrap',
                    price: 2800,
                    category: 'shawarma'
                },
                {
                    id: 18,
                    name: 'Parfait',
                    description: 'Delicious parfait dessert',
                    price: 2800,
                    category: 'desserts'
                },
                {
                    id: 19,
                    name: 'Big Fura',
                    description: 'Traditional fura drink (large)',
                    price: 3000,
                    category: 'drinks'
                },
                {
                    id: 20,
                    name: 'Small Fura',
                    description: 'Traditional fura drink (small)',
                    price: 2500,
                    category: 'drinks'
                },
                {
                    id: 21,
                    name: 'Indomie with Egg',
                    description: 'Indomie noodles with egg',
                    price: 3000,
                    category: 'noodles'
                },
                {
                    id: 22,
                    name: 'Jam Doughnut',
                    description: 'Doughnut with jam filling',
                    price: 700,
                    category: 'pastries'
                },
                {
                    id: 23,
                    name: 'Meat Pie',
                    description: 'Flaky pastry with meat filling',
                    price: 800,
                    category: 'pastries'
                },
                {
                    id: 24,
                    name: 'Chicken Pie',
                    description: 'Flaky pastry with chicken filling',
                    price: 1000,
                    category: 'pastries'
                },
                {
                    id: 25,
                    name: 'Doughnut',
                    description: 'Classic doughnut',
                    price: 500,
                    category: 'pastries'
                },
                {
                    id: 26,
                    name: 'Bake Fish Roll',
                    description: 'Baked fish roll',
                    price: 400,
                    category: 'pastries'
                },
                {
                    id: 27,
                    name: 'Egg Roll',
                    description: 'Egg roll pastry',
                    price: 700,
                    category: 'pastries'
                },
                {
                    id: 28,
                    name: 'Zobo',
                    description: 'Hibiscus drink',
                    price: 1000,
                    category: 'drinks'
                },
                {
                    id: 29,
                    name: 'Yogurt',
                    description: 'Fresh yogurt',
                    price: 2500,
                    category: 'drinks'
                },
                {
                    id: 30,
                    name: 'Tiger Nut',
                    description: 'Tiger nut milk drink',
                    price: 1500,
                    category: 'drinks'
                },
                {
                    id: 31,
                    name: 'Ice Cream (250ml)',
                    description: 'Ice cream in 250ml container',
                    price: 1100,
                    category: 'ice-cream'
                },
                {
                    id: 32,
                    name: 'Ice Cream (500ml)',
                    description: 'Ice cream in 500ml container',
                    price: 2200,
                    category: 'ice-cream'
                },
                {
                    id: 33,
                    name: 'Ice Cream (1 Liter)',
                    description: 'Ice cream in 1 liter container',
                    price: 4000,
                    category: 'ice-cream'
                }
            ]
        },
        'beiroot-ng': {
            name: 'BEIROOT.NG',
            tagline: 'Premium Sandwiches & Wraps',
            location: 'Near Alhikmah University',
            deliveryTime: '35-50 minutes',
            hours: '9:00 AM - 11:00 PM',
            badges: ['🏆 Certified', '🥪 Premium', '⚡ Fast', '🎓 Student Favorite'],
            menu: [
                {
                    id: 100,
                    name: 'BEIROOT LOADED FRIES (Spicy Egg) - Mini Box',
                    description: 'Irish potato loaded fries with spicy egg',
                    price: 3200,
                    category: 'loaded-fries'
                },
                {
                    id: 101,
                    name: 'Chicken/BEEF LOADED FRIES - Large',
                    description: 'Large chicken or beef loaded fries',
                    price: 5900,
                    category: 'loaded-fries'
                },
                {
                    id: 102,
                    name: 'Chicken/BEEF LOADED FRIES - Regular',
                    description: 'Regular chicken or beef loaded fries',
                    price: 4900,
                    category: 'loaded-fries'
                },
                {
                    id: 103,
                    name: 'Chicken/BEEF LOADED FRIES - Mini',
                    description: 'Mini chicken or beef loaded fries',
                    price: 3900,
                    category: 'loaded-fries'
                },
                {
                    id: 104,
                    name: 'FULLY LOADED FRIES (Crispy Chicken + Shredded Beef) - Large',
                    description: 'Large fully loaded fries with crispy chicken and shredded beef',
                    price: 6900,
                    category: 'loaded-fries'
                },
                {
                    id: 105,
                    name: 'FULLY LOADED FRIES (Crispy Chicken + Shredded Beef) - Regular',
                    description: 'Regular fully loaded fries with crispy chicken and shredded beef',
                    price: 5900,
                    category: 'loaded-fries'
                },
                {
                    id: 106,
                    name: 'FULLY LOADED FRIES (Crispy Chicken + Shredded Beef) - Mini',
                    description: 'Mini fully loaded fries with crispy chicken and shredded beef',
                    price: 4900,
                    category: 'loaded-fries'
                },
                {
                    id: 107,
                    name: 'SWEET CHICKEN or BEEF LOADED FRIES - Large',
                    description: 'Large sweet potato loaded fries with chicken or beef',
                    price: 5000,
                    category: 'sweet-potatoes'
                },
                {
                    id: 108,
                    name: 'SWEET CHICKEN or BEEF LOADED FRIES - Regular',
                    description: 'Regular sweet potato loaded fries with chicken or beef',
                    price: 4200,
                    category: 'sweet-potatoes'
                },
                {
                    id: 109,
                    name: 'SWEET CHICKEN or BEEF LOADED FRIES - Mini',
                    description: 'Mini sweet potato loaded fries with chicken or beef',
                    price: 3500,
                    category: 'sweet-potatoes'
                },
                {
                    id: 110,
                    name: 'SWEET FULLY LOADED (Crispy Chicken + Shredded Beef) - Large',
                    description: 'Large sweet fully loaded fries with crispy chicken and shredded beef',
                    price: 6000,
                    category: 'sweet-potatoes'
                },
                {
                    id: 111,
                    name: 'SWEET FULLY LOADED (Crispy Chicken + Shredded Beef) - Regular',
                    description: 'Regular sweet fully loaded fries with crispy chicken and shredded beef',
                    price: 5200,
                    category: 'sweet-potatoes'
                },
                {
                    id: 112,
                    name: 'SWEET FULLY LOADED (Crispy Chicken + Shredded Beef) - Mini',
                    description: 'Mini sweet fully loaded fries with crispy chicken and shredded beef',
                    price: 4500,
                    category: 'sweet-potatoes'
                },
                {
                    id: 113,
                    name: 'SHAWARMA/CHICKEN WRAP - Regular',
                    description: 'Regular chicken shawarma or wrap',
                    price: 3500,
                    category: 'wraps'
                },
                {
                    id: 114,
                    name: 'SHAWARMA/CHICKEN WRAP - Large',
                    description: 'Large chicken shawarma or wrap',
                    price: 5200,
                    category: 'wraps'
                },
                {
                    id: 115,
                    name: 'Single Chicken Burger',
                    description: 'Single chicken burger',
                    price: 3800,
                    category: 'burgers'
                },
                {
                    id: 116,
                    name: 'Single Chicken Cheese Burger',
                    description: 'Single chicken burger with cheese',
                    price: 4500,
                    category: 'burgers'
                },
                {
                    id: 117,
                    name: 'Bigback Burger',
                    description: 'Bigback burger',
                    price: 5600,
                    category: 'burgers'
                },
                {
                    id: 118,
                    name: 'Bigback with Cheese Burger',
                    description: 'Bigback burger with cheese',
                    price: 6200,
                    category: 'burgers'
                },
                {
                    id: 119,
                    name: 'Beiroot Bomb Sandwich (Chicken + Beef)',
                    description: 'Sub sandwich with chicken and beef',
                    price: 4000,
                    category: 'sandwiches'
                },
                {
                    id: 120,
                    name: 'Large Chicken/Beef Sandwich',
                    description: 'Large chicken or beef sandwich',
                    price: 3500,
                    category: 'sandwiches'
                },
                {
                    id: 121,
                    name: 'Medium Chicken/Beef Sandwich',
                    description: 'Medium chicken or beef sandwich',
                    price: 3000,
                    category: 'sandwiches'
                },
                {
                    id: 122,
                    name: 'Beiroot Sandwich (Spicy Egg)',
                    description: 'Sandwich with spicy egg',
                    price: 2400,
                    category: 'sandwiches'
                },
                {
                    id: 123,
                    name: 'Crispy Chicken Tenders',
                    description: 'Crispy chicken tenders',
                    price: 3800,
                    category: 'sides'
                },
                {
                    id: 124,
                    name: 'Fries',
                    description: 'French fries',
                    price: 2800,
                    category: 'sides'
                }
            ]
        },
        'sherrif-mai-shayi': {
            name: 'Sherrif Mai Shayi',
            tagline: 'Tea, Bread & Indomie Specialist',
            location: 'Near Alhikmah University, Ilorin',
            deliveryTime: '20-35 minutes',
            hours: '6:00 AM - 12:00 AM',
            badges: ['🏆 Certified', '🌙 Late Night', '🎓 Student Favorite', '☕ Tea'],
            menu: [
                {
                    id: 51,
                    name: 'Small Indomie',
                    description: 'Small portion of indomie noodles',
                    price: 400,
                    category: 'indomie'
                },
                {
                    id: 52,
                    name: 'Big Indomie',
                    description: 'Large portion of indomie noodles',
                    price: 600,
                    category: 'indomie'
                },
                {
                    id: 53,
                    name: 'Egg',
                    description: 'Fried or boiled egg',
                    price: 300,
                    category: 'extras'
                },
                {
                    id: 54,
                    name: 'Medium Size Bread & Egg',
                    description: 'Medium bread with egg',
                    price: 1000,
                    category: 'bread-egg'
                },
                {
                    id: 55,
                    name: 'Big Size Bread & Egg',
                    description: 'Large bread with egg',
                    price: 1200,
                    category: 'bread-egg'
                },
                {
                    id: 56,
                    name: 'Small Size Bread & Egg',
                    description: 'Small bread with egg',
                    price: 700,
                    category: 'bread-egg'
                }
            ]
        },
        'parfait-stop': {
            name: 'ParfaitStop',
            tagline: 'A moment of best treat',
            location: 'Near Alhikmah University, Ilorin',
            deliveryTime: '25-40 minutes',
            hours: '8:00 AM - 10:00 PM',
            badges: ['🏆 Certified', '🍧 Dessert', '🎓 Student Favorite', '🥛 Yogurt'],
            menu: [
                {
                    id: 200,
                    name: 'Parfait - Pop',
                    description: 'Small parfait dessert',
                    price: 2900,
                    category: 'parfait'
                },
                {
                    id: 201,
                    name: 'Parfait - Mini',
                    description: 'Mini parfait dessert',
                    price: 4100,
                    category: 'parfait'
                },
                {
                    id: 202,
                    name: 'Parfait - Midi',
                    description: 'Medium parfait dessert',
                    price: 5100,
                    category: 'parfait'
                },
                {
                    id: 203,
                    name: 'Parfait - Maxi',
                    description: 'Large parfait dessert',
                    price: 11200,
                    category: 'parfait'
                },
                {
                    id: 204,
                    name: 'Milky Yogurt - 500ml',
                    description: '500ml milky yogurt',
                    price: 3000,
                    category: 'yogurt'
                },
                {
                    id: 205,
                    name: 'Milky Yogurt - 1 Litre',
                    description: '1 litre milky yogurt',
                    price: 6000,
                    category: 'yogurt'
                },
                {
                    id: 206,
                    name: 'Milky Yogurt - 4 Litres',
                    description: '4 litres milky yogurt',
                    price: 23500,
                    category: 'yogurt'
                },
                {
                    id: 207,
                    name: 'Greek Yogurt - 500ml',
                    description: '500ml greek yogurt',
                    price: 5000,
                    category: 'yogurt'
                },
                {
                    id: 208,
                    name: 'Greek Yogurt - 1 Litre',
                    description: '1 litre greek yogurt',
                    price: 9800,
                    category: 'yogurt'
                }
            ]
        },
        'item7-restaurant': {
            name: 'Item7 Restaurant',
            tagline: 'Quality Meals & Shawarma',
            location: 'Near Alhikmah University, Ilorin',
            deliveryTime: '30-45 minutes',
            hours: '9:00 AM - 11:00 PM',
            badges: ['🏆 Certified', '🍗 Chicken', '🥩 Beef', '🎓 Student Favorite'],
            menu: [
                {
                    id: 300,
                    name: 'A Plate with Chicken',
                    description: 'Complete meal plate with chicken',
                    price: 3000,
                    category: 'plates'
                },
                {
                    id: 301,
                    name: 'A Plate with Beef',
                    description: 'Complete meal plate with beef',
                    price: 2000,
                    category: 'plates'
                },
                {
                    id: 302,
                    name: 'A Plate with Fish',
                    description: 'Complete meal plate with fish',
                    price: 2800,
                    category: 'plates'
                },
                {
                    id: 303,
                    name: 'A Plate with Croaker Fish',
                    description: 'Complete meal plate with croaker fish',
                    price: 3800,
                    category: 'plates'
                },
                {
                    id: 304,
                    name: 'Extra Chicken',
                    description: 'Additional chicken serving',
                    price: 1500,
                    category: 'extras'
                },
                {
                    id: 305,
                    name: 'Extra Rice',
                    description: 'Additional rice serving',
                    price: 700,
                    category: 'extras'
                },
                {
                    id: 306,
                    name: 'Extra Plantain',
                    description: 'Additional plantain serving',
                    price: 300,
                    category: 'extras'
                },
                {
                    id: 307,
                    name: 'Extra Fish',
                    description: 'Additional fish serving',
                    price: 1000,
                    category: 'extras'
                },
                {
                    id: 308,
                    name: 'Croaker Fish',
                    description: 'Croaker fish serving',
                    price: 2000,
                    category: 'extras'
                },
                {
                    id: 309,
                    name: 'Extra Beef',
                    description: 'Additional beef serving',
                    price: 200,
                    category: 'extras'
                },
                {
                    id: 310,
                    name: 'Beef Shawarma',
                    description: 'Beef shawarma wrap',
                    price: 2800,
                    category: 'desserts'
                },
                {
                    id: 311,
                    name: 'Chicken Shawarma',
                    description: 'Chicken shawarma wrap',
                    price: 3000,
                    category: 'desserts'
                },
                {
                    id: 312,
                    name: 'Coleslaw',
                    description: 'Fresh coleslaw salad',
                    price: 500,
                    category: 'desserts'
                }
            ]
        },
        'sesede-food': {
            name: 'Sesede Food Restaurant',
            tagline: 'Traditional Nigerian Swallows',
            location: 'Near Alhikmah University, Ilorin',
            deliveryTime: '25-40 minutes',
            hours: '7:00 AM - 10:00 PM',
            badges: ['🏆 Certified', '🥘 Traditional', '🎓 Student Favorite', '🍲 Soup'],
            menu: [
                {
                    id: 400,
                    name: 'Eba (Per Wrap)',
                    description: 'Cassava flour swallow',
                    price: 200,
                    category: 'swallows'
                },
                {
                    id: 401,
                    name: 'Semo (Per Wrap)',
                    description: 'Semolina swallow',
                    price: 200,
                    category: 'swallows'
                },
                {
                    id: 402,
                    name: 'Amala (Per Wrap)',
                    description: 'Yam flour swallow',
                    price: 200,
                    category: 'swallows'
                },
                {
                    id: 403,
                    name: 'Iyan (Per Wrap)',
                    description: 'Pounded yam swallow',
                    price: 300,
                    category: 'swallows'
                },
                {
                    id: 404,
                    name: 'Wara (Per Piece)',
                    description: 'Local cheese',
                    price: 500,
                    category: 'proteins'
                },
                {
                    id: 405,
                    name: 'Beef (Per Piece)',
                    description: 'Beef protein',
                    price: 200,
                    category: 'proteins'
                },
                {
                    id: 406,
                    name: 'Ponmo (Per Piece)',
                    description: 'Cow skin protein',
                    price: 200,
                    category: 'proteins'
                },
                {
                    id: 407,
                    name: 'Egusi Soup',
                    description: 'Melon seed soup',
                    price: 500,
                    category: 'soups'
                },
                {
                    id: 408,
                    name: 'Ewedu Soup',
                    description: 'Jute leaf soup',
                    price: 500,
                    category: 'soups'
                },
                {
                    id: 409,
                    name: 'Gbegiri Soup',
                    description: 'Bean soup',
                    price: 500,
                    category: 'soups'
                },
                {
                    id: 410,
                    name: 'Abula (Ewedu & Gbegiri)',
                    description: 'Combination of ewedu and gbegiri soup',
                    price: 800,
                    category: 'soups'
                }
            ]
        },
        'mac-dee': {
            name: 'MAC-DEE',
            tagline: 'Multi-Cuisine Restaurant',
            location: 'Near Alhikmah University, Ilorin',
            deliveryTime: '40-60 minutes',
            hours: '8:00 AM - 12:00 AM',
            badges: ['🏆 Certified', '🍔 Burgers', '🎓 Student Favorite', '🌙 Late Night'],
            menu: [
                {
                    id: 500,
                    name: 'Party Jollof/Fried Rice with Chicken',
                    description: 'Party rice with chicken',
                    price: 3000,
                    category: 'rice'
                },
                {
                    id: 501,
                    name: 'Party Jollof/Fried Rice with Beef',
                    description: 'Party rice with beef',
                    price: 2800,
                    category: 'rice'
                },
                {
                    id: 502,
                    name: 'Party Jollof/Fried Rice with Turkey',
                    description: 'Party rice with turkey',
                    price: 6000,
                    category: 'rice'
                },
                {
                    id: 503,
                    name: 'Party Jollof/Fried Rice with Fish',
                    description: 'Party rice with fish',
                    price: 4000,
                    category: 'rice'
                },
                {
                    id: 504,
                    name: 'Full Plate Rice/Beans (Chicken, Plantain, Egg Sauce)',
                    description: 'Full plate of rice and beans with chicken',
                    price: 5000,
                    category: 'rice-beans'
                },
                {
                    id: 505,
                    name: 'Full Plate Rice/Beans (Beef, Plantain, Egg Sauce)',
                    description: 'Full plate of rice and beans with beef',
                    price: 4300,
                    category: 'rice-beans'
                },
                {
                    id: 506,
                    name: 'Full Plate Rice/Beans (Fish, Egg Plantain Sauce)',
                    description: 'Full plate of rice and beans with fish',
                    price: 4500,
                    category: 'rice-beans'
                },
                {
                    id: 507,
                    name: 'Essential Pasta (Chicken)',
                    description: 'Basic pasta with chicken',
                    price: 3000,
                    category: 'pasta'
                },
                {
                    id: 508,
                    name: 'Royal Pasta (Chicken, Egg & Plantain)',
                    description: 'Pasta with chicken, egg and plantain',
                    price: 4000,
                    category: 'pasta'
                },
                {
                    id: 509,
                    name: 'Supreme Pasta (Turkey, Plantain)',
                    description: 'Pasta with turkey and plantain',
                    price: 6000,
                    category: 'pasta'
                },
                {
                    id: 510,
                    name: 'Deluxe Pasta (Fish, Plantain)',
                    description: 'Pasta with fish and plantain',
                    price: 4200,
                    category: 'pasta'
                },
                {
                    id: 511,
                    name: 'Essential Noodles (Chicken)',
                    description: 'Basic noodles with chicken',
                    price: 2500,
                    category: 'noodles'
                },
                {
                    id: 512,
                    name: 'Royal Noodles (Chicken, Egg & Plantain)',
                    description: 'Noodles with chicken, egg and plantain',
                    price: 3800,
                    category: 'noodles'
                },
                {
                    id: 513,
                    name: 'Supreme Noodles (Turkey & Plantain)',
                    description: 'Noodles with turkey and plantain',
                    price: 5000,
                    category: 'noodles'
                },
                {
                    id: 514,
                    name: 'Deluxe Noodles (Fish, Plantain)',
                    description: 'Noodles with fish and plantain',
                    price: 3000,
                    category: 'noodles'
                },
                {
                    id: 515,
                    name: 'Extra Rice',
                    description: 'Additional rice serving',
                    price: 800,
                    category: 'extras'
                },
                {
                    id: 516,
                    name: 'Extra Pasta',
                    description: 'Additional pasta serving',
                    price: 700,
                    category: 'extras'
                },
                {
                    id: 517,
                    name: 'Extra Noodles',
                    description: 'Additional noodles serving',
                    price: 700,
                    category: 'extras'
                },
                {
                    id: 518,
                    name: 'Extra Chicken',
                    description: 'Additional chicken serving',
                    price: 1500,
                    category: 'extras'
                },
                {
                    id: 519,
                    name: 'Extra Turkey',
                    description: 'Additional turkey serving',
                    price: 3800,
                    category: 'extras'
                },
                {
                    id: 520,
                    name: 'Extra Fish',
                    description: 'Additional fish serving',
                    price: 1700,
                    category: 'extras'
                },
                {
                    id: 521,
                    name: 'Extra Plantain',
                    description: 'Additional plantain serving',
                    price: 500,
                    category: 'extras'
                },
                {
                    id: 522,
                    name: 'Extra Egg',
                    description: 'Additional egg serving',
                    price: 400,
                    category: 'extras'
                },
                {
                    id: 523,
                    name: 'Extra Coleslaw',
                    description: 'Additional coleslaw serving',
                    price: 500,
                    category: 'extras'
                },
                {
                    id: 524,
                    name: 'Extra Sausage',
                    description: 'Additional sausage serving',
                    price: 400,
                    category: 'extras'
                },
                {
                    id: 525,
                    name: 'Extra Pepper Sauce',
                    description: 'Additional pepper sauce serving',
                    price: 1000,
                    category: 'extras'
                },
                {
                    id: 526,
                    name: 'Dee Club Sandwich (SS)',
                    description: 'Small size club sandwich',
                    price: 2000,
                    category: 'sandwiches'
                },
                {
                    id: 527,
                    name: 'Dee Club Sandwich Chicken Mixed (SS)',
                    description: 'Small size club sandwich with chicken mix',
                    price: 3000,
                    category: 'sandwiches'
                },
                {
                    id: 528,
                    name: 'Dee Club Sandwich Beef Mixed (SS)',
                    description: 'Small size club sandwich with beef mix',
                    price: 3000,
                    category: 'sandwiches'
                },
                {
                    id: 529,
                    name: 'Dee Club Sandwich (LS)',
                    description: 'Large size club sandwich',
                    price: 3000,
                    category: 'sandwiches'
                },
                {
                    id: 530,
                    name: 'Dee Club Sandwich Chicken Mixed (LS)',
                    description: 'Large size club sandwich with chicken mix',
                    price: 4000,
                    category: 'sandwiches'
                },
                {
                    id: 531,
                    name: 'Dee Club Sandwich Beef Mixed (LS)',
                    description: 'Large size club sandwich with beef mix',
                    price: 4000,
                    category: 'sandwiches'
                },
                {
                    id: 532,
                    name: 'Dee Club Sandwich Chicken Beef Mixed (SS)',
                    description: 'Small size club sandwich with chicken and beef mix',
                    price: 4000,
                    category: 'sandwiches'
                },
                {
                    id: 533,
                    name: 'Dee Club Sandwich Chicken Beef (LG)',
                    description: 'Large size club sandwich with chicken and beef',
                    price: 5000,
                    category: 'sandwiches'
                },
                {
                    id: 534,
                    name: 'Chicken MAC-DEE (SS)',
                    description: 'Small size chicken mac dee',
                    price: 2000,
                    category: 'mac-dee'
                },
                {
                    id: 535,
                    name: 'Beef MAC-DEE (SS)',
                    description: 'Small size beef mac dee',
                    price: 2000,
                    category: 'mac-dee'
                },
                {
                    id: 536,
                    name: 'Chicken Beef MAC-DEE (SS)',
                    description: 'Small size chicken beef mac dee',
                    price: 3000,
                    category: 'mac-dee'
                },
                {
                    id: 537,
                    name: 'Chicken MAC-DEE (LS)',
                    description: 'Large size chicken mac dee',
                    price: 3000,
                    category: 'mac-dee'
                },
                {
                    id: 538,
                    name: 'Beef MAC-DEE (LS)',
                    description: 'Large size beef mac dee',
                    price: 3000,
                    category: 'mac-dee'
                },
                {
                    id: 539,
                    name: 'Chicken Beef MAC-DEE (LS)',
                    description: 'Large size chicken beef mac dee',
                    price: 4000,
                    category: 'mac-dee'
                },
                {
                    id: 540,
                    name: 'Extra Chicken (Sandwich)',
                    description: 'Additional chicken for sandwich',
                    price: 1000,
                    category: 'extras'
                },
                {
                    id: 541,
                    name: 'Extra Beef (Sandwich)',
                    description: 'Additional beef for sandwich',
                    price: 1000,
                    category: 'extras'
                },
                {
                    id: 542,
                    name: 'Extra Sausage (Sandwich)',
                    description: 'Additional sausage for sandwich',
                    price: 400,
                    category: 'extras'
                },
                {
                    id: 543,
                    name: 'Extra Dip',
                    description: 'Additional dip',
                    price: 800,
                    category: 'extras'
                },
                {
                    id: 544,
                    name: 'Extra Cheese',
                    description: 'Additional cheese',
                    price: 1000,
                    category: 'extras'
                },
                {
                    id: 545,
                    name: 'Extra Scrambled Egg',
                    description: 'Additional scrambled egg',
                    price: 500,
                    category: 'extras'
                },
                {
                    id: 546,
                    name: 'Chicken Wrap/Shawarma',
                    description: 'Chicken wrap or shawarma',
                    price: 3500,
                    category: 'wraps'
                },
                {
                    id: 547,
                    name: 'Beef Wrap',
                    description: 'Beef wrap',
                    price: 3000,
                    category: 'wraps'
                },
                {
                    id: 548,
                    name: 'Double Decker Wrap',
                    description: 'Double decker wrap',
                    price: 5500,
                    category: 'wraps'
                },
                {
                    id: 549,
                    name: 'Dee Loaded Fries (Irish Potato)',
                    description: 'Loaded fries with irish potato',
                    price: 4700,
                    category: 'loaded-fries'
                },
                {
                    id: 550,
                    name: 'Dee Chicken Beef Loaded Fries (Irish Potato)',
                    description: 'Loaded fries with chicken and beef (irish potato)',
                    price: 6700,
                    category: 'loaded-fries'
                },
                {
                    id: 551,
                    name: 'Extra Cheese Topping',
                    description: 'Additional cheese topping',
                    price: 2500,
                    category: 'extras'
                },
                {
                    id: 552,
                    name: 'Dee Loaded Fries (Sweet Potato)',
                    description: 'Loaded fries with sweet potato',
                    price: 4500,
                    category: 'loaded-fries'
                },
                {
                    id: 553,
                    name: 'Dee Chicken Beef Loaded Fries (Sweet Potato)',
                    description: 'Loaded fries with chicken and beef (sweet potato)',
                    price: 6500,
                    category: 'loaded-fries'
                },
                {
                    id: 554,
                    name: 'Single Chicken Burger (No Cheese)',
                    description: 'Single chicken burger without cheese',
                    price: 4000,
                    category: 'burgers'
                },
                {
                    id: 555,
                    name: 'Single Chicken Cheese Burger',
                    description: 'Single chicken burger with cheese',
                    price: 4500,
                    category: 'burgers'
                },
                {
                    id: 556,
                    name: 'Double Decker Burger (No Cheese)',
                    description: 'Double decker burger without cheese',
                    price: 5000,
                    category: 'burgers'
                },
                {
                    id: 557,
                    name: 'Double Decker Burger (Cheese)',
                    description: 'Double decker burger with cheese',
                    price: 5700,
                    category: 'burgers'
                },
                {
                    id: 558,
                    name: 'Extra Dips (Burger)',
                    description: 'Additional dips for burger',
                    price: 500,
                    category: 'extras'
                },
                {
                    id: 559,
                    name: 'Extra Tomato',
                    description: 'Additional tomato',
                    price: 100,
                    category: 'extras'
                },
                {
                    id: 560,
                    name: 'Extra Tomato, Cucumber',
                    description: 'Additional tomato and cucumber',
                    price: 100,
                    category: 'extras'
                },
                {
                    id: 561,
                    name: 'Extra Cheese (Burger)',
                    description: 'Additional cheese for burger',
                    price: 1000,
                    category: 'extras'
                },
                {
                    id: 562,
                    name: 'Mini Pizza',
                    description: 'Mini size pizza',
                    price: 8500,
                    category: 'pizza'
                },
                {
                    id: 563,
                    name: 'Large Pizza',
                    description: 'Large size pizza',
                    price: 12500,
                    category: 'pizza'
                },
                {
                    id: 564,
                    name: 'Bole with Sauce',
                    description: 'Roasted plantain with sauce',
                    price: 2000,
                    category: 'bole'
                },
                {
                    id: 565,
                    name: 'Bole Chicken Sauce',
                    description: 'Roasted plantain with chicken sauce',
                    price: 2700,
                    category: 'bole'
                },
                {
                    id: 566,
                    name: 'Bole with Quarter Chicken Sauce',
                    description: 'Roasted plantain with quarter chicken sauce',
                    price: 3700,
                    category: 'bole'
                },
                {
                    id: 567,
                    name: 'Bole with Half Chicken Sauce',
                    description: 'Roasted plantain with half chicken sauce',
                    price: 7000,
                    category: 'bole'
                },
                {
                    id: 568,
                    name: 'Bole with Full Chicken Sauce',
                    description: 'Roasted plantain with full chicken sauce',
                    price: 14000,
                    category: 'bole'
                },
                {
                    id: 569,
                    name: 'Bole with Fish Sauce',
                    description: 'Roasted plantain with fish sauce',
                    price: 4000,
                    category: 'bole'
                },
                {
                    id: 570,
                    name: 'Extra Bole',
                    description: 'Additional roasted plantain',
                    price: 800,
                    category: 'extras'
                },
                {
                    id: 571,
                    name: 'Full Chicken (Grilled)',
                    description: 'Full grilled chicken',
                    price: 12000,
                    category: 'grilled'
                },
                {
                    id: 572,
                    name: 'Half Chicken (Grilled)',
                    description: 'Half grilled chicken',
                    price: 6000,
                    category: 'grilled'
                },
                {
                    id: 573,
                    name: 'Quarter Chicken (Grilled)',
                    description: 'Quarter grilled chicken',
                    price: 3000,
                    category: 'grilled'
                },
                {
                    id: 574,
                    name: 'Suya Stick',
                    description: 'Grilled suya stick',
                    price: 1000,
                    category: 'grilled'
                },
                {
                    id: 575,
                    name: 'Guinea Fowl (Pre-order)',
                    description: 'Grilled guinea fowl (requires pre-order)',
                    price: 17000,
                    category: 'grilled'
                },
                {
                    id: 576,
                    name: 'BBQ Tier 1',
                    description: 'BBQ cat fish tier 1',
                    price: 4000,
                    category: 'bbq'
                },
                {
                    id: 577,
                    name: 'BBQ Tier 2',
                    description: 'BBQ cat fish tier 2',
                    price: 4500,
                    category: 'bbq'
                },
                {
                    id: 578,
                    name: 'Chicken and Fries',
                    description: 'Chicken with fries',
                    price: 4000,
                    category: 'bbq'
                },
                {
                    id: 579,
                    name: 'Egg and Fries',
                    description: 'Egg with fries',
                    price: 3000,
                    category: 'bbq'
                },
                {
                    id: 580,
                    name: 'Plantain and Egg',
                    description: 'Plantain with egg',
                    price: 3000,
                    category: 'bbq'
                },
                {
                    id: 581,
                    name: 'Full Fish PPS',
                    description: 'Full fish pepper soup',
                    price: 3500,
                    category: 'pps'
                },
                {
                    id: 582,
                    name: 'Full Chicken PPS',
                    description: 'Full chicken pepper soup',
                    price: 15000,
                    category: 'pps'
                },
                {
                    id: 583,
                    name: 'Half Chicken PPS',
                    description: 'Half chicken pepper soup',
                    price: 7500,
                    category: 'pps'
                },
                {
                    id: 584,
                    name: 'Quarter Chicken PPS',
                    description: 'Quarter chicken pepper soup',
                    price: 4000,
                    category: 'pps'
                },
                {
                    id: 585,
                    name: 'Fan Ice Sachet',
                    description: 'Fan ice cream sachet',
                    price: 600,
                    category: 'ice-cream'
                },
                {
                    id: 586,
                    name: 'Fan Ice 120ml',
                    description: '120ml fan ice cream',
                    price: 800,
                    category: 'ice-cream'
                },
                {
                    id: 587,
                    name: 'Fan Ice 250ml',
                    description: '250ml fan ice cream',
                    price: 1500,
                    category: 'ice-cream'
                },
                {
                    id: 588,
                    name: 'Fan Ice 450ml',
                    description: '450ml fan ice cream',
                    price: 3000,
                    category: 'ice-cream'
                },
                {
                    id: 589,
                    name: 'Fan Ice 900ml',
                    description: '900ml fan ice cream',
                    price: 5000,
                    category: 'ice-cream'
                },
                {
                    id: 590,
                    name: 'Go Slo 320ml Fan Ice',
                    description: '320ml go slo fan ice cream',
                    price: 5500,
                    category: 'ice-cream'
                },
                {
                    id: 591,
                    name: 'Go Slo 4mls Fan Ice',
                    description: '4mls go slo fan ice cream',
                    price: 6500,
                    category: 'ice-cream'
                },
                {
                    id: 592,
                    name: 'Fan Yogo Bottle',
                    description: 'Fan yogo drink bottle',
                    price: 1000,
                    category: 'ice-cream'
                },
                {
                    id: 593,
                    name: 'Yogurt Parfait Cup',
                    description: 'Yogurt parfait in cup',
                    price: 4000,
                    category: 'parfait'
                },
                {
                    id: 594,
                    name: 'Yogurt Parfait Bowl',
                    description: 'Yogurt parfait in bowl',
                    price: 5500,
                    category: 'parfait'
                }
            ]
        },
        'alhaja-habibat': {
            name: 'Alhaja Habibat Restaurant',
            tagline: 'Traditional Nigerian Swallows',
            location: 'Near Alhikmah University, Ilorin',
            deliveryTime: '25-40 minutes',
            hours: '7:00 AM - 10:00 PM',
            badges: ['🏆 Certified', '🥘 Traditional', '🎓 Student Favorite', '🍲 Soup'],
            menu: [
                {
                    id: 600,
                    name: 'Eba (Per Wrap)',
                    description: 'Cassava flour swallow',
                    price: 200,
                    category: 'swallows'
                },
                {
                    id: 601,
                    name: 'Semo (Per Wrap)',
                    description: 'Semolina swallow',
                    price: 200,
                    category: 'swallows'
                },
                {
                    id: 602,
                    name: 'Amala (Per Wrap)',
                    description: 'Yam flour swallow',
                    price: 200,
                    category: 'swallows'
                },
                {
                    id: 603,
                    name: 'Iyan (Per Wrap)',
                    description: 'Pounded yam swallow',
                    price: 300,
                    category: 'swallows'
                },
                {
                    id: 604,
                    name: 'Wara (Per Piece)',
                    description: 'Local cheese',
                    price: 300,
                    category: 'proteins'
                },
                {
                    id: 605,
                    name: 'Beef (Per Piece)',
                    description: 'Beef protein',
                    price: 200,
                    category: 'proteins'
                },
                {
                    id: 606,
                    name: 'Ponmo (Per Piece)',
                    description: 'Cow skin protein',
                    price: 200,
                    category: 'proteins'
                },
                {
                    id: 607,
                    name: 'Egusi Soup',
                    description: 'Melon seed soup',
                    price: 500,
                    category: 'soups'
                },
                {
                    id: 608,
                    name: 'Ewedu Soup',
                    description: 'Jute leaf soup',
                    price: 500,
                    category: 'soups'
                },
                {
                    id: 609,
                    name: 'Gbegiri Soup',
                    description: 'Bean soup',
                    price: 500,
                    category: 'soups'
                },
                {
                    id: 610,
                    name: 'Abula (Ewedu & Gbegiri)',
                    description: 'Combination of ewedu and gbegiri soup',
                    price: 800,
                    category: 'soups'
                }
            ]
        }
    };
    
    return {
        id: restaurantId,
        ...restaurants[restaurantId]
    };
}

// Display restaurant information
function displayRestaurantInfo(restaurant) {
    // Update page title
    document.title = `${restaurant.name} - TapDosh`;
    
    // Update restaurant name
    const nameElement = document.getElementById('restaurantName');
    if (nameElement) nameElement.textContent = restaurant.name;
    
    // Update tagline
    const taglineElement = document.getElementById('restaurantTagline');
    if (taglineElement) taglineElement.textContent = restaurant.tagline;
    
    // Update location
    const locationElement = document.getElementById('restaurantLocation');
    if (locationElement) locationElement.textContent = restaurant.location;
    
    // Update hours
    const hoursElement = document.getElementById('restaurantHours');
    if (hoursElement) hoursElement.textContent = restaurant.hours;
    
    // Update delivery info
    const deliveryElement = document.getElementById('restaurantDelivery');
    if (deliveryElement) {
        deliveryElement.textContent = restaurant.deliveryTime;
    }
}

// Display restaurant menu
function displayRestaurantMenu(restaurant) {
    const menuContainer = document.getElementById('menuContainer');
    const categoriesContainer = document.getElementById('menuCategories');
    
    if (!menuContainer) return;
    
    // Get all unique categories
    const categories = [...new Set(restaurant.menu.map(item => item.category))];
    
    // Display category buttons
    if (categoriesContainer) {
        categoriesContainer.innerHTML = `
            <button class="category-btn active" data-category="all">All</button>
            ${categories.map(category => 
                `<button class="category-btn" data-category="${category}">
                    ${category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
                </button>`
            ).join('')}
        `;
        
        // Add event listeners to category buttons
        const categoryButtons = categoriesContainer.querySelectorAll('.category-btn');
        categoryButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                // Filter menu items
                const category = this.dataset.category;
                displayMenuItems(restaurant.menu, category);
            });
        });
    }
    
    // Display all menu items initially
    displayMenuItems(restaurant.menu, 'all');
}

// Display menu items with filtering
function displayMenuItems(menu, category) {
    const menuContainer = document.getElementById('menuContainer');
    if (!menuContainer) return;
    
    // Filter items by category
    const filteredItems = category === 'all' 
        ? menu 
        : menu.filter(item => item.category === category);
    
    // Display items
    menuContainer.innerHTML = filteredItems.map(item => {
        // Check if item is in cart
        const cart = JSON.parse(localStorage.getItem('tapdoshCart')) || [];
        const restaurantId = new URLSearchParams(window.location.search).get('id');
        const cartItem = cart.find(cartItem => 
            cartItem.id === item.id && cartItem.restaurant === restaurantId
        );
        const quantity = cartItem ? cartItem.quantity : 0;
        
        return `
            <div class="menu-item" data-id="${item.id}">
                <div class="menu-item-header">
                    <h3 class="menu-item-name">${item.name}</h3>
                    <div class="menu-item-price">
                        ${formatPrice ? formatPrice(item.price) : `₦${item.price.toLocaleString('en-NG')}`}
                    </div>
                </div>
                <p class="menu-item-description">${item.description}</p>
                <div class="menu-item-actions">
                    <div class="quantity-control">
                        <button class="quantity-btn minus" onclick="updateMenuItemQuantity(${item.id}, ${quantity - 1})">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="quantity">${quantity}</span>
                        <button class="quantity-btn plus" onclick="updateMenuItemQuantity(${item.id}, ${quantity + 1})">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    <button class="add-to-cart ${quantity > 0 ? 'added' : ''}" onclick="addMenuItemToCart(${item.id})">
                        <i class="fas fa-${quantity > 0 ? 'check' : 'cart-plus'}"></i>
                        ${quantity > 0 ? 'Added' : 'Add to Cart'}
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// Add menu item to cart
function addMenuItemToCart(itemId) {
    const restaurantId = new URLSearchParams(window.location.search).get('id');
    const restaurant = getRestaurantData();
    
    if (!restaurant) return;
    
    // Find the item in the restaurant menu
    const item = restaurant.menu.find(menuItem => menuItem.id === itemId);
    
    if (item) {
        // Add to cart with quantity 1
        if (typeof addToCart === 'function') {
            addToCart(item, restaurantId);
        } else {
            // Fallback to direct cart manipulation
            const cart = JSON.parse(localStorage.getItem('tapdoshCart')) || [];
            const existingItemIndex = cart.findIndex(cartItem => 
                cartItem.id === item.id && cartItem.restaurant === restaurantId
            );
            
            if (existingItemIndex > -1) {
                cart[existingItemIndex].quantity += 1;
            } else {
                cart.push({
                    ...item,
                    restaurant: restaurantId,
                    quantity: 1
                });
            }
            
            localStorage.setItem('tapdoshCart', JSON.stringify(cart));
            localStorage.setItem('tapdoshCurrentRestaurant', restaurantId);
            
            // Update cart count
            const cartCountElements = document.querySelectorAll('.cart-count');
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCountElements.forEach(element => {
                element.textContent = totalItems;
            });
            
            // Show notification
            if (typeof showNotification === 'function') {
                showNotification(`${item.name} added to cart!`);
            }
        }
        
        // Update the display
        displayRestaurantMenu(restaurant);
        
        // Update cart count in restaurant page
        updateCartCountRestaurant();
    }
}

// Update menu item quantity
function updateMenuItemQuantity(itemId, newQuantity) {
    const restaurantId = new URLSearchParams(window.location.search).get('id');
    const restaurant = getRestaurantData();
    
    if (!restaurant) return;
    
    // Find the item in the restaurant menu
    const item = restaurant.menu.find(menuItem => menuItem.id === itemId);
    
    if (item) {
        if (typeof updateQuantity === 'function') {
            if (newQuantity <= 0) {
                // Remove from cart
                removeFromCart(itemId, restaurantId);
            } else {
                // Update quantity in cart
                updateQuantity(itemId, restaurantId, newQuantity);
            }
        } else {
            // Fallback to direct cart manipulation
            const cart = JSON.parse(localStorage.getItem('tapdoshCart')) || [];
            const itemIndex = cart.findIndex(cartItem => 
                cartItem.id === itemId && cartItem.restaurant === restaurantId
            );
            
            if (itemIndex > -1) {
                if (newQuantity <= 0) {
                    cart.splice(itemIndex, 1);
                } else {
                    cart[itemIndex].quantity = newQuantity;
                }
                
                localStorage.setItem('tapdoshCart', JSON.stringify(cart));
                
                // Update cart count
                const cartCountElements = document.querySelectorAll('.cart-count');
                const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
                cartCountElements.forEach(element => {
                    element.textContent = totalItems;
                });
            }
        }
        
        // Update the display
        displayRestaurantMenu(restaurant);
        
        // Update cart count in restaurant page
        updateCartCountRestaurant();
    }
}

// Function to update cart count in restaurant page
function updateCartCountRestaurant() {
    const cart = JSON.parse(localStorage.getItem('tapdoshCart')) || [];
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    const cartCountElement = document.getElementById('cartCountRestaurant');
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
    }
    
    // Also update navigation cart count
    const navCartElements = document.querySelectorAll('.cart-count');
    navCartElements.forEach(element => {
        element.textContent = cartCount;
    });
}

// Initialize restaurant page
document.addEventListener('DOMContentLoaded', function() {
    // Get restaurant data
    const restaurant = getRestaurantData();
    
    if (restaurant) {
        // Display restaurant info
        displayRestaurantInfo(restaurant);
        
        // Display restaurant menu
        displayRestaurantMenu(restaurant);
        
        // Save restaurant to localStorage for cart page
        localStorage.setItem('tapdoshCurrentRestaurant', restaurant.id);
        
        // Update cart count
        updateCartCountRestaurant();
    }
    
    // Listen for cart updates from other pages
    window.addEventListener('storage', function(e) {
        if (e.key === 'tapdoshCart') {
            updateCartCountRestaurant();
            if (restaurant) {
                displayRestaurantMenu(restaurant);
            }
        }
    });
});

// Export functions for use in HTML
window.addMenuItemToCart = addMenuItemToCart;
window.updateMenuItemQuantity = updateMenuItemQuantity;
window.updateCartCountRestaurant = updateCartCountRestaurant;