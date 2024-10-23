import { useEffect } from "react";
import { api } from "../../api/api";
import { useState } from "react";
import { FaPencil } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
export default function Home() {
    const [data, setData] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            const response = await api.get('/posts');
            const data = await response.data;
            setData(data);
        }
        fetchData();
    }, [])
    const handleEdit = (id) => {
        navigate(`/edit/${id}`);
    }
    return (
        <>
            <div>
                <h1 style={{ textAlign: 'center' }}>Posts Data</h1>
                <ul className="d-flex justify-content-evenly flex-wrap row-gap-4">
                    {
                        data && data.map((element, index) => (
                            <div key={index} className="card text-center" style={{ minWidth: '200px', boxShadow: "1px 1px 0.8rem black" }}>
                                <div className="card-body">
                                    <li className="card-title">Name: {element.title}</li>
                                    <div>
                                        <FaPencil onClick={() => handleEdit(element.id)} color="green" style={{ cursor: 'pointer' }} />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}