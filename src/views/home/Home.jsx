import { useEffect } from "react"
import { api } from "../../api/api"
import { useState } from "react"
export default function Home() {
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const response = await api.get('/posts');
            const data = await response.data;
            setData(data);
        }
        fetchData();
    }, [])

    return (
        <>
            <div>
                <h1 style={{ textAlign: 'center' }}>Posts Data</h1>
                <ul className="d-flex justify-content-evenly flex-wrap row-gap-4">
                    {
                        data && data.map((element) => (
                            <div className="card text-center" style={{ minWidth: '200px', boxShadow: "1px 1px 0.8rem black" }}>
                                <div className="card-body">
                                    <li className="card-title">Name: {element.title}</li>
                                </div>
                            </div>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}