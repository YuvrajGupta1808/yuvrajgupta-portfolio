// app/_data/project-data.js


export const projectData = [
  {
    id: 'raspberryPiCar',
    title: 'Raspberry Pi Powered Car',
    subtitle: 'Self‐Driving Robotics Project',
    dateRange: 'Fall 2024 (Aug 2024 – Oct 2024)',
    description: `
      Built a line-following, obstacle‐avoiding robot car using a Raspberry Pi 4 as the main controller.
      I coded custom C/Python drivers for GPIO, integrated multiple ultrasonic sensors (HC-SR04), line‐tracking sensors (TCRT5000), and a TCS34725 color sensor to detect red-stop lines.
      On top of that, I used a WaveShare Motor HAT (PCA9685 PWM controller) to drive two DC motors, implementing a PID controller for smooth line tracking. All power was supplied by a 4‐cell 18650 battery pack (for motors) plus a USB power bank (for the Pi).
    `,
    techUsed: [
      'Raspberry Pi 4 (main controller)',
      'WaveShare Motor HAT (PCA9685 PWM driver)',
      'HC-SR04 Ultrasonic Sensors (front + sides)',
      'TCRT5000 Line Sensors (front array)',
      'TCS34725 RGB Color Sensor (stop on red line)',
      'bcm2835 & pigpio libraries (GPIO in C/Python)',
      'PID algorithm (C/Python) for line‐following',
      '4×18650 battery pack + USB power bank',
    ],
    media: [
      {
        type: 'image',
        src: "https://public.boxcloud.com/d/1/b1!q_OG7K2M1WTTFteGILAxBdcYQlFWF7NpqlGcqZH__N3nPY-HEFOAj7HooYJcOXPJEMRFcDKPEGqcqSpHT6BtSM9X7o24PPwM2kKZfNDBJ4epXnz5d9bA8OWOhbXTXGYd-rZ081618JmKsa0hYPL1OTysTdeGQjKTOrZVtWtmsRKRUyWKf-VN8YLsJaf03d4AoTTdiVXvWE2RLh7nMAbomDt9sSz6Jl3jkQDEK_QubCAYltqACD1QbJHhvxyJaRRqGrvFp09p9pOcwaz-shUIhWIGifpIq48K0u69XxHfqTDAFxG2v1ZXePRQk1fTYUTrIiPbXg9CjL_p7TojxDdERBAnwLbKgY5RUAfYLAdcVNyTRojPm0cqtKy7hk2XQXiS83CKMw2nY6QEHgwv0A2NDg2UlwbcxwfxRTlk_agoYG0eSjnWonGqYe-gdnTOBVIvzzcIO0_kqKtp39dZ0W79lMEq9Q6f2Xegk3RJjyrk09SrXUga9QNc3VaYJqrQ4WVS3A802gEgfW1cbxWtSsEm09i4TAxWz1tdk3ErVheJrO1SZmWWRPne2QIm0Q1_kLf5CVi4tB6NYNG0VbtPtIVfQhX7FmCdQRGl1RacTrQwWTmMHJbWUl5nfB7wYoM3ktQt8CpI_P-fwYRSybbKJYscqaGbw0qn8dz_b_aDQQna5v6hIztad3UmfVQHLDPu29uBerWd7OcRjNTSkv5Qu3LXVoSYzaqTd2yXOXamrApv-kpyivd-vRZaVhbDZqmSxhsbt6TGL68BYceYgDYXJVT_riuyCjNyD5XBdDmIiKBL5U8aejxhevEZY13YaD67uZDGXqTm7AZwjGYisf0ps5dsKFA4qeXvWugJtZ8TyTBcvRG19HlTBhK9qa8GjhX2ubCzuR0PeRdqDlEnizAxi0Irog7ggfbxjQSy6hd1Nsjejvi4inERyKlYp_rCFv_vIYg2tPlI2bn4smTT8ei3Xu4-gwmT8fe1k9Lav1W-8V6u-ItByJazldHq4IUA0meFXcmIVebJnA3kkNGLD1R1uwT1Vg-hpTXXURYO2CozWUIZqQlo4eT_qzSpDxisz0jWYR2_u-SaS_0S3hi10l7nrPf-JxFZ_TmAoNFWMCRP0HE0EZ22XxRTES8it3MdPv871BxSYfYgYi7-qm8Msx0gDCpYR6nPvpfQPPn8xrzDFdnc0WU8QvbKSTwOIq0u9oQ6fGCcSrJvGyIMvPjUhNGsAdG0YqFQq_YRGGV5BtKwCJIIJ5iJIuV5-DGS6ap_pcw_SDqZOMNZMyZMzmyb3unN_Je4NXptWSc3cBqbd3qAXOAm1DG1XGvcgDSyqZTQHGFMxRVY9Oqfarc2M7fukX7ScyYvExHH2QauFV41VrcLwW4Ippjy_1p6_C9dvrOTqh1ge4PskRwoFyn_VADbhYAPA8XJ1raGtjxe1_ps7_pV86q1JryH0fKhssf0EM5rUkyJYu8rtt3drWoqaEHCAMZMl5iAZvbYG75_J46oDXZpKnCiq5naaqI8nRiZ1pSlZq0vPSL6DFRa1tfybJSenagHNLRL-YFC6QabIM06zng./download?raw=1",
        alt: 'Car front view'
      },
      {
        type: 'video',
        src: '/videos/Car1.mp4',         // adjust path for your actual video
        alt: 'Car demo video'
      },
      {
        type: 'image',
        src: "https://public.boxcloud.com/d/1/b1!evYHBrMet3XoY1mN9sAHlh6b-2a2oVtf1Rh5YmzS9DrTrwMK4Zh1MM5wXtDkPauIKfUAJOmj6b_9SyFf41F3Li-pCYrNIjMB_8dzdB3ZkrwvGlOZLXLZ66NiW3-Rk6zlGjr0T-7wwmmYjUMw2XbG1HHG54YzB-YPLREOz1vlXJAo2jL9F6zap-pXkI7WVBtLKZ_Fo4Qjnpq_12mgEcC9QaeowiF9HEVKKp9vOc4fMQGQxuYZEezZQZsO6OEqaFAEYaTFVc-aIjA8f5oU5Nht7zEIuryvA016WpcDnnqd4BHw2lhRjk8D_zu3XK8Z39Y46VjCrYkXbSbMILBNynS_D1xtdCQK3-t1Y4YhrfG3c8k6ITrmBOak-ZvJOHU5fJk8G-91_EPUXQAasM4YcxPwh2mzpfe7ihvSO7ykKF1C8_2ktVh2Ap2t0PjtRAAP4U7CaIIxX_j6XuJalThi1MM0f5Bx0SxIgc7Xj_ilB9vjX7QkLWew-OzvpZWUqDtq8TcXfHmLLDrR0n_TXkmB0CqPqE1aHb8PBK6ej03jQYyCJB93zqEjuRckdbAizJ2x5zoGhSYhOZfq5RBaEpTqUHqo41ARQF8_l8qp4whmJi2uGTxgzS6WwbcZr5qD54ZIXmyb97rlwnkW634XeGfwxA-eC43HEXBRIUCS37JaJrZAzVoRhzdRgnwnb8Z0vN89LKraPPPUaZ0Itk50wWkB1Eixwp2xA5qSETPgw-o1JILFDUgai4wL60uuRTU-Iij1mFaL4cp3CtiSOlwnkVelCOSDmt_nbJ04zP4ZAQqrnQhqw_BYeN3NokCh2xOZAlhm7SdunJpDa_n--xvmskQdZjwvB_KnMWyC2f2Rao0i4XI5ZB6vitDcrrsWnlLKhl3BP8dh59lJvZABU0W9gnbk7GhlseQkkI4XZKLagDVY19pepgTNygh5V6ZQq1IMUrOFGjpTy5LFfSdQzI5grkBvTUIAbpO8Bk7wQUnj7qiFZwMUR_srg-cJBA6OGT8dKvNAwEAXMqECvK_UjaPXoHvCRVD1wV4JEPIw-3OVyo_EYDNgKjsf6yHHOtC7lYF0GnEml60I6MEWNxs_sGVMuKhDgnaEuQY_39QJ_177SDI3ufdRHmWSJpNcSmSNR7NJ1eyq-nzSky1Y1f6f99vKB1sMbC-AFC1EQBUE0Bs6vt6joiORaUPQdmrwlicUHcM3qCH3L2_jssRU9idwzau6N2Mfepb0iq1V94HR4L8fIvmX7mfSiujT7tRMn5jt2-j5i0C1kfk89tQGzGl4uGhVF7wGf9tp198Jtuy6zjnFqQA3xqLiQ5ZSG-oxYLqYpQ65cqc9ahwgaf6j_Uyuh0-uBcqVCsE9cwqMnbWPMnzgYQgUBnDFAcHM3I9KjyIMblldrxckA5zzXwbbVuCvl8-P2KSgiuxZw7BGuJVxuJ5LTkzstzs4sj42gBXGXodnv5yg-CncY3xUTusIeziWbIQZAEMmv7FvVmPunNwZWtMo0numySOQM5UksugmKsY71t-Sbd_pX9BgdGtswugRxMJxsQFpkj9zZXn9S0P45_rbuko./download?raw=1",         // adjust path for your actual image
        alt: 'Car side view'
      }
    ],
    githubUrl: 'https://github.com/CSC615-2024-Fall/csc615-term-project-nhannguyensf',
  },

  {
    id: 'gatorMarketplace',
    title: 'Gator Marketplace Application',
    subtitle: 'Campus-Specific E-Commerce Platform',
    dateRange: 'Spring 2025 (Feb 2025 – May 2025)',
    description: `
      Built a campus-specific e-commerce platform using Python Flask with secure authentication, listing management, and in-app messaging. 
      Designed a responsive front-end (HTML/CSS/JavaScript) to ensure usability on both desktop and mobile. 
      Deployed the application on an AWS EC2 instance using Gunicorn and NGINX as a reverse proxy.
      Implemented MySQL for persistent data storage and incorporated GitHub branching strategies for collaborative development.
    `,
    techUsed: [
      'Python Flask (REST API)',
      'MySQL (persistent storage)',
      'AWS EC2 (deployment)',
      'Gunicorn + NGINX (application server)',
      'HTML5 / CSS3 / JavaScript (responsive UI)',
      'GitHub (version control & branching)',
    ],
    media: [
      {
        type: 'image',
        src: "https://public.boxcloud.com/d/1/b1!lnFUqKs0zb-YTc47UVCBiko3IJkI0PpRWfaS5QSwQ8xGqucQQavQkh3rLj6-YX7EjF6yY5-IQfX-ffpZAm85LPrfkdiY9bccW1ty9r8wnsOFPzat1J7bSnsj0epuOSjWyoCNwduZVOtya8YIPVa776rkhkoAnkz-jJ-HzlGCaXB3Dz-hPazngRPyeDhKyoZioaAhHjCZ--uQfPrrkh2gkllgMftW4bVVXiadNsE0yY3Cpv3Kb1avzNZsEXvIGzPvaXIT2Oaew-S0Uk3diGs47yQEtKXr458gVc4x6O78dS75BFf3gRwRdeCiXAM3uF9eOkDYDcevi9yO2i-v7e9-h3arPXj3apMYDlIg10hOnUZIuJMdiPXlU2Zm_h5_XvZTWYdUwDiWRwTi_DKmb5IydPSdlNczGihoEQ6_BCVflsUQT60VyO4GQ89PEwdJs46Vd3PZTzp4vTAQuqzm1t8r4Kzvaoz3o7urCqEkqjIDTpLcMekmwvqS0V45IOkZmbjlms61FLarvpcR0Bthc81iTzUpgdT8RnRuPhezXjqP67i1S1AHPwp12ETK3OxSXa_8QRehBpzItlo7RbQKn_cGf-8dIt6OUVXNodpdEsIRj4TDkTav-OFoeO353VrZJrg7CxWWXuuhL0PiViznkJdUCa0gD0RXnv-Nzbe--iSHFHL37-ygRlSesuU9YTso-cw4zwvVUL41Ggk9M1XlsCTLAz8igKwZ1HdBrFvdz6_SPtclWU-ZU2n4PtIYpYyDOgDAdfLMNClbyghd1wRMvvAX4VuYVBOppKrkQFYWr5b-5lmylYymaIQ9otjtfrfXSgrfWTjScxd8yhIkf2XNd-3L6BSDtIVdnnRpkL1rAF3zk-uIFENgD4q8-5u8pKqD6p1S0XMO5oEvOWxctXGHk2gfl3G0k5DmU3GyDqDqhJ0oP_IiWraG7Ow7v4dOqRXYBy6vf3QnY0EJtt9khylxhWoCnC8bqG4YAM_Z-bmmsRfpLYQxf8U63WzV5MvxXCPK1v-SbM0Kyd6VmOY1eyFDxATuVnXw5d_sdaIOU18v-c-EGeCdOaxuNVgfm1fXyQ-kEQfbpHxmZQXzgkmY3ANlnO_RPq4BxTn3NEefqjjc7ncTo42zZIPwXN53dQMAhbeeoKY0G6Sig3wLry_-QucLXk1V6xVWhulqoW7Gc7WzPcgwBqK8tkDwXNh6ZlvbV6Ts46ZNpVGwpH91IgqDCfpIR8IXgA99yriwsdaU9eErNI_AT1oaCnxok2qcvNP1zxq1Sa_AGYQl_5uHgEBftNMnkU0l0mfTSFxKS2aE6GTrfgE3rBOhM9Am8lXubgLfqIQvwiZLii_Gu12-hMsXvBCjznTB4YG_wbCf2ww5LYSZBcH3igbda4ZCgM7yeL2rLP_e2b0VHU7m9P6y3aNY1Vqn79ADsVu5IfN6veAQmy6fToXk0gw8bAHxJbX7FFUxZZqqYVTZOVwcduQ5ue_4GgIEOkzQqjIPJP02tFM0Uk2o6FPLO8xm1ILToQP5nItyu7o./download?raw=1",        // adjust path for your actual image
        alt: 'GatorMart Home Page Screenshot'
      },
      {
        type: 'image',
        src: "https://public.boxcloud.com/d/1/b1!vxPLl3zFbPXXtl7uuCl7RWBysF5HeeTPWtF-W4tFXFuXvnsZU4fj4higfoz_NMYzCbKdLYpn3VA-jNZ3XNZN3WT5_JGJKZtwUGppCpxZKSqdaZUqFI7rMiCkbz12ejBb5OWS5Jr9uG9sf6EHdX5vTWkwZ21Suh9a97vajopH4tMmBwhegkaA-MXJgPE3ZOT3gJKw7U5gV17uuGdjPHdtS2iDmw1zrF2XU8lFxR4TXgrTGConr76KKnycrAo4BAsnFSjxzwIiwO1tDsIVw5MX9PXTZ2KMsVIbuXVjBbcgOQxs0tJ2BAxhOdBLQwzhwzhFvlNCkWrGZkQeieuYJrDHmYO5wVUsEuFlYY_DoLPQf0Wk7F6i2-PfUCM4OLsAgu-DL0h--99GUCy6IyDH1kTMX13qduQ8GgUx55sqgPcNjKEI8SoMiABIZsTSaXsBKuxP89IBtBLjgts3jAWZkYZOU2jUiCdR_5j9cyUZdHQ7Sx3kz-kY495Pxvu2dv-s6UhPB9Tug8n1oyoUWt-IH8vToucYwnJT3JT1C0kJRCjrauP-NaKLy5JFLRTVOGL30mwCyI_T-RI24C3m5_Ll9XCxoKxoeWmr-vs99piEmL7dUbA8sUQE_oO3vY1LlQ0e8PySlh045UjlQ1KgN61_BXbpM-AF8_ccZYQEJeElWguo0oEpycIUmX6rc5U29aAtqfs9250cvUDjqQrkXrplxhIi-e3NkrAIAX1zqWZHwP6_z0v4k9rP6KdVnrVku4izM6yjLCbnN-ReCrbHvyHOHXsvkU0qSwRu-0Wyq3GrglO6MMgzmil1jIJ9KUTAHn6BZu3EThNZHeAAcXJIGFDyyQFldxEmEmhDWWbNYKUf0OdxVKRtB1tyYSJuFJuZpYF7sIwZT-WOrQ23GmM_g7XjgyO2p7rI_7pIkOH6UBPMgCxm0PtoYNwZqbpwruxTXCypRMwkhhsjD8UjOmGO4SHhAAcsghJJIXlPnt0Akf5kut0egURAllBnryHZ7WH-motVp3PIZoHMeEhVv1GgEJZBzvG13ePoHb02Vys3rVwoITRDaOh5IYuWA3FW85N1GzStT4UC0usuaZWEGwSWN1veQx104LvRRKmfK6uXqBLkaX-K9HyM9q5P0LXquOC1-PiP7QGtUb0btr0ls3d_uYDXxhM9jgnsCUdt2kY5aDBdL3wgn557q8TkEMs_bMIAIlUzEORHZv0Y4FILOLY4qHhBkec2Uz_VGDQKFkEjKJRYMoAy8_0SmmwK1M42K075VBkkkf8cZ-azx_5BKAWdv4zYJvx3dmDbpKU1EXNbg8nSXty8WOe0o70xv6BON6ygbzAS6L-xN6sgDwXNagolUHXbmFN6gge0a0oo6e-ymoH1Gh0Zy-tsEGo_bwr3AntNdAYNiP9YYqc3ZD5EIboIdpC2j78N8-sFNsdPLQiMwhF8ggaVUpicAdhpnv-Wmu4xNN7zlbDuVTWvBrezHaA2_5X3ks5n8m85KrMQCE2l5xLzAvZG-TB7a7SEUNbVx7AsKg../download?raw=1",        // adjust path for your actual image
        alt: 'GatorMart Listing Management Screenshot'
      },
      {
        type: 'image',
        src: "https://public.boxcloud.com/d/1/b1!HY73LT3VbZihZDVd5Fhpbv6VIY3QieQo-f9jwVSpHz4yGK98fRrdMFuFFhooCTEEx31M79R6vZ3zn-1b3wup0j7UYEkXrY4swkUohb227sbg-GT5QNpgDVrXu8MnKLT9TVNv3h91P6NarJuaKzMgQSAClNmJJNELja450MpLZbwhmyVqo_PjZYE6PPUPqY8GnG4y0OiIpM6ZdVxq1_mbKxVOi6QIyXzy1Xz4sVI2Hv68lpCR0S5tthLZUfO25NIZDiL23--ncr6VVeMR2lDzccumHlP78rR9XkENmosEvKSCaRhrMsjsGJqOIsoQgUfzSOuj8b_GtSeqCWFd5YAEJ28UJqHyZ0zunvrnEuM1ar3Ouz12JwUhWFPJw8mRn-wN3bZwGSs5dAodk7_sQSq6BIysdh3KGZa5tyu1pRy58wNDh39b3bNkeCRJDrpyG4a8Z5pLltepZOZspRdI1MNElFFF_JQJ5WECRZJFAFRqtfdQe27CZEDMuYg_PikHkBoD2aWrefGoEJgwJGoL28zsqs3-lWp_ifaLtR_Pc8g3ON2pDnfxIVG_g0V3kWd2duL4mQ06Bfx8AhsHd0rO_gwFFBLI9T2Oa7zBFv3NGkWDpGRCgXsQkDkHXBgHRgYBAmR4tf8fOe8jsTAvO8eLCN2vYHiMUpJheltDZqYA7xsbUlJ4_OYleCPypfAn7roPurn1ph6fT8l3opUiiHrOr5nReDXXPeOYN07vzHi7f4jAsDxuJzffE5y0fU6CElSaGf2k9G0IGCNWUpeeC25EBXg3eTxVdjmpypo5D1ceVT287h413MK0WBMk5bvBfoOPAGkkI41-3v6TdSqni-VXTeXacY1Tuqno7SjWGSRWD4pg9a26oFGM86BGgwfCbziAt9S7XrojvKhyCILLnt6edLcxQFmyXCHOFkRul-Wck9CkfEKBbbyy-kJX4kvS4st8abargtTxZu4aMxZYF7dGdJljr0EJF03Ixx_vOZFtVXGbeTL_kpM0oNtX19x9hSOO9wv9mbBG8yZrDVicnLq3AW2gfwbsQcHWorVgIhvS4_iOVxeKTSq1eEIa6rhtv80B84wYbFUo73Q3n63DgjKmojqV8y8_t2wDvUP7ATM3aEg6IgxmEqpeXJyoMwJDpoawFCvpnV2DlJhd9WH0YUtGXaa54ZHAOGtDFfwHZjUr_JomComUmFLuvzb101Gx8brXp9McluDHSM_Vzf8s53KaBgVaxYE7EVpC_rCPHxVji-wakqweIDUK4BVfoASFQR5SDMvARmTblWpRQKeQSnXiJGAXam_23ancXcLEErZHCIhPj6xrn1Wk3K7SbHGhIVCLMy579AD9W2l30u90kC9TlvBN7yQ1wkq9OlF-ZjFguZFV28JpGhB73KJlQy3yjcXMe5rsLc4GtWz8sGhJ8k7saX6F6cJIHZHYRLc9BcUDlpKIQBa-dpfF3eAFLbtN4RAARPhdI9cQ_A50SEztEZNMouehNqvkICuLLpiZfP4FCl9atYJ68XbNJGRGKGN-xeQ./download?raw=1",        // adjust path for your actual image
        alt: 'GatorMart Listing Management Screenshot'
      }
    ],
    githubUrl: 'https://github.com/YuvrajGupta1808/gatormart',
  },

  {
    id: 'chessGame',
    title: 'Chess Game Project',
    subtitle: 'Custom Variants & Stockfish Integration',
    dateRange: 'Summer 2024 (Jun 2024 – Aug 2024)',
    description: `
      Designed and implemented a fully functional chess game in JavaScript, featuring custom piece variants (e.g., “Drook”) and support for Chess960. 
      Integrated a Stockfish-powered AI bot for single-player mode and built a multiplayer lobby with customizable settings. 
      Handled game state synchronization, move validation, and check/checkmate detection entirely on the client side using modular ES6 classes.
      Ensured cross-browser compatibility and alpha-tested with user feedback to refine UI/UX interactions.
    `,
    techUsed: [
      'JavaScript (ES6 modules)',
      'HTML5 / CSS3 (gameboard UI)',
      'Stockfish (AI engine integration)',
      'WebSockets (multiplayer lobby)',
      'Node.js (development tooling & packaging)',
      'Webpack (bundling & optimization)',
    ],
    media: [
      {
        type: 'image',
        src: "https://public.boxcloud.com/d/1/b1!BlU4iMjmM4o0p8tFIddaXYqck6hmFwcZql0fdZi-2NY8xd-zpPpN3wwWbXJCC4gt9cf53jj69ohES57ldNpRlxXmdk5ByFtA4e8cTJkmG-h6QWbvVts3A5BQJPbHyeRgSdMSDl1oHbHM8edUJmIrmyx-y6BTE-6cFIS5LELPwUzNxxgfH6rWW0w_eSkAt2EG_zEIOS2Od3jiUPEEI_1OlQYWA5FoGrjioMJ7JG0awra_S0lghTlVBlpawRkv1i9Rb82A7ec-Qnl77hw5z9VFphn6543oxflA-fHMCXurCyhfFm17qRKA6VD3R1rssUCEeUsfnv6-vA52suL60arESHlRk_Ma2oWlvTLliGl9JwdoxDF1a-TiKsnWZnFYHMefcbizM3Cp2O7fGtJvNYtLytGOvj7k-d6gWr2Dha-DS6e8SY_BoX78TBZP-QNsx-aXjUJtR2t2QFylLntiDqZdjQbPL7w2mf_P7JfVTCPCHo4FyAr5JRBjYUPwBdttgh_rdCPWITiVNv-eutXoN-307v8hk0Z-xi83jEMxsJTQghM9frkGFlqb2GVThLwUPu-woDvBsxV8DiD-No6F_Pl0mZQ-1jQ0v7RIUNUIzH1oetwU6V55yq2c5mSFB8TDgeNZYnv7TsiwtlWJcR4GDG0pvCG0vKFcqZ0ILXx4Y4WwqqW1yUkQF5ex6nadQRsdbsv0C7wJwiEUGbNRMw7c5nNNPTelpyj3FlB47tIXR2QNxMFcRRD-r-ZgQ53KZz4cn6TOsuURUOZe5foZPA_W1rX-alzczsqHbBAMiV2pA3oHUg1M0t2ZLyaYyjVyn3tMpiQ4H4kOaydaeIFg00jXiug4XIyBPjlAoNhg1gQ1MvL3aW9LqZO5dGjy5MvW2c0f9fiEH4ityEqUuhOBr2R35Sr8VjzNseh5hoyJtiSO3UgxEqRja3qvj88_9gQedFtILozBl_IDR3CSRXxOyU0PAqmsjEU8KvxBN7owghW9-L2LFVQV-u_u4TYn641oL-bOfPyjB9UFXvOZCKBrKwMDo_GP55v5QIru1g_v7hPf3_s1PCGirCYzL93OjbQAipQBrwdCwIpLM7o4_mZAkQ7lTd8pKBuJgXrHtrYVYdFL0iBEnOXO7WZLvSelsh7QiH3KX9HrJ-7-baY4_2gHKsezCMj0u9WPG8zXLnBeTykvHjD7ZzSBI7zs5483b1qzhHNOB7O4KOubted6qyKN2j5eE__M0TISTJZJxFbWYo1gJvPu-s933SVQjDDOY4kL72fnyKr0q2Q45cq6HXd3vbfD6Y3WfOpRUoQHo0IYE6i-otdNopPDgba3m9zuzu8jTNgafBpBviYGKEFX3Fqdcw9Fc2U8xEXA6tejprubrGexCq2k8cZstNGFMGfvLWQlMnTJ3YhWWPMoLy8J33jEFFp8kreMoBSAx9oJ1RTpwcWISefAw4BlWByOYGY4mdYjlmovpPOB4gepp9z5VHxItR3afjw6rBjCjX_DdhiE1Hx2-QohOwLuDj9xS9h2rw../download?raw=1",         // adjust path for your actual image
        alt: 'Chess Game Board Screenshot'
      },,
      {
        type: 'video',
        src: '/videos/chess1.mp4',         // adjust path for your actual video
        alt: 'Car demo video'
      },
      {
        type: 'image',
        src: "https://public.boxcloud.com/d/1/b1!ygweFomzS-zXSXRsw5yyrW9INOfdLE1eD05xF0PKDis8PjMiRaWOhpzMbjXuDy9BFG9iIIgFy2T3hnYC3eiMWUApQIpv9u3NQnCNR15KAFx6z00iSYo51ShFjVy5Zf0pe3dy5Ug5OED9XVmduswKuvzJqffo8sqsdOaHx5ffaVRdOoJSsfqhh9ejEpTy7iYRc2ddZa4YEpttl6FoaCLnDhj2kJwIUoTFeB7Olvg1o7oJAmKjDkeQLdKa7z9tKzC_qjuANGwJdKvl1RVNw6UKAY1bUIx_WHe41v2TXugAsfgfsh32h9NZkD2lm5IyrRS8WO4v4tvRx_CZPxiocrxZRTNQt-adNSFuD3sq648gOPu9XOq_TlPFJcDmFbD55St-A9LA57Y1ugShEzmALxlDSX47S2bvdNMD9iUR8zBgEUI5dttZUJOhm515b96v4Pk9Yzc6_YEuI12tzHkN_aqtv7CVntWRqRZY6SHkdA7SGh4mQJnad_ptEEK5FXt6M5I3YDqs1sa5KeGw8daAVsGJp-NPuzkHTUwS_qlBQkyjQOJrlOwpa4aNMgoO8TLmLFGzkEYrPYggYteUsctkSdq5eD2_dWnExzjBAMZHb2qnneD66eqmH67WktPZZPwMoIYkiJOdw68wLklTu2fINKtnCWWN3x3eP5z5sZ84xvMyjWM33kEVPT_60k8GuTs35ZEVYfKu71mnJ8SQLMuHDRLoJfLFEW2A0-MoowCWTA7UDo1KXFDu6-ZD-Dcp-spVjevpslneK6jQ9SwEPvwYEF6CzLQPL9BGYsfzd4sJFAaOLoJH-69ZuCC9Zt_BTmGwAFCQrJ7HOmtkXYheo3RF74tg9vTsZv0s6pB_5Ktl8OF5DRXyHb6HDpS-5T5Cf4JbQ8qHMjQR0zjn9WOGtMfxDwKpFIXR7QJ00Y4EmJ4xPjqEm0_ifBZv_pYpMu6ZfAsDwoIYbVcwXXTuBQn4rk-FRAPdDGEX-J_r7Jjc6XGPaDu3clkPkMTlAJm91r2NTGJst9XEvlzWY7FJEnYlNNxtAC3knbFk0rAxhhF8yxM3rGs6RYI8C1kGp_7YaNGdnvM51L6Rgr0hAeviOcXUGCUqFOY9ljUJjpvze_5a5_75_bXStSkcGgl6jZgOOZQ9WNVqXiGEJvCslqY0OEhaPef6w07MDgoMHmNfB49DJxrQt1BToWqiBeu0NhzjjO0gLYOdLhVaubbx0ZVl3Id3abravxcKC1ILOAycUPjIbxhKnTQDIwkEOtHG6CTPhEq_OGM45U071fUFiiq-BWRehvvzqA2E1jRbNHwkV4iEg-sK_7r38KrVNSGF1PIIj4vVYH3zZtQdbAXPoP8TmlChwfKFa1UJ63r0m8UqgnpA0hERV2dI9CLR0E7AcYlT-qvUf1te8rHnPU4XJo0AE2K1d7LBEIIC8KDg_LhX_cFGBdHhd1bz9lS82aKLdqaonUV-Uei6vVeZVq8tIBXH5LcZ21KmgU4tcQq_6trB4jjtMycEMDvTBhPkJP7k7aNa/download?raw=1",         // adjust path for your actual image
        alt: 'Custom Piece Variant Demo'
      }
    ],
    githubUrl: 'https://github.com/YuvrajGupta1808/chess-game',
  },

  {
    id: 'pizzaPoint',
    title: 'Pizza Point Website Project',
    subtitle: 'Dynamic Pizza Ordering Platform',
    dateRange: 'Spring 2024 (Feb 2024 – Mar 2024)',
    description: `
      Developed a dynamic pizza ordering web application using React.js for the front end and Node.js with Mongoose for the back end. 
      Created a flexible menu component where users can customize toppings, sizes, and quantities. 
      Implemented secure checkout workflows, cart state management (Redux), and RESTful APIs to handle orders in real time.
      Deployed the backend on Heroku and configured a free tier MongoDB Atlas cluster for persistent data storage.
    `,
    techUsed: [
      'React.js (functional components & hooks)',
      'Node.js + Express (RESTful API)',
      'MongoDB (Mongoose ODM)',
      'Redux (state management)',
      'HTML5 / CSS3 / Tailwind CSS (responsive design)',
      'Heroku & MongoDB Atlas (hosting & database)',
    ],
    media: [
      {
        type: 'image',
        src:"https://public.boxcloud.com/d/1/b1!c6-2e2wOyqTzFsk9m9XpE8M71dUc9-Z5Pia01oANE12sjH_SZrAGhAAbWL57azUfis4iiNRTxjylZcAdHw9gnRkO-4jqbFsuhU60jk_jLYYRaNgJHdKSzby7Rse-GAKGz5T8sgi0lVFG61J5_7DUG4O82gLlRSSoiQUURhjnvy0AKjPGCC_W3ODE93oCFL-5UBnTU--lId6tLFidtPH-h4wCG9eXn2HF0DRHl7-AjoEj0xef5VLDKK8Sv_e2eJOtlybatuYBUu0Mou-MMHLfzXfteb2OV5CqkLPI8R1xcMoQxnQtPKdwofOKarvqwZl481r1V3g3AsaHy9YHJn7N6xHyCvgjyzaY0_eghcrotHqXLHq3ZBQabTkbde9M-hBZ0POYhRI6mtOjjSLE_N7hfQSCG5OEx1W5k6e9jK4utSeigoR9wax19rEhk2EN5j8dBmh36XqT4-qUN-DNvLGO2VGfmSitTXaYyHKvdrv6LinmaFRm9mft9v83ZPfasE2JsXTKbyZaFGaf9gymG9Yqgq6DIX_NK8jn3TXOzGHCLaGKLwKkm7Dp6pfDhzHVUhYXv5suBYudo4Zx6S3nDJ_CVUI8lhO0hwfxzOHVOu7-GUASj1ZjRHHdjdYAiWYOMFKnV5H517uGfbrJ8OwbXYA8PIRi4iTK526n3fM-fKy_IZfDpXbtFgFfk8vQQ3iEfUqrj4zRCEBEoOaaXa-zbDDHQ8aoPi8vJrkeK_AYrjPVF5vZ0cSobb68WasZqOvHOHJHNpAr_vxkFTDofPZGAHnqd3iTQeviMQPe2oIRkctW-Vx75nP4b4M7rnE1OwfKV8MyoXCXV2M4WK5s_HaNnV3hRpI6l3j8a4bGimfDTUfGV4cQYCxuNZJxwF8fbZd31OYflSme0Woox4B9h5TB0OfUXh_aZ37dlYrwScVw7Gvl4ct6ChNNY0aXDr4_Izf3GcIG_c5Fn7d_tRQYq2o6moObOUiSDjCvlQQmlelgCDOG7AUqmmSaSdStC6-orUresaJJbOtsvzr9xgT7iehWibRLGk_RH78f1dQ5pZz5It9gkCuS4bCxEgs5FLHugFv_KvCGQqIh9ia3roiuUOOWGDk6Oco3EE1DKsT_6jQqMtBNRC5Auv_OTPqO9qrnvSwbCqBRlIKHrN92H9Lsepj9_p7EAncmbbUgmm-YpGwS9iwrJ2whLeqQ4Dnrp9_MXA_kNCF3Q8_q8kUgwFgcV6r78jkxxNtOUIL-gkV9B_FoAe-6tpsghB0bncrPpkRsyOHYqAFvhgGlO1hdGX5X_z6Kx52GpCnr37KE1EY3TpuYx7IksuSuungeRAesIgSh9C-gx8bnfTa5NjsviCUF517vzxayqxg9XjPzoWZeABPtj1Iv1HreZABuoCP-0Pn9iYlyR7JT9MtHHO3Lsv7dIOApN9hIZd24oe-EHA7_zF-qGG2zsLHRRhPorX7U8V_1qvIzr93EorVAaH1JCn-oaJoX3pjk52cy7WMiZBotsGRXuHW8rDVQwWYZy5Puhg../download?raw=1",         // adjust path for your actual image
        alt: 'PizzaPoint Home Page Screenshot'
      },
      {
        type: 'image',
        src:"https://public.boxcloud.com/d/1/b1!BdJHX27nKn0mOufuDRbV9o81UAGDsxEzPH99vs-j7y--MAjhrgrW4CCxQTmqqiyD1KqPuSB60BjcQ_yK7i8J5berrMcSRHDuIu6xMJNyLDbA6BGy4GC-outwa8Gh47anSuDrqDFpLPEkubfqPkMEUzjZC0y4qor-1Lj_-RxP2Qjg797TM7-TUA1zsxK1Xs1K1RxpIegNlTxmNh2wklzXyWDa6hwxCh2NbBQ-JK0SrFOfzIGaGxxT5rmZc5LPeoGz5voRoVm6XGCdRulcjdiw5wrv2AGOIVucY9PbGpuaDaLUsrGhMaCOLJB0Opkri3fmTvLbxKgWY-NuunMnpSDROimd98dk-6Lbkx_uR2O99FsQDMosjjcIZ_SeDYPpU5LRen1zuRQizdjW0Vco6jBP9DoMLPsPu_1GdhkXftrPhwPiwZXR8QvGwt3M64HbauNuELFnxjCKzStHkDBF6Va5SPMwj2SRcqdmDoYZmopE9ecLCnKwh7FjztFp4UKIO4sAIq93Xe3DQNZzFlDgf6Rz61gXUkWysV8HD4DIfoV8cx9HSLxU4U-TmYeT3fT7suFeDsw7SI2433hLEbBchy9LPMvErgJsWRfOJucqizC0Vzk346IhNV94upk8ZWWHiwxDLvfJV6wLf0GTUO5T5aIcJ86c0kZjxMYk0SwOSNj7dog8RRveY-szLiLg7aIvDHQ7AC4yr6vEJybM8e38OVBHdZwDQ9D3ChkOszffOp27tajBK0Ch1p7uY6Ls4cGLCS22OWNigfS6zuesNIBiWf9GhJ3pfU5M_ROulZXdYfQxWlR54m78QgsqYvSNtNy2vBWbjNDZE0wio7eye3UsbkKV6JCZq324R2C8o4V9wsyiFaoVrrgxJqnjNk1LXmtewubizciHanW5JcwQVCnvnXbGSeaYmBBEG4tO3ASF9uUS6Xv6G3F_ZFVkOBsxdTEdbOI_sK19DV_7TXZLPzu29bW2iHY7Kc7xWhOVMbFNYjRTZRJHyoIQl1OZ_IEm3AiiZ_Q-hanxFjA6QU6Wm-5KomJU5dIqatGiclfSA6wx4f1K-0XgM_GKzxI3K-X-5X-3NUMmMBkBUnTjhqfc9IwOEq4E333JV4T3lecNPpklXomMzyJSn40YMKUfLG2f6n5slgyGoiHrV2duaDFMqIuV1WC-AurFdefnRgw6N03YRqX2EuSYqMl28DY2svzAMf98T3mHbXaZa4eFYfwhNdo4b0Erfj4F-XX223lSpFcuV5DkLX6KdLdODiduJanMsKdAR4yyN3qiLhoPbBYkj2fPKYkl-r7BC2JvE4zdUcJjtRnvp46hf5UIqnwTqbNKg2yopa65icuySn2wv3xiT4ISs4zffkvLcELD_1HvFpUSkt5ZxHFNpm2C9MWupLskHpwuVhNrzAALwmE-LgP0OFyleGPg-BnQkSrjvBTUnM8nk26OlQP5vcBDbTVIqg3GtFM8FkpOOdeTnhUoWwXGlOPxlFWo69fVL_j0fFl93J86L3ewg2g_CR5ard8gGYE./download?raw=1",         // adjust path for your actual image
        alt: 'PizzaPoint Menu & Cart Screenshot'
      },
      {
        type: 'image',
        src: "https://public.boxcloud.com/d/1/b1!iTJr-EUeEr5Qlo4az5qr8TeuXnms3kfg1Z8BARNPdFPVGR76QYCcMDSDs88xyfk12kieuU5gF6ufL46qkkB4ibNpWdlLji3SyXCBWukn3HeZFRoCO8ueZJwq6wPKkbPJd8KemVO91dZRcX-xq9h5uax8Ga5YI3Fv_uv7bmeqAkWJGzDuz_adN2FmUwcWyCUJLVCsH3Lw0ZowQu21aa87xFnngQyLc96MEp28RnDL446xBcXfpRXvxIdpeiPzaT-q1Ev0xxNHpKO_vrOg7Fmx9p82P55g5tHxT0Af3F5BAyhFKWL_TyYTtIW7nrDS6Od_coM1a37W4yGormDd3GneVL0VeDRZd1ozDkLLQ3OFb2lA_-FEhiOcLG3OBj2BWGPbmNuEsFbAwa35CunCz81nvdyCFag9bYdJnbL0u5WQbu4wQF29qdQVjYZgVpLrAGP7ASa5dKuX8c5eBGXCh9C1k2Y-FkUzBMZ2luST3t4qfHYwhPfIRail1_lLozCWk87JT-F2thLBLRW_NZe1NBzveu4xAS8gTz9m8vkhT-EAeM1Pll5RA19zi-iBeAG5ANLl2vsTqprAfI3WbiiwLEXZ6vy7qz_XJwbH2nxomiIq2flUQIm4fz-0mGT_ogL8O0-DMDWLmyizmnPSi_J3hlxNWBynyYmtgl-CNiaJNXQB_YW4cItj7GMqPWAhAgCMHGBf841IRKZhq1eWIuyJgvvZ8dUk4wp9KA3J0ZJouy-xjb93G4x62nLervbwKhY8HBgpHmU8NZjolw7tJ6NetuRW5oB1Muw3xE_pViqy3AN3d8wsaPGBmPki6Za1w06K2eivj0B-SUTjusbbE_x4fDwFXsoo79ig-9fWG5fi7VACqIyqpY7hIRZ3pKzBYutaNuq-qOQ6I4uIfSNDlELNDRR3ShIHJ3bFlue6fYYhFgRzqrFNfkNZ7de4D8mVZwKh9A_BX1vkUImEU8Ak-06KuCkbuwBJ51w6DoSXkwv94AM8Dh7HLQ5TDtEkuOuvnPUneHpTgnCrSMOjB_yofgwn0Pp2ATtJeXyC8Z03Z20hronaNPm4LaB2o6HFSfVFhJfhKCSfLpEKjy5WgJ7y2EsWHvEe5UYTf4k53JeVgqF2r8dG73noyw8GuPXEH1dJ6j0ElUALtXHeEJmGaTHvtjwWuRrm-4X7kd6EXOWhQL4VO7AqFXQAm2t1n6J-hGaQZmkC9YdOSbGf9OCm16oxqPudS2ZGolzni5JMMuc3ViLhLNfSu5aYxpWfzpwRIWnmu79id2YkrTEKEhR7rbRqpoNjRDT5-j6HW5X3s2ByTd4JN4MYdiAuMMkleeALX3y2Fu4MtKxDpLEo7O2ElJ5wR1W2-ykbue-JRbVm2vhl2cINNIVaACeB4CGy1xa0KKcVJREisHckZtT7rvvEdU72WuJcmrqdo9kJJjj05uGRuxMwNpf0JXomabylqHZU8NJxdVCJUbCd1IPkNtWAuY_ByfphKYNyo4ZAySMNCD3UNPK6bdmPVV8fNlLF6Sc./download?raw=1",         // adjust path for your actual image
        alt: 'PizzaPoint Menu & Cart Screenshot'
      }
    ],
    githubUrl: 'https://github.com/YuvrajGupta1808/pizzapoint',
  },

];