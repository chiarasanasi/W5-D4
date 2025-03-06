document.querySelectorAll(".card-task").forEach((card) => {
  card.addEventListener("animationend", function (event) {
    if (event.animationName === "cascade") {
      card.classList.remove(
        "card-cascade1",
        "card-cascade2",
        "card-cascade3",
        "card-cascade4",
        "card-cascade5",
        "card-cascade6",
        "card-cascade7",
        "card-cascade8"
      )
    }
  })
})
