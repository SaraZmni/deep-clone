function deepClone(value){
    // Thease are primitive values


    // if(!value  || typeof value === 'string' 
    //     || typeof value === 'number' 
    //     || typeof value === 'boolean'){
    //     return value
    // }
    // we can use above condition or 
    if(!value || typeof value !== 'object'){
        return value
    }
    else if (Array.isArray(value)){
        return value.map((val) => deepClone(val))
    }
    else{
        return Object.keys(value).reduce((acc,key) =>{
           acc[key] = deepClone(value[key])
           return acc
        },{} )

        // Another solution for objects
        // const clonedObject = {};
        // for(const key in value){
        //     if(value.hasOwnProperty(key)){
        //         clonedObject[key] = deepClone(value[key]);
        //     }
        // }
        // return clonedObject
    }
}


const obj1 = {user:{role:"admin"}};
const clonedObj1 = deepClone(obj1)
clonedObj1.user.role = 'guest';
console.log('cloned-role:',clonedObj1.user.role);
console.log('original-role:',obj1.user.role);

const obj2 = {foo:[{bar:'baz'}]};
const clonedObj2 = deepClone(obj2);

obj2.foo[0].bar = 'bax';
console.log('cloned-bar: ', clonedObj2.foo[0].bar)
console.log('original-bar: ', obj2.foo[0].bar)