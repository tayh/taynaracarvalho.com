import React from 'react';

import Main from '../Main/index';
import Title from '../Main/waterTitle';

export default function Projects() {
  return (
    <div>
      <Title
        d="M137.578 138.328C137.578 161.766 132.234 180.562 121.547 194.719C110.953 208.781 96.6094 215.812 78.5156 215.812C63.1406 215.812 50.7188 210.469 41.25 199.781V271.5H0.609375V60.8438H38.2969L39.7031 75.75C49.5469 63.9375 62.3906 58.0312 78.2344 58.0312C96.9844 58.0312 111.562 64.9687 121.969 78.8438C132.375 92.7188 137.578 111.844 137.578 136.219V138.328ZM96.9375 135.375C96.9375 121.219 94.4062 110.297 89.3438 102.609C84.375 94.9219 77.1094 91.0781 67.5469 91.0781C54.7969 91.0781 46.0312 95.9531 41.25 105.703V168C46.2188 178.031 55.0781 183.047 67.8281 183.047C87.2344 183.047 96.9375 167.156 96.9375 135.375ZM248.391 98.9531C242.859 98.2031 237.984 97.8281 233.766 97.8281C218.391 97.8281 208.312 103.031 203.531 113.438V213H162.891V60.8438H201.281L202.406 78.9844C210.562 65.0156 221.859 58.0312 236.297 58.0312C240.797 58.0312 245.016 58.6406 248.953 59.8594L248.391 98.9531ZM256.688 135.516C256.688 120.422 259.594 106.969 265.406 95.1562C271.219 83.3438 279.562 74.2031 290.438 67.7344C301.406 61.2656 314.109 58.0312 328.547 58.0312C349.078 58.0312 365.812 64.3125 378.75 76.875C391.781 89.4375 399.047 106.5 400.547 128.062L400.828 138.469C400.828 161.812 394.312 180.562 381.281 194.719C368.25 208.781 350.766 215.812 328.828 215.812C306.891 215.812 289.359 208.781 276.234 194.719C263.203 180.656 256.688 161.531 256.688 137.344V135.516ZM297.328 138.469C297.328 152.906 300.047 163.969 305.484 171.656C310.922 179.25 318.703 183.047 328.828 183.047C338.672 183.047 346.359 179.297 351.891 171.797C357.422 164.203 360.188 152.109 360.188 135.516C360.188 121.359 357.422 110.391 351.891 102.609C346.359 94.8281 338.578 90.9375 328.547 90.9375C318.609 90.9375 310.922 94.8281 305.484 102.609C300.047 110.297 297.328 122.25 297.328 138.469ZM468.891 60.8438V221.297C468.891 238.078 464.438 251.109 455.531 260.391C446.625 269.766 433.781 274.453 417 274.453C409.969 274.453 403.266 273.656 396.891 272.062V239.859C401.766 240.703 406.031 241.125 409.688 241.125C421.969 241.125 428.109 234.609 428.109 221.578V60.8438H468.891ZM424.875 21.4688C424.875 15.375 426.891 10.3594 430.922 6.42188C435.047 2.48438 440.625 0.515625 447.656 0.515625C454.688 0.515625 460.219 2.48438 464.25 6.42188C468.375 10.3594 470.438 15.375 470.438 21.4688C470.438 27.6562 468.328 32.7188 464.109 36.6562C459.984 40.5938 454.5 42.5625 447.656 42.5625C440.812 42.5625 435.281 40.5938 431.062 36.6562C426.938 32.7188 424.875 27.6562 424.875 21.4688ZM570.703 215.812C548.391 215.812 530.203 208.969 516.141 195.281C502.172 181.594 495.188 163.359 495.188 140.578V136.641C495.188 121.359 498.141 107.719 504.047 95.7188C509.953 83.625 518.297 74.3438 529.078 67.875C539.953 61.3125 552.328 58.0312 566.203 58.0312C587.016 58.0312 603.375 64.5938 615.281 77.7188C627.281 90.8438 633.281 109.453 633.281 133.547V150.141H536.391C537.703 160.078 541.641 168.047 548.203 174.047C554.859 180.047 563.25 183.047 573.375 183.047C589.031 183.047 601.266 177.375 610.078 166.031L630.047 188.391C623.953 197.016 615.703 203.766 605.297 208.641C594.891 213.422 583.359 215.812 570.703 215.812ZM566.062 90.9375C558 90.9375 551.438 93.6562 546.375 99.0938C541.406 104.531 538.219 112.312 536.812 122.438H593.344V119.203C593.156 110.203 590.719 103.266 586.031 98.3906C581.344 93.4219 574.688 90.9375 566.062 90.9375ZM719.766 183.047C727.266 183.047 733.359 180.984 738.047 176.859C742.734 172.734 745.172 167.25 745.359 160.406H783.469C783.375 170.719 780.562 180.188 775.031 188.812C769.5 197.344 761.906 204 752.25 208.781C742.688 213.469 732.094 215.812 720.469 215.812C698.719 215.812 681.562 208.922 669 195.141C656.438 181.266 650.156 162.141 650.156 137.766V135.094C650.156 111.656 656.391 92.9531 668.859 78.9844C681.328 65.0156 698.438 58.0312 720.188 58.0312C739.219 58.0312 754.453 63.4688 765.891 74.3438C777.422 85.125 783.281 99.5156 783.469 117.516H745.359C745.172 109.641 742.734 103.266 738.047 98.3906C733.359 93.4219 727.172 90.9375 719.484 90.9375C710.016 90.9375 702.844 94.4062 697.969 101.344C693.188 108.188 690.797 119.344 690.797 134.812V139.031C690.797 154.688 693.188 165.938 697.969 172.781C702.75 179.625 710.016 183.047 719.766 183.047ZM855.328 23.4375V60.8438H881.344V90.6562H855.328V166.594C855.328 172.219 856.406 176.25 858.562 178.688C860.719 181.125 864.844 182.344 870.938 182.344C875.438 182.344 879.422 182.016 882.891 181.359V212.156C874.922 214.594 866.719 215.812 858.281 215.812C829.781 215.812 815.25 201.422 814.688 172.641V90.6562H792.469V60.8438H814.688V23.4375H855.328ZM986.391 170.953C986.391 165.984 983.906 162.094 978.938 159.281C974.062 156.375 966.188 153.797 955.312 151.547C919.125 143.953 901.031 128.578 901.031 105.422C901.031 91.9219 906.609 80.6719 917.766 71.6719C929.016 62.5781 943.688 58.0312 961.781 58.0312C981.094 58.0312 996.516 62.5781 1008.05 71.6719C1019.67 80.7656 1025.48 92.5781 1025.48 107.109H984.844C984.844 101.297 982.969 96.5156 979.219 92.7656C975.469 88.9219 969.609 87 961.641 87C954.797 87 949.5 88.5469 945.75 91.6406C942 94.7344 940.125 98.6719 940.125 103.453C940.125 107.953 942.234 111.609 946.453 114.422C950.766 117.141 957.984 119.531 968.109 121.594C978.234 123.562 986.766 125.812 993.703 128.344C1015.17 136.219 1025.91 149.859 1025.91 169.266C1025.91 183.141 1019.95 194.391 1008.05 203.016C996.141 211.547 980.766 215.812 961.922 215.812C949.172 215.812 937.828 213.562 927.891 209.062C918.047 204.469 910.312 198.234 904.688 190.359C899.062 182.391 896.25 173.812 896.25 164.625H934.781C935.156 171.844 937.828 177.375 942.797 181.219C947.766 185.062 954.422 186.984 962.766 186.984C970.547 186.984 976.406 185.531 980.344 182.625C984.375 179.625 986.391 175.734 986.391 170.953Z"
        color="#80bdab"
      />
      <Main />
    </div>
  );
}
