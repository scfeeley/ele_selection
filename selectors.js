const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements
    // Your code here
    let seed = document.querySelectorAll(".seed");
    //console.log(seed);

    // 2. Get all seedless fruit elements
    // Your code here
    let seedless = document.querySelectorAll(".seedless");
    //console.log(seedless);

    // 3. Get first seedless fruit element
    // Your code here
    let fseedless = document.querySelector(".seedless");
    //console.log(fseedless);

    /* Section 2 */
    // 4. Get inner span with text "you"
    // Your code here
    let spanYou = document.getElementById("wrapper").children[0].children[0].innerText
    //console.log(spanYou);

    // 5. Get all children of element "wrapper"
    // Your code here
    //Note this is an HTML collection
    let kids = document.getElementById("wrapper").children
    //console.log(kids)

    // 6. Get all odd number list items in the list
    // Your code here
    //Note this is a node list 
    let odd = document.querySelectorAll(".odd");
    //console.log(odd);

    // 7. Get all even number list items in the list
    let even = document.querySelectorAll("ol>li:not(.odd)");
    //console.log(even)

    /* Section 3 */
    // 8. Get all tech companies without a class name
    let tech = document.querySelectorAll("p>a:not([class]");
    //console.log(tech[0])

    // 9. Get "Amazon" list element
    // Your code here
    let amazon = document.querySelector("a.shopping");
    //console.log(amazon);

    // 10. Get all unicorn list elements (not the image element)
    // Your code here
    let lis = document.querySelectorAll("#three>ul>li");
    //console.log(lis);
}

window.onload = select;