import Head from "next/head";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faReact, faNodeJs } from "@fortawesome/free-brands-svg-icons"; // import the brand icon
import styles from "../../styles/Projects.module.css";
import { motion } from "framer-motion";
import Image from "next/image";

//Function to display the projects
const Projects = () => {
  return (
    <>
      <Head>
        {/*Added page title and meta data */}
        <title>Linda Machivenyika | Projects</title>
        <meta
          name="keywords"
          content="nexjs, reactjs, fullstack, web development"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
      </Head>
      <div className={styles.project}>
        <h1>Projects</h1>
      </div>
      {/*Added motion to the div to allow animation of the items; they will be pushed to one side of the page 
    and moves back to original posion with a bounce */}
      <motion.div
        className="row row-cols-1 row-cols-md-2 g-4"
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", duration: 1, bounce: 0.6 }}
      >
        <div className="col">
          {/*Used framer motion so that on hover of the cards the scale increases */}
          <motion.div className="card" whileHover={{ scale: 1.1 }}>
            <Image src="/quiz1.png" 
            className="card-img-top" 
            alt="quiz app" 
            width={900}
            height={600}
            />
            <div className="card-body">
              <h5 className="card-title">
                <FontAwesomeIcon icon={faReact} />
                Quiz Game
              </h5>
              <div className="card-text">
                Simple game built using React.
                <br />
                <br /> To start; user enters name and clicks play button. The
                game has a timer whereby player loses game if time runs out.
              </div>
              <div className="card-text">
                On selection of a correct answer player earns money and the
                amount is shown on the pyramid. Money is lost by player on
                incorrect answer.
              </div>
              <Link href="https://rocky-beyond-08288.herokuapp.com/">
                <a className="btn">See more</a>
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="col">
          {/*Used framer motion so that on hover of the cards the scale increases */}
          <motion.div className="card" whileHover={{ scale: 1.1 }}>
            <Image
              src="/itunes3.png"
              className="card-img-top"
              alt="itunes app"
              width={900}
              height={600}
            />
            <div className="card-body">
              <h5 className="card-title">
                <FontAwesomeIcon icon={faNodeJs} />
                iTunes search app
              </h5>
              <div className="card-text">
                Fullstack app built using React and Express. <br /> <br />
                The code for interfacing with the third-part API was handled by
                the backend of the application. User enters a search term and selects
                media type.
              </div>
              <div className="card-text">
                From the selection, the user can create a favourites list as
                well as remove an item from favourites.
              </div>
              <Link href="https://itunes-web-app.herokuapp.com/">
                <a className="btn">See more</a>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Projects;

/*Sources used include Hyperiondev notes, previous tasks, Geeksforgeeks, W3Schools, Alvarotrigo.com, You Tube, Google.com*/
