

export default (to, from, savePosition) => {
      let ele = document.querySelector('#toTop');
      if (ele) {
        document.querySelector('#toTop').scrollTop = 0;
      }
      return { x: 0, y: 0 };
    }
