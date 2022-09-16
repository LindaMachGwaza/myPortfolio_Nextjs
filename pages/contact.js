import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faEnvelope, faPhone, faMapMarker} from "@fortawesome/free-solid-svg-icons"; // import the brand icon

//Function to handle the contact form and information
const Contact = () => {
    async function handleOnSubmit (e) {
        e.preventDefault();
        const formData = {}
        Array.from(e.currentTarget.element).forEach(field => {
            if(! field.name) return;
            formData[field.name] = field.value;
        });
        fetch("/api/mail", {
            method: "post",
            body: JSON.stringify(formData)
        })
    }
    return ( 
        <>
        <Head>
      {/*Added page title and meta data */}
      <title>Linda Machivenyika | Contact</title>
      <meta name='keywords' content='nexjs, reactjs, fullstack, web development'/>
    </Head>
    <div>
        <div className="form-container">
            <h1>Get in touch...</h1>
            {/*Used some style jsx as per task instruction */}
            <style jsx>{`
            label {
                display: block;
                margin-bottom: .2em;
                color: rgba(3, 2, 39, 0.84);
                font-size: 18px
            }
            input, textarea {
                padding: 18px 26px;
                background-color: aquamarine;
                border: none;
                border-radius: .2em
               
               
            }
            h1 {
                color: rgba(3, 2, 39, 0.84)
            }
            textarea {
                padding: 30px 48px
            }

            `}

            </style>
            {/*Contact form */}
            <form method="post" onSubmit={handleOnSubmit}>
                <p>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name"/>
                </p>
                <p>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email"/>
                </p>
                <p>
                    <label htmlFor="message">Message</label>
                    <textarea name="message"/>
                    <p>
                        <a className="btn">Send</a>
                    </p>
                </p>
            </form>
        </div>
        {/*Contact information */}
        <div className="contacts">
               <p><FontAwesomeIcon icon={faEnvelope}/>lindamachivenyika@gmail.com</p> 
                <p><FontAwesomeIcon icon={faPhone}/>+27733945383</p>
                <p><FontAwesomeIcon icon={faMapMarker}/>Cape Town, ZA</p>
            </div>
        </div>
        </>
     );
}
 
export default Contact;

/*Sources used include Hyperiondev notes, previous tasks, Geeksforgeeks, W3Schools, Alvarotrigo.com, You Tube, Google.com*/