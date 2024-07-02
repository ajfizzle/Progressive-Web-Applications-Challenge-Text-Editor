import { openDB } from "idb";

async function initdb() {
  try {
    const dbName = "jate";
    const storeName = "jate";
    const version = 1; // Increment this if you change the database schema and are testing
    console.log(`Opening DB: ${dbName} with version ${version}`);

    const db = await openDB(dbName, version, {
      upgrade(db, oldVersion, newVersion, transaction) {
        console.log(`Upgrading DB from version ${oldVersion} to ${newVersion}`);
        if (!db.objectStoreNames.contains(storeName)) {
          console.log(`Creating object store: ${storeName}`);
          db.createObjectStore(storeName, {
            keyPath: "id",
            autoIncrement: true,
          });
        }
      },
    });

    console.log("DB initialized successfully");
    return db;
  } catch (error) {
    console.error("Error initializing database:", error);
    throw error;
  }
}

let dbPromise = initdb();

export const putDb = async (content) => {
  try {
    const db = await dbPromise;
    const tx = db.transaction("jate", "readwrite");
    const store = tx.objectStore("jate");
    const request = store.put({ value: content });
    const result = await request;
    console.log("Data saved to the database", result);
  } catch (error) {
    console.error("Error adding data to database:", error);
    throw error;
  }
};

export const getDb = async () => {
  try {
    const db = await dbPromise;
    const tx = db.transaction("jate", "readonly");
    const store = tx.objectStore("jate");
    const request = store.get(1);
    const result = await request;
    console.log("Data retrieved from database:", result);
    return result?.value;
  } catch (error) {
    console.error("Error retrieving data from database:", error);
    throw error;
  }
};
