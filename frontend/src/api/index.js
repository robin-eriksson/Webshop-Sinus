export async function fetchProducts(){
  
        const req = await fetch(`http://localhost:5000/api/products/`)
        const data = await req.json()
        console.log(data)
        return data

}