import { useEffect, useState } from "react"
import { Card } from "../items/cart"
import { RestService } from "../services/rest"
import { useParams } from "react-router-dom"

export function Home() {
    const { cid } = useParams()
    const [items, setItems] = useState([])
    useEffect(() => {
        RestService.getCategory(cid).then(result => {
            setItems(result)
        })
    }, [cid])
    return (
        <>
            {
                items.map(item => (
                    <Card key={item.id} id={item.id} title={item.title} about={item.about} price={item.price} img={item.img} />
                ))
            }
        </>
    )
}