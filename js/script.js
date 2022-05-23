let data;
fetch("./js/data.json")
  .then((res) => res.json())
  .catch((err) => console.log(err))
  .then((json) => {
    data = json;

    let largeset = data.reduce((a, b) => (a.amount > b.amount ? a : b));

    const dataChart = document.querySelector("[data-chart]");

    data.forEach((el) => {
      let newEl = document.createElement("div");
      let chartProgress = document.createElement("div");
      let chartday = document.createElement("p");

      chartday.textContent = el.day;

      chartProgress.setAttribute("title", `$ ${el.amount}`);
      chartProgress.style.height = `${el.amount * 2}px`;

      newEl.appendChild(chartProgress);
      newEl.appendChild(chartday);
      dataChart.appendChild(newEl);
      if (el.amount === largeset.amount) {
        chartProgress.classList = " w-2-rem bg-cyan cursor-pointer rounded-sm";
      } else {
        chartProgress.classList =
          " w-2-rem bg-soft-red cursor-pointer rounded-sm";
      }
      chartday.className = " text-sm opacity-75";
      newEl.className =
        "h-10-rem hover-effect flex flex-col item-center justify-end chart-body";
    });
  });
