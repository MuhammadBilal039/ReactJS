export default function FoodMenu() {
  const foodItems = [
    {
      title: "Cheese Burger",
      description:
        "Juicy grilled beef patty with melted cheese, lettuce, and tomato.",
      quantity: 7,
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
    },
    {
      title: "Pepperoni Pizza",
      description:
        "Classic pepperoni pizza topped with mozzarella and tomato sauce.",
      quantity: 12,
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800",
    },
    {
      title: "Chicken Biryani",
      description:
        "Traditional spicy rice dish cooked with tender chicken and herbs.",
      quantity: 5,
      image:
        "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=800",
    },
    {
      title: "French Fries",
      description: "Crispy golden fries served with ketchup and mayo dip.",
      quantity: 15,
      image:
        "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800",
    },
    {
      title: "Grilled Sandwich",
      description: "Toasted sandwich filled with vegetables and melted cheese.",
      quantity: 9,
      image:
        "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800",
    },
    {
      title: "Chocolate Cake",
      description: "Rich and moist chocolate cake topped with creamy frosting.",
      quantity: 4,
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800",
    },
    {
      title: "Pasta Alfredo",
      description: "Creamy Alfredo pasta mixed with herbs and parmesan cheese.",
      quantity: 26,
      image:
        "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=800",
    },
    {
      title: "Fried Chicken",
      description: "Crunchy fried chicken pieces with flavorful seasoning.",
      quantity: 0,
      image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=800",
    },
    {
      title: "Ice Cream Sundae",
      description: "Vanilla ice cream topped with chocolate syrup and nuts.",
      quantity: 8,
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800",
    },
    {
      title: "Caesar Salad",
      description:
        "Fresh lettuce salad with croutons, parmesan, and Caesar dressing.",
      quantity: 0,
      image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800",
    },
  ];

  return (
    <ul>
      {foodItems.map((foodItem) => {
        return (
          <li>
            <div id="imgArea">
              <img src={foodItem.image} alt="" />
            </div>
            <div>
              <h4>{foodItem.title}</h4>
              <p>{foodItem.description}</p>
              <p>
                {foodItem.quantity == 0
                  ? "Sold Out"
                  : `Quantity: ${foodItem.quantity}`}
                {foodItem.quantity > 20 ? " Buy 1 Get 1 Free" : ""}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
