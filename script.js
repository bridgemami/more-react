/* Students: Please use this week's project for Week 16: Assignment 14: Your Mobile App. 
     You will need to replace the contents of this JavaScript file with your own work, 
     and create any other files, if any, required for the assignment.
     When you are done, be certain to submit the assignment in both Repl.it and Canvas to be graded. */
'use strict',
console.log("let's start");
// define a react page component using traditional pure JS
function FinalList(final) {
  // return some output for the component using JSX
  return <div className="list">
  <h1>{final.message1}</h1>
  <ol>
  {
    // use map() to loop thru array passed in props.list, creating new element for each array value
    final.list.map(
      (item, index) => (
        <li key={index}>
        <a href={item.url}><img src={item.imagepath} /></a><br />
        {item.description}<br /> {item.date}<br />
        <a href={item.url} alt={item.alt}>{item.url}</a><hr /> <br />
        </li>
      )
    )
  }
  </ol>
  </div>
}
console.log("props function");
// load dataset from external JSON using jQuery
jQuery.getJSON(
  //getJson() takes 2 arguments: 1st is the path to file to JSON file and 2nd is a function to run with data
  'data.json', function(jsonFromJquery) {
    //inside this function code can run that accesses the json data
    console.log(jsonFromJquery);
  // call react render() to output a component into an existing html element
    // pass properties as attributes: list passes array stored in var named data
    // message1  passed as literal values
    ReactDOM.render(
      <FinalList list={jsonFromJquery} message1= "My Assignments from CS50C" />,
      document.getElementById('myFinal')
    );
  }
)