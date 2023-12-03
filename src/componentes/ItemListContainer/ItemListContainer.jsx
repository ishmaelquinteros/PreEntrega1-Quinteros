import { ItemList } from "../ItemList/ItemList";
import { getFirestore, getDocs, doc, collection, getDoc} from 'firebase/firestore';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../..";

const ItemListContainer = () => {

  const [ListaProd, setListaProd] = useState([]);
  const {categoria} = useParams();

  
  useEffect(()=>{
    
    const productCollection = collection(db, "products");
    getDocs(productCollection).then((snapshot) => {
        if (snapshot.size !== 0) {
          setListaProd(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
          console.log(ListaProd);
        }
      });    
  }, [])

  return (
    <>
      <ItemList products={ListaProd} />
    </>
  )
}

export default ItemListContainer;