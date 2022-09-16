import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

//Function that displays the home page contents

export default function Home() {
  return (
    <>
      <Head>
        {/*Added page title and meta data */}
        <title>Linda Machivenyika | Home</title>
        <meta
          name="keywords"
          content="nexjs, reactjs, fullstack, web development"
        />
      </Head>
      <div className={styles.container}>
        {/*Below div is for leaf images that I used to style and animate my background */}
        <div className={styles.leaf}>
          <div>
            <Image
              src="http://www.pngmart.com/files/1/Fall-Autumn-Leaves-Transparent-PNG.png"
              height="85px"
              width="85px"
              alt="leaf"
            />
          </div>
          <div>
            <Image
              src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Pictures-Collage-PNG.png"
              height="85px"
              width="85px"
              alt="leaf"
            />
          </div>
          <div>
            <Image
              src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Clip-Art-PNG.png"
              height="85px"
              width="85px"
              alt="leaf"
            />
          </div>
          <div>
            <Image
              src="http://www.pngmart.com/files/1/Green-Leaves-PNG-File.png"
              height="85px"
              width="85px"
              alt="leaf"
            />
          </div>
          <div>
            <Image
              src="http://www.pngmart.com/files/1/Transparent-Autumn-Leaves-Falling-PNG.png"
              height="85px"
              width="85px"
              alt="leaf"
            />
          </div>
          <div>
            <Image
              src="http://www.pngmart.com/files/1/Green-Leaves-PNG-File.png"
              height="85px"
              width="85px"
              alt="leaf"
            />
          </div>
          <div>
            <Image
              src="http://www.pngmart.com/files/1/Realistic-Autumn-Fall-Leaves-PNG.png"
              height="85px"
              width="85px"
              alt="leaf"
            />
          </div>
        </div>
        {/*Name tittle */}
        <div className={styles.name}>
          <h1 className="title">
            <span className="title-word title-word-1">Linda</span>
            <span className="title-word title-word-2">Machivenyika</span>
          </h1>
        </div>
        {/*Used some styles jsx to style the h1 title and p element as per task requrement and learning purposes 
      but however chose to use CSS files for most of the styling; font size adjusted and color changed accordingly*/}
        <style jsx>
          {`
            h1 {
              color: aquamarine;
              font-size: 8.5em;
            }
            p {
              color: rgb(253, 253, 254);
            }
            a {
              font-size: 20px;
            }
            span {
              margin: 10px;
            }
          `}
        </style>
        <p className={styles.text1}>Full Stack Web Developer</p>
        <span>
          <Image
            className={styles.img}
            src="/myphoto1.jpg"
            alt="my photo"
            width={300}
            height={350}
          />
        </span>
        {/*Link that directs to projects page */}
        <Link href="/projects">
          <a className={styles.btn}>See projects</a>
        </Link>
      </div>
    </>
  );
}

/*Sources used include Hyperiondev notes, previous tasks, Geeksforgeeks, W3Schools, Alvarotrigo.com, You Tube, Google.com*/
