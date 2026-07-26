import React from "react";

function CourseDetails() {

    const courses = [
        {
            id: 1,
            name: "React",
            duration: "30 Hours"
        },
        {
            id: 2,
            name: "Spring Boot",
            duration: "40 Hours"
        },
        {
            id: 3,
            name: "Angular",
            duration: "35 Hours"
        }
    ];

    return (

        <div>

            <h2>Course Details</h2>

            <ol>

                {courses.map((course) => (

                    <li key={course.id}>
                        {course.name} - {course.duration}
                    </li>

                ))}

            </ol>

        </div>

    );

}

export default CourseDetails;
