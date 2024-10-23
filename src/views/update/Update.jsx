import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { api } from "../../api/api";
import { NavLink } from "react-router-dom";

export default function Update() {
    const { id } = useParams();
    const [value, setValue] = useState({
        title: ''
    });
    useEffect(() => {
        const fetchData = async () => {
            const response = await api.get('/posts');
            const data = response.data;
            console.log(data);
            const findValue = data.find((element) => element.id == id);
            console.log(findValue);
            setValue(findValue);
        }
        fetchData();
    }, [])

    return (
        <>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><NavLink to={'/'}>Home</NavLink></li>
                    <li class="breadcrumb-item active" aria-current="page">{value.title && value.title}</li>
                </ol>
            </nav>
            <form>
                <div>
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" name="title" id="title" className="form-control" value={value.title} />
                </div>
            </form>
        </>
    )
}