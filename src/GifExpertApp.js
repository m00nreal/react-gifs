import React, {useState} from "react";
import {AddCategory} from "./components/AddCategory";
import {GifGrid} from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Totodile']);

    return (
        <>
            <h2>Buscador de Gifs!</h2>
            <AddCategory add={setCategories}/>
            <hr/>

            <ol>
                { categories.map((t, i) => (
                    <GifGrid
                        category={t}
                        key={t}
                    />
                )) }
            </ol>
        </>
        )
}