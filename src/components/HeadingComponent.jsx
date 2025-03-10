import CatFacts from "./CatFacts";
import Counter from "./Counter";
import MyButton from "./MyButton";

export default function HeadingComponent({name="Adam"}){
    const greetings = ["how are you", 
        "how's it going", 
        "where were you when the Westfold fell",
        "DId yOU pUT YOUr NAmE iN The goBlet Of fIRE",
        "this is the way",
        "I was there the day Horus slew the Emperor"
    ];
    const sayHello = () => {
        let randomGreeting = greetings[Math.floor(Math.random() * greetings.length)]
	    return `Hello ${name}, ${randomGreeting}`;
    }
    return(
        <div>
            <h1>This is my component</h1>
            <div>My name is {name}</div>
            <div>{sayHello()}</div>
            <MyButton />
            <Counter />
            <CatFacts />
        </div>
    )
}