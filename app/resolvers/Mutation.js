const actions = require("../actions");
// const { getUserId } = require("../utils");
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

module.exports = {
  signup,
  login
};
