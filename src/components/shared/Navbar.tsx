import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {


  return (
    <div className={styles.container}>
      <div className={styles.logo_container}>
      <svg xmlns="http://www.w3.org/2000/svg" width="163" height="40" viewBox="0 0 163 40" fill="none">
        <path fillRule="evenodd" clip-rule="evenodd" d="M127.443 2.85369C128.344 1.55455 129.761 0.639238 131.547 0.181583C132.448 -0.0398624 135.636 -0.0693885 135.991 0.152057C136.109 0.240635 136.168 0.801631 136.168 2.08602V3.88711L134.839 3.82805C132.167 3.69519 131.267 4.52192 131.06 7.25308L130.957 8.5227H133.274H135.577V10.4419V12.3611H133.289H131.001V19.3735V26.386H128.639H126.277V19.3735V12.3611L123.841 12.3316L121.405 12.2873L122.689 10.4124L123.988 8.53746L125.11 8.5227H126.232L126.321 6.85448C126.41 5.0091 126.72 3.91663 127.443 2.85369ZM65.7484 26.386V13.4683V0.550639H68.1104H70.4725V6.08678C70.4725 12.1396 70.5021 12.2873 71.255 10.9881C73.0561 7.9174 78.1198 7.32687 80.8805 9.86612C82.1353 11.0176 82.9325 12.5235 83.3311 14.5017C83.5673 15.668 83.5673 19.2849 83.3311 20.4069C82.5192 24.2748 80.4376 26.3417 77.0421 26.6369C74.6357 26.8288 72.3327 25.7511 71.255 23.9205C70.7383 23.0347 70.4725 23.079 70.4725 24.0534C70.4725 24.4815 70.4282 25.1902 70.3839 25.6035L70.2806 26.386H68.0219H65.7484ZM77.7064 13.6012C77.1897 12.863 76.5254 12.4496 75.5067 12.2282C74.6505 12.051 74.6357 12.051 73.7647 12.2134C72.8789 12.3906 72.3474 12.7006 71.6979 13.4535C70.8564 14.4131 70.6202 15.2842 70.6202 17.4396C70.6202 20.2741 71.1664 21.5584 72.7165 22.3114C74.8424 23.3595 77.1307 22.6804 78.046 20.7317C79.0203 18.6797 78.8579 15.2842 77.7064 13.6012ZM157.87 13.4683V26.386H160.232H162.594V13.4683V0.550654H160.232H157.87V13.4683ZM86.0329 14.5755C86.9777 11.121 89.2808 9.02464 92.8829 8.37507C94.0049 8.16839 96.4113 8.31602 97.5628 8.67033C100.486 9.57087 102.464 11.7263 103.188 14.797C103.527 16.2881 103.498 18.9011 103.114 20.3774C102.346 23.3153 100.53 25.264 97.74 26.1941C96.677 26.5336 96.2932 26.5779 94.6102 26.5779C92.9272 26.5779 92.5434 26.5336 91.4952 26.1941C88.6607 25.2492 86.8153 23.2857 86.0181 20.3184C85.6638 19.0045 85.6638 15.9042 86.0329 14.5755ZM98.5372 16.3471C98.2862 14.3689 97.5185 13.0992 96.2342 12.494C95.8356 12.3168 95.3041 12.2135 94.6102 12.2135C92.7205 12.2135 91.5395 13.0845 90.8899 14.9151C90.6833 15.5056 90.6242 16.1257 90.6242 17.602C90.6242 19.4031 90.6537 19.5802 91.0523 20.4512C91.7757 22.0161 92.8682 22.7395 94.5364 22.7395C95.6879 22.7395 96.4704 22.4295 97.2233 21.7061C98.301 20.6579 98.8029 18.5763 98.5372 16.3471ZM103.483 8.69986C103.537 8.79605 104.731 10.5039 106.193 12.5971L106.524 13.0697L109.447 17.2477L106.125 21.7799L102.818 26.3122L105.343 26.3565C106.745 26.3712 107.956 26.3712 108.059 26.3269C108.148 26.2974 109.166 24.9244 110.333 23.3005C111.499 21.6618 112.517 20.3331 112.621 20.3331C112.709 20.3331 113.713 21.6913 114.835 23.3596L116.887 26.386H119.678C121.213 26.386 122.438 26.3269 122.409 26.2679C122.395 26.2009 121.203 24.5055 119.703 22.3725L119.702 22.3714L119.235 21.7061C117.507 19.2702 116.09 17.1886 116.09 17.1C116.09 17.0114 117.345 15.1218 118.866 12.9073C120.401 10.7076 121.7 8.8032 121.759 8.69986C121.848 8.56699 121.287 8.5227 119.161 8.5227H116.459L114.688 11.2539C113.713 12.7449 112.857 13.985 112.768 13.985C112.695 13.985 111.824 12.7449 110.849 11.2539L109.078 8.5227H106.228C103.984 8.5227 103.394 8.56699 103.483 8.69986ZM138.058 23.4777C137.408 22.0014 137.364 21.337 137.349 14.7527V8.52272H139.696H142.058L142.117 14.236C142.176 20.2298 142.206 20.5694 142.856 21.529C144.066 23.3301 147.373 23.1234 148.672 21.1746C148.938 20.776 149.218 20.215 149.307 19.9198C149.396 19.595 149.455 17.1886 149.455 13.9408V8.52272H151.891H154.326V17.4544V26.386H152.053H149.794L149.691 25.825C149.647 25.5297 149.602 24.7916 149.602 24.2011C149.602 23.3448 149.558 23.1381 149.366 23.1381C149.248 23.1381 149.056 23.3596 148.938 23.6253C148.598 24.452 147.58 25.4559 146.605 25.9431C143.417 27.508 139.312 26.3122 138.058 23.4777Z" fill="#FF4300"/>
        <path fillRule="evenodd" clip-rule="evenodd" d="M8.12403 13.2414L12.5531 6.62069L16.9976 0H28.1394H39.2964L40.8597 2.29885L42.4382 4.5977H31.2658H20.0934L18.5302 6.94253C17.6872 8.22988 16.9823 9.33333 16.9823 9.40996C16.9823 9.56322 19.465 13.1801 19.5723 13.1801C19.6183 13.1801 20.3539 12.1379 21.1815 10.8812L22.6987 8.58237H33.9018L45.1049 8.5977L46.6528 10.9272L48.2006 13.2567L43.8175 19.8008L39.4344 26.3448L28.2926 26.3601H17.1355L16.3079 27.4789C14.7141 29.6245 13.6872 30.2375 11.6183 30.2529C10.4995 30.2682 10.193 30.2069 9.39606 29.8391C8.89031 29.6092 8.20066 29.3487 7.83284 29.272C6.42288 28.9502 4.79836 29.7165 2.71407 31.6782C2.14702 32.2146 1.64127 32.6437 1.5953 32.6437C1.50334 32.6437 0.399894 31.9387 0.00142674 31.6322C-0.0905273 31.5709 4.29261 24.0613 4.39989 24.1226C8.49185 26.4061 10.7907 27.6015 11.2811 27.6782C12.3846 27.8467 13.1202 27.3716 14.3769 25.6705L15.4804 24.1839L11.8022 18.7126L8.12403 13.2414ZM30.331 29.0575C29.81 28.5057 29.3962 28.0153 29.3962 27.9694C29.3962 27.9234 30.1931 27.8927 31.1586 27.8927H32.9211L33.3808 28.613C34.1471 29.8238 34.469 30.8966 34.5916 32.6437C34.7295 34.4981 35.0207 35.249 35.9402 36C36.6145 36.5671 38.2544 37.272 39.7103 37.6245C40.2408 37.7607 40.5198 37.8265 40.6477 38.0023C40.7932 38.2022 40.7431 38.5446 40.6452 39.295L40.5379 40H36.2774H32.0168L31.9709 35.7395L31.9708 35.7358C31.9096 30.7893 31.9092 30.7582 30.331 29.0575Z" fill="#FF4300"/>
      </svg>
        <div className={styles.logo_divider_container}>
        <div
          className={styles.logo_divider}
          >
          </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar