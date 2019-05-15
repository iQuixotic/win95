export default {
    
    
    checkIfIframeLoaded: () => {
        document.getElementById('loadScreen').style.display='none';
        console.log('you are an ugly man and i have never been happier')
    },

    // used to hide panel and change corresponding button aesthetics
    minUpdate:(cn) => {
        if(cn === 'minimizer-btn-open') {
            return 'minimizer-btn';
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
        setTimeout(() => {
            cb();   
        }, time);
    }

}