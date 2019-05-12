import axios from "axios";

// const KEY = '46a1ae4927fdb5eb3119f6d0a830ac32';
// const KEY1 = "4c9a38c8427efcd065e17cb118a2653b";
// const KEY2 = '0eb2ac969728170ffb1e52bf1cf0e53b';
// const KEY3 = '90f6476e170b503b8df9cb85ad3693b1';
// const KEY4 = "636dace5dfdf442da336e61e5c5c3e93";
// const KEY5 = '297bfcaa3405061d0ccd44ebf21ac537';
// const KEY6 = '19557f70c05c430f3105ef1cd7c06c32';
// const KEY7 = 'f418858cc26e7b28ce1d839172db068d';
const KEY8 = '39c7156c3e43e6b1d7cd4847cef7c71f';
// const KEY9 = '15603a72df74be24d0037adc1cf9ca5c';
// const KEY10 = "0081056c22c4eb7a3828af547f55f5e5";

export default axios.create({
  baseURL: "https://www.food2fork.com/api",
  params: {
    key: KEY8
  }
});
