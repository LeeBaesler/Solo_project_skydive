import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function JumpHistoryDetailsWithParams() {
   let logbook = useSelector(store => store.logbook)
   
   let params = useParams();
   console.log(params);

   let logbookid = params.logbookid;

   let book = logbook.find(book => book.id === Number(logbookid));

   console.log("Found Log Entry", book);
   if (book === undefined) {
    return <h2>Sorry, there are no jump details you are looking for</h2>
   }

   return (
    <>
    <h1>Jump History Details</h1>
    <table>
        <tbody>
            <tr>
                <td> Jump Number:</td>
                <td>{book.jump_number}</td>
            </tr>
            <tr>
                <td> Date:</td>
                <td>{new Date(book.date).toDateString()}</td>
            </tr>
            <tr>
                <td> Location:</td>
                <td>{book.place}</td>
            </tr>
            <tr>
                <td> Aircraft:</td>
                <td>{book.aircraft}</td>
            </tr>
            <tr>
                <td> Equipment:</td>
                <td>{book.equipment}</td>
            </tr>
            <tr>
                <td> Altitude:</td>
                <td>{book.altitude}</td>
            </tr>
            <tr>
                <td> Freefall:</td>
                <td>{book.freefall}</td>
            </tr>
            <tr>
                <td> Total Freefall:</td>
                <td>{book.total_freefall}</td>
            </tr>
            <tr>
                <td> Description:</td>
                <td>{book.description}</td>
            </tr>
        </tbody>
    </table>
    </>
   )

}

export default JumpHistoryDetailsWithParams