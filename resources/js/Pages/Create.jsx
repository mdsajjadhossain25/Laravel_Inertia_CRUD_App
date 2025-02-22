import { useForm } from '@inertiajs/react'
import React from 'react'

const Create = () => {
    const { data, setData, post, processing, errors } = useForm({
        body: ''
    });
    
    function submit (e) {
        e.preventDefault();
        post('/posts');
    }

  return (
    <div>
        <h1 className='title'>Create Post</h1>
        <div>
            <form onSubmit={submit} >
                <div className='width-1/2 mx-auto'>
                    <label htmlFor='body' className='block text-gray-700'>Body</label>
                    <textarea value={data.body} 
                    onChange={(e) => setData('body', e.target.value)}
                    rows="10" name='body' id='body' className={errors.body && 'form-textarea mt-1 block w-full !ring-red-500'}></textarea>
                    {errors.body && <p className='text-red-500 text-xs mt-1'>{errors.body}</p>}
                </div>
                <button disabled={processing} type='submit' className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Create