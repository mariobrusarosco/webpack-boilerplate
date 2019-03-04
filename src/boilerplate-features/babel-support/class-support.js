class BoilerClass {
  instanceInfo = {
    description: "This text was created inside a Class, without a constructor, unsing <strong>'@babel/plugin-proposal-class-properties'</strong>",
    firstname: 'Walter',
    surname: 'Heisenberg',
    lastname: 'White',
  }
}

const obj =  new BoilerClass()

const markup = `<p data-info='transform-class-proposal'>${obj.instanceInfo.description}</p>`

export {
  markup,
  BoilerClass
}
