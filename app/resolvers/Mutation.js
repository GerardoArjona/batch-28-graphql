const actions = require("../actions");
const { getUserId } = require("../utils");
// const { storeUpload } = require("../utils");

//TODO: agregar funciones faltantes
const signup = async (_, args, context, info) => {
  // const { createReadStream } = await args.data.profile_image;
  // const stream = createReadStream();
  // const { url } = await storeUpload(stream);
  // args.data.profile_image = url;

  return actions
    .signup(args.data)
    .then(token => {
      return { message: "User created succesfully, token:", token: token };
    })
    .catch(e => e);
};

const login = (_, args, context, info) => {
  return actions
    .login(args)
    .then(token => {
      return { message: "User logged sucessfully", token };
    })
    .catch(e => e);
};

const createPost = async(_, args, context, info)=>{
  const user = await getUserId(context);
  console.log('USER--', user);
  args.data.author=user._id;
  if(!user) throw new Error(`user no encontrado`);
  return actions.createPost(args.data)
  .then(post => {
    return actions.addPostToUser(user._id, post._id)
    .then(user =>{
      return post;
    }).catch(e => e);
  }).catch( e => e);
}

module.exports = {
  signup,
  login,
  createPost,
};
