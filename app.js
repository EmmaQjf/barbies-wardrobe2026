console.log('App is connected');

// Protagonist of our application
const barbie = {
    name: 'Barbie',
    wardrobe: [],
    wallet: 0
}

class Career {
    constructor(name, description, income, id){
        this.name = name;
        this.description = description;
        this.income = income;
        this.id = id;
    }
}

const careerDescriptions = [
    {
        name: 'lawyer',
        description: 'works as an attorney of a high end law firm'
    },
    {
        name: 'software-engineer',
        description: 'solves software related problems and build application architecture.'
    },
    {
        name: 'doctor',
        description: 'helps people with their boo boos'
    },
    {
        name: 'influencer',
        description: 'talk about stuff on social media and people say wow and i get paid'
    }
]
const careerIncomes = [
 8501,
 18501,
 2850,
 3850,
 4850,
 5850,
 6850
];
const careers = [];


const randomization = (limit) => {
 return Math.floor(Math.random() * limit)
}


for (let i = 10 ; i > 0; i--){
 const job = careerDescriptions[randomization(careerDescriptions.length)]
 const income = careerIncomes[randomization(careerIncomes.length)];
 careers.push(new Career(job.name, job.description, income, `${job.name}-${income}` ))
}


barbie.career = careers[randomization(careers.length)]

class Clothing {
    constructor(name, designer, color, type, size, price){
        this.name = name;
        this.designer = designer;
        this.color = color;
        this.type = type;
        this.size = size;
        this.price = price;
    }
}

const birkin = new Clothing('Birkin Bag', 'Hermes', 'purple', 'bag', 'lg', 15470 )



barbie.properties = [];

// Game Screen

barbie.el = document.getElementById('barbie');

barbie.render = () => {
    barbie.el.innerHTML = `
    <h1>${barbie.name} Status</h1>
    <h3>${barbie.name} works as a ${barbie.career.name} </h3>
    <h3> Each week ${barbie.name} takes home $${barbie.career.income}</h3>
    <h3> Currently ${barbie.name} has $${barbie.wallet} in their bank account</h3>
    <div> <h2>Wardrobe Contains: </h2> 
    <ul>${
        barbie.wardrobe.map((item => {
            return `<li>
            ${barbie.name} has a ${item.name} 
            ${item.name} made by ${item.designer}
            that is worth ${item.price} in size 
            ${item.size} 
            </li>`
        })).join('')
        // innerHTML expects:ONE string 
// wardrobe array
//    ↓ map()
//    array of <li> strings
//       ↓ join('')
//    single HTML string
//       ↓ innerHTML
//    DOM updates
   
    }</ul>
    </div>
    <div> <h2>Properties Includes:</h2> 
    <ul>${
        barbie.properties.map((item => {
            return `<li>
            ${barbie.name} has a ${item.color} 
            ${item.name} in ${item.location}
            that is worth ${item.price} 
            </li>`
        })).join('') 
    }</ul>
    </div>
`;}

barbie.render()



const birkinButton = document.getElementById('birkin');

birkinButton.addEventListener('click', ()=>{
    if(barbie.wallet >= birkin.price){
        barbie.wardrobe.push(birkin);
        barbie.wallet -= birkin.price;
        barbie.render();
        // WE updated the wardrobe that belongs to barbie so the object was changed
    // the object control the information that is visible to us on the screen
    // I want to re-render the content so that i can see the updated information in the browser
    } else {
        alert('Stop trippin you know you aint got it like that');
    }

})

const workButton = document.getElementById('work');

workButton.addEventListener('click', ()=>{
    barbie.wallet += barbie.career.income; // WE updated the wllet that belongs to barbie so the object was changed
    // the object control the information that is visible to us on the screen
    // I want to re-render the content so that i can see the updated information in the browser
    barbie.render();
})

// shoes 
class Shoes{
    constructor(name, designer, color, type, size, price){
        this.name = name;
        this.designer = designer;
        this.color = color;
        this.type = type;
        this.size = size;
        this.price = price;
    }
}

const redBottom = new Shoes('Red-Bottom', 'Hermes', 'white', 'shoes', '37', 11111 )
let redBottoms = document.getElementById("red-bottoms")
redBottoms.addEventListener("click",()=>{
    if(barbie.wallet >= redBottom.price){
        barbie.money -= redBottom.price;
        barbie.wardrobe.push(redBottom);
        barbie.render();
    }else {
        alert('Stop trippin you know you aint got it like that');
    }

})

redBottoms.addEventListener("mouseenter", (event) => {
    event.target.style.backgroundColor = "red"
})


class House {
    constructor(type, location, price, color) {
      this.type = type;        // mansion, apartment, beach house
      this.location = location;
      this.price = price;
      this.color = color;
    }
  }


const mansion = new House("mansion", "NYC", 50000,"white")

let properties = document.getElementById("properties")
properties.addEventListener("click",()=>{
    if(barbie.wallet >= mansion.price){
        barbie.money -= mansion.price;
        barbie.career.income += 500;
        barbie.properties.push(mansion);
        barbie.render();
    }else {
        alert('Stop trippin you know you aint got it like that');
    }

})


const sellBtn = document.getElementById("sellBtn")

sellBtn.addEventListener("click",()=>{
    let number = randomization(barbie.wardrobe.length)
    if(barbie.wardrobe.length > 0){
        // spice return an array
        let soldItem = barbie.wardrobe.splice(number,1)[0]
        console.log(soldItem)
        console.log(barbie.wardrobe)
        let price = soldItem.price * Math.floor(Math.random()*1.3) + soldItem.price * 0.7
    barbie.wallet += price
    }   
    barbie.render();
})

//Career Change Feature:
const careerLists = document.createElement('div');
careerLists.innerHTML= `
<label for="career">Choose a career:</label>
<select name="careers" id="careers">
${careers.map(item => {
    return `<option>${item.name}</option>`}).join("")}
  
</select>
`

const barbieBox = document.getElementById("barbie")
barbieBox.after(careerLists)
const careerSelect = document.getElementById("careers");

// let allOptions = document.querySelectorAll("option")
// for (let i = 0; i < allOptions.length; i++){
//     allOptions[i].addEventListener("change", (event)=>{
//         barbie.career = careers[i];
//         barbie.render()
//         console.log(allOptions[i].textContent)
//     })
// }

// Only the <select> element fires "change" when the user picks an option. 
careerSelect.addEventListener("change", (event) => {
    // event.target.value gives the selected option text
    const selectedCareerName = event.target.value;
    const selectedIndex = event.target.selectedIndex;

    // Find the career object that matches the selected name
    // barbie.career = careers.find(c => c.name === selectedCareerName);
    barbie.career = careers[selectedIndex]
    barbie.render();
    console.log(`Selected career: ${selectedCareerName}`);
});


// const careerLists = careers.map(item => item.name)
// let label = document.createElement('label')

// careerLists.appendChild(label)
