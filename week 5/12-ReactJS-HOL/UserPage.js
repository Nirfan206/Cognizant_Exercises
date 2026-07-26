import React from "react";

function UserPage() {

    return (

        <div>

            <h2>Welcome User</h2>

            <h3>Ticket Booking</h3>

            <table border="1" align="center">

                <thead>
                    <tr>
                        <th>Flight</th>
                        <th>Source</th>
                        <th>Destination</th>
                    </tr>
                </thead>

                <tbody>

                    <tr>
                        <td>AI101</td>
                        <td>Hyderabad</td>
                        <td>Delhi</td>
                    </tr>

                    <tr>
                        <td>AI202</td>
                        <td>Chennai</td>
                        <td>Mumbai</td>
                    </tr>

                </tbody>

            </table>

            <button>Book Ticket</button>

        </div>

    );

}

export default UserPage;
