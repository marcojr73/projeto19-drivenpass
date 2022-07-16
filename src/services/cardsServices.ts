import * as cardsRepositories from "../repositories/cardsRepositories.js"
import * as utils from "../utils/utils.js"


async function verifyTitleCardIsUnique(title: string, allCards){
    allCards.forEach(card => {
        if(card.title === title) throw {
            status: 422,
            message: "this title already in use"
        }
    });
}

async function getAllCards(userId: number){
    return await cardsRepositories.getAllCardsByUserId(userId)
}

async function insertNewCard(cardData){
    await cardsRepositories.insertAnNewCardOnBank(cardData)
}

function decryptAllPasswordCvc(allCard){
    allCard.forEach(card => {
        card.password = utils.decryptPassword(card.password)    
        card.cvc = utils.decryptPassword(card.cvc)    
    })
    return allCard
}


async function getCardAndVerifyMaster(cardId: number, userId){
    const card = await cardsRepositories.getCardById(cardId)
    if(!card) throw {
        status: 404,
        message: "card not found"
    }
    if(card.userId !== userId) throw {
        status: 422,
        message: "this card not pertence this user"
    }
    return card
}

async function deleteCard(cardId){
    await cardsRepositories.deleteCardById(cardId)
}

export {
    verifyTitleCardIsUnique,
    getAllCards,
    insertNewCard,
    decryptAllPasswordCvc,
    getCardAndVerifyMaster,
    deleteCard
}