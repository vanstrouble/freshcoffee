const products = [
    {
        name: "Caramel Coffee with Chocolate",
        price: 59.9,
        image: "coffee_01",
        category_id: 1,
        id: 1
      },
      {
        name: "Large Cold Coffee with Chocolate",
        price: 49.9,
        image: "coffee_02",
        category_id: 1,
        id: 2
      },
      {
        name: "Large Cold Latte with Chocolate",
        price: 54.9,
        image: "coffee_03",
        category_id: 1,
        id: 3
      },
      {
        name: "Large Cold Latte with Chocolate",
        price: 54.9,
        image: "coffee_04",
        category_id: 1,
        id: 4
      },
      {
        name: "Large Cold Milkshake with Chocolate",
        price: 54.9,
        image: "coffee_05",
        category_id: 1,
        id: 5
      },
      {
        name: "Small Hot Mocha Coffee",
        price: 39.9,
        image: "coffee_06",
        category_id: 1,
        id: 6
      },
      {
        name: "Large Hot Mocha Coffee with Chocolate",
        price: 59.9,
        image: "coffee_07",
        category_id: 1,
        id: 7
      },
      {
        name: "Large Hot Cappuccino Coffee",
        price: 59.9,
        image: "coffee_08",
        category_id: 1,
        id: 8
      },
      {
        name: "Medium Hot Mocha Coffee",
        price: 49.9,
        image: "coffee_09",
        category_id: 1,
        id: 9
      },
      {
        name: "Medium Cold Mocha Coffee with Caramel",
        price: 49.9,
        image: "coffee_10",
        category_id: 1,
        id: 10
      },
      {
        name: "Medium Cold Mocha Coffee with Chocolate",
        price: 49.9,
        image: "coffee_11",
        category_id: 1,
        id: 11
      },
      {
        name: "Espresso Coffee",
        price: 29.9,
        image: "coffee_12",
        category_id: 1,
        id: 12
      },
      {
        name: "Large Caramel Cappuccino Coffee",
        price: 59.9,
        image: "coffee_13",
        category_id: 1,
        id: 13
      },
      {
        name: "Large Caramel Coffee",
        price: 59.9,
        image: "coffee_14",
        category_id: 1,
        id: 14
      },
      {
        name: "Pack of 3 Chocolate Donuts",
        price: 39.9,
        image: "donuts_01",
        category_id: 4,
        id: 15
      },
      {
        name: "Pack of 3 Glazed Donuts",
        price: 39.9,
        image: "donuts_02",
        category_id: 4,
        id: 16
      },
      {
        name: "Strawberry Donut",
        price: 19.9,
        image: "donuts_03",
        category_id: 4,
        id: 17
      },
      {
        name: "Donut with Chocolate Cookie",
        price: 19.9,
        image: "donuts_04",
        category_id: 4,
        id: 18
      },
      {
        name: "Glazed Donut with Strawberry Sprinkles",
        price: 19.9,
        image: "donuts_05",
        category_id: 4,
        id: 19
      },
      {
        name: "Glazed Donut with Chocolate",
        price: 19.9,
        image: "donuts_06",
        category_id: 4,
        id: 20
      },
      {
        name: "Chocolate Donut with MORE Chocolate",
        price: 19.9,
        image: "donuts_07",
        category_id: 4,
        id: 21
      },
      {
        name: "Pack of 3 Chocolate Donuts",
        price: 39.9,
        image: "donuts_08",
        category_id: 4,
        id: 22
      },
      {
        name: "Pack of 3 Donuts with Vanilla and Chocolate",
        price: 39.9,
        image: "donuts_09",
        category_id: 4,
        id: 23
      },
      {
        name: "Pack of 6 Donuts",
        price: 69.9,
        image: "donuts_10",
        category_id: 4,
        id: 24
      },
      {
        name: "Pack of 3 Assorted Donuts",
        price: 39.9,
        image: "donuts_11",
        category_id: 4,
        id: 25
      },
      {
        name: "Natural Donut with Chocolate",
        price: 19.9,
        image: "donuts_12",
        category_id: 4,
        id: 26
      },
      {
        name: "Pack of 3 Chocolate Donuts with Sprinkles",
        price: 39.9,
        image: "donuts_13",
        category_id: 4,
        id: 27
      },
      {
        name: "Chocolate and Coconut Donut",
        price: 19.9,
        image: "donuts_14",
        category_id: 4,
        id: 28
      },
      {
        name: "Pack of Chocolate Cookies",
        price: 29.9,
        image: "cookies_01",
        category_id: 6,
        id: 29
      },
      {
        name: "Pack of Chocolate and Oatmeal Cookies",
        price: 39.9,
        image: "cookies_02",
        category_id: 6,
        id: 30
      },
      {
        name: "Pack of Vanilla Muffins",
        price: 39.9,
        image: "cookies_03",
        category_id: 6,
        id: 31
      },
      {
        name: "Pack of 4 Oatmeal Cookies",
        price: 24.9,
        image: "cookies_04",
        category_id: 6,
        id: 32
      },
      {
        name: "Assorted Butter Cookies",
        price: 39.9,
        image: "cookies_05",
        category_id: 6,
        id: 33
      },
      {
        name: "Fruit Flavored Cookies",
        price: 39.9,
        image: "cookies_06",
        category_id: 6,
        id: 34
      },
      {
        name: "Simple Burger",
        price: 59.9,
        image: "hamburgers_01",
        category_id: 2,
        id: 35
      },
      {
        name: "Chicken Burger",
        price: 59.9,
        image: "hamburgers_02",
        category_id: 2,
        id: 36
      },
      {
        name: "Chicken and Chili Burger",
        price: 59.9,
        image: "hamburgers_03",
        category_id: 2,
        id: 37
      },
      {
        name: "Cheese and Pickles Burger",
        price: 59.9,
        image: "hamburgers_04",
        category_id: 2,
        id: 38
      },
      {
        name: "Quarter Pounder Burger",
        price: 59.9,
        image: "hamburgers_05",
        category_id: 2,
        id: 39
      },
      {
        name: "Double Cheese Burger",
        price: 69.9,
        image: "hamburgers_06",
        category_id: 2,
        id: 40
      },
      {
        name: "Special Hot Dog",
        price: 49.9,
        image: "hamburgers_07",
        category_id: 2,
        id: 41
      },
      {
        name: "Pack of 2 Hot Dogs",
        price: 69.9,
        image: "hamburgers_08",
        category_id: 2,
        id: 42
      },
      {
        name: "4 Slices of Cheesecake",
        price: 69.9,
        image: "cake_01",
        category_id: 5,
        id: 43
      },
      {
        name: "Special Waffle",
        price: 49.9,
        image: "cake_02",
        category_id: 5,
        id: 44
      },
      {
        name: "House Croissants",
        price: 39.9,
        image: "cake_03",
        category_id: 5,
        id: 45
      },
      {
        name: "Cheesecake",
        price: 19.9,
        image: "cake_04",
        category_id: 5,
        id: 46
      },
      {
        name: "Chocolate Cake",
        price: 29.9,
        image: "cake_05",
        category_id: 5,
        id: 47
      },
      {
        name: "Slice of Chocolate Cake",
        price: 29.9,
        image: "cake_06",
        category_id: 5,
        id: 48
      },
      {
        name: "Spicy Pizza with Double Cheese",
        price: 69.9,
        image: "pizzas_01",
        category_id: 3,
        id: 49
      },
      {
        name: "Ham and Cheese Pizza",
        price: 69.9,
        image: "pizzas_02",
        category_id: 3,
        id: 50
      },
      {
        name: "Double Cheese Pizza",
        price: 69.9,
        image: "pizzas_03",
        category_id: 3,
        id: 51
      },
      {
        name: "House Special Pizza",
        price: 69.9,
        image: "pizzas_04",
        category_id: 3,
        id: 52
      },
      {
        name: "Chorizo Pizza",
        price: 69.9,
        image: "pizzas_05",
        category_id: 3,
        id: 53
      },
      {
        name: "Hawaiian Pizza",
        price: 69.9,
        image: "pizzas_06",
        category_id: 3,
        id: 54
      },
      {
        name: "Bacon Pizza",
        price: 69.9,
        image: "pizzas_07",
        category_id: 3,
        id: 55
      },
      {
        name: "Vegetable and Cheese Pizza",
        price: 69.9,
        image: "pizzas_08",
        category_id: 3,
        id: 56
      },
      {
        name: "Pepperoni and Cheese Pizza",
        price: 69.9,
        image: "pizzas_09",
        category_id: 3,
        id: 57
      },
      {
        name: "Olives and Cheese Pizza",
        price: 69.9,
        image: "pizzas_10",
        category_id: 3,
        id: 58
      },
      {
        name: "Cheese, Ham, and Mushroom Pizza",
        price: 69.9,
        image: "pizzas_11",
        category_id: 3,
        id: 59
      }
]

export {
    products
}
