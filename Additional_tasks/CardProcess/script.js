// перша спроба по пам'яті
//
// const UserCard = (id) => {
//   let balance = 100;
//   let transactionLimit = 100;
//   const historyLogs = [];
//   const key = this.id;
//
//   const createMessage = (operationType, credits) => ({operationType,credits,operationTime: new Date.now()})
//
//   const getCardOptions = () => ({key,balance, transactionLimit, historyLogs})
//
//   const putCredits = (money) => {
//     if (money >= 0) {
//     balance += money
//         console.log(balance)
//         } else {console.error('wrong value')}
//     historyLogs.push(createMessage('Recieved credits',money))
//   }
//
//   const takeCredits = (money) => {
//     if (
//         balance && transactionLimit >=money
//     ) {
//       balance -= money
//     } else {
//       console.error('Limits error')
//     }
//     historyLogs.push(createMessage('Withdrawal of credits',money))
//       }
//
//   const setTransactionLimit = (money) => {
//     transactionLimit = money;
//   }
//
//   return{
//     putCredits,
//     takeCredits,
//     getCardOptions
//   }
//
// }

//Друга спроба по ТЗ
//

const userCard = (id) => {
  let balance = 100;
  let transactionLimit = 100;
  const historyLogs = [];
  const key = id;

  const createMessage = (operationType,money) => ({operationType,money,operationTime : new Date()});

  const getCardOptions = () => ({key,balance,transactionLimit,historyLogs});

  const putCredits = (money) => {
    balance += money;
    historyLogs.push(createMessage('Recieved credits',money))
    };

  const takeCredits = (money) => {
    if (isNaN(money)) {
      console.error('Is not a number')
    } else if (balance >= money) {
      balance -= money
      historyLogs.push(createMessage('Withdrawal of credits',money))
    } else {
      console.error('Not enough money')
    }
  };

  const setTransactionLimit = (money) => {
    transactionLimit = money;
    historyLogs.push(createMessage('Transaction Limits change', money))
  };

  const transferCredits = (money, id) => {
    if (balance >= money) {
      balance -= money;
    }
  }

return {
  getCardOptions,
  putCredits,
  takeCredits,
  transferCredits,
  setTransactionLimit
}
}

class UserAccount {

  constructor(name) {
    this.name = name;
    this.cards = [];
  }

  addCard () {
    if (this.cards.length === 3) {
      console.error('Limit of cards')
      return
    }
    this.cards.push(userCard(this.cards.length +1 ))
    }

  getCardByKey (id) {
    const card = this.cards[id - 1];
    if (!card) {
      console.error('No such id')
      return
    }
    return card
  }

}


const user = new UserAccount('Vasya')
user.addCard(1)
user.addCard(2)
user.addCard(3)

const card3 = user.getCardByKey(3);
const card1 = user.getCardByKey(1);

card3.putCredits(150);
card3.takeCredits(200);
card3.setTransactionLimit(5000);
// console.log(card3.getCardOptions());
// console.log(card1.getCardOptions());
// card3.transferCredits(50,card1)