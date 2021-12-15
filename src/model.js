import faunadb, { query as q } from 'faunadb';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();
const client = new faunadb.Client(
  {
    secret: process.env.REACT_APP_FAUNADB_KEY,
    domain: "db.us.fauna.com"
  }
);


/**
 * 
 * @param {*} fullName 
 * @param {*} email 
 * @param {*} userName 
 * @param {*} password 
 * @returns user with userId based on dataId
 */
export const createUser = async (fullName, email, userName, password) => {
  password = bcrypt.hashSync(password, bcrypt.genSaltSync());
  let data;
  let user = {};
  try {
    data = await client.query(
      q.Create(
        q.Collection('users'),
        {
          data: {
            fullName,
            email,
            userName,
            password
          }
        }
      )
    )
    if (data.fullName === 'BadRequest') return;
  } catch (error) {
    return;
  }
  
  // console.log(data);
  user = Object.assign({}, data.data);
  user.id = data.ref.id;
  // console.log(user);
  return user;
}
/**
 * 
 * @param {*} userId 
 * @returns user if possile, otherwise empty
 */
export const getUser = async (userId) => {
  try {
    const user = await client.query(
      q.Get(
        q.Ref(q.Collection('users'), userId)
      )
    )
    user.data.id = userId;
    console.log(user);
    return user;

  } catch {
    return {};
  }
}

/**
 * 
 * @param {*} email 
 * @param {*} password 
 * @returns user if correct login, otherwise empty
 */
export const loginUser = async (email, password) => {
  try {
    let user = await client.query(
      q.Get(
        q.Match(q.Index('user_by_email'), email)
      )
    )
    user.data.id = user.ref.id;
    // console.log(user);
    if (bcrypt.compareSync(password, user.data.password))
      return user;
    else return {};
  } catch (error) {
    return { message: "undifined user" };
  }
}

/**
 * 
 * @param {*} title 
 * @param {*} body 
 * @param {*} avatar 
 * @param {*} authorId 
 * @param {*} tags 
 * @returns post data
 */
export const createPost = async (title, body, avatar, authorId, tags) => {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let author = {};
  await getUser(authorId).then(res => author = Object.assign({}, res.data, { id: res.ref.id }), rej => rej);
  console.log(author);
  const date = new Date();
  let data = {};
  await client.query(
    q.Create(
      q.Collection('blogs'),
      {
        data: {
          title,
          body,
          upvote: 0,
          downvote: 0,
          created__at: `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`, // converts date to "Month day, Year"
          author: {
            name: author.fullName,
            email: author.email,
            id: author.id,
            username: author.userName
          },
          avatar,
          tags
        }
      }
    )
  ).then(res => data = Object.assign({}, res.data, { id: res.ref.id }), rej => rej);
  console.log(data);
  return data;
}

/**
 * 
 * @returns all posts
 */
export const getPosts = async () => {
  let allPosts = await client.query(
    q.Map(
      q.Paginate(q.Documents(q.Collection("blogs"))),
      q.Lambda("X", q.Get(q.Var("X")))
    )
  )
  // check the output
  // console.log(allPosts);
  return allPosts;
}

/**
 * 
 * @param {*} id 
 * @returns post with matched id
 */
export const getPost = async id => {
  try {
    let blog = await client.query(
      q.Get(q.Ref(q.Collection('blogs'), id))
    )
    blog.data.id = blog.ref.id;
    // console.log(blog);
    return blog.data;
  } catch (error) {
    return
  }
}

/**
 * 
 * @param {*} upvote 
 * @param {*} id 
 * @returns 
 */
export const upvotePost = async (upvote, id) => {
  try {
    let blog = await client.query(
      q.Update(
        q.Ref(q.Collection('blogs'), id),
        {data: {upvote}}
      )
    )
    blog.data.id = blog.ref.id
    // console.log(blog);
    return blog.data
  } catch  {
    return
  }
}

export const downvotePost = async (downvote, id) => {
  try {
    let blog = await client.query(
      q.Update(
        q.Ref(q.Collection('blogs'), id),
        {data: {downvote}}
      )
    )
    blog.data.id = blog.ref.id
    return blog.data
  } catch (error) {
    return
  }
}