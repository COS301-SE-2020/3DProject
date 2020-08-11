//created by Jacobus Janse van Rensburg
// file intended to handel all the dynamic allocations and api calls done on the doctorSchedule.html page

//================================================================================================
//Function Developed by: Jacobus Janse van Rensburg
//function that sets all the various aspects of the page bassed on the doctor that logged in
function initPage(){
    setDoctorInfo();
    setTodaysBookings();

}

//================================================================================================
// Function developed by: Jacobus janse van Rensburg
//function to fetch details of the doctor to populate the page
function setDoctorInfo()
{
    var response = fetch("/getDoctor",{
        method:"POST",
        headers:{'Content-Type': 'application/json; charset=UTF-8'}
    })

    response.then( res=> res.json().then( data => {

        console.log("Doctors surname: "+data.surname);
        // set the surname field 
        document.getElementById("doctorsName").innerHTML=data.surname+" ("+data.name+")";

    }));
}

//================================================================================================
// Function developed by: Jacobus janse van Rensburg
// function to fetch all the meetings that the doctor will have for today
function setTodaysBookings()
{
    var response = fetch("/getTodaysBookings",{
        method:"POST",
        headers:{'Content-Type': 'application/json; charset=UTF-8'}
    });

    response.then(res => res.json().then(data=>{
      //Send the data to various functions that will populate the different fields of the bookings

    //   maybe sort the times in accending order ?? then populate the fields

        populateBookings(data);

    }));
}

//================================================================================================
// Function developed by: Jacobus janse van Rensburg
// Function used to populate the fields of the bookings retrieved
function populateBookings(data)
{
    for (var i in data)
    {
        // get the patients information 
        
        var response = fetch("/singlePatient",{
            method:"POST",
            headers:{'Content-Type': 'application/json; charset=UTF-8'},
            body: JSON.stringify({"patient":data[i].patient})
        });
        response.then(res=> res.json().then(patient=> {
        //    do what needs to be done with the patients information
        }));

    }
}
