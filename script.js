const faces = [
  "૮ ˶ᵔ ᵕ ᵔ˶ ა",
  "૮₍ ˶ᵔ ᵕ ᵔ˶ ₎ა",
  "₍ᐢ. .ᐢ₎",
  "૮ ˶´ ᵕˋ ˶ა",
  "꒰՞ ᵔ ᵕ ᵔ՞꒱"
];

const moods = [
  "행복해 ♡",
  "조금 졸려",
  "신나!",
  "두근두근",
  "평온해",
  "기분 좋아 ♡"
];

const notes = [
  "오늘도 작은 행복 하나를 발견했어요 ♡",
  "별것 아닌 순간이 오래 기억될 때가 있어요.",
  "천천히 가도 괜찮아요. 멜루피는 여기 있어요.",
  "오늘의 마음도 예쁜 색으로 남겨두어요.",
  "조금 지쳤다면 여기서 잠시 쉬어가요.",
  "작은 것들이 모여 하나의 추억이 돼요."
];

function changeFace() {
  const face = document.getElementById("face");
  const random = Math.floor(Math.random() * faces.length);
  face.textContent = faces[random];

  face.animate(
    [
      { transform: "scale(.7) rotate(-8deg)" },
      { transform: "scale(1.2) rotate(8deg)" },
      { transform: "scale(1)" }
    ],
    {
      duration: 400,
      easing: "ease-out"
    }
  );
}

function changeMood() {
  const mood = document.getElementById("mood");
  const random = Math.floor(Math.random() * moods.length);

  mood.textContent = moods[random];

  mood.animate(
    [
      { transform: "scale(.8)" },
      { transform: "scale(1.15)" },
      { transform: "scale(1)" }
    ],
    350
  );
}

function newNote() {
  const text = document.getElementById("noteText");
  const random = Math.floor(Math.random() * notes.length);

  text.style.opacity = "0";

  setTimeout(() => {
    text.innerHTML = notes[random];
    text.style.opacity = "1";
  }, 180);
}

function pop(element) {
  element.animate(
    [
      { transform: "scale(1) rotate(0)" },
      { transform: "scale(1.5) rotate(15deg)" },
      { transform: "scale(.8) rotate(-10deg)" },
      { transform: "scale(1) rotate(0)" }
    ],
    {
      duration: 500,
      easing: "ease-out"
    }
  );

  const symbols = ["✦", "♡", "✧", "☆", "♥"];

  for (let i = 0; i < 5; i++) {
    const spark = document.createElement("span");

    spark.textContent =
      symbols[Math.floor(Math.random() * symbols.length)];

    spark.style.position = "fixed";
    spark.style.left = element.getBoundingClientRect().left + "px";
    spark.style.top = element.getBoundingClientRect().top + "px";
    spark.style.zIndex = "50";
    spark.style.color = "#ff75aa";
    spark.style.fontSize = "22px";
    spark.style.pointerEvents = "none";

    document.body.appendChild(spark);

    const x = (Math.random() - .5) * 130;
    const y = (Math.random() - .5) * 130;

    spark.animate(
      [
        { transform: "translate(0,0)", opacity: 1 },
        {
          transform: `translate(${x}px,${y}px)`,
          opacity: 0
        }
      ],
      {
        duration: 700,
        easing: "ease-out"
      }
    ).onfinish = () => spark.remove();
  }
}

function showBox(type) {
  const popup = document.getElementById("popup");
  const title = document.getElementById("popupTitle");
  const text = document.getElementById("popupText");
  const icon = document.getElementById("popupIcon");

  if (type === "secret") {
    icon.textContent = "💌";
    title.textContent = "비밀 편지";
    text.textContent =
      "멜루피에 찾아와줘서 고마워요. 오늘의 작은 순간도 소중히 간직해요 ♡";
  }

  if (type === "fortune") {
    icon.textContent = "✦";
    title.textContent = "오늘의 운세";
    text.textContent =
      "오늘은 예상하지 못한 작은 기쁨을 발견할 운이에요. 주변을 천천히 살펴봐요!";
  }

  if (type === "memory") {
    icon.textContent = "🧸";
    title.textContent = "작은 추억";
    text.textContent =
      "언젠가 이곳을 다시 찾아왔을 때, 오늘의 기분을 기억할 수 있기를.";
  }

  popup.classList.add("show");
}

function closeBox() {
  document.getElementById("popup").classList.remove("show");
}

function openLetter() {
  showBox("secret");
}

document.getElementById("popup").addEventListener("click", function(e) {
  if (e.target === this) {
    closeBox();
  }
});
if (type === "about") {
  icon.textContent = "🎀";
  title.textContent = "ABOUT ME";
  text.textContent =
    "Welcome to my tiny little world. I collect cute things, little memories, pretty colors and moments that make ordinary days feel special.";
}

if (type === "favorites") {
  icon.textContent = "⭐";
  title.textContent = "FAVORITES";
  text.textContent =
    "Ribbons, stickers, old cards, soft colors, tiny toys, cute characters and anything that looks like it belongs in a little treasure box.";
}

if (type === "dream") {
  icon.textContent = "☁";
  title.textContent = "DREAM NOTE";
  text.textContent =
    "Sometimes I just want a quiet room, pretty lights, a little music and enough time to make something beautiful.";
}

if (type === "message") {
  icon.textContent = "💗";
  title.textContent = "FOR YOU";
  text.textContent =
    "Thank you for stopping by. I hope you find something here that makes you smile, even for just a little while.";
}