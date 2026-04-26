import { state } from "./state.js";

export function openSheet() {
  const sheet = document.getElementById("bottomSheet");
  const backdrop = document.getElementById("sheetBackdrop");

  state.sheetOpen = true;

  sheet.classList.add("open");
  backdrop.classList.add("show");

  renderSheet();
}

export function closeSheet() {
  const sheet = document.getElementById("bottomSheet");
  const backdrop = document.getElementById("sheetBackdrop");

  state.sheetOpen = false;

  sheet.classList.remove("open");
  backdrop.classList.remove("show");
}

function renderSheet() {
  const body = document.getElementById("sheetBody");

  if (!state.selectedOrder) {
    body.innerHTML = "لا يوجد بيانات";
    return;
  }

  body.innerHTML = `
    <h3>تفاصيل الطلب</h3>
    <p>#${state.selectedOrder.order_number}</p>
  `;
}