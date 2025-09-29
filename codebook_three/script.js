// Practice exercise one

    // array shopping list
function arrayBasics() {
    let shoppingList =["Bag", "Toothpaste", "Powder", "Lipstick", "Shoe"];
    console.log("Shopping list:", shoppingList);

        // add new item to the end of the list
    let addItem = shoppingList.push("Pillow");
    console.log("Added items:", addItem);
    console.log("New shopping list:", shoppingList);

    console.log("")

        //remove first item 
    let removeItem = shoppingList.shift();
    console.log("Removed item:", removeItem);
    console.log("New shopping list", shoppingList);

    console.log("");

        //display the total number of items
    console.log("Total number of shopping items:", shoppingList.length);
    console.log("");

        //loop through the list and print each items with its positions

        // 
    console.log("=====Shopping list items=====");

    function formatList(list) {
        for (let i= 0; i < shoppingList.length; i++) {
            console.log(`${i + 1}. ${shoppingList[i]}`);
        }
    }

    formatList()
}


    

// Practice Exercise 2: Student Grades Analyzer  
// Requirements:  

// 1. Store grades in an array 
function studentGradesAnalyzer() {
    let grades = [95, 55, 68, 79, 33, 53, 87, 46, 25, 49];
    console.log("Grades:", grades);
    console.log("");

    // 2. Write a function `getAverage(grades)` to calculate average grade \
    function getAverage() {
        let total = 0;
    for (let grade of grades) {
        console.log("ADDING GRADES: ", grade);
        total += grade;
    }

    let averageGrades = total / grades.length;
    console.log(`Summary:Total grades = ${total}; Average grades = ${averageGrades}`);
    }

    getAverage();
    

    // 3. Write a function `getHighest(grades)` to find the highest grade


    // 4. Write a function `getLowest(grades)` to find the lowest grade
    // 5. Use loops where necessary to process the array


    
    // **Challenge:**
    // Create a function `getPassRate(grades)` that:
    // - Counts how many students scored **50 or above** (passing)
    
    // - Divides that number by the total number of students
    // - Returns the **percentage of students who passed**
}