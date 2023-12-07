import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc} from 'firebase/firestore';
import { db } from "../..";
import {ItemDetail} from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [itemSelect, setItemSeleted] = useState([])

useEffect(() => { 
    if (id) {
      const query = doc(db, "products", id)
      getDoc(query).then((snapshot) => {
      if (snapshot.exists()){
       return setItemSeleted({ id: snapshot.id, ...snapshot.data() })}
      }).catch = (err) => {
        console.log(err)}
      }
}, [])
  
  return (
   <div>
  {itemSelect ? <ItemDetail product={itemSelect} /> : null }
  </div>
  )
}

export default ItemDetailContainer