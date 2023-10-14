function calculateAge(){
    const dobInput=document.getElementById('dob')
    const resultDiv=document.getElementById('result')


    const dob= new Date(dobInput.value)
    const currentDate=new Date()
    
    if(dobInput.checkValidity()){
        if (dob > currentDate){
            resultDiv.innerHTML='Please enter a date in the past.'
        }else{
            const ageInMillisecond = currentDate - dob
            const ageInSeconds = ageInMillisecond /1000
            const ageInMinutes = ageInSeconds / 60
            const ageInHours = ageInMinutes / 60
            const ageInDays = ageInHours /24
            const ageInMonths = ageInDays/30.436875
            const ageInYears = ageInMonths/12

            resultDiv.innerHTML = `Your age is approximately ${Math.floor(ageInYears)} Years, ${Math.floor(ageInMonths % 12)} Months, and ${Math.floor(ageInDays % 30)} Days.`
        }
    } else {
        resultDiv.innerHTML ='Please enter a valid date.'

    }
    
}