// function to fetch data (joke) from api.
const generateJoke= async()=>{
    const response = await fetch('https://official-joke-api.appspot.com/random_joke')
    if (response.status==200) {
        const joke=await response.json()
        myjoke=`${joke.setup} <br> ${joke.punchline}`
        JokeQA.innerHTML=myjoke;
        // storing last joke to local storage.
        localStorage.setItem('lastjoke',myjoke);
        
    
        
    }else{
        alert('API call failed')
    }
}

window.addEventListener('load',()=>{
    const lastJoke= localStorage.getItem('lastjoke');
     JokeQA.innerHTML=lastJoke;
 })
