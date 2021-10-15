import faunadb, { query as q } from 'faunadb';
import bcrypt from 'bcryptjs';
// import dotenv from 'dotenv';

require('dotenv').config();
const client = new faunadb.Client(
  {
    secret: process.env.REACT_APP_FAUNADB_KEY,
    domain: "db.us.fauna.com"
  }
);

export const getPosts = async() =>{
  let allPosts = await client.query(
    q.Map(
      q.Paginate(q.Documents(q.Collection("posts"))),
      q.Lambda("X", q.Get(q.Var("X")))
    )
  )
  // check the output
  // console.log(allPosts.data);
  return allPosts.data;
}