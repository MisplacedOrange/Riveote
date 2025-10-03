import React, { useState, useEffect } from 'react';

const QuoteGenerator = () => {
    const quotes = [
        "Be yourself; everyone else is already taken.",
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "Do what you can, with what you have, where you are.",
        "Believe you can and you're halfway there.",
        "In the middle of every difficulty lies opportunity.",
        "Dream big and dare to fail.",
        "The only limit to our realization of tomorrow is our doubts of today.",
        "Act as if what you do makes a difference. It does.",
        "What you get by achieving your goals is not as important as what you become by achieving your goals.",
        "You miss 100% of the shots you don’t take.",
        "Start where you are. Use what you have. Do what you can.",
        "Everything you can imagine is real.",
        "Life is what happens when you're busy making other plans.",
        "Happiness depends upon ourselves.",
        "Do not wait for the perfect moment. Take the moment and make it perfect.",
        "The best way to predict the future is to create it.",
        "If opportunity doesn’t knock, build a door.",
        "Don’t watch the clock; do what it does. Keep going.",
        "Turn your wounds into wisdom.",
        "Strive not to be a success, but rather to be of value.",
        "Stay hungry, stay foolish.",
        "The harder you work for something, the greater you’ll feel when you achieve it.",
        "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
        "Don't let yesterday take up too much of today.",
        "Push yourself, because no one else is going to do it for you.",
        "You only live once, but if you do it right, once is enough.",
        "Success usually comes to those who are too busy to be looking for it.",
        "I am not a product of my circumstances. I am a product of my decisions.",
        "The best revenge is massive success.",
        "You must be the change you wish to see in the world.",
        "The purpose of our lives is to be happy.",
        "Life is short, and it is up to you to make it sweet.",
        "You are never too old to set another goal or to dream a new dream.",
        "It does not matter how slowly you go as long as you do not stop.",
        "Failure is another stepping stone to greatness.",
        "Don’t count the days, make the days count.",
        "Believe in yourself and all that you are.",
        "Sometimes you win, sometimes you learn.",
        "The only way to do great work is to love what you do.",
        "Do what makes your soul shine.",
        "Work hard in silence, let success make the noise.",
        "Don’t wait. The time will never be just right.",
        "Keep your face always toward the sunshine—and shadows will fall behind you.",
        "Everything you’ve ever wanted is on the other side of fear.",
        "A journey of a thousand miles begins with a single step.",
        "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        "You don’t find the happy life. You make it.",
        "Your life does not get better by chance, it gets better by change.",
        "The best preparation for tomorrow is doing your best today.",
        "Don’t be afraid to give up the good to go for the great.",
        "It’s not whether you get knocked down, it’s whether you get up.",
        "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
        "You are braver than you believe, stronger than you seem, and smarter than you think.",
        "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.",
        "It always seems impossible until it is done.",
        "Make each day your masterpiece.",
        "You don’t have to be great to start, but you have to start to be great.",
        "Failure will never overtake me if my determination to succeed is strong enough.",
        "If you’re going through hell, keep going.",
        "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
        "Just keep going. Everything you need will come to you at the perfect time.",
        "The secret of getting ahead is getting started.",
        "Be the type of person you want to meet.",
        "Little by little, one travels far.",
        "Success is not in what you have, but who you are.",
        "Energy and persistence conquer all things.",
        "Don’t limit your challenges. Challenge your limits.",
        "Action is the foundational key to all success.",
        "Success is walking from failure to failure with no loss of enthusiasm.",
        "Good things come to people who wait, but better things come to those who go out and get them.",
        "To live a creative life, we must lose our fear of being wrong.",
        "Success starts when you decide excuses aren’t good enough.",
        "Your comfort zone is beautiful, but nothing ever grows there.",
        "Consistency beats intensity when intensity doesn’t show up.",
        "The future favors those who keep showing up.",
        "Start messy, finish strong.",
        "Big results begin with small habits.",
        "Courage is doing it afraid, not waiting to feel brave.",
        "The next level of your life will demand a different you.",
        "You weren’t born to be average — you were born to be authentic.",
        "Progress isn’t always loud; sometimes it’s just not quitting.",
        "Discipline is choosing what you want most over what you want now.",
        "Even slow steps move you forward.",
        "Growth is uncomfortable because you’ve never been here before.",
        "Be stubborn about your goals, flexible about your path.",
        "You're not behind — you're just building something real.",
        "The best project you’ll ever work on is you.",
        "Every setback plants the seed of a comeback.",
        "Small steps daily become unstoppable momentum.",
        "Talk less about your goals. Build more of them.",
        "Don’t chase motivation — build systems that don’t need it.",
        "One bold move can shift your entire direction.",
        "Do it tired. Do it unsure. Do it anyway.",
        "Clarity comes through action, not thought.",
        "Your goals don’t care how you feel — they care what you do.",
        "Momentum doesn't come from waiting. It comes from moving.",
        "Being average is easy. Being excellent is a decision.",
    ];
    const [quote, setQuote] = useState("Try clicking 'Generate' or pressing space to generate a new quote!");


    const generateQuoteFromGPT = async () => {
        try {
            const response = await fetch("http://localhost:5000/generate-quote", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const data = await response.json();
            setQuote(data.quote || "Failed to fetch quote.");
        } catch (err) {
            console.error("GPT fetch error:", err);
            setQuote("Something went wrong.");
        }
    };
    
    const generateQuote = () => {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * quotes.length);
        } while (quotes[newIndex] === quote);
        setQuote(quotes[newIndex]);
    };

    const copyQuote = () => {
        navigator.clipboard.writeText(quote)
            .then(() => alert("Copied to clipboard!"))
            .catch(err => console.error("Failed to copy quote: ", err));
    };


    useEffect(() => {
        
        const handleKeyDown = (e) => {
            if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                generateQuote();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [quote]);

    return (
        <div style={{
            maxWidth: "900px",
            margin: "2rem auto",
            width: "95%",
        }}>
            <h2 style={{
                textAlign: "center",
                color: "#fff",
                fontSize: "2rem",
            }}>
                Quote Generator
            </h2>
            <section style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "stretch",
                minHeight: "130px",
                height: "90%",
                marginTop: "2rem",
                marginBottom: "2rem",
                padding: "2rem",
                background: "#343c46",
                borderRadius: "8px",
                maxWidth: "900px",
            }}>
                <blockquote style={{
                    fontSize: "1.5rem",
                    color: "#fff",
                    margin: 0,
                }}>
                    {quote}
                </blockquote>
                <div style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "center",
                    marginTop: "6rem",
                }}>
                    <button onClick={copyQuote}>Copy</button>
                    <button onClick={generateQuoteFromGPT}>Generate</button>

                </div>
            </section>
        </div>
    );
};




export default QuoteGenerator;
