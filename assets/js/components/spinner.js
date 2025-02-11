export const spinner = {
  element: document.createElement("div"),

  getHtml() {
    return `
        <style>
          @keyframes spin {100% { transform: rotate(360deg) }}
        </style>
        <div style="position: fixed; inset: 0; background-color: rgba(0,0,0,0.2); display: flex; justify-content: center; align-items: center;">
          <div style="height: 80px; width: 80px; border-radius: 50%; background-color: transparent; border: 7px white solid; border-top: 7px #293ecc solid; animation: spin 1s linear infinite;"></div>
        </div>`;
  },

  start() {
    this.element.innerHTML = this.getHtml();
    document.body.appendChild(this.element);
  },

  stop() {
    this.element.remove();
  },
};
