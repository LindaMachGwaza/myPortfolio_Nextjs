import Head from "next/head";
import Link from "next/link";

//Function to display the about page
const About = () => {
  return (
    <>
      <Head>
        {/*Added page title and meta data */}
        <title>Linda Machivenyika | About</title>
        <meta
          name="keywords"
          content="nexjs, reactjs, fullstack, web development"
        />
      </Head>
      <div className="about">
        <h1>About Me</h1>
        <p>
          I am passionate about web development, animations and creating
          intuitive, dynamic user experiences. I have learned in my Bootcamp
          among other skills; HTML, CSS, Javascript, Reactjs, Nextjs, MongoDB,
          Express and Nodejs.
        </p>
      </div>
      <div>
        <Link href="https://drive.google.com/file/d/1fj1h-d3JgN37lbHOaWWZPDOOCGU2egn_/view?usp=sharing">
          <a className="btn">Resume</a>
        </Link>
      </div>
    </>
  );
};

export default About;

/*Sources used include Hyperiondev notes, previous tasks, Geeksforgeeks, W3Schools, Alvarotrigo.com, You Tube, Google.com*/
