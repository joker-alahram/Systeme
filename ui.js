import { state } from "./state.js";

export function renderOrders() {
  const container = document.getElementById("ordersContainer");

  container.innerHTML = state.orders.map(order => `
    <div class="order-card" data-id="${order.id}">
      <div class="order-head">
        <strong>#${order.order_number}</strong>
        <span class="badge">${order.status}</span>
      </div>

      <div class="order-body">
        <p>${order.customer_name || "—"}</p>
        <strong>${order.total_amount} جنيه</strong>
      </div>

      <button class="open-btn" data-action="open-order" data-id="${order.id}">
        عرض التفاصيل
      </button>
    </div>
  `).join("");
}