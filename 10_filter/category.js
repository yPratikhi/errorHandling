function filterbyCategory(category){
    return function(product){
        return product.category === category;
    }
}

const product = [
    {name:"Shirt" ,category:"Clothing"},
    {name:"Pants" ,category:"Clothing"},
    {name:"Hat" ,category:"Accessories"},
    {name:"sunglass" , category:"Accessories"},
]

var clothingProduct = product.filter(filterbyCategory("Clothing"));
console.log(clothingProduct);