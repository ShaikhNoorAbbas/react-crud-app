import { useState } from "react"
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";
export default function Add() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        title: "",
        author: ""
    })
    function handleSubmit(event) {
        event.preventDefault();
        createdData();
        navigate('/')
    }

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    }

    async function createdData() {
        const response = await api.post('/posts', data);
        console.log(response.data);
    }
    return (
        <>
            <form onSubmit={handleSubmit} className="d-flex flex-column gap-4">
                {/* Title label and input */}
                <div>
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" value={data.title} name="title" id="title" placeholder="Enter Title" onChange={handleChange} className="form-control" />
                </div>
                {/* Author Label and input */}
                <div>
                    <label htmlFor="author" className="form-label">Author Name</label>
                    <input type="text" value={data.author} name="author" id="title" placeholder="Enter Author Name" onChange={handleChange} className="form-control" />
                </div>
                {/* Add Button */}
                <div>
                    <button type="submit" className="btn btn-primary  mt-2" style={{ fontSize: '1.1rem' }}>Add</button>
                </div>
            </form>
        </>
    )
}