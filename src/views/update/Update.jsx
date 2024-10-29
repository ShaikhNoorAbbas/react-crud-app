import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"
import { api } from "../../api/api";
import { NavLink } from "react-router-dom";

export default function Update() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [value, setValue] = useState({
        title: '',
        author: ''
    });
    const [allData, setAllData] = useState(null);
    const [stateTitle, setTitle] = useState('');
    const [stateAuthor, setAuthor] = useState('');

    // Fetching data and implementing 
    useEffect(() => {
        const fetchData = async () => { 
            const response = await api.get('/posts');
            const data = response.data;
            console.log(data);
            setAllData(data);
            const findValue = data.find((element) => element.id == id);
            // console.log(findValue);
            setValue(findValue);
            setTitle(findValue.title);
            setAuthor(findValue.author);
        }
        fetchData();
    }, [])

    // handle Update function 
    const handleUpdate = async () => {
        if (allData.length > 0) {
            console.log('Before new Value is Created ' + value);
            console.log(value);
            let newValue = {
                ...value,
                title: stateTitle,
                author: stateAuthor
            }
            console.log(newValue)
            const response = await api.put(`/posts/${id}`, newValue);
            console.log(response)
            navigate('/')
        } else {
            console.log('No Data Found');
        }
    }
    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><NavLink to={'/'}>Home</NavLink></li>
                    <li className="breadcrumb-item active" aria-current="page">{value.title && value.title}</li>
                </ol>
            </nav>
            <form>
                {/* title label and input */}
                <div>
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" name="title" id="title" className="form-control" value={stateTitle} onChange={(e) => setTitle(e.target.value)} placeholder="Please Update Title" />
                </div>
                {/* Author label and input */}
                <div>
                    <label htmlFor="author" className="form-label">Author</label>
                    <input type="text" name="author" id="author" className="form-control" onChange={(e) => setAuthor(e.target.value)} value={stateAuthor} placeholder="Please Update Author" />
                </div>
                {/* update button */}
                <div>
                    <button type="button" onClick={handleUpdate} className="btn btn-warning mt-3">Update</button>
                </div>
            </form>
        </>
    )
}