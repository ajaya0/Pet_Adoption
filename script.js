const petData = [
    {
        name: "Buddy",
        type: "Dog",
        age: 3,
        image: "dog1.jpeg",
        Description:"It is an good dog!"
    },
    {
        name: "Bulldog",
        type: "Dog",
        age: 2,
        image: "bulldog.jpg",
        Description:"It is an good dog!"
    },
    {
        name: "Border Collie",
        type: "Dog",
        age: 3,
        image: "border collie.jpg",
        Description:"It is an good dog!"
    },
    {
        name: "Bullterrior",
        type: "Dog",
        age: 2,
        image: "bullteririor.jpg",
        Description:"It is an good dog!"
    },
    {
        name: "Poodle",
        type: "Dog",
        age: 3,
        image: "poodle.jpg",
        Description:"It is an good dog!"
    },
    {
        name: "Pomirian",
        type: "Dog",
        age: 2,
        image: "pomirian.jpg",
        Description:"It is an good dog!"
    },
    {
        name: "Pugdog",
        type: "Dog",
        age: 3,
        image: "pugdog.jpg",
        Description:"It is an good dog!"
    },
    {
        name: "Shih Tzu",
        type: "Dog",
        age: 2,
        image: "shihtzu.jpg",
        Description:"It is an good dog!"
    },

    
];
const petList = document.getElementById("pet-list");
function displayPets() {
    petList.innerHTML = "";

    petData.forEach((pet, index) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${pet.image}" alt="${pet.name}">
            <h2>${pet.name}</h2>
            <p><strong>Type:</strong> ${pet.type}</p>
            <p><strong>Age:</strong> ${pet.age} years</p>
            <p><strong>Description:</strong>${pet.Description}</p>
            <button onclick="adoptPet(${index})">Adopt</button>
        `;
        petList.appendChild(card);
    });
}
function adoptPet(index) {
    alert(`You have adopted ${petData[index].name}!`);
    petData.splice(index, 1);
    displayPets();
}
displayPets();
