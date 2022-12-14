const userCard = (id) => {
    let balance = 100;
    let transactionLimit = 100;
    const historyLog = [];
    const key = id;

    const createMessage = (operationType,credits) => ({operationType,credits,operationTime : new Date()});
    
    const getCardOptions = () => ({balance,historyLog,key});
    
    const putCredits = (money) => {
      balance += money;
      historyLog.push(createMessage('putCredits',money))
    }

    const takeCredits = (money) => {
      if (balance - money >= 0) {
          balance -= money;
          historyLog.push(createMessage('takeCredits',money))
      } else {
          historyLog.push(createMessage('takeCreditsError'));
          console.error('notEnoughMoney')
      }
    }

    return {
        getCardOptions,
        putCredits,
        takeCredits
    }
}

class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = []
    }

    addCard() {
        if (this.cards.length === 3) {
            console.error('limit of cards')
            return
        }
        this.cards.push(userCard(this.cards.length + 1));
    }

    getCardById(id) {
        const card = this.cards[id - 1];
        if (!card) {
            console.error('not present id');
            return
        }
        return card
    }
}

const user = new UserAccount('Vasya')

user.addCard()
user.addCard()
user.addCard()

const card1 = user.getCardById(1)
const card2 = user.getCardById(2)

card1.putCredits(200)
card1.putCredits(-50)
console.log(card1.getCardOptions());

const card3 = userCard(3);
card3.getCardOptions();
card3.putCredits(150);
card3.takeCredits(100);
console.log(card3.getCardOptions());

// card3.setTransactionLimit(5000);
// card3.transferCredits(50,card1)