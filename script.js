/* Students: Please use this week's project for Week 16: Assignment 14: Your Mobile App. 
     You will need to replace the contents of this JavaScript file with your own work, 
     and create any other files, if any, required for the assignment.
     When you are done, be certain to submit the assignment in both Repl.it and Canvas to be graded. */
'use strict',
console.log("let's start");
// define a react page component using traditional pure JS
function FinalList(props) {
  // return some output for the component using JSX
  return <div className="list">
  <ol>
  {
    // use map() to loop thru array passed in props.list, creating new element for each array value
    props.list.map(
      (item, index) => (
        <li key={index}>
        <a href={item.url}><img src={item.imagepath} /></a><br />
        <p>{item.description} {item.date}<br />
        {item.url}</p>
        </li>
      )
    )
  }
  </ol>
  </div>
}
console.log("props function";)
// load dataset from external JSON using jQuery
