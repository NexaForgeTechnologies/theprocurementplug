import React from "react";

const IconComponent = ({ name, size = 16, color = "#565656" }) => {
  const icons = {
    arrow: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24.000000 24.000000"
      >
        <g
          transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)"
          fill={color}
          stroke="none"
        >
          <path d="M124 209 c-3 -6 6 -24 21 -39 l28 -29 -84 -3 c-67 -2 -84 -6 -84 -18 0 -12 17 -16 84 -18 l84 -3 -28 -29 c-23 -24 -26 -33 -17 -42 10 -10 24 -1 64 40 l53 52 -50 50 c-52 52 -60 57 -71 39z" />
        </g>
      </svg>
    ),
    linkedin: (
      <svg
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={size}
        height={size}
      >
        <path d="M 5 3 C 3.895 3 3 3.895 3 5 L 3 19 C 3 20.105 3.895 21 5 21 L 19 21 C 20.105 21 21 20.105 21 19 L 21 5 C 21 3.895 20.105 3 19 3 L 5 3 z M 5 5 L 19 5 L 19 19 L 5 19 L 5 5 z M 7.7792969 6.3164062 C 6.9222969 6.3164062 6.4082031 6.8315781 6.4082031 7.5175781 C 6.4082031 8.2035781 6.9223594 8.7167969 7.6933594 8.7167969 C 8.5503594 8.7167969 9.0644531 8.2035781 9.0644531 7.5175781 C 9.0644531 6.8315781 8.5502969 6.3164062 7.7792969 6.3164062 z M 6.4765625 10 L 6.4765625 17 L 9 17 L 9 10 L 6.4765625 10 z M 11.082031 10 L 11.082031 17 L 13.605469 17 L 13.605469 13.173828 C 13.605469 12.034828 14.418109 11.871094 14.662109 11.871094 C 14.906109 11.871094 15.558594 12.115828 15.558594 13.173828 L 15.558594 17 L 18 17 L 18 13.173828 C 18 10.976828 17.023734 10 15.802734 10 C 14.581734 10 13.930469 10.406562 13.605469 10.976562 L 13.605469 10 L 11.082031 10 z" />
      </svg>
    ),
    tiktok: (
      <svg
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        width={size}
        height={size}
      >
        <path d="M 9 4 C 6.2495759 4 4 6.2495759 4 9 L 4 41 C 4 43.750424 6.2495759 46 9 46 L 41 46 C 43.750424 46 46 43.750424 46 41 L 46 9 C 46 6.2495759 43.750424 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.671576 6 44 7.3284241 44 9 L 44 41 C 44 42.671576 42.671576 44 41 44 L 9 44 C 7.3284241 44 6 42.671576 6 41 L 6 9 C 6 7.3284241 7.3284241 6 9 6 z M 26.042969 10 A 1.0001 1.0001 0 0 0 25.042969 10.998047 C 25.042969 10.998047 25.031984 15.873262 25.021484 20.759766 C 25.016184 23.203017 25.009799 25.64879 25.005859 27.490234 C 25.001922 29.331679 25 30.496833 25 30.59375 C 25 32.409009 23.351421 33.892578 21.472656 33.892578 C 19.608867 33.892578 18.121094 32.402853 18.121094 30.539062 C 18.121094 28.675273 19.608867 27.1875 21.472656 27.1875 C 21.535796 27.1875 21.663054 27.208245 21.880859 27.234375 A 1.0001 1.0001 0 0 0 23 26.240234 L 23 22.039062 A 1.0001 1.0001 0 0 0 22.0625 21.041016 C 21.906673 21.031216 21.710581 21.011719 21.472656 21.011719 C 16.223131 21.011719 11.945313 25.289537 11.945312 30.539062 C 11.945312 35.788589 16.223131 40.066406 21.472656 40.066406 C 26.72204 40.066409 31 35.788588 31 30.539062 L 31 21.490234 C 32.454611 22.653646 34.267517 23.390625 36.269531 23.390625 C 36.542588 23.390625 36.802305 23.374442 37.050781 23.351562 A 1.0001 1.0001 0 0 0 37.958984 22.355469 L 37.958984 17.685547 A 1.0001 1.0001 0 0 0 37.03125 16.6875 C 33.886609 16.461891 31.379838 14.012216 31.052734 10.896484 A 1.0001 1.0001 0 0 0 30.058594 10 L 26.042969 10 z M 27.041016 12 L 29.322266 12 C 30.049047 15.2987 32.626734 17.814404 35.958984 18.445312 L 35.958984 21.310547 C 33.820114 21.201935 31.941489 20.134948 30.835938 18.453125 A 1.0001 1.0001 0 0 0 29 19.003906 L 29 30.539062 C 29 34.707538 25.641273 38.066406 21.472656 38.066406 C 17.304181 38.066406 13.945312 34.707538 13.945312 30.539062 C 13.945312 26.538539 17.066083 23.363182 21 23.107422 L 21 25.283203 C 18.286416 25.535721 16.121094 27.762246 16.121094 30.539062 C 16.121094 33.483274 18.528445 35.892578 21.472656 35.892578 C 24.401892 35.892578 27 33.586491 27 30.59375 C 27 30.64267 27.001859 29.335571 27.005859 27.494141 C 27.009759 25.65271 27.016224 23.20692 27.021484 20.763672 C 27.030884 16.376775 27.039186 12.849206 27.041016 12 z" />
      </svg>
    ),
    dropdownarrow: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 12 12"
        fill={color}
        data-cur="pointer"
      >
        <path
          d="M1.50002 4L6.00002 8L10.5 4"
          strokeWidth="1.5"
          stroke="currentcolor"
        ></path>
      </svg>
    ),
    email: (
      <svg xmlns="http://www.w3.org/2000/svg" fill={color} viewBox="0 0 48 48">
        <title />
        <g data-name="8-Email" id="_8-Email">
          <path d="M45,7H3a3,3,0,0,0-3,3V38a3,3,0,0,0,3,3H45a3,3,0,0,0,3-3V10A3,3,0,0,0,45,7Zm-.64,2L24,24.74,3.64,9ZM2,37.59V10.26L17.41,22.17ZM3.41,39,19,23.41l4.38,3.39a1,1,0,0,0,1.22,0L29,23.41,44.59,39ZM46,37.59,30.59,22.17,46,10.26Z" />
        </g>
      </svg>
    ),
    phone: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        width={size}
        height={size}
      >
        <path d="M0 0h48v48h-48z" fill="none" />
        <path d="M13.25 21.59c2.88 5.66 7.51 10.29 13.18 13.17l4.4-4.41c.55-.55 1.34-.71 2.03-.49 2.24.74 4.65 1.14 7.14 1.14 1.11 0 2 .89 2 2v7c0 1.11-.89 2-2 2-18.78 0-34-15.22-34-34 0-1.11.9-2 2-2h7c1.11 0 2 .89 2 2 0 2.49.4 4.9 1.14 7.14.22.69.06 1.48-.49 2.03l-4.4 4.42z" />
      </svg>
    ),
    address: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        id="Layer_1"
        version="1.1"
        viewBox="0 0 512 512"
      >
        <g>
          <path d="M256,32c-74,0-134.2,58.7-134.2,132.7c0,16.4,3.5,34.3,9.8,50.4l-0.1,0l0.6,1.2l0,0c0.5,1.1,1,2.2,1.5,3.3L256,480   l121.8-259.1l0.6-1.2c0.5-1.1,1.1-2.2,1.6-3.4l0.4-1.1c6.5-16.1,9.8-33.1,9.8-50.3C390.2,90.7,330,32,256,32z M365.1,209.4   l-0.2,0.5c-0.3,0.6-0.6,1.3-0.9,1.9l-1,2.1L256,441.3L148.9,213.9l-0.9-2c-0.3-0.6-0.6-1.2-0.8-1.8c-5.9-14.5-9.1-30.6-9.1-45.4   c0-65,52.9-116.5,118-116.5s118,51.4,118,116.5C374,179.9,371,194.9,365.1,209.4z" />
          <path d="M256,96c-35.3,0-64,28.7-64,64s28.7,64,64,64s64-28.7,64-64S291.3,96,256,96z M256,206.9c-25.9,0-46.9-21-46.9-46.9   c0-25.9,21-46.9,46.9-46.9c25.9,0,46.9,21,46.9,46.9C302.9,185.9,281.9,206.9,256,206.9z" />
        </g>
      </svg>
    ),
    idea: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.0"
        width={size}
        height={size}
        viewBox="0 0 50.000000 50.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
          fill={color}
          stroke="none"
        >
          <path d="M185 466 c-61 -27 -105 -94 -105 -159 0 -41 40 -125 74 -156 19 -18 26 -34 26 -62 0 -34 4 -40 35 -55 33 -15 37 -15 70 0 31 15 35 21 35 55 0 28 7 44 26 62 35 31 74 115 74 157 0 118 -129 205 -235 158z m135 -26 c41 -21 80 -80 80 -121 0 -42 -24 -100 -57 -139 -33 -38 -37 -40 -93 -40 -56 0 -60 2 -94 42 -79 92 -71 199 20 254 48 29 92 30 144 4z m-20 -350 c0 -29 -1 -30 -50 -30 -49 0 -50 1 -50 30 0 29 1 30 50 30 49 0 50 -1 50 -30z" />
        </g>
      </svg>
    ),
    growth: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.0"
        width={size}
        height={size}
        viewBox="0 0 64.000000 64.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
          fill={color}
          stroke="none"
        >
          <path d="M390 621 c0 -12 25 -21 58 -21 24 0 19 -8 -58 -85 -47 -47 -89 -85 -95 -85 -6 0 -26 16 -45 35 -19 19 -43 35 -55 35 -19 0 -165 -135 -165 -153 0 -21 32 0 90 58 35 36 69 65 75 65 6 0 26 -16 45 -35 19 -19 43 -35 54 -35 13 0 57 37 113 92 l93 93 0 -43 c0 -31 4 -42 15 -42 12 0 15 14 15 65 l0 65 -70 0 c-38 0 -70 -4 -70 -9z" />
          <path d="M312 277 c-88 -88 -107 -117 -79 -117 16 0 197 181 197 198 0 28 -30 7 -118 -81z" />
          <path d="M502 258 c3 -7 19 -15 37 -18 l32 -5 -96 -95 c-104 -103 -121 -125 -104 -135 5 -4 59 41 119 100 l109 107 3 -33 c2 -22 8 -34 18 -34 12 0 15 13 15 60 l0 60 -68 3 c-53 2 -68 0 -65 -10z" />
          <path d="M92 57 c-25 -26 -29 -47 -9 -47 16 0 57 42 57 58 0 20 -25 14 -48 -11z" />
        </g>
      </svg>
    ),
    management: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.0"
        width={size}
        height={size}
        viewBox="0 0 50.000000 50.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
          fill={color}
          stroke="none"
        >
          <path d="M209 425 c-15 -8 -29 -21 -32 -28 -3 -9 -15 -13 -29 -10 -14 3 -34 -4 -51 -17 -22 -17 -27 -29 -27 -65 0 -24 8 -58 18 -75 16 -31 16 -32 -2 -43 -65 -41 -81 -55 -84 -75 -3 -19 1 -22 32 -22 25 0 36 -4 36 -15 0 -13 27 -15 180 -15 153 0 180 2 180 15 0 10 11 15 35 15 22 0 35 5 35 13 0 24 -30 56 -65 67 -38 13 -45 33 -20 66 8 10 15 38 15 62 0 34 -6 48 -27 68 -15 14 -36 24 -48 22 -19 -2 -29 3 -70 40 -18 16 -43 15 -76 -3z m61 -15 c0 -5 7 -10 15 -10 36 0 43 -83 13 -150 -9 -19 -18 -43 -22 -52 -7 -23 -45 -23 -52 0 -4 9 -13 33 -22 52 -20 44 -25 105 -11 131 15 29 79 52 79 29z m-116 -49 c4 -5 7 -22 7 -38 1 -15 11 -50 22 -77 l21 -48 -24 -20 c-22 -18 -25 -18 -28 -4 -2 9 -9 16 -16 16 -15 0 -37 54 -43 107 -3 34 0 44 19 57 26 18 35 20 42 7z m232 -7 c19 -13 24 -24 23 -53 -1 -20 -8 -46 -16 -58 -7 -12 -13 -29 -13 -38 0 -8 -6 -15 -14 -15 -8 0 -16 -7 -18 -16 -3 -14 -6 -14 -28 4 l-25 20 23 46 c12 26 22 64 22 86 0 44 8 48 46 24z m-256 -195 c0 -5 -4 -9 -10 -9 -5 0 -10 7 -10 16 0 8 5 12 10 9 6 -3 10 -10 10 -16z m105 1 c4 -6 3 -24 0 -42 -8 -36 -25 -20 -25 25 0 27 13 36 25 17z m54 -12 c0 -13 -4 -32 -8 -43 -7 -18 -9 -16 -15 12 -8 33 -2 53 15 53 5 0 9 -10 8 -22z m101 18 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m-304 -44 c-7 -8 -26 -12 -42 -10 l-29 3 35 22 c25 17 36 19 42 10 4 -7 1 -18 -6 -25z m389 -2 c10 -16 -51 -12 -65 5 -20 24 -2 37 30 20 16 -8 32 -19 35 -25z m-285 18 c0 -7 3 -23 6 -35 6 -22 4 -23 -50 -23 -53 0 -56 1 -46 20 19 35 90 64 90 38z m170 -3 c16 -8 34 -24 40 -35 10 -19 8 -20 -46 -20 -54 0 -56 1 -50 23 3 12 6 28 6 35 0 16 15 15 50 -3z" />
        </g>
      </svg>
    ),
    monitor: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.0"
        width={size}
        height={size}
        viewBox="0 0 50.000000 50.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
          fill={color}
          stroke="none"
        >
          <path d="M24 437 c-2 -7 -3 -80 -2 -162 l3 -150 83 -3 c62 -2 82 -6 82 -17 0 -8 -12 -15 -27 -17 -20 -2 -29 -9 -31 -25 -3 -23 -2 -23 118 -23 120 0 121 0 118 23 -2 16 -11 23 -30 25 -16 2 -28 9 -28 17 0 11 20 15 83 17 l82 3 0 160 0 160 -223 3 c-176 2 -224 0 -228 -11z m436 -122 l0 -115 -210 0 -210 0 0 115 0 115 210 0 210 0 0 -115z m0 -155 c0 -19 -7 -20 -210 -20 -203 0 -210 1 -210 20 0 19 7 20 210 20 203 0 210 -1 210 -20z m-170 -55 c0 -11 -11 -15 -40 -15 -29 0 -40 4 -40 15 0 11 11 15 40 15 29 0 40 -4 40 -15z m13 -42 c-29 -2 -77 -2 -105 0 -29 2 -6 3 52 3 58 0 81 -1 53 -3z" />
          <path d="M410 160 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0 -10 -4 -10 -10z" />
        </g>
      </svg>
    ),
    wallet: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.0"
        width={size}
        height={size}
        viewBox="0 0 50.000000 50.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
          fill={color}
          stroke="none"
        >
          <path d="M206 435 c-169 -48 -166 -44 -166 -220 0 -125 2 -144 18 -158 16 -15 45 -17 194 -17 221 0 208 -10 208 163 0 175 10 167 -207 167 -100 0 -162 4 -153 9 16 10 233 71 250 71 5 0 10 -13 10 -30 0 -16 5 -30 10 -30 14 0 12 54 -2 68 -16 16 -26 15 -162 -23z m222 -97 c17 -17 17 -249 0 -266 -17 -17 -339 -17 -356 0 -17 17 -17 249 0 266 17 17 339 17 356 0z" />
          <path d="M364 215 c-4 -9 -2 -21 4 -27 15 -15 44 -1 40 19 -4 23 -36 29 -44 8z" />
        </g>
      </svg>
    ),
  };

  return (
    <span
      style={{ width: `${size}px`, height: `${size}px` }}
      className="flex items-center justify-center"
    >
      {icons[name]}
    </span>
  );
};

export default IconComponent;
