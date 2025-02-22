import { Link, useForm } from "@inertiajs/react";
import React from "react";
import { useRoute } from '../../../vendor/tightenco/ziggy';

const Show = ({post}) => {
    const {delete:destroy} = useForm();

    function submit(e) {
        e.preventDefault();
        // destroy(`/posts/${post.id}`);
        destroy(route('posts.destroy', post.id));
    }

    const route = useRoute();

    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900 p-6">
                <div>
                    <div className="mb-4 border-b pb-4">
                        <div>
                            <span>Posted on: </span>
                            <span>
                                {" "}
                                {new Date(post.created_at).toLocaleTimeString()}{" "}
                            </span>
                        </div>
                        <p className="text-gray-700 font-medium">{post.body}</p>
                        <div className="mt-4 flex items-center justify-end gap-2">
                            <form onSubmit={submit}>
                            <button type="submit" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Delete</button>
                            </form>
                            <Link href={route('posts.edit', post.id)} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Update</Link>
                        </div>

                    </div>
                </div>  
            </div>
        </>
    );
};

export default Show;
