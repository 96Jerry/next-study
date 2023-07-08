import Image from "next/image";
import axios from 'axios'
import product01 from '/public/product01.jpg'



export default async function List() {
  let name = "park";
  let link = "http://google.com";
  let data1: any
  

  await axios.get("http://localhost:3001/products/get-all").then((res) =>{
data1 = res.data

})

  return (
    <div>
      <h4 className="title">상품목록</h4>

      {
        data1.map((a: any, i: number)=>{return (
          <div className="food" key={i}>
            <Image className="product-image" src={product01} alt="product01" />
        <h4>{a.productName} ${a.productPrice}</h4>
      </div>
        )
        
      })
      
      }
      

      
    </div>
  );
}
