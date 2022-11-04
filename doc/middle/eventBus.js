import "./styles.css";
const btn = document.querySelector(".button");
const title = document.querySelector(".title");

class EventBus {
  constructor() {
    this.listeners = {};
  }

  on(event, callback) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event, callback) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter(
      (listener) => listener !== callback
    );
  }

  emit(event, ...args) {
    if (!this.listeners[event]) {
      throw new Event(`Нет события: ${event}`);
    }

    this.listeners[event].forEach((listener) => {
      listener(...args);
    });
  }
}

const eventBus = new EventBus();

const callback = () => {
  title.textContent = "clicknyli";
};

eventBus.on("click", callback);

btn.addEventListener("click", () => {
  eventBus.emit("click");
});


// eventBus.off("myEvent", callback); // удалятся все три копии обработчика
