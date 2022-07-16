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

const dataNotesIsCorrect = joi.object({
    title: joi.string().max(50).required(),
    note: joi.string().max(1000).required()
})

export {
    dataSignInUp,
    dataCredentialsisCorrect,
    dataNotesIsCorrect
}
