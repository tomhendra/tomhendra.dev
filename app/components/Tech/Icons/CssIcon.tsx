function CssIcon({size = 44, ...rest}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M22.3644 44L6.52887 39.6016L3 0H41.7762L38.2436 39.5954L22.3644 44Z"
        fill="#264DE4"
      />
      <path
        d="M35.2193 37.0741L38.2382 3.23801H22.3881V40.6333L35.2193 37.0741Z"
        fill="#2965F1"
      />
      <path
        d="M11.0899 17.9257L11.525 22.7826H22.3881V17.9257H11.0899Z"
        fill="#EBEBEB"
      />
      <path
        d="M10.2156 8.09506L10.6569 12.9521H22.3881V8.09506H22.3713H10.2156Z"
        fill="#EBEBEB"
      />
      <path
        d="M22.3881 30.5398L22.3668 30.5455L16.9605 29.0848L16.6149 25.2112H13.9878H11.7418L12.4219 32.8373L22.3658 35.5993L22.3881 35.5931V30.5398Z"
        fill="#EBEBEB"
      />
      <path
        d="M33.6553 17.9257L34.5316 8.09506H22.3713V12.9521H29.2116L28.7699 17.9257H22.3713V22.7826H28.349L27.7855 29.0818L22.3713 30.5439V35.5969L32.3231 32.8373L32.3961 32.0168L33.5368 19.2299L33.6553 17.9257Z"
        fill="white"
      />
    </svg>
  );
}

export {CssIcon as default};