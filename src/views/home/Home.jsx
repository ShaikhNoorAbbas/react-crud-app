import { useEffect } from "react";
import { api } from "../../api/api";
import { useState } from "react";
import { FaPencil } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";

// Home Function startes from here
export default function Home() {
    const [data, setData] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {

        fetchData();
    }, [])

    const fetchData = async () => {
        const response = await api.get('/posts');
        const data = await response.data;
        setData(data);
    }
    const handleAction = async ({ id, type }) => {
        switch (type) {
            case 'update':
                navigate(`/edit/${id}`);
                break;
            case 'delete':
                const reponse = await api.delete(`/posts/${id}`);
                fetchData();
                console.log(reponse.data);
                break;
            default:
                console.log('None of the condition is met');
        }
    }
    return (
        <>
            <div>
                <h1 style={{ textAlign: 'center' }}>Posts Data</h1>
                <ul className="d-flex justify-content-evenly flex-wrap row-gap-4 gap-4">
                    {
                        data && data.map((element, index) => (
                            <div key={index} className="card text-center" style={{ boxShadow: "1px 1px 0.8rem black", minWidth: '300px', maxWidth: '300px' }}>
                                <div className="card-body">
                                    <li className="card-title">Name: {element.title}</li>
                                    <li className="card-title">Author: {element.author}</li>
                                    <div className="d-flex justify-content-evenly">
                                        <FaPencil onClick={() => handleAction({ type: 'update', id: element.id })} color="green" style={{ cursor: 'pointer' }} />
                                        < MdDelete onClick={() => handleAction({ type: 'delete', id: element.id })} color="red" style={{ cursor: "pointer" }} />
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