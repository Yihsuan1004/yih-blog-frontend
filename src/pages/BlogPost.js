import { useEffect,useState } from 'react';
import dogImage from '../assets/dog-full.jpg';
import 'react-quill/dist/quill.snow.css';
import api from '../api/api';
import avatar from '../assets/avatar.jpg';
import Tag  from '../components/UI/Tag'; 

const BlogPost = props =>{
    const [data, setData] = useState({});

    useEffect(() => {
        api.get('/posts/650f10d474fca58ae482c0a8')
        .then((result) => {
            setData(result.data.content);
        })
        .catch((error) => {
            console.error(error);
        });
    },[])


    return <div className="w-[800px] mx-auto">
        <div className="max-h-80 overflow-hidden">
            <img className="w-full h-auto" src={dogImage}  alt='cover'/>
        </div>
        <h1 className="text-4xl font-bold  mt-8 mb-4">What is Micro Frontend?</h1>
        <div className="flex items-center mb-4">
            <Tag name={'frontend'} classes={'mr-2'}></Tag>
            <Tag name={'frontend'} classes={'mr-2'}></Tag>
            <Tag name={'frontend'} classes={'mr-2'}></Tag>
        </div>
        <div className="flex items-center mb-4">
            <div className="rounded-full w-[40px] h-[40px] overflow-hidden border border-gray-200">
                <img src={avatar} alt="avatar"/>
            </div>
            <div className="ml-4">
                <p className="text-violet-600 text-sm">Cielo Hung</p>
                <p className="text-gray-400 text-sm tracking-wider">19,Jan,2022</p> 
            </div>
        </div>
        <hr className="border border-gray-100" />
        <div className="py-8 blog-content"> 
            {<div dangerouslySetInnerHTML={{ __html: data }} />}
        </div>

    </div>
}

export default BlogPost;