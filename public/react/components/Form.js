import React,{useState} from 'react';


export const Form = ({}) => {
	const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tags, setTags] = useState('');

	return <>
		{
        
        <form>
            <label>
                Title:
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='title'/>
            </label>

            <label>
                Content:
                <input type="text" value={content} onChange={(e) => setContent(e.target.value)} placeholder='content'/>
            </label>

            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='name'/>
            </label>

            <label>
                Email:
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email'/>
            </label>

            <label>
                Tags:
                <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} placeholder='tags'/>
            </label>

    
        </form>

            
	
		}


	</>
} 