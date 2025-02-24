/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        "primaryC":"#fff",
        "secondC": "#15BFFD",
        "mainbg":"#1B1C31",
        "dashbg": "#222338",
        "dashUrgbg": "linear-gradient(66.15deg, #B2E6FD -5.25%, #38CB89 35.43%, #15BFFD 98.77%)",
        "mainHeadC": "#EDEDED",
        "closbg": "#D80027",
        "subHeadC": "#6F767E",
        "transHeadC": "#475D96",
        "transDateC": "#6E86C2",
        "starBadge": "#FFDF66",
        "monthlyC": "#FFA600",
        "dotbg": "#8F8F8F",
        "borderC": "#15BFFD",
        "borderCG": "#00F69E",
        "bgTag": "rgba(26, 113, 255, 0.1)",
        "bgTagOne": "#4690EF",
        "dashSelectbg": "linear-gradient(90deg, rgba(21, 191, 253, 0.1) 0%, rgba(0, 255, 194, 0.3) 117.12%)",
        "btcbg": "#4D91FF",
        "ethbg": "#002D67",
        "vhabg": "#00DCF9",
        "others": "#1866CD",
        "convrtCellbg": "#121212",
        "usdtbg": "#23493D",
        "usdtC": "#26AB5F",
        "vhabg": "#3C2E05",
        "vhaC": "#FF8B1E",
        "convrtBtnbg": "linear-gradient(265.41deg, #46AA72 0%, #2DA0A4 77.48%)",
        "captextC": "#626D7D",
        "SuccessC": "#26AB5F",
        "loseC": "#EE6E6E",
        "Successbg": "rgba(38, 171, 95, 0.2)",
        "pendingC": "#F4A662",
        "pendingbg": "rgba(244, 208, 100, 0.2)",
        "amountC": "#00FF85",
        "amountbg": "rgba(56, 203, 137, 0.2)",
        "dataAnalysisbg": "linear-gradient(180deg, #15BFFD 0%, rgba(20, 126, 165, 0) 100%)",
        "chatC": "#00FF85",
        "walletHeadC": "#D9D9D9",
        "walletTogbg": "linear-gradient(180deg, #38CB89 0%, #15BFFD 100%)",
        "sendbg": "linear-gradient(265.41deg, #46AA72 0%, #2DA0A4 77.48%)",
        "recevbg": "linear-gradient(265.41deg, #46AA72 0%, #2DA0A4 77.48%)",
        "pointerC": "#00F79E",
        "formHeadC": "#009D92",
        "formButtnbg": "#009D92",
        "loginbg": "linear-gradient(265.41deg, #46AA72 0%, #2DA0A4 77.48%)",
        "formSubHead": "#009D92",
        "loginC": "#0049FC",
        "dangerC": "rgba(255, 86, 48, 0.8)",
        "warnC": "rgba(255, 166, 0, 0.8)",
        "normalC": "#56CCF2",
        "socbg": "#FAFAFA"
      },
      fontFamily: {
        poppins: ["Poppins-Regular"]
      },
      borderRadius:{
        'rd': '0px 100px 100px 0px',
      },
      margin:{'ma': "0 auto"},
      screens:{
        'sm': { max: '640px'},
        'md': { max: '768px'},
        'med': {max: '960px'},
        'lg': { max: '1024px'},
        'xl': { max: '1280px'}
      }
    },
  },
  plugins: [],
}
