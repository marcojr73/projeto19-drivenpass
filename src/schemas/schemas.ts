import joi from "joi";

const dataSignInUp = joi.object({
    email: joi.string().email().required().min(5),
    password: joi.string().required().min(10)
});

const dataCredentialsisCorrect = joi.object({
    url: joi.string().uri().required(),
    userName: joi.string().min(1).required(),
    password: joi.string().min(1).required(),
    title: joi.string().min(1).required()
})

export {
    dataSignInUp,
    dataCredentialsisCorrect
}
