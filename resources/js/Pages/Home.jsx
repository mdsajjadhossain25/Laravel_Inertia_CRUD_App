import Layout from "../Layouts/Layout";
import {Head, Link, usePage } from "@inertiajs/react";
import { useRoute } from '../../../vendor/tightenco/ziggy';
import React, { useState } from "react";

function Home({ posts }) {
    const route = useRoute();
    const {flash} = usePage().props;
    const [flashMsg, setFlashMsg] = useState(flash.message);
    const {component} = usePage();

    setTimeout(() => {
        setFlashMsg(null);
    }
    , 3000);

    return (
        <>
            <Head title={component} />
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900 p-6">
                <div className="max-w-2xl text-center">
                    <h1 className="title text-4xl font-bold mb-4 text-blue-600">
                        Welcome
                    </h1>
                    {flashMsg && (
                        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
                            <span className="block sm:inline">{flashMsg}</span>
                        </div>
                    )}
                    <div>
                        {posts.data.map((post) => (
                            <div key={post.id} className="mb-4 border-b pb-4">
                                <div>
                                    <span>Posted on: </span>
                                    <span>
                                        {" "}
                                        {new Date(
                                            post.created_at
                                        ).toLocaleTimeString()}{" "}
                                    </span>
                                </div>
                                <p className="text-gray-700 font-medium">
                                    {post.body}
                                </p>
                                {/* <Link
                                    href={`/posts/${post.id}`}
                                    className="text-link"
                                >
                                    Read More...
                                </Link> */}
                                <Link
                                    href={route('posts.show', post.id)}
                                    className="text-link"
                                >
                                    Read More...
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="py-4 px-4">
                    {posts.links.map((link) =>
                        link.url ? (
                            <Link
                                key={link.label}
                                href={link.url}
                                className={`text-blue-600 hover:underline p-1 mx-1 ${
                                    link.active ? "font-bold" : ""
                                }`}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                            />
                        ) : (
                            <span
                                key={link.label}
                                className="p-1 mx-1 text-slate-300"
                                dangerouslySetInnerHTML={{ __html: link.label }}
                            ></span>
                        )
                    )}
                </div>
            </div>
        </>
    );
}
Home.layout = (page) => <Layout children={page} title="Home" />;

export default Home;
