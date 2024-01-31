import React from "react";
import "./sidebar.css";
import photo from "./assets/Rectangle 1.png";

function Sidebar() {
  return (
    <div className="sideBarOpen">
      <div className="logo">
        <div>
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1_53)">
              <ellipse
                cx="10.8"
                cy="11"
                rx="10.4"
                ry="10.4959"
                fill="#FFA500"
              />
              <ellipse
                opacity="0.6"
                cx="7.06439"
                cy="6.10078"
                rx="7.06439"
                ry="6.10078"
                transform="matrix(0.834795 -0.550561 0.54352 0.839396 -2.62708 5.4007)"
                fill="url(#paint0_radial_1_53)"
              />
              <path
                d="M15.3211 1.71294C13.4944 3.02251 12.8305 5.0479 13.5 6.00003C14.1695 6.95216 15.6733 8.3096 17.5 7.00003C18.9715 5.94502 17.9545 4.69525 20.7792 0.616293C20.7792 0.616293 20.5319 0.585939 20.4095 0.570463C19.0045 0.392745 17.0014 0.508275 15.3211 1.71294Z"
                fill="#008000"
              />
            </g>
            <defs>
              <radialGradient
                id="paint0_radial_1_53"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(7.06439 6.10078) rotate(90) scale(6.10078 7.06439)"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </radialGradient>
              <clipPath id="clip0_1_53">
                <rect
                  width="20.8"
                  height="20.9919"
                  fill="white"
                  transform="translate(0.400024 0.504059)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="122"
            height="24"
            viewBox="0 0 122 24"
            fill="none"
          >
            <path
              d="M103.095 19V7.50063H105.325L105.544 9.03096H105.697C105.945 8.68117 106.229 8.3751 106.55 8.11276C106.87 7.83584 107.235 7.62451 107.643 7.47876C108.065 7.31844 108.525 7.23828 109.02 7.23828C109.69 7.23828 110.288 7.37674 110.813 7.65366C111.337 7.93058 111.746 8.38968 112.037 9.03096H112.19C112.438 8.68117 112.729 8.3751 113.065 8.11276C113.4 7.83584 113.786 7.62451 114.223 7.47876C114.66 7.31844 115.134 7.23828 115.644 7.23828C116.329 7.23828 116.934 7.36217 117.459 7.60993C117.983 7.8577 118.399 8.26579 118.705 8.8342C119.011 9.40261 119.164 10.1605 119.164 11.1078V19H116.497V11.6544C116.497 11.2609 116.453 10.933 116.366 10.6706C116.278 10.3937 116.154 10.1824 115.994 10.0366C115.848 9.87629 115.659 9.75969 115.426 9.68682C115.207 9.61395 114.966 9.57751 114.704 9.57751C114.281 9.57751 113.903 9.69411 113.567 9.9273C113.232 10.1605 112.962 10.4811 112.758 10.8892C112.569 11.2973 112.474 11.771 112.474 12.3103V19H109.807V11.6544C109.807 11.2609 109.763 10.933 109.676 10.6706C109.588 10.3937 109.465 10.1824 109.304 10.0366C109.159 9.87629 108.969 9.75969 108.736 9.68682C108.517 9.61395 108.277 9.57751 108.014 9.57751C107.592 9.57751 107.206 9.69411 106.856 9.9273C106.52 10.1605 106.251 10.4811 106.047 10.8892C105.857 11.2973 105.763 11.771 105.763 12.3103V19H103.095Z"
              fill="#131313"
            />
            <path
              d="M95.858 19V7.50063H98.0879L98.3065 9.31517H98.4595C98.6053 8.9508 98.7802 8.61558 98.9842 8.30952C99.2028 7.98888 99.4798 7.73382 99.815 7.54435C100.15 7.3403 100.558 7.23828 101.039 7.23828C101.272 7.23828 101.484 7.26014 101.673 7.30387C101.877 7.34759 102.03 7.39132 102.132 7.43504V9.94916H101.323C100.872 9.94916 100.471 10.0147 100.121 10.1459C99.7713 10.2625 99.4725 10.452 99.2247 10.7143C98.9915 10.9767 98.8166 11.3046 98.7 11.6981C98.5834 12.0916 98.5251 12.5507 98.5251 13.0754V19H95.858Z"
              fill="#131313"
            />
            <path
              d="M87.3446 19.2624C87.024 19.2624 86.6523 19.2186 86.2297 19.1312C85.8216 19.0583 85.4208 18.9126 85.0273 18.6939C84.6483 18.4753 84.335 18.1547 84.0872 17.732C83.8394 17.2948 83.7155 16.7264 83.7155 16.0268C83.7155 15.2398 83.8904 14.5912 84.2402 14.0811C84.59 13.5564 85.0783 13.1483 85.705 12.8568C86.3463 12.5507 87.1041 12.3394 87.9786 12.2228C88.8677 12.0916 89.8369 12.026 90.8863 12.026V11.086C90.8863 10.7508 90.8353 10.452 90.7332 10.1896C90.6312 9.9273 90.4417 9.72326 90.1648 9.57751C89.9025 9.41719 89.5017 9.33703 88.9624 9.33703C88.4231 9.33703 88.0005 9.40261 87.6944 9.53379C87.3884 9.66496 87.177 9.82528 87.0604 10.0147C86.9438 10.2042 86.8855 10.401 86.8855 10.605V10.9111H84.3058C84.2912 10.8382 84.284 10.7653 84.284 10.6925C84.284 10.6196 84.284 10.5321 84.284 10.4301C84.284 9.77427 84.4807 9.20586 84.8742 8.72489C85.2677 8.24393 85.8143 7.87957 86.5139 7.6318C87.2135 7.36945 88.0224 7.23828 88.9406 7.23828C89.9899 7.23828 90.8498 7.38403 91.5203 7.67552C92.2053 7.96701 92.7154 8.38239 93.0506 8.92165C93.3858 9.46091 93.5534 10.1168 93.5534 10.8892V16.311C93.5534 16.5879 93.6336 16.7847 93.7939 16.9013C93.9542 17.0179 94.1291 17.0762 94.3186 17.0762H95.0182V18.9126C94.8724 18.9709 94.6611 19.0364 94.3842 19.1093C94.1073 19.1968 93.7647 19.2405 93.3567 19.2405C92.9777 19.2405 92.6352 19.1749 92.3291 19.0437C92.0377 18.9271 91.7899 18.7522 91.5858 18.519C91.3818 18.2859 91.2361 18.0089 91.1486 17.6883H91.0174C90.7697 17.9944 90.4709 18.2713 90.1211 18.519C89.7859 18.7522 89.3851 18.9344 88.9187 19.0656C88.4669 19.1968 87.9422 19.2624 87.3446 19.2624ZM88.1535 17.0762C88.5908 17.0762 88.977 17.0106 89.3122 16.8794C89.662 16.7482 89.9462 16.566 90.1648 16.3329C90.398 16.0997 90.5729 15.8155 90.6895 15.4802C90.8207 15.145 90.8863 14.7807 90.8863 14.3871V13.8625C90.0847 13.8625 89.3413 13.9135 88.6563 14.0155C87.9859 14.1175 87.4466 14.307 87.0386 14.5839C86.645 14.8608 86.4483 15.2543 86.4483 15.7644C86.4483 16.0268 86.5066 16.26 86.6232 16.464C86.7544 16.6535 86.9438 16.8065 87.1916 16.9231C87.4539 17.0251 87.7746 17.0762 88.1535 17.0762Z"
              fill="#131313"
            />
            <path
              d="M72.6566 19V4.00269H83.4346V6.42936H75.4987V10.452H82.6476V12.8786H75.4987V19H72.6566Z"
              fill="#131313"
            />
            <path
              d="M65.7855 19.2624C64.5612 19.2624 63.541 19.051 62.7248 18.6284C61.9087 18.1911 61.2965 17.528 60.8884 16.6389C60.4804 15.7499 60.2763 14.6203 60.2763 13.2503C60.2763 11.8657 60.4804 10.7362 60.8884 9.86171C61.2965 8.97266 61.9087 8.3168 62.7248 7.89414C63.541 7.4569 64.5612 7.23828 65.7855 7.23828C66.8932 7.23828 67.8187 7.44961 68.562 7.87228C69.3199 8.28037 69.8883 8.91436 70.2672 9.77427C70.6462 10.6342 70.8356 11.7491 70.8356 13.1191V13.9062H63.009C63.0382 14.6203 63.1475 15.2252 63.337 15.7207C63.5264 16.2017 63.8179 16.566 64.2115 16.8138C64.6195 17.047 65.1515 17.1636 65.8074 17.1636C66.1426 17.1636 66.456 17.1199 66.7474 17.0324C67.0389 16.945 67.294 16.8138 67.5126 16.6389C67.7312 16.4494 67.8988 16.2163 68.0154 15.9393C68.1466 15.6624 68.2122 15.3418 68.2122 14.9774H70.8356C70.8356 15.7061 70.7045 16.3401 70.4421 16.8794C70.1943 17.4187 69.8373 17.8632 69.3709 18.213C68.9191 18.5628 68.3871 18.8251 67.775 19C67.1628 19.1749 66.4997 19.2624 65.7855 19.2624ZM63.0528 12.026H68.0592C68.0592 11.5451 68.0009 11.137 67.8843 10.8018C67.7822 10.4666 67.6292 10.1896 67.4252 9.97102C67.2357 9.75241 67.0025 9.59937 66.7256 9.51192C66.4487 9.4099 66.1353 9.35889 65.7855 9.35889C65.2171 9.35889 64.7361 9.45363 64.3426 9.6431C63.9637 9.83257 63.6722 10.1241 63.4682 10.5176C63.2641 10.9111 63.1256 11.4139 63.0528 12.026Z"
              fill="#131313"
            />
            <path
              d="M50.5134 22.9789C50.0033 22.9789 49.5223 22.8769 49.0705 22.6728C48.6187 22.4688 48.2543 22.1627 47.9774 21.7546C47.7005 21.3611 47.562 20.8728 47.562 20.2899C47.562 19.6486 47.7442 19.1458 48.1086 18.7814C48.4875 18.4024 48.9029 18.1182 49.3547 17.9288C49.0195 17.7539 48.7426 17.5207 48.524 17.2292C48.3199 16.9377 48.2179 16.5879 48.2179 16.1798C48.2179 15.626 48.4219 15.1887 48.83 14.8681C49.2381 14.5329 49.7045 14.3143 50.2292 14.2122C49.6899 13.877 49.2746 13.4471 48.9831 12.9224C48.7061 12.3977 48.5677 11.8001 48.5677 11.1297C48.5677 10.3281 48.7572 9.64309 49.1361 9.07468C49.5296 8.4917 50.098 8.03988 50.8413 7.71924C51.5846 7.3986 52.481 7.23828 53.5304 7.23828C53.953 7.23828 54.3611 7.26743 54.7546 7.32573C55.1481 7.38403 55.5052 7.47147 55.8259 7.58807C56.336 7.282 56.6858 6.9395 56.8752 6.56056C57.0647 6.16704 57.1667 5.8464 57.1813 5.59863H59.7829C59.7829 6.10875 59.6808 6.56056 59.4768 6.95407C59.2873 7.34759 59.0177 7.67552 58.6679 7.93786C58.3181 8.18563 57.8955 8.36781 57.3999 8.48441C57.7643 8.80505 58.0412 9.19128 58.2307 9.64309C58.4201 10.0949 58.5149 10.5904 58.5149 11.1297C58.5149 11.9313 58.3254 12.6236 57.9465 13.2066C57.5821 13.7896 57.0356 14.2414 56.3068 14.562C55.5927 14.8827 54.7109 15.043 53.6615 15.043H51.8907C51.5846 15.043 51.3442 15.1086 51.1693 15.2398C51.0089 15.3709 50.9288 15.5531 50.9288 15.7863C50.9288 15.9758 51.0017 16.1434 51.1474 16.2891C51.3077 16.4349 51.5263 16.5077 51.8033 16.5077H56.8315C57.6914 16.5077 58.3983 16.7919 58.9521 17.3604C59.5205 17.9142 59.8047 18.6284 59.8047 19.5028C59.8047 20.1587 59.6298 20.749 59.28 21.2736C58.9448 21.7983 58.4712 22.2137 57.859 22.5198C57.2469 22.8258 56.5327 22.9789 55.7165 22.9789H50.5134ZM51.4753 21.055H55.6947C55.9716 21.055 56.2121 21.004 56.4161 20.902C56.6347 20.8145 56.8024 20.6834 56.919 20.5085C57.0501 20.3336 57.1157 20.1368 57.1157 19.9182C57.1157 19.5393 56.9918 19.2551 56.7441 19.0656C56.5109 18.8761 56.2194 18.7814 55.8696 18.7814H51.4753C51.1255 18.7814 50.834 18.8834 50.6009 19.0875C50.3677 19.3061 50.2511 19.583 50.2511 19.9182C50.2511 20.2534 50.3604 20.5231 50.579 20.7271C50.8122 20.9457 51.111 21.055 51.4753 21.055ZM53.5522 13.1629C54.3247 13.1629 54.9004 12.988 55.2793 12.6382C55.6728 12.2738 55.8696 11.771 55.8696 11.1297C55.8696 10.4884 55.6728 9.99288 55.2793 9.64309C54.9004 9.2933 54.3247 9.11841 53.5522 9.11841C52.7798 9.11841 52.1968 9.2933 51.8033 9.64309C51.4243 9.99288 51.2348 10.4884 51.2348 11.1297C51.2348 11.5524 51.315 11.9167 51.4753 12.2228C51.6502 12.5289 51.9053 12.7621 52.2405 12.9224C52.5903 13.0827 53.0275 13.1629 53.5522 13.1629Z"
              fill="#131313"
            />
            <path
              d="M36.5276 19V7.50063H38.7575L38.9761 9.03096H39.1291C39.3915 8.68117 39.6975 8.3751 40.0473 8.11276C40.4117 7.83584 40.8198 7.62451 41.2716 7.47876C41.738 7.31844 42.2481 7.23828 42.8019 7.23828C43.5307 7.23828 44.1719 7.36945 44.7258 7.6318C45.2942 7.89414 45.7387 8.3168 46.0594 8.89979C46.38 9.48277 46.5403 10.2625 46.5403 11.239V19H43.8513V11.72C43.8513 11.3119 43.8003 10.9767 43.6983 10.7143C43.6108 10.4374 43.4724 10.2188 43.2829 10.0585C43.108 9.88358 42.8894 9.75969 42.627 9.68682C42.3647 9.61395 42.0732 9.57751 41.7526 9.57751C41.2716 9.57751 40.8344 9.69411 40.4408 9.9273C40.0619 10.1605 39.7558 10.4811 39.5226 10.8892C39.304 11.2973 39.1947 11.771 39.1947 12.3103V19H36.5276Z"
              fill="#131313"
            />
            <path
              d="M28.0142 19.2624C27.6936 19.2624 27.3219 19.2186 26.8993 19.1312C26.4912 19.0583 26.0904 18.9126 25.6968 18.6939C25.3179 18.4753 25.0046 18.1547 24.7568 17.732C24.509 17.2948 24.3851 16.7264 24.3851 16.0268C24.3851 15.2398 24.56 14.5912 24.9098 14.0811C25.2596 13.5564 25.7479 13.1483 26.3746 12.8568C27.0159 12.5507 27.7737 12.3394 28.6482 12.2228C29.5373 12.0916 30.5065 12.026 31.5558 12.026V11.086C31.5558 10.7508 31.5048 10.452 31.4028 10.1896C31.3008 9.9273 31.1113 9.72326 30.8344 9.57751C30.5721 9.41719 30.1713 9.33703 29.632 9.33703C29.0927 9.33703 28.6701 9.40261 28.364 9.53379C28.0579 9.66496 27.8466 9.82528 27.73 10.0147C27.6134 10.2042 27.5551 10.401 27.5551 10.605V10.9111H24.9754C24.9608 10.8382 24.9535 10.7653 24.9535 10.6925C24.9535 10.6196 24.9535 10.5321 24.9535 10.4301C24.9535 9.77427 25.1503 9.20586 25.5438 8.72489C25.9373 8.24393 26.4839 7.87957 27.1835 7.6318C27.883 7.36945 28.6919 7.23828 29.6101 7.23828C30.6595 7.23828 31.5194 7.38403 32.1898 7.67552C32.8749 7.96701 33.385 8.38239 33.7202 8.92165C34.0554 9.46091 34.223 10.1168 34.223 10.8892V16.311C34.223 16.5879 34.3032 16.7847 34.4635 16.9013C34.6238 17.0179 34.7987 17.0762 34.9882 17.0762H35.6878V18.9126C35.542 18.9709 35.3307 19.0364 35.0538 19.1093C34.7768 19.1968 34.4343 19.2405 34.0262 19.2405C33.6473 19.2405 33.3048 19.1749 32.9987 19.0437C32.7072 18.9271 32.4595 18.7522 32.2554 18.519C32.0514 18.2859 31.9056 18.0089 31.8182 17.6883H31.687C31.4393 17.9944 31.1405 18.2713 30.7907 18.519C30.4555 18.7522 30.0547 18.9344 29.5883 19.0656C29.1365 19.1968 28.6118 19.2624 28.0142 19.2624ZM28.8231 17.0762C29.2603 17.0762 29.6466 17.0106 29.9818 16.8794C30.3316 16.7482 30.6158 16.566 30.8344 16.3329C31.0676 16.0997 31.2425 15.8155 31.3591 15.4802C31.4903 15.145 31.5558 14.7807 31.5558 14.3871V13.8625C30.7542 13.8625 30.0109 13.9135 29.3259 14.0155C28.6555 14.1175 28.1162 14.307 27.7081 14.5839C27.3146 14.8608 27.1179 15.2543 27.1179 15.7644C27.1179 16.0268 27.1762 16.26 27.2928 16.464C27.4239 16.6535 27.6134 16.8065 27.8612 16.9231C28.1235 17.0251 28.4442 17.0762 28.8231 17.0762Z"
              fill="#131313"
            />
            <path
              d="M18.0388 19V7.50063H20.2688L20.4874 9.31517H20.6404C20.7862 8.9508 20.961 8.61558 21.1651 8.30952C21.3837 7.98888 21.6606 7.73382 21.9958 7.54435C22.3311 7.3403 22.7392 7.23828 23.2201 7.23828C23.4533 7.23828 23.6646 7.26014 23.8541 7.30387C24.0582 7.34759 24.2112 7.39132 24.3132 7.43504V9.94916H23.5043C23.0525 9.94916 22.6517 10.0147 22.3019 10.1459C21.9521 10.2625 21.6533 10.452 21.4056 10.7143C21.1724 10.9767 20.9975 11.3046 20.8809 11.6981C20.7643 12.0916 20.706 12.5507 20.706 13.0754V19H18.0388Z"
              fill="#131313"
            />
            <path
              d="M8.74803 19.2623C7.18854 19.2623 5.84039 18.9854 4.70357 18.4316C3.56674 17.8632 2.69227 17.0033 2.08013 15.8519C1.48257 14.7005 1.18379 13.2503 1.18379 11.5013C1.18379 9.73782 1.48257 8.28764 2.08013 7.15082C2.69227 5.99942 3.56674 5.14681 4.70357 4.59297C5.84039 4.02456 7.18854 3.74036 8.74803 3.74036C10.3221 3.74036 11.6702 4.02456 12.7925 4.59297C13.9293 5.14681 14.7965 5.99942 15.3941 7.15082C16.0062 8.28764 16.3123 9.73782 16.3123 11.5013C16.3123 13.2503 16.0062 14.7005 15.3941 15.8519C14.7965 17.0033 13.9293 17.8632 12.7925 18.4316C11.6702 18.9854 10.3221 19.2623 8.74803 19.2623ZM8.74803 16.8575C9.50591 16.8575 10.1691 16.7482 10.7375 16.5296C11.3204 16.311 11.8087 15.9903 12.2022 15.5677C12.5957 15.1304 12.8945 14.5985 13.0986 13.9717C13.3026 13.3305 13.4046 12.5944 13.4046 11.7637V11.2827C13.4046 10.4374 13.3026 9.69409 13.0986 9.05281C12.8945 8.41153 12.5957 7.87955 12.2022 7.45689C11.8087 7.01965 11.3204 6.69172 10.7375 6.4731C10.1691 6.25448 9.50591 6.14517 8.74803 6.14517C7.99014 6.14517 7.31971 6.25448 6.73673 6.4731C6.16832 6.69172 5.68735 7.01965 5.29384 7.45689C4.90032 7.87955 4.60154 8.41153 4.3975 9.05281C4.20803 9.69409 4.11329 10.4374 4.11329 11.2827V11.7637C4.11329 12.5944 4.20803 13.3305 4.3975 13.9717C4.60154 14.5985 4.90032 15.1304 5.29384 15.5677C5.68735 15.9903 6.16832 16.311 6.73673 16.5296C7.31971 16.7482 7.99014 16.8575 8.74803 16.8575Z"
              fill="#131313"
            />
          </svg>
        </div>
      </div>
      <div className="searchBar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M14 14L10 10M2 6.66667C2 7.2795 2.12071 7.88634 2.35523 8.45252C2.58975 9.01871 2.93349 9.53316 3.36683 9.9665C3.80018 10.3998 4.31462 10.7436 4.88081 10.9781C5.447 11.2126 6.05383 11.3333 6.66667 11.3333C7.2795 11.3333 7.88634 11.2126 8.45252 10.9781C9.01871 10.7436 9.53316 10.3998 9.9665 9.9665C10.3998 9.53316 10.7436 9.01871 10.9781 8.45252C11.2126 7.88634 11.3333 7.2795 11.3333 6.66667C11.3333 6.05383 11.2126 5.447 10.9781 4.88081C10.7436 4.31462 10.3998 3.80018 9.9665 3.36683C9.53316 2.93349 9.01871 2.58975 8.45252 2.35523C7.88634 2.12071 7.2795 2 6.66667 2C6.05383 2 5.447 2.12071 4.88081 2.35523C4.31462 2.58975 3.80018 2.93349 3.36683 3.36683C2.93349 3.80018 2.58975 4.31462 2.35523 4.88081C2.12071 5.447 2 6.05383 2 6.66667Z"
            stroke="#7D7D7D"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <input type="text" name="searchbar" value="Search" />
      </div>
      <div className="options">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M6.66667 2.66666L9.33334 13.3333M8.00001 7.99999L2.66667 9.33332M2.66667 3.99999C2.66667 3.64637 2.80715 3.30723 3.0572 3.05718C3.30724 2.80713 3.64638 2.66666 4.00001 2.66666H12C12.3536 2.66666 12.6928 2.80713 12.9428 3.05718C13.1929 3.30723 13.3333 3.64637 13.3333 3.99999V12C13.3333 12.3536 13.1929 12.6928 12.9428 12.9428C12.6928 13.1928 12.3536 13.3333 12 13.3333H4.00001C3.64638 13.3333 3.30724 13.1928 3.0572 12.9428C2.80715 12.6928 2.66667 12.3536 2.66667 12V3.99999Z"
            stroke="#FFA500"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Dashboard
      </div>
      <div className="options">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
        >
          <path
            d="M2 14.5V13.1667C2 12.4594 2.28095 11.7811 2.78105 11.281C3.28115 10.781 3.95942 10.5 4.66667 10.5H7.33333C8.04058 10.5 8.71885 10.781 9.21895 11.281C9.71905 11.7811 10 12.4594 10 13.1667V14.5M10.6667 2.58667C11.2403 2.73354 11.7487 3.06714 12.1118 3.53488C12.4748 4.00262 12.6719 4.57789 12.6719 5.17C12.6719 5.76212 12.4748 6.33739 12.1118 6.80513C11.7487 7.27287 11.2403 7.60647 10.6667 7.75334M14 14.5V13.1667C13.9966 12.5781 13.7986 12.0072 13.4368 11.5429C13.0751 11.0787 12.5699 10.7471 12 10.6M3.33333 5.16667C3.33333 5.87391 3.61428 6.55219 4.11438 7.05229C4.61448 7.55238 5.29276 7.83333 6 7.83333C6.70724 7.83333 7.38552 7.55238 7.88562 7.05229C8.38572 6.55219 8.66667 5.87391 8.66667 5.16667C8.66667 4.45942 8.38572 3.78115 7.88562 3.28105C7.38552 2.78095 6.70724 2.5 6 2.5C5.29276 2.5 4.61448 2.78095 4.11438 3.28105C3.61428 3.78115 3.33333 4.45942 3.33333 5.16667Z"
            stroke="#7D7D7D"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Customers
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
          >
            <path
              d="M4 6.5L8 10.5L12 6.5"
              stroke="#7D7D7D"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="options">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M5.99999 3.33333H4.66666C4.31304 3.33333 3.9739 3.47381 3.72385 3.72386C3.4738 3.97391 3.33333 4.31304 3.33333 4.66667V12.6667C3.33333 13.0203 3.4738 13.3594 3.72385 13.6095C3.9739 13.8595 4.31304 14 4.66666 14H11.3333C11.6869 14 12.0261 13.8595 12.2761 13.6095C12.5262 13.3594 12.6667 13.0203 12.6667 12.6667V4.66667C12.6667 4.31304 12.5262 3.97391 12.2761 3.72386C12.0261 3.47381 11.6869 3.33333 11.3333 3.33333H9.99999M5.99999 3.33333C5.99999 2.97971 6.14047 2.64057 6.39052 2.39052C6.64057 2.14048 6.97971 2 7.33333 2H8.66666C9.02028 2 9.35942 2.14048 9.60947 2.39052C9.85952 2.64057 9.99999 2.97971 9.99999 3.33333M5.99999 3.33333C5.99999 3.68696 6.14047 4.02609 6.39052 4.27614C6.64057 4.52619 6.97971 4.66667 7.33333 4.66667H8.66666C9.02028 4.66667 9.35942 4.52619 9.60947 4.27614C9.85952 4.02609 9.99999 3.68696 9.99999 3.33333M5.99999 11.3333V8.66667M7.99999 11.3333V10.6667M9.99999 11.3333V10"
            stroke="#7D7D7D"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        All Reports
      </div>
      <div className="options">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M2.39998 6H13.6M2.39998 10H13.6M7.66669 2C6.54358 3.79974 5.94816 5.87858 5.94816 8C5.94816 10.1214 6.54358 12.2003 7.66669 14M8.33333 2C9.45644 3.79974 10.0519 5.87858 10.0519 8C10.0519 10.1214 9.45644 12.2003 8.33333 14M2 8C2 8.78793 2.15519 9.56815 2.45672 10.2961C2.75825 11.0241 3.20021 11.6855 3.75736 12.2426C4.31451 12.7998 4.97595 13.2417 5.7039 13.5433C6.43185 13.8448 7.21207 14 8 14C8.78793 14 9.56815 13.8448 10.2961 13.5433C11.0241 13.2417 11.6855 12.7998 12.2426 12.2426C12.7998 11.6855 13.2417 11.0241 13.5433 10.2961C13.8448 9.56815 14 8.78793 14 8C14 6.4087 13.3679 4.88258 12.2426 3.75736C11.1174 2.63214 9.5913 2 8 2C6.4087 2 4.88258 2.63214 3.75736 3.75736C2.63214 4.88258 2 6.4087 2 8Z"
            stroke="#7D7D7D"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Geography
      </div>
      <div className="options">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M2 13.3333L2.86667 10.7333C1.31733 8.442 1.916 5.48533 4.26667 3.81733C6.61733 2.15 9.99333 2.28666 12.1633 4.13733C14.3333 5.98866 14.6267 8.98133 12.8493 11.138C11.072 13.2947 7.77267 13.948 5.13333 12.6667L2 13.3333Z"
            stroke="#7D7D7D"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Conversations
      </div>
      <div className="options">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M11.3333 6.66666L10 2.66666M4.66667 6.66666L6 2.66666M7.33331 13.3333H4.82931C4.35158 13.3333 3.88963 13.1623 3.52707 12.8512C3.1645 12.5401 2.92526 12.1095 2.85265 11.6373L2.01598 6.86933C1.98676 6.67932 1.99897 6.48524 2.05178 6.30039C2.1046 6.11554 2.19676 5.9443 2.32194 5.7984C2.44713 5.6525 2.60239 5.5354 2.77708 5.45513C2.95176 5.37486 3.14174 5.33331 3.33398 5.33333H12.6666C12.8589 5.33331 13.0489 5.37486 13.2236 5.45513C13.3982 5.5354 13.5535 5.6525 13.6787 5.7984C13.8039 5.9443 13.896 6.11554 13.9488 6.30039C14.0017 6.48524 14.0139 6.67932 13.9846 6.86933L13.6653 8.68866M10 12.6667L11.3333 14L14 11.3333M6.66667 9.33333C6.66667 9.68695 6.80714 10.0261 7.05719 10.2761C7.30724 10.5262 7.64638 10.6667 8 10.6667C8.35362 10.6667 8.69276 10.5262 8.94281 10.2761C9.19286 10.0261 9.33333 9.68695 9.33333 9.33333C9.33333 8.97971 9.19286 8.64057 8.94281 8.39052C8.69276 8.14047 8.35362 8 8 8C7.64638 8 7.30724 8.14047 7.05719 8.39052C6.80714 8.64057 6.66667 8.97971 6.66667 9.33333Z"
            stroke="#7D7D7D"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Deals
      </div>
      <div className="options">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M2.66667 4C2.66667 5.10467 5.05467 6 8.00001 6C10.9453 6 13.3333 5.10467 13.3333 4M2.66667 4C2.66667 2.89533 5.05467 2 8.00001 2C10.9453 2 13.3333 2.89533 13.3333 4M2.66667 4V8M13.3333 4V8M2.66667 8C2.66667 9.10467 5.05467 10 8.00001 10C8.74534 10 9.45534 9.94267 10.1 9.83933M2.66667 8V12C2.66667 13.1047 5.05467 14 8.00001 14C8.10467 14 8.208 13.9987 8.31067 13.9967M10.6667 12.6667H14.6667M14.6667 12.6667L12.6667 10.6667M14.6667 12.6667L12.6667 14.6667"
            stroke="#7D7D7D"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Export
      </div>
      <div className="down-set">
      <div className="username">
        <div className="image">
          <img src={photo} alt="" />
        </div>
        <div className="name-admin">
          <div className="user-name1">Gustavo Xavier</div>
          <div className="user-admin1">Admin</div>
        </div>
      </div>
      <div className="options">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M13.25 4.17998C13.4791 4.31029 13.6694 4.4993 13.8012 4.72755C13.933 4.95581 14.0016 5.21507 14 5.47865V10.3346C14 10.874 13.7047 11.3713 13.228 11.6333L8.728 14.48C8.5049 14.6025 8.25451 14.6667 8 14.6667C7.74549 14.6667 7.4951 14.6025 7.272 14.48L2.772 11.6333C2.53878 11.5059 2.34408 11.3181 2.20827 11.0896C2.07247 10.8612 2.00053 10.6004 2 10.3346V5.47798C2 4.93865 2.29533 4.44198 2.772 4.17998L7.272 1.52665C7.50169 1.40001 7.75971 1.33359 8.022 1.33359C8.28429 1.33359 8.54231 1.40001 8.772 1.52665L13.272 4.17998H13.25Z"
            stroke="#7D7D7D"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6 7.99999C6 8.53042 6.21071 9.03913 6.58579 9.4142C6.96086 9.78928 7.46957 9.99999 8 9.99999C8.53043 9.99999 9.03914 9.78928 9.41421 9.4142C9.78929 9.03913 10 8.53042 10 7.99999C10 7.46956 9.78929 6.96085 9.41421 6.58578C9.03914 6.2107 8.53043 5.99999 8 5.99999C7.46957 5.99999 6.96086 6.2107 6.58579 6.58578C6.21071 6.96085 6 7.46956 6 7.99999Z"
            stroke="#7D7D7D"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Settings
      </div>
      <div className="logout">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M9.33333 5.33332V3.99999C9.33333 3.64637 9.19286 3.30723 8.94281 3.05718C8.69276 2.80713 8.35362 2.66666 8 2.66666H3.33333C2.97971 2.66666 2.64057 2.80713 2.39052 3.05718C2.14048 3.30723 2 3.64637 2 3.99999V12C2 12.3536 2.14048 12.6928 2.39052 12.9428C2.64057 13.1928 2.97971 13.3333 3.33333 13.3333H8C8.35362 13.3333 8.69276 13.1928 8.94281 12.9428C9.19286 12.6928 9.33333 12.3536 9.33333 12V10.6667M6 7.99999H14M14 7.99999L12 5.99999M14 7.99999L12 9.99999"
            stroke="#B01212"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Log out
      </div>
      </div>
    </div>
  );
}
export default Sidebar;