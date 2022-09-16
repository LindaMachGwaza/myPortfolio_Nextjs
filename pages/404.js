import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
//Custom 404 error page if user navigates to non existing page an error will show
//After 3sec the user will be redirected to the home page. Used the useEffect and useRouter hooks to do that
const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="not-found">
      <h1>Oooops.....</h1>
      <h2>Page cannot be found</h2>
      <p>
        Go back to the{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;

/*Sources used include Hyperiondev notes, previous tasks, Geeksforgeeks, W3Schools, Alvarotrigo.com, You Tube, Google.com*/
