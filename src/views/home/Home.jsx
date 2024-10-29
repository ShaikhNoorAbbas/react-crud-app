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
                <h1 style={{ textAlign: 'center' }}>Book Management System</h1>
                <table className="table table-striped table-hover text-center">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Book Title</th>
                            <th scope="col">Author</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data && data.map((element, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{element.title}</td>
                                    <td>{element.author}</td>
                                    <td>
                                        <FaPencil
                                            onClick={() => handleAction({ type: 'update', id: element.id })}
                                            color="green"
                                            style={{ cursor: 'pointer', marginRight: '10px' }}
                                        />
                                        <MdDelete
                                            onClick={() => handleAction({ type: 'delete', id: element.id })}
                                            color="red"
                                            style={{ cursor: 'pointer' }}
                                        />
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}