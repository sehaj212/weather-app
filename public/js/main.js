const submitbtn=document.getElementById('submitbtn');
const cityName=document.getElementById('cityName');
const city_name=document.getElementById('city_name');
const temp_real_val=document.getElementById('temp_real_val');
const temp_status=document.getElementById('temp_status');

const datahide=document.querySelector('.middle_layer');

const getInfo=async(event)=>{
    event.preventDefault();
    let cityVal=cityName.value;
    if(cityVal===""){
        city_name.innerText=`Enter a city`;
        datahide.classList.add('data_hide');
    }
    else{
        try{
            let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=c9f00961be600c92f01f746253db632e`;
            const response=await fetch(url);                /*in JSON aa rha hai data and we have to convert it to string*/ 
            const data=await response.json();
            // console.log(data);                               //this is wroking therefore url is working
            const arr=[data];                               //array of objects

            city_name.innerText=`${arr[0].name}, ${arr[0].sys.country}`;
            temp_real_val.innerText=arr[0].main.temp;                              //inside span tag ajega temperature
            // temp_status.innerText=arr[0].weather[0].main;

            const tempMood=arr[0].weather[0].main;
            if(tempMood=="Clear")
            {
                temp_status.innerHTML="<i class='fa fa-sun' style='color:#eccc68;'> </i>";
            }
            else if(tempMood=="Clouds"){
                temp_status.innerHTML="<i class='fa fa-cloud' style='color:#f1f2f6;'> </i>";
            }
            else if(tempMood=="Rain"){
                temp_status.innerHTML="<i class='fa fa-cloud-rain' style='color:#a4b0be;'> </i>";
            }
            else{
                temp_status.innerHTML="<i class='fa fa-sun' style='color:#eccc68;'> </i>";
            }
            datahide.classList.remove('data_hide');

        }catch{
            city_name.innerText=`Enter the city name properly`;
            datahide.classList.add('data_hide');
        }
    }
}
submitbtn.addEventListener('click',getInfo);