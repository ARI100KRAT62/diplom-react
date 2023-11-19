import { useEffect, useState } from "react"
import { RestService } from "../services/rest"


export function Contact() {
    const [items, setItems] = useState([])
    useEffect(() => {
        RestService.getContact().then(result => {
            setItems(result)
        })
    }, [])
    return (
        <>
            <div className="content">
                <div className="company_address">
                    <h3>Company Information :</h3>
                    <p>{items[0]?.title}</p>
                    <p>{items[0]?.address}</p>
                    <p>Phone: {items[0]?.phone}</p>
                </div>
            </div>
        </>
    )
}