
const currentUser = "Grace Hopper"
const welcomeMessage = "Welcome to Flatbook!"
console.log(`${welcomeMessage} ${currentUser}`) 

const excitedWelcomeMessage = "WELCOME TO FLATBOOK!"
const upperCaseCurrentUser = currentUser.toUpperCase(); 
console.log(`${excitedWelcomeMessage} ${upperCaseCurrentUser}!`)

const shortGreeting = "Welcome!"
const firstInitial = currentUser[0];
const restOfName = currentUser.slice(1);
console.log(`${shortGreeting} ${firstInitial}!`)

