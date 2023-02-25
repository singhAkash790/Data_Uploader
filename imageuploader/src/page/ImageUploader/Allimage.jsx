import React, { useState, useEffect } from "react";
import {ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../../utilis/firebase.config";


const Allimage = () => {
  const imageListRef = ref(storage, "images/");
  const [imageList, setImageList] = useState([]);

    useEffect(() => {
    listAll(imageListRef).then((res) => {
      res.items.forEach((items) => {
        getDownloadURL(items).then((url) => {
          setImageList((perv) => [...perv, url]);
        });
      });
    });
  }, []);
  return (
    <div className="bg-slate-400">
        {imageList.map((url) => (
        <div className="flex justify-center  gap-4 pt-10  ">
          <img src={url} alt="" height="400px" className="w-[50%]" />
        </div>
 
       ))}</div>
  )
}

export default Allimage;