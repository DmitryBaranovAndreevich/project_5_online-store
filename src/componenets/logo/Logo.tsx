import styles from './logo.module.css';

const Logo = ({color}: {color: string}) => {
  return (
    <div className={styles.logo}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 156 66"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_5101_674)">
          <path
            d="M48.513 24.6743C48.4887 21.1069 47.3262 17.6401 45.1945 14.7779C45.166 14.7184 45.1263 14.665 45.0775 14.6205C43.6528 12.7179 41.9212 11.0654 39.9534 9.73077C39.902 9.68971 39.8478 9.65214 39.7913 9.61832V9.61832C36.7412 7.58887 33.3044 6.21058 29.6963 5.56979H29.6513C29.6277 5.56304 29.6028 5.56304 29.5792 5.56979V5.56979C28.6787 5.39885 27.7106 5.27739 26.756 5.19642C26.684 3.20815 26.2742 1.98009 25.7925 1.21537C25.6452 0.932775 25.4413 0.6835 25.1934 0.483059C24.9455 0.282618 24.659 0.135304 24.3516 0.050293H24.23H24.149C23.8411 0.135495 23.5541 0.282842 23.3055 0.48323C23.0569 0.683619 22.852 0.932792 22.7036 1.21537C22.2173 1.98009 21.8031 3.21264 21.74 5.20092C12.379 5.99263 4.58482 11.1073 1.47797 18.0258C1.46026 18.0621 1.44521 18.0997 1.43294 18.1382C0.514142 20.2046 0.0386646 22.4403 0.0371094 24.7013C0.0371094 30.0589 2.64416 35.0476 7.38549 38.7677C7.06053 40.8612 7.26326 43.0025 7.97534 44.998V44.998C6.85867 48.5966 5.86808 53.1895 7.7502 57.094C7.75102 57.106 7.75102 57.1181 7.7502 57.13C9.9205 61.5834 14.171 62.789 18.282 63.9496C20.2389 64.4245 22.1438 65.092 23.9689 65.9423L24.0319 65.9693H24.0724C24.1144 65.9737 24.1566 65.9737 24.1985 65.9693H24.2661C24.3478 65.9702 24.4284 65.9501 24.5002 65.9108C26.3257 65.051 28.2322 64.3744 30.1916 63.8911C32.533 63.2298 34.9239 62.5416 36.9456 61.2685L37.0042 61.228C38.6115 60.2207 39.9008 58.7798 40.7234 57.0716C42.628 53.1625 41.6239 48.6281 40.5703 45.1149C40.5628 45.0903 40.5505 45.0674 40.5343 45.0474C41.6059 42.4474 41.3087 39.6494 41.1691 38.7137C45.906 35.0116 48.513 30.0319 48.513 24.6743ZM47.4999 24.6743C47.4989 26.1297 47.2912 27.5777 46.883 28.9748C46.1632 27.5083 45.2368 26.1526 44.1319 24.9487C42.0832 22.6996 38.4585 19.9241 32.578 18.8355C36.4358 17.3638 40.4252 16.2627 44.4921 15.5472C46.4222 18.2021 47.4738 21.3931 47.4999 24.6743V24.6743ZM43.8212 14.643C38.5354 15.5937 33.3914 17.2094 28.5121 19.4517C28.1969 16.9012 27.0622 14.8949 25.5583 14.1617C25.6079 13.9817 25.6484 13.8108 25.6889 13.6398C30.1626 12.1384 34.7849 11.122 39.4761 10.608C41.1117 11.7366 42.5752 13.0957 43.8212 14.643V14.643ZM37.9272 47.1122L37.657 47.3506C36.6925 48.1046 35.5578 48.6111 34.3521 48.8261H34.2935H34.199H34.172C31.655 49.2759 28.395 48.9385 24.4281 47.7734H24.3741H24.176H24.1355C22.3286 48.3251 20.4746 48.7091 18.5972 48.9205H18.5161C14.9995 49.2624 12.3519 48.6416 10.6094 47.0492C8.58771 45.2858 8.20948 42.5194 8.20948 40.648C9.06562 42.2584 10.3433 43.6064 11.9062 44.5481C14.4952 46.0776 17.7597 46.3475 21.6185 45.4073C21.8679 45.886 22.2443 46.2869 22.7065 46.5661C23.1687 46.8454 23.6989 46.9923 24.239 46.9907V46.9907C24.7786 46.9925 25.3083 46.8456 25.7698 46.5663C26.2313 46.2869 26.6068 45.8859 26.8551 45.4073C30.7139 46.3654 33.9828 46.0776 36.5674 44.5481C38.1324 43.609 39.4107 42.2604 40.2641 40.648C40.3001 42.5194 39.9219 45.2858 37.9272 47.1122ZM35.6759 60.8907C33.9293 61.7531 32.0932 62.4214 30.2006 62.8834C29.3373 62.0651 28.5958 61.1274 27.9988 60.099C27.0982 58.484 27.5485 56.7072 28.2194 55.0248C28.332 54.7369 28.4671 54.4265 28.6111 54.1026C29.1605 52.8566 29.8179 51.3541 29.5927 49.9641C30.3309 50.0532 31.0735 50.0997 31.8171 50.1036C32.5634 50.1061 33.3087 50.0489 34.0459 49.9327C34.3296 50.7334 33.9243 52.1099 33.5596 53.3469C33.2496 54.2008 33.0631 55.0945 33.0058 56.001C33.0046 56.9743 33.2486 57.9323 33.7152 58.7868C34.1818 59.6413 34.856 60.3648 35.6759 60.8907ZM24.2706 64.9392C23.5411 64.3994 21.0151 62.3167 20.5288 58.9114C20.0785 55.8165 21.4068 52.4517 24.4417 48.9025C25.7817 49.2857 27.1441 49.5861 28.5211 49.8022V49.8022C28.8813 50.9448 28.2464 52.3888 27.6836 53.6708C27.535 54.0127 27.3954 54.3366 27.2784 54.6379C26.5354 56.5498 25.9996 58.592 27.1162 60.5758C27.6622 61.5216 28.3231 62.3964 29.0839 63.1803C27.4282 63.6203 25.8156 64.209 24.2661 64.9392H24.2706ZM36.0631 43.6934C33.6406 45.1239 30.4978 45.3398 26.7425 44.3412C26.6764 44.3193 26.6064 44.3114 26.537 44.318C26.4676 44.3245 26.4003 44.3453 26.3394 44.3791C26.2785 44.413 26.2252 44.459 26.183 44.5144C26.1408 44.5698 26.1105 44.6334 26.0941 44.7011C25.9612 45.0788 25.7136 45.4057 25.386 45.6363C25.0583 45.8669 24.6668 45.9897 24.2661 45.9876C23.862 45.9907 23.4673 45.8663 23.1382 45.632C22.8091 45.3977 22.5624 45.0656 22.4335 44.6831C22.4163 44.618 22.3859 44.5573 22.344 44.5046C22.3022 44.452 22.2498 44.4086 22.1903 44.3772C22.1259 44.3427 22.0552 44.3217 21.9824 44.3155C21.9096 44.3093 21.8363 44.318 21.7671 44.3412C18.0208 45.3353 14.8915 45.1194 12.4645 43.6934C10.5641 42.5211 9.14347 40.7112 8.45713 38.5878C8.86687 37.7601 10.8751 33.9994 15.3868 29.627C15.8685 29.3481 21.9922 26.0014 33.1543 29.654C37.6345 34.0039 39.6787 37.8051 40.0795 38.5923C39.3842 40.7102 37.9594 42.513 36.0586 43.6799L36.0631 43.6934ZM20.9521 20.8957C20.9521 18.3181 21.8931 16.051 23.1719 15.2188C23.311 15.1202 23.4624 15.04 23.6222 14.9804C23.7811 14.9205 23.948 14.8841 24.1175 14.8724H24.3066C24.4787 14.8764 24.649 14.9083 24.8109 14.9669C24.9696 15.0194 25.1209 15.092 25.2611 15.1828C26.4003 15.889 27.2828 17.7289 27.4855 19.9196C27.5205 20.2438 27.5371 20.5697 27.535 20.8957C27.535 20.9497 27.535 21.0082 27.535 21.0667C27.5273 21.9026 27.4122 22.7341 27.1928 23.5408C27.097 23.8757 26.9812 24.2047 26.8461 24.5259C26.2382 25.9699 25.2882 26.919 24.2345 26.919C23.1809 26.919 22.2308 25.9744 21.623 24.5304C21.4775 24.1953 21.3586 23.8494 21.2673 23.4958C21.0459 22.6471 20.9399 21.7726 20.9521 20.8957V20.8957ZM22.0192 26.9415C20.4959 27.0102 18.9853 27.2516 17.5165 27.6613V27.6613C18.4846 26.8381 19.5698 25.9879 20.7675 25.1332C21.0689 25.8083 21.4933 26.4215 22.0192 26.9415V26.9415ZM26.3373 27.0855C26.9346 26.5408 27.4089 25.8753 27.7286 25.1332C29.0794 26.1093 30.3312 27.1035 31.4478 28.0796C29.7721 27.6188 28.0636 27.2865 26.3373 27.0855ZM25.9185 12.4883C26.3134 10.6926 26.5753 8.87035 26.702 7.03625C27.6025 6.86082 28.5256 6.69437 29.4757 6.54143C32.5196 7.09115 35.4411 8.17879 38.1028 9.75327C33.9646 10.2817 29.8853 11.1974 25.9185 12.4883V12.4883ZM23.4826 1.80465C23.6487 1.47941 23.9072 1.21029 24.2255 1.03093C24.5428 1.21175 24.8008 1.48048 24.9685 1.80465C25.3017 2.36695 25.6439 3.36559 25.7159 5.08846C25.7159 5.40335 25.7159 5.74073 25.7159 6.10509V6.20855C25.7159 6.53694 25.6889 6.87881 25.6664 7.25667C25.5032 9.14738 25.2022 11.0237 24.7658 12.8706C24.6938 13.199 24.6218 13.5319 24.5407 13.8783C24.4365 13.862 24.331 13.8545 24.2255 13.8558C24.1021 13.8579 23.9788 13.8669 23.8563 13.8828C23.8068 13.6713 23.7528 13.4644 23.7077 13.253C23.2935 11.4973 22.9927 9.71673 22.8072 7.92243C22.7712 7.56256 22.7441 7.22069 22.7306 6.8968C22.7171 6.57292 22.7036 6.357 22.6991 6.10509C22.6991 5.74073 22.6991 5.40335 22.6991 5.09296C22.8072 3.36559 23.1539 2.36695 23.4826 1.80465V1.80465ZM21.7175 6.17706C21.7175 6.48745 21.74 6.81583 21.7626 7.15321C12.5231 9.66329 6.80464 13.37 3.89591 15.7001C7.46203 10.5315 14.0315 6.85182 21.7175 6.17706ZM2.32447 18.5206C2.68018 18.1382 4.67937 16.069 8.62823 13.7118C12.7669 11.2886 17.2135 9.43357 21.8481 8.19683C22.0543 10.0254 22.37 11.84 22.7937 13.6309C17.7955 15.5443 13.1809 18.3369 9.16855 21.8764C5.11614 25.547 3.0539 28.9658 2.22091 30.6122C1.4126 28.6967 1.0052 26.6362 1.02379 24.5575C1.04237 22.4788 1.48655 20.4259 2.32897 18.5251L2.32447 18.5206ZM2.77474 31.7997C3.40511 30.3783 7.92131 21.1431 21.722 15.1558C20.6369 16.4243 19.9435 18.4981 19.9435 20.8912C19.9328 21.9782 20.0846 23.0608 20.3937 24.103C12.379 29.744 8.72729 35.8483 7.72319 37.7421C5.67813 36.1253 3.99152 34.1018 2.77024 31.7997H2.77474ZM8.62823 46.2935C8.98696 46.8681 9.41995 47.3929 9.91599 47.8544C10.7584 48.6155 11.7551 49.1863 12.8382 49.5278V49.5278C11.7783 49.863 10.8041 50.4248 9.98354 51.1742C8.98106 52.1385 8.28431 53.3758 7.97984 54.7324C7.30894 51.9524 7.86277 48.9205 8.60572 46.2935H8.62823ZM8.72728 56.7702C9.01546 49.9686 15.3868 50.0721 15.6659 50.0811C15.7135 50.0828 15.7609 50.0751 15.8055 50.0586V50.0586C16.1432 50.0586 16.4899 50.0856 16.8411 50.0586C14.7519 51.705 13.4866 53.6123 13.0814 55.749C12.7527 57.6744 13.0443 59.6544 13.9144 61.4035C11.7531 60.4813 9.89799 59.1453 8.70478 56.7702H8.72728ZM15.4138 61.9928C15.0401 61.4215 13.5272 58.8844 14.0945 55.947C14.5448 53.6663 16.1072 51.6555 18.7683 49.9686C20.1541 49.8197 21.5268 49.5671 22.8747 49.2129C20.2136 52.6452 19.0835 55.9605 19.5337 59.0553C19.8091 60.8538 20.5792 62.5404 21.7581 63.9271C20.6999 63.5582 19.6193 63.2523 18.5567 62.9509C17.494 62.6495 16.4089 62.3436 15.4138 61.9928ZM36.68 60.2699C35.8833 59.866 35.2141 59.2495 34.7468 58.4888C34.2795 57.7282 34.0322 56.853 34.0324 55.9605C34.0975 55.1602 34.2686 54.3721 34.5412 53.6168C34.9554 52.2313 35.3742 50.8053 35.0635 49.7167C35.8995 49.5136 36.7007 49.1877 37.4409 48.7496V48.7496C37.4409 52.6317 39.5797 54.3006 40.4712 54.8314C40.3192 55.4659 40.1003 56.0827 39.8183 56.6712C39.1086 58.132 38.0183 59.3751 36.6619 60.2699H36.68ZM40.6828 53.7518C39.8048 53.1085 38.2559 51.4666 38.49 47.9804L38.6341 47.8544C39.1135 47.4149 39.5328 46.9143 39.8814 46.3654C40.5027 48.6416 41.0115 51.2507 40.6648 53.7518H40.6828ZM40.7954 37.7556C39.8093 35.8933 36.1711 29.8115 28.1158 24.148C28.4415 23.0949 28.6025 21.9979 28.5931 20.8957C28.5931 20.7878 28.5931 20.6753 28.5931 20.5718C29.3 20.23 30.0295 19.8971 30.7814 19.5867C37.3418 20.3694 41.2457 23.2799 43.3664 25.5965C44.6716 26.992 45.7026 28.6202 46.4057 30.3963C45.1941 33.292 43.2556 35.8267 40.7774 37.7556H40.7954Z"
            fill={color}
          />
          <path
            d="M17.5294 35.9868C16.03 35.9868 14.6882 36.6436 14.1839 37.6242C14.1239 37.7437 14.1134 37.8819 14.1547 38.0091C14.196 38.1362 14.2858 38.242 14.4046 38.3035C14.476 38.3387 14.5545 38.3572 14.6342 38.3574C14.7273 38.3577 14.8186 38.3322 14.8981 38.2837C14.9776 38.2353 15.0421 38.1658 15.0845 38.083C15.4131 37.4443 16.4353 36.9944 17.5294 36.9944C18.6236 36.9944 19.6457 37.4443 19.9789 38.083C20.0089 38.1422 20.0504 38.1949 20.1008 38.238C20.1513 38.2812 20.2098 38.3139 20.273 38.3344C20.3362 38.3549 20.4028 38.3627 20.469 38.3574C20.5352 38.3521 20.5997 38.3338 20.6588 38.3035C20.7787 38.242 20.8693 38.1354 20.9107 38.0072C20.9521 37.879 20.9408 37.7396 20.8794 37.6197C20.3661 36.6436 19.0153 35.9868 17.5294 35.9868Z"
            fill="#3F4E65"
          />
          <path
            d="M30.9788 35.9868C29.4794 35.9868 28.1331 36.6436 27.6333 37.6242C27.6024 37.6831 27.5836 37.7476 27.578 37.8139C27.5723 37.8802 27.58 37.947 27.6006 38.0102C27.6211 38.0735 27.6541 38.132 27.6976 38.1824C27.7412 38.2328 27.7943 38.2739 27.854 38.3035C27.9254 38.3387 28.004 38.3572 28.0836 38.3574C28.1767 38.3577 28.268 38.3322 28.3475 38.2837C28.427 38.2353 28.4915 38.1658 28.5339 38.083C28.8626 37.4443 29.8847 36.9944 30.9788 36.9944C32.073 36.9944 33.0951 37.4443 33.4283 38.083C33.4583 38.1422 33.4998 38.1949 33.5503 38.238C33.6007 38.2812 33.6592 38.3139 33.7224 38.3344C33.7856 38.3549 33.8522 38.3627 33.9184 38.3574C33.9846 38.3521 34.0491 38.3338 34.1082 38.3035C34.2273 38.2411 34.3171 38.1345 34.3584 38.0066C34.3997 37.8788 34.389 37.7398 34.3288 37.6197C33.82 36.6436 32.4737 35.9868 30.9788 35.9868Z"
            fill={color}
          />
          <path
            d="M63.8707 29.0774C67.1621 29.0774 70.7282 30.8767 71.3406 35.1097H67.3467C66.7794 33.4993 65.5727 32.7705 63.8707 32.7705C61.4887 32.7705 59.9218 34.5699 59.9218 37.1924C59.9218 39.5316 61.4662 41.5693 63.8707 41.5963C65.5997 41.5963 66.982 40.7327 67.4143 39.0323H71.4081C70.8183 43.5306 67.2567 45.2895 63.8707 45.2895C59.8182 45.312 55.7433 42.5905 55.7208 37.1924C55.6983 31.7944 59.8317 29.0774 63.8707 29.0774Z"
            fill={color}
          />
          <path
            d="M77.7655 44.6959L80.2509 39.5767L74.9062 29.8513V29.2395H79.445L82.4437 35.0874H82.5563L85.2804 29.2395H89.7066V29.8513L82.1466 45.1457H77.7655V44.6959Z"
            fill={color}
          />
          <path
            d="M94.7054 45.1455H90.7295V44.5562L97.8798 29.0684H99.6133L106.818 44.5427V45.1455H102.842L98.7578 35.8474L94.7054 45.1455Z"
            fill={color}
          />
          <path
            d="M108.668 32.8875V29.2573H120.47V32.8875H116.588V45.1456H112.572V32.8875H108.668Z"
            fill={color}
          />
          <path
            d="M133.5 43.1347H127.236L126.304 45.1455H122.333V44.5562L129.483 29.0684H131.23L138.403 44.5562V45.1455H134.432L133.5 43.1347ZM130.348 35.4875L128.547 39.662H132.18L130.348 35.4875Z"
            fill={color}
          />
          <path
            d="M156 45.1456H151.844V38.7579H146.941V45.1456H142.789V29.2573H146.941V35.0152H151.844V29.2573H156V45.1456Z"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_5101_674">
            <rect width="156" height="66" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default Logo;
