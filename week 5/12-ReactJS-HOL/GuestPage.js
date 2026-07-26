import React from "react";

function GuestPage() {

    return (

        <div>

            <h2>Welcome Guest</h2>

            <h3>Flight Details</h3>

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

            <p>Please Login to Book Tickets.</p>

        </div>

    );

}

export default GuestPage;
