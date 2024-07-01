import { openDB } from "idb";

// Initialize the database
const initdb = async () => {
  try {
    const db = await openDB("jate", 1, {
      upgrade(db) {
        if (!db.objectStoreNames.contains("jate")) {
          db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
          console.log("jate database created");
        } else {
          console.log("jate database already exists");
        }
      },
    });
    return db;
  } catch (error) {
    console.error("Error initializing database:", error);
    throw error; // Rethrow the error to propagate it
  }
};

// Function to add content to the database
export const putDb = async (content) => {
  try {
    const db = await openDB("jate", 1);
    const tx = db.transaction("jate", "readwrite");
    const store = tx.objectStore("jate");
    const request = store.put({ value: content }); // Ensure correct structure with an appropriate id
    const result = await request;
    console.log("🚀 - data saved to the database", result);
  } catch (error) {
    console.error("Error adding data to database:", error);
    throw error; // Rethrow the error to propagate it
  }
};

// Function to retrieve content from the database
export const getDb = async () => {
  try {
    const db = await openDB("jate", 1);
    const tx = db.transaction("jate", "readonly");
    const store = tx.objectStore("jate");
    const request = store.get(1); // Ensure correct retrieval by primary key
    const result = await request;
    console.log("result.value", result);
    return result?.value;
  } catch (error) {
    console.error("Error retrieving data from database:", error);
    throw error; // Rethrow the error to propagate it
  }
};

// Initialize the database on application startup
initdb()
  .then(() => {
    console.log("Database initialized successfully");
  })
  .catch((error) => {
    console.error("Failed to initialize database:", error);
  });
