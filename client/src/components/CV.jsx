import styles from "./CV.module.css";

export default function CV() {
  return (
    <a
      href="/Uko_Uwatt.pdf"
      target="_blank"
      className={`${styles.cv} font-bold text-lg`}
    >
      View Resume
    </a>
  );
}
