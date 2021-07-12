import { useEffect, useState } from "react"
import { getGifs } from './../helpers/getGifs';


const useFetchGifs = ( category ) => {
    const [state, setstate] = useState({
        data:[],
        loading: true
    });

    useEffect( ()=> {
        getGifs(category)
            .then(imgs =>                 
                setstate({
                    data:imgs,
                    loading:false
                })                
            )
    }, []);   

    // setTimeout(() => {
    //     setstate({
    //         data:[1,2,3,4,5,6,7],
    //         loading: false
    //     })
    // }, 3000);

    return state; // { data:[], loading:true}
}

export default useFetchGifs
