let memoryCost = 0;
let storageCost = 0;
let deliveryCost = 0;

function handelCustomization(id, extraCost) {
  document.getElementById(`${id}`).innerHTML = extraCost;

  if (id == `memoryCost`) {
    memoryCost = extraCost;
  }
  if (id == `storageCost`) {
    storageCost = extraCost;
  }
  if (id == `deliveryCost`) {
    deliveryCost = extraCost;
  }

  document.getElementById(`totalWithoutPromo`).innerHTML =
    1299 + memoryCost + storageCost + deliveryCost;
}
