import React from "react";

function BlogDetails() {

    const blogs = [
        {
            id: 1,
            title: "Introduction to React",
            author: "Irfan"
        },
        {
            id: 2,
            title: "Java Full Stack",
            author: "Cognizant"
        },
        {
            id: 3,
            title: "Spring Boot Guide",
            author: "Oracle"
        }
    ];

    return (

        <div>

            <h2>Blog Details</h2>

            <ul>

                {blogs.map((blog) => (

                    <li key={blog.id}>
                        <b>{blog.title}</b> - {blog.author}
                    </li>

                ))}

            </ul>

        </div>

    );

}

export default BlogDetails;
