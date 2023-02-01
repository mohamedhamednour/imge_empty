
function getRandomColor() {
    const options = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += options[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  

let getAvatar = (name, avatarSrc) => {
  const avatardiv = document.createElement("div");
  avatardiv.className = "divimg";
  avatardiv.style.background = getRandomColor()
  if (avatarSrc) {
    const avatarElm = document.createElement("img");
    avatarElm.className = "avatar";
    avatarElm.src = avatarSrc;

    avatardiv.append(avatarElm);

  } else {
    const initials = name
      .split(" ")
      .map((n) => n[0].toUpperCase())
      .join("");
      const spans = document.createElement("span");
      spans.className = 'spanimg'

      spans.innerText = initials
      avatardiv.append(spans)
    console.log(initials);
  }
  return avatardiv;

};

const users = [
  {
    name: "Helen Coppola",
    avatar: "https://www.w3schools.com/w3images/avatar5.png",
  },
  {
    name: "Nick Robins",
    avatar: "",
  },
  {
    name: "Chris Harris",
    avatar: "",
  },
  {
    name: "Sandra Osborne",
    avatar: "",
  },
  {
    name: "Tim Johnson",
    avatar: "https://www.w3schools.com/bootstrap4/img_avatar1.png",
  },
  {
    name: "Antonette Martinez",
    avatar: "https://www.w3schools.com/w3images/avatar5.png",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const appElm = document.getElementById("app");
  const listUserCards = document.createElement("div");
  users.forEach((user) => {
    const userCardElm = document.createElement("div");
    userCardElm.className = "userCard";
    userCardElm.innerText = user.name;
    userCardElm.prepend(getAvatar(user.name, user.avatar));
    listUserCards.append(userCardElm);
  });
  appElm.append(listUserCards);
});
