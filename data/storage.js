/**
 * The token used for remote storage authentication.
 * @type {string}
 */
// const STORAGE_TOKEN = "CA66J9VJZ010MHTW4IAFVKAPKFNFFP7F129MWRPE";
const BASE_URL =
  "https://tipspiel-ce49b-default-rtdb.europe-west1.firebasedatabase.app/";

/**
 * The URL for remote storage.
 * @type {string}
 */
// const STORAGE_URL = "https://remote-storage.developerakademie.org/item";

// /**
//  * Sets a key-value pair in remote storage.
//  *
//  * This function sends a POST request to the remote storage URL with the provided key and value.
//  *
//  * @param {string} key - The key for the data.
//  * @param {any} value - The value to be stored.
//  * @returns {Promise<Object>} - A Promise that resolves to the response data.
//  */
// async function setItem(key, value) {
//   const payload = { key, value, token: STORAGE_TOKEN };
//   return fetch(STORAGE_URL, {
//     method: "POST",
//     body: JSON.stringify(payload),
//   }).then((res) => res.json());
// }

//update
async function setItem(path, data) {
  let response = await fetch(BASE_URL + path + ".json", {
    method: "PUT",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return (responseToJson = await response.json());
}

/**
 * Retrieves an item from the storage based on the given key.
 *
 * @param {string} key - The key of the item to retrieve.
 * @return {Promise<any>} A promise that resolves to the value of the retrieved item.
 */
// async function getItem(key) {
//   const url = `${STORAGE_URL}?key=${key}&token=${STORAGE_TOKEN}`;
//   return fetch(url)
//     .then((res) => res.json())
//     .then((res) => {
//       if (res.data) {
//         return res.data.value;
//       }
//       throw `Could not find data with key "${key}".`;
//     });
// }

//abfragen
async function getItem(path) {
  let response = await fetch(BASE_URL + path + ".json", {
    method: "GET",
    header: {
      "Content-Type": "application/json",
    },
  });
  return (responseToJson = await response.json());
}

let users = [];
let user;
let oldUsers = [
    {
      name: "Guest",
      mail: "guest@guest.de",
      nameTag: "G",
      password: "test123",
    },
    {
      name: "Junus Ergin",
      mail: "junus@test.de",
      nameTag: "JE",
      password: "test",
    },
    {
      name: "Anton Mayer",
      mail: "antonmayer@test.de",
      nameTag: "AM",
      password: "test123",
    },
    {
      name: "Anton Mayer",
      mail: "antom@gmail.com",
      nameTag: "AM",
      password: "test123",
    },
    {
      name: "Sofia Muller",
      mail: "sofiam@gmail.com",
      nameTag: "SM",
      password: "mypassword123",
    },
    {
      name: "Anja Schulz",
      mail: "schulz@hotmail.com",
      nameTag: "AS",
      password: "mypassword123",
    },
    {
      name: "Peter Pan",
      mail: "pp@nox.de",
      nameTag: "PP",
      password: "wendy",
    },
    {
      name: "Mina  M  Zarkesh",
      mail: "mina@email.de",
      nameTag: "MZ",
      password: "hallo123",
    },
  ];