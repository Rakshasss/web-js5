document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const personalNumber = document.getElementById("personal_number").value;
    const mobileNumber = document.getElementById("mobile_number").value;
    const jobDescription = document.getElementById("job_description").value;

    console.log("Personal Number:", personalNumber);
    console.log("Mobile Number:", mobileNumber);
    console.log("Job Description:", jobDescription);

    document.getElementById("myForm").reset();
});