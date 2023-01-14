const DiscordSvg = () => (
  <svg
    width="21"
    height="18"
    viewBox="0 0 21 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_67_2)">
      <path
        d="M17.7891 1.50124C16.4119 0.790708 14.9549 0.285847 13.4567 0C13.2701 0.37203 13.052 0.872412 12.9017 1.27049C11.2863 1.00266 9.68579 1.00266 8.10013 1.27049C7.94985 0.872502 7.72689 0.37203 7.53854 0C6.03884 0.285979 4.58063 0.792126 3.20278 1.50494C0.460968 6.0736 -0.282317 10.5286 0.0892843 14.9206C1.90784 16.4181 3.67019 17.3278 5.40286 17.923C5.83347 17.2701 6.21412 16.5788 6.54088 15.8563C5.91877 15.5951 5.31905 15.2733 4.74882 14.8946C4.89888 14.772 5.04541 14.6441 5.18818 14.5113C8.6435 16.2934 12.3979 16.2934 15.812 14.5113C15.9554 14.6433 16.1019 14.7711 16.2513 14.8946C15.6802 15.2743 15.0793 15.5968 14.456 15.8582C14.7846 16.5836 15.1646 17.2756 15.594 17.9248C17.3283 17.3297 19.0923 16.42 20.9109 14.9206C21.3469 9.82927 20.166 5.41502 17.7891 1.50115V1.50124ZM7.01166 12.2196C5.97437 12.2196 5.12371 11.1519 5.12371 9.85161C5.12371 8.55136 5.95624 7.48176 7.01166 7.48176C8.06715 7.48176 8.91773 8.54946 8.8996 9.85161C8.90125 11.1519 8.06715 12.2196 7.01166 12.2196ZM13.9885 12.2196C12.9512 12.2196 12.1006 11.1519 12.1006 9.85161C12.1006 8.55136 12.9331 7.48176 13.9885 7.48176C15.044 7.48176 15.8946 8.54946 15.8764 9.85161C15.8764 11.1519 15.044 12.2196 13.9885 12.2196V12.2196Z"
        fill="#FFF"
      />
    </g>
    <defs>
      <clipPath id="clip0_67_2">
        <rect width="21" height="18" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
const TwitterSvg = () => {
  return (
    <svg
      width="23"
      height="18"
      viewBox="0 0 23 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_71_2)">
        <path
          d="M22.0478 2.19187C21.2222 2.55762 20.3465 2.7977 19.4498 2.90412C20.3838 2.34431 21.101 1.45783 21.4387 0.401605C20.5508 0.928501 19.5794 1.29973 18.5664 1.49926C17.7412 0.620188 16.5657 0.0708008 15.2646 0.0708008C12.7665 0.0708008 10.7411 2.0961 10.7411 4.59405C10.7411 4.94863 10.7811 5.29382 10.8582 5.62496C7.09889 5.43626 3.76588 3.63549 1.53482 0.898801C1.14554 1.56687 0.922479 2.34397 0.922479 3.17283C0.922479 4.74219 1.72111 6.12664 2.93478 6.93784C2.21645 6.91535 1.51394 6.72134 0.885876 6.37201C0.885617 6.39095 0.885617 6.4099 0.885617 6.42894C0.885617 8.62054 2.44481 10.4488 4.51404 10.8643C3.84794 11.0455 3.14925 11.072 2.47134 10.9419C3.04691 12.7389 4.71746 14.0466 6.69678 14.0832C5.14869 15.2964 3.19823 16.0196 1.07905 16.0196C0.713885 16.0196 0.353885 15.9981 0 15.9564C2.00179 17.2398 4.37943 17.9886 6.93388 17.9886C15.2541 17.9886 19.8038 11.096 19.8038 5.11864C19.8038 4.92245 19.7995 4.72738 19.7907 4.53342C20.6763 3.89325 21.4406 3.10033 22.0478 2.19187"
          fill="#FFF"
        />
      </g>
      <defs>
        <clipPath id="clip0_71_2">
          <rect width="22.0478" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const CheckMark = ({ color }: { color: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 16.4L6 12.4L7.4 11L10 13.6L16.6 7L18 8.4L10 16.4Z"
      fill={color}
    />
  </svg>
);

export { CheckMark, DiscordSvg, TwitterSvg };
