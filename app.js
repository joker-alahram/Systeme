import { state } from "./state.js";
import { renderOrders } from "./ui.js";
import { bindEvents } from "./events.js";

function init() {

  // بيانات مؤقتة (للاختبار فقط)
  state.orders = [
    {
      id: 1,
      order_number: "INV-1001",
      status: "pending",
      customer_name: "أحمد",
      total_amount: 5000
    },
    {
      id: 2,
      order_number: "INV-1002",
      status: "processing",
      customer_name: "محمد",
      total_amount: 8200
    }
  ];

  renderOrders();
  bindEvents();
}

init();