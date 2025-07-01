export const styles = `
  <style>
    .skeleton {
      transparent: 0.8;
      background-color: red;
      min-height: 30px;
      animation: skeleton 5s ease-in-out infinite alternate;
    }

    .skeleton p {
      width: 100%;
      height: 20px;
      animation: skeleton .5s ease-in-out infinite alternate;
    }

    .skeleton p:last-child {
      width: 80%;
    }

    @keyframes skeleton {
      0% {
        background-color: #444;
      }

      100% {
        background-color: #666;
      }
    }

    main {
      padding: 10px;
      border-radius: 5px;
    }
  </style>
`