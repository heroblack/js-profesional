const BASE_URL = "http://localhost:3001";

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const randomNumber = (min = 0, max = 1) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const simulateNetworkLatency = (min = 30, max = 1500) => {
  console.log(randomNumber(min, max));
  delay(randomNumber(min, max));
};

async function callApi(endpoint, options = {}) {
  await simulateNetworkLatency(5000, 10000);

  options.headers = {
    "Content-Type": "application/json",
    Accept: "application/json"
  };

  const url = `${BASE_URL}${endpoint}`;
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

const api = {
  badges: {
    list() {
      //return [];
      return callApi("/badges"); //datos
      //throw new Error("Error en el Servidor");
    },

    create(badge) {
      //throw new Error("500: Error del servidor");
      return callApi("/badges", {
        method: "POST",
        body: JSON.stringify(badge)
      });
    },

    read(badgeId) {
      return callApi(`/badges/${badgeId}`);
    },

    update(badgeId, updates) {
      return callApi(`/badges/${badgeId}`, {
        method: "PUT",
        body: JSON.stringify(updates)
      });
    },
    // Lo hubiera llamado `delete`, pero `delete` es un keyword en JavaScript asi que no es buena idea :P
    remove(badgeId) {
      return callApi(`/badges/${badgeId}`, {
        method: "DELETE"
      });
    }
  }
};

export default api;
