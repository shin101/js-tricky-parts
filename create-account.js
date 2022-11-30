function createAccount(pin, amount = 0) {
  return {
    checkBalance(inputPin){
      if(inputPin===pin){
        return `$${amount}`
      } else return "Invalid PIN."
    },

    deposit(inputPin, newAmount){
      if(inputPin===pin){
        amount += newAmount;
        return `Succesfully deposited $${newAmount}. Current balance: $${amount}.`
        
      } else return "Invalid PIN."
    },

    withdraw(inputPin, subtractAmount){
      if(inputPin===pin){
        amount -= subtractAmount;
        if(amount < 0) return "Withdrawal amount exceeds account balance. Transaction cancelled."

        return `Succesfully withdrew $${subtractAmount}. Current balance: $${amount}.`
      } else return "Invalid PIN."
    },

    changePin(inputPin, newPin){
      if(inputPin===pin){
        pin = newPin;
        return "PIN successfully changed!"
      } else return "Invalid PIN."
    }
  }

}

module.exports = { createAccount };
