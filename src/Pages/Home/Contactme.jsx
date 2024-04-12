function Contactme(){
    return(
        <section id="Contact" className="contact--section">
            <div>
                <p className="sub--title">Get in touch</p>
                <h2>Contact Me</h2>
                <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam suscipit accusamus aut commodi vitae esse quisquam, dignissimos eaque ipsam neque nam deleniti ea possimus officiis ab obcaecati error omnis vel.
                </p>
            </div>
            <form className="contact--form--cotainer">
                <div className="container">
                    <label htmlFor="first-name" className="contact--label">
                        <span className="text-md"> First Name</span>
                        <input
                         type="text" 
                         className="contact--input text-md" 
                         name="first-name"
                         id="first-name"
                         required
                         />
                    </label>
                    <label htmlFor="last-name" className="contact--label">
                        <span className="text-md"> Last Name</span>
                        <input
                         type="text" 
                         className="contact--input text-md" 
                         name="last-name"
                         id="last-name"
                         required
                         />
                    </label>
                    <label htmlFor="email" className="contact--label">
                        <span className="text-md">Email</span>
                        <input
                         type="email" 
                         className="contact--input text-md" 
                         name="email"
                         id="email"
                         required
                         />
                    </label>
                    <label htmlFor="phone-number" className="contact--label">
                        <span className="text-md">Phone-numebr</span>
                        <input
                         type="number" 
                         className="contact--input text-md" 
                         name="phone-number"
                         id="phone-number"
                         required
                         />
                    </label>
                </div>
                <label htmlFor="choode-topic" className="contact--label">
                        <span className="text-md">Choose a topic</span>
                        <select id="choose-topic" className="contact--input text-md">
                            <option>Select One...</option>
                            <option>Item 1</option>
                            <option>Item 2</option>
                            <option>Item 3</option>
                        </select>
                    </label>
                    <label htmlFor="message" className="contact--label">
                        <span className="text-md">Message</span>
                        <input
                         type="text" 
                         className="contact--input text-md" 
                         id="message"
                         rows = "8"
                         placeholder="Type your message"
                         required
                         />
                    </label>
                    <label htmlFor="checkboc" className="checkbox--label">
                        <input type="checkbox" required name="checkbox" id="chekcbox"/>
                        <span className="text-sm">i accpect the terms</span>
                    </label>
                    <div><buttton className="btn btn-primary contact--form--btn">Submit</buttton></div>
            </form>
        </section>
    )
}

export default Contactme;