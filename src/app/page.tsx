import styles from "./page.module.css";

export default async function Home() {
  const response = await fetch('https://whale-app-zgtcy.ondigitalocean.app/api/under-construction');
  const data = await response.json();

  console.log("Fetched Data (Server-side):", data); // Logs in Terminal

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const { Title, subHeading, contactEmail } = data.data;

  return (
    <div className={styles.page}>
      <main className={styles.main}>
       <h1>{Title}</h1>    
       <h4>{subHeading}</h4>    
       <p>{contactEmail}</p>
      </main>
    </div>
  );
}
