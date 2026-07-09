
const Contactform = () => {
    return (
        <div>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button onClick={() => alert("Form submitted!")}>
                Submit
            </button>
        </div>
    );
};

export default Contactform;
