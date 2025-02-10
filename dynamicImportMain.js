// import { sayHi, sayHola } from "./dynamicImport.js"; //static import

//sayHi(); //static import and export

//sayHola(); //static import and export

//for dynamic import
if (true) {
    const { sayHi, sayHola } = await import('./dynamicImport.js'); //This returns a promise 
    //You can resolve a promise in many ways, here we use await key word

    sayHi();

    sayHola();
}

const promises = Promise.all(
    [
        await import ('./dynamicImport.js'),
        await import ('./combine.js')
    ]
)

promises.then(result => {
    console.log(result[0].sayHi());
    console.log(result[1].calc.sub(56, 9));
})
