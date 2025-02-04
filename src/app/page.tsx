import styles from "./page.module.css";

export default async function Home() {
  const response = await fetch('https://whale-app-zgtcy.ondigitalocean.app/api/under-construction', {cache: 'no-store'});
  const data = await response.json();

  console.log("Fetched Data (Server-side):", data); // Logs in Terminal

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const { Title, subHeading, contactEmail } = data.data;

  return (
    <div className={styles.container}>
        <div className={styles.containerInner}>
        <img src="images/Anamrina.png" alt="Recruitment Co. Logo" className={styles.logo} />
        <h1>{Title}</h1>
        <p>{subHeading}</p>    
        <p>{contactEmail}</p>
    </div>
    </div>
  );
}
