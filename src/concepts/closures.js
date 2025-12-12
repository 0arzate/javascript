const createBankAccount = (initialBalance) => {
  let currentBalance = initialBalance
  return {
    addBalance: (amount) => {
      currentBalance += amount
    },
    getBalance: () => currentBalance
  }
}

const osvaldoAccount = createBankAccount(0)
const samuelAccount = createBankAccount(100)

console.log('Osvaldo account:', osvaldoAccount.getBalance())
console.log('Samuel account', samuelAccount.getBalance())

osvaldoAccount.addBalance(200)

console.log('Osvaldo account:', osvaldoAccount.getBalance())
console.log('Samuel account', samuelAccount.getBalance())