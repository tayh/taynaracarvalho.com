import React from 'react';

import Main from '../Main/index';
import Title from '../Main/waterTitle';

export default function Home() {
  return (
    <div>
      <Title
        d="M144.938 160.734L164.906 63.8438H204.141L165.328 216H131.297L102.469 120.234L73.6406 216H39.75L0.9375 63.8438H40.1719L60 160.594L87.8438 63.8438H117.234L144.938 160.734ZM294.422 218.812C272.109 218.812 253.922 211.969 239.859 198.281C225.891 184.594 218.906 166.359 218.906 143.578V139.641C218.906 124.359 221.859 110.719 227.766 98.7188C233.672 86.625 242.016 77.3438 252.797 70.875C263.672 64.3125 276.047 61.0312 289.922 61.0312C310.734 61.0312 327.094 67.5938 339 80.7188C351 93.8438 357 112.453 357 136.547V153.141H260.109C261.422 163.078 265.359 171.047 271.922 177.047C278.578 183.047 286.969 186.047 297.094 186.047C312.75 186.047 324.984 180.375 333.797 169.031L353.766 191.391C347.672 200.016 339.422 206.766 329.016 211.641C318.609 216.422 307.078 218.812 294.422 218.812ZM289.781 93.9375C281.719 93.9375 275.156 96.6562 270.094 102.094C265.125 107.531 261.938 115.312 260.531 125.438H317.062V122.203C316.875 113.203 314.438 106.266 309.75 101.391C305.062 96.4219 298.406 93.9375 289.781 93.9375ZM423.094 216H382.312V0H423.094V216ZM519.984 186.047C527.484 186.047 533.578 183.984 538.266 179.859C542.953 175.734 545.391 170.25 545.578 163.406H583.688C583.594 173.719 580.781 183.188 575.25 191.812C569.719 200.344 562.125 207 552.469 211.781C542.906 216.469 532.312 218.812 520.688 218.812C498.938 218.812 481.781 211.922 469.219 198.141C456.656 184.266 450.375 165.141 450.375 140.766V138.094C450.375 114.656 456.609 95.9531 469.078 81.9844C481.547 68.0156 498.656 61.0312 520.406 61.0312C539.438 61.0312 554.672 66.4688 566.109 77.3438C577.641 88.125 583.5 102.516 583.688 120.516H545.578C545.391 112.641 542.953 106.266 538.266 101.391C533.578 96.4219 527.391 93.9375 519.703 93.9375C510.234 93.9375 503.062 97.4062 498.188 104.344C493.406 111.188 491.016 122.344 491.016 137.812V142.031C491.016 157.688 493.406 168.938 498.188 175.781C502.969 182.625 510.234 186.047 519.984 186.047ZM600.562 138.516C600.562 123.422 603.469 109.969 609.281 98.1562C615.094 86.3438 623.438 77.2031 634.312 70.7344C645.281 64.2656 657.984 61.0312 672.422 61.0312C692.953 61.0312 709.688 67.3125 722.625 79.875C735.656 92.4375 742.922 109.5 744.422 131.062L744.703 141.469C744.703 164.812 738.188 183.562 725.156 197.719C712.125 211.781 694.641 218.812 672.703 218.812C650.766 218.812 633.234 211.781 620.109 197.719C607.078 183.656 600.562 164.531 600.562 140.344V138.516ZM641.203 141.469C641.203 155.906 643.922 166.969 649.359 174.656C654.797 182.25 662.578 186.047 672.703 186.047C682.547 186.047 690.234 182.297 695.766 174.797C701.297 167.203 704.062 155.109 704.062 138.516C704.062 124.359 701.297 113.391 695.766 105.609C690.234 97.8281 682.453 93.9375 672.422 93.9375C662.484 93.9375 654.797 97.8281 649.359 105.609C643.922 113.297 641.203 125.25 641.203 141.469ZM807.844 63.8438L809.109 80.8594C819.891 67.6406 834.469 61.0312 852.844 61.0312C872.438 61.0312 885.891 68.7656 893.203 84.2344C903.891 68.7656 919.125 61.0312 938.906 61.0312C955.406 61.0312 967.688 65.8594 975.75 75.5156C983.812 85.0781 987.844 99.5156 987.844 118.828V216H947.062V118.969C947.062 110.344 945.375 104.062 942 100.125C938.625 96.0938 932.672 94.0781 924.141 94.0781C911.953 94.0781 903.516 99.8906 898.828 111.516L898.969 216H858.328V119.109C858.328 110.297 856.594 103.922 853.125 99.9844C849.656 96.0469 843.75 94.0781 835.406 94.0781C823.875 94.0781 815.531 98.8594 810.375 108.422V216H769.734V63.8438H807.844ZM1089.23 218.812C1066.92 218.812 1048.73 211.969 1034.67 198.281C1020.7 184.594 1013.72 166.359 1013.72 143.578V139.641C1013.72 124.359 1016.67 110.719 1022.58 98.7188C1028.48 86.625 1036.83 77.3438 1047.61 70.875C1058.48 64.3125 1070.86 61.0312 1084.73 61.0312C1105.55 61.0312 1121.91 67.5938 1133.81 80.7188C1145.81 93.8438 1151.81 112.453 1151.81 136.547V153.141H1054.92C1056.23 163.078 1060.17 171.047 1066.73 177.047C1073.39 183.047 1081.78 186.047 1091.91 186.047C1107.56 186.047 1119.8 180.375 1128.61 169.031L1148.58 191.391C1142.48 200.016 1134.23 206.766 1123.83 211.641C1113.42 216.422 1101.89 218.812 1089.23 218.812ZM1084.59 93.9375C1076.53 93.9375 1069.97 96.6562 1064.91 102.094C1059.94 107.531 1056.75 115.312 1055.34 125.438H1111.88V122.203C1111.69 113.203 1109.25 106.266 1104.56 101.391C1099.88 96.4219 1093.22 93.9375 1084.59 93.9375Z"
        color="#342b38"
      />
      <Main />
    </div>
  );
}
