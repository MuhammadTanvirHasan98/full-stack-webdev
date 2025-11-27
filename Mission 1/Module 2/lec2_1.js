// const obj = {
//   nextLevel: { courseID: 42 },
//   "Programming Hero": { courseID: "PH123" },
// };

// console.log(obj["Programming Hero"].courseID); // PH123

const course1 = { courseID: 101, courseName: "JavaScript Basics" };
const course2 = { courseID: 102, courseName: "Advanced JavaScript" };

// const obj1 = {};

// obj1.nextLevel = { courseID: 50 };
// obj1["Programming Hero"] = { courseID: "PH123" };
// obj1[true] = { courseID: "PH456" };
// obj1[course1] = { courseID: "C101" };
// obj1[course2] = { courseID: "C102" };

// console.log(obj1);
// console.log(obj1["[object Object]"]);
// console.log(obj1[true].courseID);

const map = new Map();

// console.log(map) //it give the size of the map and what is inside it
map.set(1, "Muhammad Tanvir Hasan");
map.set("nextLevel", { courseID: 50 });
map.set("Programming Hero", { courseID: "PH123" });
map.set(true, { courseID: "PH456" });
map.set(course1, { courseID: "C101" });
map.set(course2, { courseID: "C102" });

console.log(map.get(1));
console.log(map.get("nextLevel").courseID);
console.log(map.get("Programming Hero").courseID);
console.log(map.get(true));
console.log(map.get(course1));
console.log(map.get(course2));
console.log(map);
