export default {
    
    
    checkIfIframeLoaded: () => {
        document.getElementById('loadScreen').style.display='none';
        console.log('you are an ugly man and i have never been happier')
    },

    // used to hide panel and change corresponding button aesthetics
    minUpdate:(cn) => {
        if(cn === 'minimizer-btn-open') {
            return 'minimizer-btn windows-theme-border';
        } 
        return 'minimizer-btn-open';
    },

    // hides/shows start menu 
    toggleStartVisibility: (arg) => {
        const sm = document.getElementById('start-menu');
        arg ? sm.className += ' invisible' : sm.className -= ' invisible';
    },

    // setTimeout
    wait: (cb, time) => {
        // console.log(cb)
            // cb()

        setTimeout(() => {
            // console.log(cb())

            cb()
        }, time);
    }

}