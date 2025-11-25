import { useState, useEffect } from "react";
import ColorBoxes from "./ColorBoxes";

export default function App() {
  const [colorToGuess] = useState(getRandomColor());

  useEffect(() => {
    function slowAction() {
      for (let i = 0; i < 8_000_000_000; i++) {}
    }

    async function slowAsyncAction() {
      setTimeout(() => {
        console.log("And Slow Action");
      }, 2000);
    }

    async function callBackHell() {
      function getUser(id, callback) {
        setTimeout(() => {
          // מדמה בקשת רשת
          const user = { id: id, name: "Alice" };
          callback(user);
        }, 1000);
      }

      function getPosts(userId, callback) {
        setTimeout(() => {
          const posts = [
            { id: 1, title: "Post 1" },
            { id: 2, title: "Post 2" },
          ];
          callback(posts);
        }, 1000);
      }

      function getComments(post, callback) {
        setTimeout(() => {
          const comments = ["Nice!", "Great post!"];
          callback(comments);
        }, 1000);
      }

      // ואז הקוד המקורי
      getUser(1, (user) => {
        getPosts(user.id, (posts) => {
          getComments(posts[0], (comments) => {
            console.log("Done");
          });
        });
      });
    }

    async function usePromise() {
      function someAsyncAction() {
        return new Promise((resolve, reject) => {
          const success = false; // או תנאי אמיתי

          setTimeout(() => {
            // מדמה פעולה אסינכרונית, למשל בקשת רשת
            if (success) {
              resolve("The action was successful!"); // הפעולה הצליחה
            } else {
              reject("Something went wrong."); // הפעולה נכשלה
            }
          }, 1000);
        });
      }

      // שימוש ב־Promise
      someAsyncAction()
        .then((result) => {
          console.log("Success:", result);
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    }

    function fetchExample() {
      fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((res) => res.json()) // מחזיר Promise נוסף
        .then((data) => {
          console.log(data); // הנתונים הסופיים
        })
        .catch((error) => {
          console.error("Error fetching data:", error); // טיפול בשגיאות
        });
    }

    async function fetchAwaitExample() {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const data = await res.json();
      console.log(data);
    }

    // console.log("start");
    // fetchAwaitExample();
    // console.log("end");
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          padding: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <h2>Guess the Color!</h2>
        <p>
          Target color: <strong>{colorToGuess}</strong>
        </p>

        <ColorBoxes
          colorToGuess={colorToGuess}
          getRandomColor={getRandomColor}
        />
      </div>
    </div>
  );
}

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
