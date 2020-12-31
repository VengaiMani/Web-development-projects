var quote=["The greatest glory in living lies not in never falling, but in rising every time we fall.",
        "The way to get started is to quit talking and begin doing.",
        "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma's - which is living with the results of other people's thinking.",
        "If life were predictable it would cease to be life, and be without flavor.",
        "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        "Life is what happens when you're busy making other plans.",
        "Always remember that you are absolutely unique. Just like everyone else.",
        "Don't judge each day by the harvest you reap but by the seeds that you plant.",
        "The future belongs to those who believe in the beauty of their dreams.",
        "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
        "It is during our darkest moments that we must focus to see the light."];
var author=["Nelson Mandela","Walt Disney","Steve Jobs","Eleanor Roosevelt","Oprah Winfrey","James Cameron","John Lennon",
        "Margaret Mead","Robert Louis Stevenson","Eleanor Roosevelt","Benjamin Franklin","Mother Terasa","Aristotle"];

function newQuote(){
    var a=Math.floor((Math.random()*13));
    document.getElementById("quote").innerHTML=quote[a];
    document.getElementById("author").innerHTML="- "+author[a];
}