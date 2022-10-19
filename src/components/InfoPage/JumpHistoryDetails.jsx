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
    return <h2>Sorry, this isn't the book you're looking for</h2>
   }

   return (
    <>
    <h1>Jump History Details (with params)</h1>
    <table>
        <tbody>
            <tr>
                <td> Jump Number:</td>
                <td>{book.jump_number}</td>
            </tr>
        </tbody>
    </table>
    </>
   )

}

export default JumpHistoryDetailsWithParams