//! Promise
// states
//1. pending
//2. fulfilled
//3. rejected

console.log("start");

// const promise = new Promise((resolve, reject) => {
//   // async
//   setTimeout(() => {
//     // resolve({ message: "success  response" });
//     reject({ message: "Error response" });
//   }, 2000);
// });

// console.log(promise);
//! promise handling
// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("finally");
//   });

const promiseFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve({ message: "success  response" });
      reject({ message: "Error response" });
    }, 2000);
  });
};

// const promise = promiseFunction()
// promise.then()
// promiseFunction()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const getUser = () => {
  return new Promise((resolve, reject) => {
    let error = false;
    setTimeout(() => {
      if (error) {
        reject({ message: "user fetched failed" });
      } else {
        resolve({
          _id: "1",
          name: "john",
          email: "johndoe@gmail.com",
        });
      }
    }, 2000);
  });
};

// get posts
const getPost = (userId) => {
  return new Promise((resolve, reject) => {
    let error = true;
    setTimeout(() => {
      if (error) {
        reject({ message: "Get post failed" });
      } else {
        resolve([{ userId, title: "abc", _id: 1 }]);
      }
    }, 1000);
  });
};

const getComments = (postId) => {
  return new Promise((resolve, reject) => {
    let error = false;
    setTimeout(() => {
      if (error) {
        reject({ message: "get comments failed" });
      } else {
        resolve([
          { postId, content: "comment 1", userId: 1, _id: 1 },
          { postId, content: "comment 1", userId: 1, _id: 2 },
        ]);
      }
    }, 3000);
  });
};

// promise chaining
getUser()
  .then((user) => {
    console.log(user);
    return getPost(user._id);
  })
  .then((posts) => {
    console.log(posts);
    return getComments(posts[0]._id);
  })
  .then((comments) => {
    console.log(comments);
  })
  .catch((error) => {
    console.log(error);
  });

console.log("end");

//? async await
//? try/catch block
async function test() {
  try {
    // console.log("hello");
    const user = await getUser();
    if (!user) {
      throw new Error("User not found");
    }
    console.log(user);
    const posts = await getPost(user._id);
    console.log(posts);
    const comments = await getComments(posts[0]._id);
    console.log(comments);
  } catch (error) {
    console.log("catch");
    console.log(error.message);
  } finally {
    console.log("finally");
  }
}

// test();
// console.log("end");

// network req.
// fetch()
//! promise  chain
fetch("https://jsonplaceholder.typicode.com/posts/10")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((posts) => {
    console.log(posts);
  })
  .catch((error) => {
    console.log(error);
  });

//! async await
//! try catch

const fetchPosts = async () => {
  try {
    //
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/10",
    );
    const data = await response.json();
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${data.id}`,
    );
    console.log(data);
    const comments = await res.json();
    console.log(comments);
  } catch (error) {
    console.log(error);
  }
};

fetchPosts();

const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const run = async () => {
  console.log("Start");
  await delay(2000);
  console.log("After 2 seconds");
};

run();

// real-world flow (you should remember this)
// Frontend calls API → await fetch()
// Backend receives → await database query
// Backend sends data back
// Frontend displays it

// Common uses:
// Calling APIs (fetch, axios)
// Loading user data (login, profile, dashboard)
// Form submissions
// Waiting for animations / delays
// const getUser = async () => {
//   const res = await fetch("/api/user");
//   const data = await res.json();
//   console.log(data);
// };

// 👉 Example: When you open Instagram → posts load → async/await is used behind the scenes.

// ⚙️ 2. Backend (Node.js / Express)

// Used when your server needs to handle operations like database, APIs, files.

// 4
// Common uses:
// Database queries (MongoDB, MySQL)
// Calling external APIs
// Reading/writing files
// Authentication (login system)
// app.get("/users", async (req, res) => {
//   const users = await User.find();
//   res.json(users);
// });

// 👉 Example: When frontend asks /users → backend fetches from DB → sends response.

// 🧠 Simple understanding
// Frontend → "Give me data" (request)
// Backend → "Let me fetch it" (process)

// 👉 Both use async/await because real-world operations take time.

// 🔥 Real-world flow (you should remember this)
// Frontend calls API → await fetch()
// Backend receives → await database query
// Backend sends data back
// Frontend displays it
// 💯 Interview answer (perfect)

// 👉 "async/await is used in both frontend and backend to handle asynchronous operations like API calls, database queries, and file handling in a clean and readable way."
