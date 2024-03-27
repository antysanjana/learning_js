const paymentSucceed = true;
const marks = 90;

function enroll(callback){
    console.log("Enrollment in progress...");

    setTimeout(function(){
        if(paymentSucceed){
            console.log("Payment Successful!");
            callback();
        }else
        {
            console.log("Payment Failed!");
        }
    }, 2000)
   
}

function progress(callback){
    console.log("Course in Progress...");

    setTimeout(function(){
        if(marks >= 80){
            console.log("Congrats! Course Completed!");
            callback();
        }else{
            console.log("Insufficient Marks to get certificate");
        }
    }, 3000)
}

function getCertificate(){
    console.log("Preparing Certificate...");

    setTimeout(function(){
        console.log("Congrats! You got the certificate!");
    }, 1000)
}

enroll(function(){
    progress(getCertificate);
})