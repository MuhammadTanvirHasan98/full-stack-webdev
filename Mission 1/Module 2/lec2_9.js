


//* Denormalizing Data (Client-Side Joins) *//

// In this lecture, we will explore the concept of denormalizing data, which involves combining related data from multiple sources into a single structure. This is often done on the client side to optimize performance and reduce the number of requests made to a server. We will discuss techniques for performing client-side joins and how to effectively manage denormalized data in your applications.

// Scenario: You have two separate arrays, one containing user information and the other containing order details. You need to combine these arrays to create a single array of orders that includes the corresponding user information for each order.

// Scenario: You have an array of users and separate array of posts.
// You need to create a new array of users where each user object contains a post array of their own posts.


//? input
const users = [
  { userId: 101, name: "Alice" },
  { userId: 102, name: "Bob" },
  { userId: 103, name: "Charlie" },
];

const posts = [
  {id: 1, userId: 101, content: "Post 1 by Alice" },
  { id: 2, userId: 102, content: "Post 2 by Bob" },
  { id: 3, userId: 101, content: "Post 3 by Alice" },
  { id: 4, userId: 103, content: "Post 4 by Charlie" },
];

// TODO
//* Create a look-up table for users by userId.
//

// O(n) time complexity
const postsByUserId = posts.reduce((table, post) => {
  // console.log(table, ":", post, ":", table[post.userId]);
  const { userId } = post;  
  if (!table[userId]) {
    table[userId] = [];
  } 
  table[userId].push(post);
  return table;
}, {});
console.log("Posts by User ID:", postsByUserId);

//* Map over the users array to create a new array of users with their posts.

// O(n) time complexity
const usersWithPosts = users.map(user => {
  return {
    ...user,
    //O(1) time complexity for lookup
    posts: postsByUserId[user.userId] || []
  };
});

console.log("Users with Posts:", JSON.stringify(usersWithPosts, null, 2));
