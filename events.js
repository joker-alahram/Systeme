import { state } from "./state.js";
import { openSheet } from "./sheet.js";

export function bindEvents() {
  document.addEventListener("click", (e) => {

    const btn = e.target.closest("[data-action]");
    if (!btn) return;

    const action = btn.dataset.action;
    const id = btn.dataset.id;

    if (action === "open-order") {
      const order = state.orders.find(o => o.id == id);
      if (!order) return;

      state.selectedOrder = order;
      openSheet();
    }

  });
}