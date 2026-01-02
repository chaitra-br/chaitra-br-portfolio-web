import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2 className={styles.heading}>Get in Touch</h2>

      <p className={styles.subtext}>
        📍  Based in Bengaluru
      </p>

      <div className={styles.socialCard}>
        {/* EMAIL */}
        <a
          href="mailto:chaitrabr03@gmail.com"
          className={`${styles.socialContainer} ${styles.containerEmail}`}
          aria-label="Email"
        >
          <svg className={styles.socialSvg} viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 
            1.1.9 2 2 2h16c1.1 0 2-.9 
            2-2V6c0-1.1-.9-2-2-2zm0 
            4-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
        </a>

        {/* GITHUB */}
        <a
          href="https://github.com/chaitra-br"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.socialContainer} ${styles.containerGithub}`}
          aria-label="GitHub"
        >
          <svg className={styles.socialSvg} viewBox="0 0 24 24">
            <path d="M12 .5C5.73.5.5 5.74.5 
            12.02c0 5.11 3.29 9.44 
            7.86 10.97.57.1.78-.25.78-.55 
            0-.27-.01-1.16-.02-2.1-3.2.7-3.88-1.37-3.88-1.37
            -.53-1.35-1.29-1.71-1.29-1.71
            -1.05-.72.08-.71.08-.71
            1.16.08 1.77 1.19 1.77 1.19
            1.03 1.77 2.7 1.26 3.36.96
            .1-.75.4-1.26.73-1.55
            -2.55-.29-5.23-1.28-5.23-5.7
            0-1.26.45-2.29 1.19-3.09
            -.12-.29-.52-1.45.11-3.02
            0 0 .97-.31 3.18 1.18
            .92-.26 1.91-.38 2.89-.38
            .98 0 1.97.13 2.89.38
            2.2-1.49 3.18-1.18 3.18-1.18
            .63 1.57.23 2.73.11 3.02
            .74.8 1.19 1.83 1.19 3.09
            0 4.43-2.69 5.41-5.25 5.69
            .41.36.77 1.08.77 2.18
            0 1.57-.02 2.84-.02 3.23
            0 .3.21.66.79.55
            4.56-1.53 7.85-5.86 7.85-10.97
            C23.5 5.74 18.27.5 12 .5z" />
          </svg>
        </a>

        {/* LINKEDIN */}
        <a
          href="https://www.linkedin.com/in/br-chaitra/"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.socialContainer} ${styles.containerLinkedin}`}
          aria-label="LinkedIn"
        >
          <svg className={styles.socialSvg} viewBox="0 0 448 512">
            <path d="M100.28 448H7.4V148.9h92.88zM53.79 
            108.1C24.09 108.1 0 83.5 0 53.8a53.79 
            53.79 0 0 1 107.58 0c0 29.7-24.1 
            54.3-53.79 54.3zM447.9 448h-92.68V302.4
            c0-34.7-.7-79.2-48.29-79.2-48.29 
            0-55.69 37.7-55.69 76.7V448h-92.78V148.9
            h89.08v40.8h1.3c12.4-23.5 42.69-48.3 
            87.88-48.3 94 0 111.28 61.9 
            111.28 142.3V448z"/>
          </svg>
        </a>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/918310738794"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.socialContainer} ${styles.containerWhatsapp}`}
          aria-label="WhatsApp"
        >
         <svg
            className={styles.socialSvg}
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <path
              fill="white"
              d="M16 0C7.163 0 0 7.163 0 16c0 2.82.74 5.588
              2.147 8.028L0 32l8.196-2.11A15.93 15.93 0 0 0
              16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0
              29.09c-2.54 0-5.026-.68-7.193-1.966l-.514-.305
              -4.863 1.252 1.298-4.735-.335-.547A13.03 13.03
              0 0 1 2.91 16C2.91 8.772 8.772 2.91 16 2.91
              c7.228 0 13.09 5.862 13.09 13.09
              0 7.228-5.862 13.09-13.09 13.09zm7.425-9.55
              c-.404-.202-2.395-1.18-2.766-1.314
              -.37-.135-.64-.202-.91.202
              -.27.404-1.044 1.314-1.28 1.583
              -.236.27-.472.303-.876.101
              -.404-.202-1.705-.628-3.248-2.002
              -1.2-1.071-2.01-2.392-2.247-2.796
              -.236-.404-.025-.62.177-.82
              .182-.182.404-.472.607-.708
              .202-.236.27-.404.404-.674
              .135-.27.067-.505-.034-.708
              -.101-.202-.91-2.19-1.247-3.01
              -.328-.787-.66-.68-.91-.693
              -.236-.01-.505-.01-.774-.01
              -.27 0-.708.101-1.078.505
              -.37.404-1.416 1.382-1.416 3.37
              0 1.988 1.45 3.91 1.652 4.18
              .202.27 2.856 4.364 6.917 6.122
              .967.418 1.72.667 2.307.854
              .97.308 1.85.265 2.547.161
              .777-.115 2.395-.977 2.733-1.92
              .337-.944.337-1.753.236-1.92
              -.101-.168-.37-.27-.774-.472z"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
