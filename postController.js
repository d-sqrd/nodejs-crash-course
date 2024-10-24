const posts = [
  { id: 1, title: "post one" },
  { id: 2, title: "post two" },
];

// not a default export -> so when we import this function anywhere we will need to match the function name, ie, getPosts; otherwise it will throw error
// export const getPosts = () => posts;

// another syntax
const getPosts = () => posts;
export { getPosts };

/********************Default Exports********************/

const getPostsLegth = () => posts.length;
export default getPostsLegth;
