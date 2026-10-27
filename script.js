const userProfile = {
    name: "Aktilek",
    birthYear: 2007,
    isDeveloper: true,
    hobbies: ["Football", "Games", "Music"]
};

function showProfile() {
    const currentYear = new Date().getFullYear();
    const age = currentYear - userProfile.birthYear;
    const months = age * 12;
    const hobbiesCount = userProfile.hobbies.length;

    document.getElementById("showName").textContent = userProfile.name;
    document.getElementById("showYear").textContent = userProfile.birthYear;
    document.getElementById("showDev").textContent = userProfile.isDeveloper;
    document.getElementById("showHobbies").textContent = userProfile.hobbies.join(", ");
    document.getElementById("showAge").textContent = age;
    document.getElementById("showMonths").textContent = months;
    document.getElementById("showCount").textContent = hobbiesCount;

    console.log(userProfile);
    console.log("Age: " + age);
    console.log("Months old: " + months);
    console.log("Hobbies count: " + hobbiesCount);
}

showProfile();

const form = document.getElementById("profileForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    userProfile.name = document.getElementById("username").value;
    userProfile.birthYear = Number(document.getElementById("birthYear").value);

    showProfile();
    document.getElementById("part1").style.backgroundColor = "#e6ffe6";
});

const list = document.getElementById("hobbyList");
const newItem = document.getElementById("newItem");

document.getElementById("addBtn").addEventListener("click", function () {
    if (newItem.value === "") {
        return;
    }

    const li = document.createElement("li");
    li.textContent = newItem.value;
    list.appendChild(li);

    userProfile.hobbies.push(newItem.value);
    newItem.value = "";
    showProfile();
});

document.getElementById("removeBtn").addEventListener("click", function () {
    if (list.lastElementChild) {
        list.lastElementChild.remove();
        userProfile.hobbies.pop();
        showProfile();
    }
});
