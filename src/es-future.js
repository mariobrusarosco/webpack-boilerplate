const drugLord = {
  cover: {
    firstName: 'Walter',
    lastName: 'White'
  },
  firstName: 'Heisenberg'
}
 console.log(drugLord.cover.firstName)
console.log(!drugLord.real?.lastName && 'This approach used to be an error. Not anymore!!!')


const arrowFunction = async () => {
  await console.log(1);
  console.log(22233);
}

arrowFunction()
