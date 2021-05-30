var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
 
 
 const shoppingList = [
     {
         item: "Milk",
         price: 4.99,
         id: 1,
     },    
     {
         item: "Eggs",
         price: 1.99,
         dateCreated: "2021-5-30 12:15:45",
         id: 2
     },
     {
         item: "Pizza rolls",
         price: 2.99,
         id: 3,
         dateCreated: "2021-5-30 12:15:45"
     },  
     {
         item: "Fish",
         price: 4.69,
         id: 4,
         dateCreated: "2021-5-30 12:15:45"
     },  
     {
         item: "Oranges",
         price: 2.99,
         id: 5,
         dateCreated: "2021-5-30 12:15:45"
     },  
     {
         
         item: "Sandwich buns",
         price:  2.49,
         id: 6,
         dateCreated: "2021-5-30 12:15:45"
     },  
     {
         
         item: "Condiments",
         price: 2.49,
         id: 7,
         dateCreated: "2021-5-30 12:15:45"
     }
     ]

     const addToShoppingList = (newItem) => {
         const lastIndex = shoppingList.length -1
         const currentLastItem = shoppingList[lastIndex]
         const maxId = currentLastItem.id
         const idForNewItem = maxId + 1

        newItem.id = idForNewItem
        newItem.dateCreated = dateTime
        shoppingList.push(newItem)
     }

     const candy = {
         item: "Candy",
         price: 1.99
     }
      const iceCream = {
          name: "BlueBell",
          price: 6.99
      }
      const pizza = {
          name: "Pizza",
          price: 5.99
      }
      const steak = {
          name: "Rib eye",
          price: 13.99
      }
      const crab = {
          name: "Crab",
          price: 24.99
      }

      addToShoppingList(candy)
      addToShoppingList(iceCream)
      addToShoppingList(pizza)
      addToShoppingList(steak)
      addToShoppingList(crab)

      console.log(shoppingList)


      for (item of shoppingList) {
          if (item.price >= 8) {
              console.log(`You have an expensive item on your list. It's the ${item.name} and it's price is ${item.price}.`)
          }
      }