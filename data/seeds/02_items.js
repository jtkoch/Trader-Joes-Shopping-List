exports.seed = async function(knex) {
	await knex("items").insert([
    {
      name: "Josie's Mandarin Oranges 5lb Bag",
      price: "$4.99",
      category: "Produce"
    },
    {
      name: "Organic Roasted Veggie Pizza",
      price: "$4.49",
      category: "Frozen"
    },
    {
      name: "speculoos Cookie Butter Ice Cream",
      price: "$4.99",
      category: "Dessert"
    },
    {
      name: "Dark Chocolate Peanut Butter Cups Large Pack",
      price: "$4.29",
      category: "Dessert"
    },
    {
      name: "Organic Garbanzo Beans",
      price: "$0.99",
      category: "Shelf"
    },
    {
      name: "Organic Baby Spinach 6oz",
      price: "$2.29",
      category: "Produce"
    },
    {
      name: "Frozen Strawberries",
      price: "$1.99",
      category: "Frozen"
    },
    {
      name: "Whey Protein Vanilla",
      price: "$11.99",
      category: "Shelf"
    },
    {
      name: "Organic Popping Corn",
      price: "$2.29",
      category: "Snacks"
    },
    {
      name: "Organic Sprouted Blue Corn Chips",
      price: "$2.99",
      category: "Snacks"
    },
    {
      name: "Organic Elote Corn Chips",
      price: "$2.29",
      category: "Snacks"
    },
    {
      name: "Organic Tomato & Roasted Red Pepper Soup",
      price: "$2.99",
      category: "Shelf"
    },
    {
      name: "Smoked Paprika Tin",
      price: "$2.29",
      category: "Spices"
    },
    {
      name: "Sea Salt Crystals Grinder",
      price: "$1.99",
      category: "Spices"
    },
    {
      name: "Organic Vegetable Broth",
      price: "$1.99",
      category: "Shelf"
    },
    {
      name: "Thai Yellow Curry Sauce",
      price: "$2.99",
      category: "Shelf"
    },
    {
      name: "Canned Black Beans",
      price: "$0.79",
      category: "Shelf"
    },
    {
      name: "Organic Tahini",
      price: "$3.69",
      category: "Shelf"
    },
    {
      name: "Burrito Tortillas 12inch",
      price: "$1.99",
      category: "Bakery"
    },
    {
      name: "Tandoori Garlic Naan",
      price: "$3.69",
      category: "Bakery"
    },
    {
      name: "Shredded Mexican Blend Cheese",
      price: "$2.99",
      category: "Deli"
    },
    {
      name: "Organic Shredded Kale",
      price: "$3.49",
      category: "Produce"
    },
    {
      name: "Vegan Soy Chorizo",
      price: "$2.29",
      category: "Deli"
    },
    {
      name: "Butter Quarters Unsalted",
      price: "$2.99",
      category: "Deli"
    },
    {
      name: "Broccoli Florets 12oz",
      price: "$2.99",
      category: "Produce"
    },
    {
      name: "Organic Baked Tofu Teriyaki",
      price: "$3.69",
      category: "Deli"
    },
    {
      name: "Gold Potato Bag 3lb",
      price: "$2.49",
      category: "Produce"
    },
    {
      name: "English Peas Shelled 10oz",
      price: "$3.49",
      category: "Produce"
    },
    {
      name: "Organic Mayonnaise",
      price: "$3.49",
      category: "Deli"
    },
    {
      name: "Black Peppercorns Grinder",
      price: "$2.29",
      category: "Spices"
    },
    {
      name: "Peanut Butter Creamy No Stir",
      price: "$1.99",
      category: "Shelf"
    },
    {
      name: "Multi Floral and Clover Honey",
      price: "$3.49",
      category: "Shelf"
    },
    {
      name: "Baby Beets Steamed 8oz",
      price: "$4.58",
      category: "Produce"
    },
    {
      name: "Almond Beverage Original",
      price: "$2.69",
      category: "Produce"
    },
    {
      name: "Whole Grain Bread",
      price: "$2.99",
      category: "Bakery"
    },
    {
      name: "Lemon Bag 1lb",
      price: "$1.49",
      category: "Produce"
    },
    {
      name: "Parsley Bunch",
      price: "$1.99",
      category: "Produce"
    },
    {
      name: "Bell Peppers Tricolor 3 Pack",
      price: "$4.49",
      category: "Produce"
    },
    {
      name: "Organic Cauliflower Head",
      price: "$3.49",
      category: "Produce"
    },
    {
      name: "Organic Bananas 5 Pack",
      price: "$1.25",
      category: "Produce"
    },
    {
      name: "Organic Garlic 3oz",
      price: "$1.69",
      category: "Produce"
    },
    {
      name: "Organic Carrots Cut & Peeled 16oz",
      price: "$1.49",
      category: "Produce"
    },
    {
      name: "Cilatro Bunch",
      price: "$1.99",
      category: "Produce"
    },
    {
      name: "Fennel 2 Pack",
      price: "$2.99",
      category: "Produce"
    },
    {
      name: "Baby Bella Muschrooms Sliced 10oz",
      price: "$2.29",
      category: "Produce"
    },
    {
      name: "Organic Large Eggs Dozen",
      price: "$3.99",
      category: "Produce"
    },
    {
      name: "Jalapeño Pepper 5 pack",
      price: "$0.99",
      category: "Produce"
    },
    {
      name: "Avocado Bag 4 Count",
      price: "$4.49",
      category: "Produce"
    },
    {
      name: "Sweet Potato",
      price: "$0.79",
      category: "Produce"
    },
    {
      name: "Organic English Cucumber",
      price: "$2.49",
      category: "Produce"
    },
    {
      name: "HotHouse Cucumber",
      price: "$1.49",
      category: "Produce"
    },
    {
      name: "Sweet Onion",
      price: "$0.79",
      category: "Produce"
    },
    {
      name: "White Onion",
      price: "$0.99",
      category: "Produce"
    },
    {
      name: "Lime",
      price: "$0.29",
      category: "Produce"
    },
    {
      name: "Simpler Times Pilsner Cans 6 Pack",
      price: "$3.99",
      category: "Beverages"
    },
    {
      name: "Oat Beverage Original",
      price: "$3.99",
      category: "Produce"
    },
    {
      name: "Pasta Rigatoni",
      price: "$0.99",
      category: "Shelf"
    },
    {
      name: "Organic Tomato Paste",
      price: "$0.79",
      category: "Shelf"
    },
    {
      name: "Everything Pretzel Slims",
      price: "$2.29",
      category: "Snacks"
    },
    {
      name: "Butter Quarters Salted",
      price: "$2.99",
      category: "Deli"
    },
    {
      name: "French Green Beans",
      price: "$2.99",
      category: "Frozen"
    },
    {
      name: "Vanilla Flavored Extract",
      price: "$8.99",
      category: "Shelf"
    },
    {
      name: "Organic Frozen Strawberries",
      price: "$2.69",
      category: "Frozen"
    },
    {
      name: "Frozen Peach Slices",
      price: "$2.99",
      category: "Frozen"
    },
    {
      name: "Hemp Seed Raw Shelled",
      price: "$5.99",
      category: "Shelf"
    },
    {
      name: "La Finca Cab Argentina",
      price: "$4.49",
      category: "Beverages"
    },
    {
      name: "Organic Red Quinoa",
      price: "$3.99",
      category: "Shelf"
    },
    {
      name: "Dukkah Dipping & Crust Blend",
      price: "$2.99",
      category: "Spices"
    },
    {
      name: "Gluten Free Rolled Oats",
      price: "$3.99",
      category: "Shelf"
    },
    {
      name: "Belgian White & Red Endives",
      price: "$2.79",
      category: "Produce"
    },
    {
      name: "Shishito Peppers 6oz",
      price: "$2.29",
      category: "Produce"
    },
    {
      name: "Mediterranean Hummus",
      price: "$3.99",
      category: "Deli"
    },
    {
      name: "Fresh Strawberries 1lb",
      price: "$3.49",
      category: "Produce"
    },
    {
      name: "Misto Alla Griglia",
      price: "$3.99",
      category: "Frozen"
    },
    {
      name: "Organic Buffalo Hummus",
      price: "$2.99",
      category: "Deli"
    },
    {
      name: "Jasmine Rice From Thailand",
      price: "$3.49",
      category: "Shelf"
    },
    {
      name: "Shredded Quattro Formaggia",
      price: "$4.99",
      category: "Deli"
    },
    {
      name: "Medjool Dates 16oz",
      price: "$4.99",
      category: "Produce"
    },
    {
      name: "Maple Syrup",
      price: "$4.49",
      category: "Shelf"
    },
    {
      name: "Organic Pomegranate Seeds 5.3oz",
      price: "$4.99",
      category: "Produce"
    },
    {
      name: "Organic Avocado Bag 4 Count",
      price: "$5.99",
      category: "Produce"
    },
    {
      name: "Russet Potato Bag 5lb",
      price: "$3.99",
      category: "Produce"
    },
    {
      name: "Fresh Dill 1oz",
      price: "$1.79",
      category: "Produce"
    },
    {
      name: "Green Onions 6oz",
      price: "$1.29",
      category: "Produce"
    },
    {
      name: "Red Onion",
      price: "$0.99",
      category: "Produce"
    },
    {
      name: "Lime Back 1lb",
      price: "$1.49",
      category: "Produce"
    },
    {
      name: "Red Lentils Peak",
      price: "$1.69",
      category: "Shelf"
    },
    {
      name: "Zico Coconut Water 1 Liter",
      price: "$3.99",
      category: "Shelf"
    },
    {
      name: "Organic White Quinoa",
      price: "$3.99",
      category: "Shelf"
    },
    {
      name: "Kumato Tomatoes 1lb",
      price: "$3.49",
      category: "Produce"
    },
    {
      name: "Zucchini Squash 3 Pack",
      price: "$1.99",
      category: "Produce"
    },
    {
      name: "Organic Large Eggs Half Dozen",
      price: "$2.49",
      category: "Produce"
    },
    {
      name: "Apple Bag HoneyCrisp 2lb",
      price: "$2.99",
      category: "Produce"
    },
    {
      name: "Designer Protein Vanilla",
      price: "$11.99",
      category: "Shelf"
    },
    {
      name: "Pretzel Pieces Honey Mustard",
      price: "$2.99",
      category: "Snacks"
    },
    {
      name: "Tom's Whitening Toothpaste",
      price: "$4.29",
      category: "Toiletries"
    },
    {
      name: "Soft & Juicy Mandarins",
      price: "$2.99",
      category: "Produce"
    },
    {
      name: "White Corn Totillas 6inch",
      price: "$0.99",
      category: "Bakery"
    },
    {
      name: "4 Hands Brewing Seasonal",
      price: "$9.99",
      category: "Beverages"
    },
    {
      name: "Green Jackruit Canned",
      price: "$1.99",
      category: "Shelf"
    },
    {
      name: "Chili Onion Crunch",
      price: "$3.99",
      category: "Spices"
    },
    {
      name: "Organic Raw Apple Cider Vinegar",
      price: "$2.49",
      category: "Shelf"
    },
    {
      name: "10 Minute Farro",
      price: "$1.79",
      category: "Shelf"
    },
    {
      name: "Rice Orzo Pilaf Mix",
      price: "$1.99",
      category: "Shelf"
    },
    {
      name: "Pita Chips Parm Garlic & Herb",
      price: "$1.99",
      category: "Snacks"
    },
    {
      name: "Chia Seed Organic Black",
      price: "$4.99",
      category: "Shelf"
    },
    {
      name: "Mushrooms White Sliced",
      price: "$2.29",
      category: "Produce"
    },
    {
      name: "Corn On the Cob",
      price: "$0.39",
      category: "Produce"
    },
    {
      name: "Shallots",
      price: "$0.49",
      category: "Produce"
    },
    {
      name: "Kiwi",
      price: "$0.49",
      category: "Produce"
    },
    {
      name: "Frozen Pineapple Tidbits",
      price: "$1.79",
      category: "Frozen"
    },
    {
      name: "Sweet Potato Bag 2lb",
      price: "$1.79",
      category: "Produce"
    },
    {
      name: "Organic Cherry Tomatoes Mix 1lb",
      price: "$4.69",
      category: "Produce"
    },
    {
      name: "Organic Dark Chocolate Truffle Bar",
      price: "$1.99",
      category: "Dessert"
    },
    {
      name: "Mushroom Umami Seasoning",
      price: "$2.99",
      category: "Spices"
    },
    {
      name: "Ridge Cut Potato Chips Sea Salt",
      price: "$2.99",
      category: "Snacks"
    },
    {
      name: "Bath Tissue 6 Double Rolls",
      price: "$3.99",
      category: "Toiletries"
    },
    {
      name: "Grapefruit Candle",
      price: "$3.99",
      category: "Toiletries"
    },
    {
      name: "All For One 3 In One Body Care",
      price: "$7.99",
      category: "Toiletries"
    },
    {
      name: "Raw Almonds Bag",
      price: "$4.99",
      category: "Snacks"
    },
    {
      name: "Chocolate Chunk Cookie Dough",
      price: "$3.49",
      category: "Dessert"
    },
    {
      name: "Mozzarella 8oz",
      price: "$2.99",
      category: "Deli"
    },
    {
      name: "Matcha Green Tea Sticks",
      price: "$6.99",
      category: "Shelf"
    },
    {
      name: "Roasted Coconut Chips",
      price: "$1.99",
      category: "Shelf"
    },
    {
      name: "Navel Orange",
      price: "$0.89",
      category: "Produce"
    },
    {
      name: "Kale 10oz",
      price: "$2.49",
      category: "Produce"
    },
    {
      name: "Vidalia Onions Bag 2lb",
      price: "$2.29",
      category: "Produce"
    },
    {
      name: "Organic Sweet Potato Bag 3lb",
      price: "$4.49",
      category: "Produce"
    },
    {
      name: "Multigrain Crackers",
      price: "$2.29",
      category: "Snacks"
    },
    {
      name: "Sparkling Watermelon Juice 4 Pack",
      price: "$3.99",
      category: "Beverages"
    },
    {
      name: "Lavender Dish Soap",
      price: "$2.99",
      category: "Cleaning"
    },
    {
      name: "Coconut Water With Aloe Juice",
      price: "$2.99",
      category: "Beverages"
    },
    {
      name: "Canned Whole Kernel Corn",
      price: "$0.89",
      category: "Shelf"
    },
    {
      name: "Soyaki Sauce",
      price: "$3.29",
      category: "Shelf"
    },
    {
      name: "Soy Sauce Reduced Sodium",
      price: "$2.99",
      category: "Shelf"
    },
    {
      name: "Vegan Tikka Masala",
      price: "$3.69",
      category: "Frozen"
    },
    {
      name: "Italian Bomba Hot Pepper Sauce",
      price: "$2.99",
      category: "Shelf"
    },
    {
      name: "Organic Peanut Butter Crunchy No Salt Added",
      price: "$3.49",
      category: "Shelf"
    },
    {
      name: "Palak Paneer",
      price: "$2.99",
      category: "Frozen"
    },
    {
      name: "Paneer Tikka Masala",
      price: "$2.99",
      category: "Frozen"
    },
    {
      name: "Arugula Pizza With Tomatoes",
      price: "$3.99",
      category: "Frozen"
    },
    {
      name: "Organic Vegen Tempeh 3 Grain",
      price: "$1.99",
      category: "Deli"
    },
    {
      name: "Pata Raviolo Sweet Corn Basil",
      price: "$3.69",
      category: "Deli"
    },
    {
      name: "Raw Walnut Halves & Pieces",
      price: "$4.99",
      category: "Snacks"
    },
    {
      name: "Baby Beets Steamed 8 oz",
      price: "$2.29",
      category: "Produce"
    },
    {
      name: "Organic Tofu High Protein",
      price: "$2.49",
      category: "Deli"
    },
    {
      name: "Shredded Soy 3 Cheese Blend",
      price: "$3.99",
      category: "Deli"
    },
    {
      name: "Brussels Sprouts 1lb",
      price: "$2.49",
      category: "Produce"
    },
    {
      name: "Vegan Ranch Dip",
      price: "$3.49",
      category: "Deli"
    },
    {
      name: "Vegan Italian Sausage Tofurky",
      price: "$3.49",
      category: "Deli"
    },
    {
      name: "Organic Yellow Peach",
      price: "$0.89",
      category: "Produce"
    }
	])
}