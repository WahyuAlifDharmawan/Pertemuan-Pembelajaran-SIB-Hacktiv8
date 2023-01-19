import React, {useEffect, useState} from 'react'

function Example(){
    //Deklarasi variable state baru yang kita sebut"count"
    const [count, setCount] = useState(0)

    return(
        <div>
            <p>Anda menekan sebanyak {count} kali</p>
            <button onClick={()=> setCount(count+1)} >
                Klik saya
            </button>
        </div>
    );
}

export default Example