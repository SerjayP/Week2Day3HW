// =============================== Question One =================================

class Governor{
    static Representative = "Serjay Parks"
    static State = "New York"
    static PoliticalParty = "Independent"
    static nyBorn = true
    static TermStarted = "2020"
    static BillsOnDesk = 55
    static billsSigned(num){
        // this.BillsOnDesk -= num //Leave out
        if (num === 1){
            return `Governor Parks signed a bill today, leaving ${this.BillsOnDesk - 1} bills awaiting to be signed.`
        } 
        else {
            return `Governor Parks signed ${num} bills today, leaving ${this.BillsOnDesk - num} bills awaiting to be signed.`

        }
    }
    static termEnd(){
        return `Governer Parks term will end in ${parseInt(this.TermStarted) + 4}.`
    }
    static elecSpeech(){
        return "Thank you for electing me as your governor, New York! I will hopefully do good things. *winks*"
    }
}
// const nyGov = new Governor // DONT INSTANTIATE

// ========== Print to Console ==========

// console.log(Governor)
// console.log(Governor.elecSpeech())
// console.log(Governor.billsSigned(1))
// console.log(Governor.billsSigned(5))
// console.log(Governor.termEnd())


// =============================== Question Two =================================

class Person{
    constructor(nameParam, eyeColorParam, skinColorParam, languageParam){
        this.Name = nameParam
        this.EyeColor = eyeColorParam
        this.SkinColor = skinColorParam
        this.Language = languageParam
    }
    walk(location){
        return `I'm walking ${location}.`
    }
    sleep(param){
        if (param === true){
            return `${this.Name} is sleeping now.`
        } else {
            return `${this.Name} is awake.`
        }
    }
    eat(){
        return "I'm eating. *MUFFLED*"
    }
}


class PostalWorker extends Person{
    deliver(){
        return `${this.Name} is delivering mail.`
    }
    rain(){
        return `${this.Name} will deliver less mail today due to weather.`
    }
    done(){
        return `${this.Name} has completed his route, all mail was delivered.`
    }
}


class Chef extends Person{
    constructor(nameParam, eyeColorParam, skinColorParam, languageParam, dishParam){
        super(nameParam, eyeColorParam, skinColorParam, languageParam)
        this.FavoriteDish = dishParam
    }
    chickenAlfredo(){
        return  `Chef ${this.Name} is making delicious Chicken Alfredo!`
    }
    prep(){
        return `Chef ${this.Name} is prepping dinner for everyone.`
    }
    handsWashed(param){
        return param === true ? `Chef is ready to cook.`:`Chef ${this.Name} must to go wash their hands.`
    }
}

const postalWorkerDre = new PostalWorker("Deandre", "Brown", "Dark Brown", "English")
const postalWorkerJose = new PostalWorker("Jose", "Brown", "Light Brown", "Spanish")

// ========== Print to Console ==========

// console.log(postalWorkerDre)
// console.log(postalWorkerJose)
// console.log(postalWorkerDre.deliver())
// console.log(postalWorkerDre.rain())
// console.log(postalWorkerDre.done())
// console.log(postalWorkerJose.walk("to the store"))
// console.log(postalWorkerJose.sleep(false))
// console.log(postalWorkerJose.sleep(true))
// console.log(postalWorkerJose.eat())

const chefSerjay = new Chef("Serjay", "Dark Brown", "Meduim Brown", "English", "Chicken Alfredo")
const chefZyshawn = new Chef("Zyshawn", " Green", "White", "German", "Schnitzel")

// ========== Print to Console ==========

// console.log(chefSerjay)
// console.log(chefZyshawn)
// console.log(chefSerjay.chickenAlfredo())
// console.log(chefSerjay.handsWashed(true))
// console.log(chefZyshawn.prep())
// console.log(chefZyshawn.handsWashed(false))
// console.log(chefZyshawn.walk("to work"))
// console.log(chefZyshawn.sleep(false))
// console.log(chefSerjay.sleep(true))
// console.log(chefSerjay.eat())


// =============================== Hungry For More =================================

// ============== PART ONE =============
class BankAccount{
    constructor(ownerParam, balanceParam) {
        this.ownerName = ownerParam
        this.balance = balanceParam
        this.acctNum = Math.floor(Math.random()*10000000)
    }
    deposit(addMoney){
        this.balance += addMoney
        return `You have successfully deposited $${addMoney}. Your new balance is $${this.balance}.`
    }
    withdraw(subtractMoney){
        this.balance -= subtractMoney
        if (this.balance - subtractMoney < 0){
            return `You can not withdraw $${subtractMoney} from your account. INSUFFIECIENT FUNDS!!`
        } else{
            return `You have successfully withdrawed $${subtractMoney} from your account. Your new balance is $${this.balance - subtractMoney}.`
        }

    }
}

// ====== Print to Console ======

const chase = new BankAccount("Serjay", 5000)
console.log(chase)
console.log(chase.deposit(500))
console.log(chase.withdraw(500))
console.log(chase.withdraw(50001))

// ================ PART TWO =================

class CheckingAccount extends BankAccount{
    constructor(ownerParam, balanceParam, overdraftEnabledParam = false){
        super(ownerParam, balanceParam)
        this.overdraftEnabled = overdraftEnabledParam
    }
    withdraw(subtractMoney){
        if (this.overdraftEnabled === true){
            this.balance -= subtractMoney
                return `You have successfully withdrawed $${subtractMoney}. Your new balance is $${this.balance}.`
        } else {
            return "You must enable the overdraft feature."
        }
    }
}

// ====== Print to Console ======

const chaseChecking = new CheckingAccount("Zyshawn", 200, false) // Test for false
const chaseChecking2 = new CheckingAccount("Zyshawn", 200, true) // Test for true

console.log(chaseChecking)
console.log(chaseChecking.withdraw(400)) // Test for false
console.log(chaseChecking2.withdraw(400)) // Test for true

// ============= PART THREE =============

class SavingsAccount extends BankAccount{
    withdraw(subtractMoney){
        return `You can not withdraw money from your savings account ${this.acctNum}.`
    }
}

// ====== Print to Console ======

const chaseSavings = new SavingsAccount("Jay", 1500000)

console.log(chaseSavings)
console.log(chaseSavings.withdraw(6556666))
