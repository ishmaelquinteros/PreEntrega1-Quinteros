import { ItemList } from "../ItemList/ItemList";
import { getDocs, collection, where, query } from 'firebase/firestore';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../..";

const ItemListContainer = () => {

  const [ListaProd, setListaProd] = useState([]);
  const {categoria} = useParams();

  useEffect(()=> {
    let queryDb;
    if (categoria){queryDb = query(collection(db, "products"), where("category", "==", categoria))} 
    else {queryDb = collection(db, "products")}  

      getDocs(queryDb).then((snapshot) => {
        if (snapshot.size !== 0) {
          setListaProd(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        }
      })
  }, [categoria])
      
  return (
    <>
      <ItemList ProductsList={ListaProd} />
    </>
  )
}

export default ItemListContainer;