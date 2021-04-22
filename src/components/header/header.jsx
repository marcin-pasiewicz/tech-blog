import React from "react";
import { Link } from 'gatsby';
import * as styles from "./header.module.scss"

export const Header = () =>
   (
    <header className={styles.header}>
      <Link to="/">
        <svg height="16" viewBox="0 0 1023 190" width="86"
             xmlns="http://www.w3.org/2000/svg">
          <path
            d="M67.375,151.25 C57.875,151.25 52.625,144.25 52.625,132.75 C52.625,122.25 54.625,112.75 58.125,105.5 C62.375,98 68.125,93 75.625,93 C85.5030488,93 89.2826071,99.5863697 89.3733224,107.698849 L89.375,108 C89.375,111.25 88.625,117.5 86.875,127.5 L86.6882472,128.432627 C83.8374743,142.162994 77.3997253,151.25 67.375,151.25 Z M44.125,190 C61.875,190 76.625,180 84.125,161.25 L84.125,163.25 C84.125,178.25 96.625,189.25 115.625,189.25 C125.125,189.25 134.625,187 140.125,184 L145.375,153.5 C142.875,154.5 140.875,155 138.625,155 C134.875,155 133.375,153 133.375,149.5 C133.375,148.25 133.625,147 133.875,145.5 L148.875,59.75 L107.625,59.75 L96.375,79.5 C93.125,67.25 81.125,56.75 61.875,56.75 C43.625,56.75 27.375,66 16.875,81.75 C6.625,96.5 0.875,116.5 0.875,138.25 C0.875,167.5 17.125,190 44.125,190 Z M232.125,56.75 C204.125,56.75 184.375,68.25 171.625,87 C163.125,99.75 158.625,116.25 158.625,134.25 C158.625,169.25 184.125,190 218.375,190 C247.125,190 268.625,178 278.375,149.75 L236.875,136 L236.716189,136.672929 C234.641272,145.192965 230.144231,153.5 221.375,153.5 C211.625,153.5 207.625,145.5 207.625,133.75 C207.625,125.5 209.625,113.75 213.375,105.5 L213.752593,104.781787 C217.428611,97.9058333 221.883333,93 229.375,93 C238.625,93 241.125,102.25 240.625,112 L284.125,106.5 C284.125,78 266.875,56.75 232.125,56.75 Z M363.625,56.75 C335.875,56.75 316.125,68.25 303.375,87 C294.875,99.75 290.375,116.25 290.375,134.25 C290.375,169.25 315.875,190 350.125,190 C378.125,190 397.875,178.25 410.375,159.75 C419.125,147 423.625,130.5 423.625,112.5 C423.625,77.25 398.125,56.75 363.625,56.75 Z M352.875,153.5 C343.125,153.5 339.375,145.5 339.375,133.75 C339.375,125.5 341.375,113.75 345.125,105.5 L345.502593,104.781787 C349.178611,97.9058333 353.633333,93 361.125,93 C370.625,93 374.625,101.25 374.625,113 C374.625,121.25 372.625,133 368.875,141.25 L368.497407,141.944037 C364.821389,148.594167 360.366667,153.5 352.875,153.5 Z M448.375,59.75 L434.125,140.25 C433.375,144.75 433.125,148.75 433.125,152.25 C433.125,177.25 449.875,190 469.875,190 C488.375,190 504.875,179 511.625,161.25 L511.625,163.25 C511.625,178.25 524.125,189.25 543.125,189.25 C552.625,189.25 561.875,187 567.625,184 L572.875,153.5 C570.375,154.5 568.375,155 566.125,155 C562.375,155 560.875,153 560.875,149.5 C560.875,148.25 561.125,147 561.375,145.5 L576.375,59.75 L525.875,59.75 L513.875,128.25 C511.125,143.5 504.375,150.25 495.875,150.25 C488.625,150.25 485.625,146.25 485.625,138.75 C485.625,136.75 485.875,134.5 486.375,131.75 L498.875,59.75 L448.375,59.75 Z M579.125,150.25 C581.625,177 609.125,190 639.125,190 C675.125,190 701.375,171.25 701.375,141.5 C701.375,102.75 641.125,111 641.125,96.5 C641.125,91.25 645.375,88 652.125,88 C661.125,88 666.125,93.25 666.125,100.75 L708.375,98.5 C708.375,73.5 688.875,56.75 651.625,56.75 C618.375,56.75 592.875,75.5 592.875,104.25 C592.875,144.75 651.375,134.75 651.375,149.25 C651.375,155.5 646.625,158.25 640.125,158.25 C630.625,158.25 624.375,152.75 623.625,144.5 L579.125,150.25 Z M803.375,143.25 C795.875,148.25 790.875,150 784.875,150 C778.375,150 775.125,147 775.125,141 C775.125,139.75 775.375,138.25 775.625,136.75 L782.625,96.5 L812.125,96.5 L818.625,59.75 L789.375,59.75 L795.125,27.25 L743.875,32.75 L739.125,59.75 L723.375,59.75 L717.125,96.5 L732.375,96.5 L723.875,143.75 C723.375,147.5 723.125,151.25 723.125,154.5 C723.125,178.5 739.875,190 764.875,190 C779.375,190 793.375,186.25 803.625,177.75 L803.375,143.25 Z M868.125,0.25 C853.875,0.25 839.625,9.25 839.625,25.75 C839.625,42.25 853.125,50.5 867.375,50.5 C881.625,50.5 895.875,41.5 895.875,25 C895.875,8.5 882.375,0.25 868.125,0.25 Z M836.375,59.75 L820.625,149.25 C820.125,152.25 819.875,155.25 819.875,158.25 C819.875,177 831.125,189.25 852.875,189.25 C862.375,189.25 872.375,187 877.875,184 L883.375,153.5 C880.875,154.5 878.625,155 876.375,155 C872.875,155 871.375,153 871.375,149.5 C871.375,148.25 871.625,147 871.875,145.5 L886.875,59.75 L836.375,59.75 Z M970.125,56.75 C1004.875,56.75 1022.125,78 1022.125,106.5 L978.625,112 L978.65412,111.343553 C979.009232,101.838941 976.417135,93 967.375,93 C959.625,93 955.125,98.25 951.375,105.5 C947.625,113.75 945.625,125.5 945.625,133.75 C945.625,145.5 949.625,153.5 959.375,153.5 C968.375,153.5 972.875,144.75 974.875,136 L1016.375,149.75 C1006.625,178 985.125,190 956.375,190 C922.125,190 896.625,169.25 896.625,134.25 C896.625,116.25 901.125,99.75 909.625,87 C922.375,68.25 942.125,56.75 970.125,56.75 Z"
            fill="#fff"></path>
        </svg>
      </Link>
      <span className={styles.productName}>Tech BLOG</span>
    </header>
  )

