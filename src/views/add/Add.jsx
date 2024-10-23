import { useState } from "react"
import { api } from "../../api/api";

export default function Add() {
    const [data, setData] = useState({
        title: ""
    })
    console.log(route);
    function handleSubmit(event) {
        event.preventDefault();
        createdData();
        setData({
            title: ""
        });
    }
    async function createdData() {
        const response = await api.post('/posts', data);
        console.log(response.data);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                {/* label and input */}
                <div>
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" value={data.title} name="title" id="title" placeholder="Enter Title" onChange={(e) => setData({ title: e.target.value })} className="form-control" />
                </div>
                <div>
                    <button type="submit" className="btn btn-primary  mt-2" style={{ fontSize: '1.1rem' }}>Add</button>
                </div>
            </form>
        </>
    )
}