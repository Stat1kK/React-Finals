import React from 'react';
import useStorage from "../useStorage";
import {motion} from "framer-motion";
function GalleryPage(props) {
    const [favorites,setFavorites]=useStorage("gallery")

    const deleteDog=(dog)=>{
        console.log(dog)
        setFavorites(prev => prev.filter(image => image !== dog))
    }
    if(favorites?.length===0){
        return <div className={"mt-5"} style={{display:"flex",justifyContent:"center",alignItems:"center"
            ,flexDirection:"column"}}>
            <h1 className={"text-center mb-5"}>ძაღლები არაა</h1>
            <img className={"img-fluid"} style={{maxWidth:"65%"}} src="https://i.kym-cdn.com/entries/icons/facebook/000/042/079/chopcrycover.jpg" alt=""/>
        </div>
    }else{
        return (

            <div className="container mt-5">
                <h1 className={"text-center mb-5"}>Favorite Dogs</h1>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
                    {/* Loop through images array */}
                    {favorites.map((item, index) => (
                        <motion.div whileHover={{scale:1.2}} key={index} className="col">
                            <div className="card">
                                <img onClick={()=>{deleteDog(item)}}  src={item} key={index}/>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>


        )

    }


}

export default GalleryPage;